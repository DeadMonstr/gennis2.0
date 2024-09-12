import {
    AccountingAdditionalCosts,
    AccountingBooks,
    AccountingCapitalCosts,
    // AccountingHeader,
    getAccountingSelect,
    StudentsPayments,
    TeachersSalary,
    DebtStudents,
    EmployeeSalary,
    StudentsDiscount,
    getStudentsData, getEmployerSalary, getLoading
} from "entities/accounting";

import {Routes, Route, useLocation} from "react-router";
import {memo, useCallback, useEffect, useState} from "react";
import cls from './accountingPageMain.module.sass';

import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {onChangeAccountingPage} from "entities/accounting/model/slice/accountingSlice";
import {Button} from "shared/ui/button";
import {Select} from "shared/ui/select";
import {Radio} from "shared/ui/radio";
import {onDeleteStudents} from "../../../entities/accounting/model/slice/studetntSlice";
import {API_URL, headers, useHttp} from "../../../shared/api/base";

import {getEmpSalary} from "../../../entities/accounting/model/thunk/employerSalary";
import {EmployerSalaryPage} from "../index";
import {TeacherSalaryPage} from "../index";
import {StudentSalary} from "./accountingPages/studentSalary";
import {Link} from "../../../shared/ui/link";
import {AdditionalCosts} from "./accountingPages/additionalCosts";
import {Capital} from "./accountingPages/capital";
import {getEncashment} from "entities/accounting/model/selector/accountingSelector";
import {accountingThunk} from "entities/accounting/model/thunk/accountingThunk";
import {AccountingFilter} from "features/filters/accountingFilter/accountingFilter";
import {MultiPage} from "widgets/multiPage/ui/MultiPage/MultiPage";
import {useSearchParams} from "react-router-dom";
import {savePageTypeToLocalStorage, getPageTypeFromLocalStorage} from "features/pagesType";

export const AccountingPageMainIndex = memo(() => {
    const types = [
        {name: "Students Payments", type: "studentsPayments"},
        {name: "Teacher Salary", type: "teachersSalary"},
        {name: "Employer Salary", type: "employeesSalary"},
        {name: "overhead", type: "overhead"},
        {name: "capital", type: "capital"},
    ]

    return (
        <Routes>
            <Route path={"list"} element={<MultiPage types={types} page={"accounting"} id={false}/>} />
            <Route path={":id/*"} element={<AccountingPageMain/>} />

        </Routes>
    )
});


const AccountingPageMain = () => {
    let {"*": typePage} = useParams();
    const getAccountingPage = useSelector(getAccountingSelect);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {request} = useHttp();
    const [active, setActive] = useState(false);
    const [activeDel, setActiveDel] = useState(false);
    const [selectedSalary, setSelectedSalary] = useState("");
    const encashment = useSelector(getEncashment);
    const {id} = useParams();

    const location = useLocation();

    useEffect(() => {
        const savedSalary = getPageTypeFromLocalStorage("selectedSalary");
        if (savedSalary) {
            setSelectedSalary(savedSalary);
        }
    }, []);

    useEffect(() => {
        if (selectedSalary) {
            setPage(selectedSalary);
        }
    }, [selectedSalary]);

    useEffect(() => {
        dispatch(accountingThunk());
    }, [dispatch]);

    const setPage = useCallback((value) => {
        dispatch(onChangeAccountingPage({value}));
        navigate(`${value}`, {relative: "path"});
        setSelectedSalary(value);
        savePageTypeToLocalStorage("selectedSalary", value);
    }, [dispatch, navigate]);

    const formatSalary = (payment_sum) => {
        return Number(payment_sum).toLocaleString();
    };

    return (
        <div className={cls.accountingMain}>
            <div className={cls.accounting}>
                <div className={cls.accounting__wrapper}>
                    <div className={cls.wrapper__filter}>
                        <Button type={"filter"} status={"filter"} onClick={() => setActive(!active)}>Filter</Button>
                        <Select
                            options={getAccountingPage}
                            onChangeOption={setPage}
                            defaultValue={selectedSalary}
                            value={selectedSalary}
                        />
                    </div>
                    <div className={cls.wrapper__middle}>
                        <div className={cls.middle__box}>
                            {encashment.payments?.map(item => (
                                <div key={item.payment_type}>
                                    {item?.payment_type}: {formatSalary(item.overall)}
                                </div>
                            ))}
                        </div>
                        <div className={cls.typeExpenses}>
                            <Link to={`../../inkasatsiya/${id}`}>
                                <Button>Inkasatsiya</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route
                    path={"studentsPayments"}
                    element={
                        <StudentSalary
                            deleted={activeDel}
                            setDeleted={setActiveDel}
                        />
                    }
                />
                <Route
                    path={"teachersSalary"}
                    element={
                        <TeacherSalaryPage
                            deleted={activeDel}
                            setDeleted={setActiveDel}
                            path={"teachersSalary"}
                        />
                    }
                />
                <Route
                    path={"employeesSalary"}
                    element={
                        <EmployerSalaryPage
                            deleted={activeDel}
                            setDeleted={setActiveDel}
                            path={"employeesSalary"}
                        />
                    }
                />
                <Route
                    path={"overhead"}
                    element={
                        <AdditionalCosts
                            path={"overhead"}
                            deleted={activeDel}
                            setDeleted={setActiveDel}
                        />
                    }
                />
                <Route
                    path={"capital"}
                    element={
                        <Capital
                            deleted={activeDel}
                            setDeleted={setActiveDel}
                            path={"capital"}
                        />
                    }
                />
            </Routes>

            <AccountingFilter setActive={setActive} active={active} setActiveDel={setActiveDel} activeDel={activeDel} />
        </div>
    );
}
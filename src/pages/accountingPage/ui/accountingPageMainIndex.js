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
import {getPaymentType} from "entities/capital/model/thunk/capitalThunk";

import {Routes, Route, useLocation, Navigate, useMatches} from "react-router";
import React, {memo, useCallback, useEffect, useState} from "react";
import cls from './accountingPageMain.module.sass';

import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {onChangeAccountingPage} from "entities/accounting/model/slice/accountingSlice";
import {Button} from "shared/ui/button";
import {Select} from "shared/ui/select";

import {useHttp} from "shared/api/base";


import {AccountingOtchotPage, EmployerSalaryPage} from "../index";
import {TeacherSalaryPage} from "../index";
import {StudentSalary} from "./accountingPages/studentSalary";
import {Link} from "shared/ui/link";
import {AdditionalCosts} from "./accountingPages/additionalCosts";
import {Capital} from "./accountingPages/capital";
import {
    getAccountingActivePage,
    getAccountingOtchot,
    getEncashment
} from "entities/accounting/model/selector/accountingSelector";
import {accountingThunk} from "entities/accounting/model/thunk/accountingThunk";
import {AccountingFilter} from "features/filters/accountingFilter";
import {MultiPage} from "widgets/multiPage/ui/MultiPage/MultiPage";
import {getBranch} from "../../../features/branchSwitcher";
import {getSelectedLocations} from "features/locations";
import {getBranchLoading} from "features/branchSwitcher/model/selector/brachSwitcherSelector";


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
            <Route path={"list"} element={<MultiPage types={types} page={"accounting"} id={false}/>}/>
            <Route path={":idBranch/*"} element={<AccountingPageMain/>}/>


        </Routes>
    )
});


export const AccountingPageMain = () => {
    let {"*": typePage} = useParams()
    const getAccountingPage = useSelector(getAccountingSelect)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {request} = useHttp()
    const [active, setActive] = useState(false)
    const [activeDel, setActiveDel] = useState(false)
    // const [activePage, setActivePage] = useState(getAccountingPage[0]?.value)
    const encashment = useSelector(getEncashment)
    const activePage = useSelector(getAccountingActivePage)
    const {id} = useParams()
    const location = useLocation()

    const [otchot, setOtchot] = useState(false)


    const branchID = useSelector(getBranch)
    useEffect(() => {
        setPage(typePage)
    }, [typePage])


    useEffect(() => {
        dispatch(accountingThunk({branchID: branchID.id}))
        dispatch(getPaymentType())
    }, [])

    useEffect(() => {
        navigate(`${activePage}`)
    },[activePage,navigate,location.pathname])

    const setPage = useCallback((e) => {
        // setActivePage(e)
        dispatch(onChangeAccountingPage({value: e}))

    }, [navigate])

    const formatSalary = (payment_sum) => {
        return Number(payment_sum).toLocaleString();
    };


    const locations = useSelector(getSelectedLocations)
    const branch = useSelector(getBranch)

    // useEffect(() => {
    //     if (locations.length < 2 && branch?.id && typePage)  {
    //         navigate(`../${branch.id}/${typePage}`, {relative: "path"})
    //     }
    // },[branch?.id,locations,navigate])


    // const renderTable = renderTables()


    return (

        <div className={cls.accountingMain}>
            <div className={cls.accounting}>
                <div className={cls.accounting__wrapper}>
                    <div className={cls.wrapper__filter}>
                        <Button type={"filter"} status={"filter"} onClick={() => setActive(!active)}>Filter</Button>
                        <Select defaultValue={getAccountingPage[0].value}  options={getAccountingPage} onChangeOption={setPage}/>
                    </div>


                    <div className={cls.wrapper__middle}>
                        {otchot ? null :
                            <div className={cls.middle__box}>
                                {encashment?.payments?.map(item => (
                                    <div>{item?.payment_type}: {formatSalary(item.overall)}</div>
                                ))}
                            </div>

                        }
                        <div className={cls.typeExpenses}>
                            <Link to={`../../inkasatsiya/${id}`}>
                                <Button>
                                    Inkasatsiya
                                    {/*Harajatlar to’plami*/}
                                </Button></Link>
                            <Link to={`otchot`}>
                                <Button onClick={() => setOtchot(!otchot)} type={"filter"}>
                                    otchot
                                </Button>
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
                    element={<TeacherSalaryPage
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
                <Route path={"capital"}
                       element={
                           <Capital
                               deleted={activeDel}
                               setDeleted={setActiveDel}
                               path={"capital"}
                           />
                       }
                />
                <Route path={"otchot"}
                       element={
                           <AccountingOtchotPage

                               path={"otchot"}
                           />
                       }
                />
                <Route
                    index
                    element={<Navigate to={"studentsPayments"}/>}
                />
            </Routes>
            <AccountingFilter
                setActive={setActive}
                active={active}
                setActiveDel={setActiveDel}
                activeDel={activeDel}
                activePage={activePage}
            />
        </div>

    );
}

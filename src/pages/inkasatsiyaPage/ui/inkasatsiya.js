import {AccountingFilter, AccountingHeader} from "entities/accounting";
import {useDispatch, useSelector} from "react-redux";
import {Routes, Route, useNavigate} from "react-router";
import {getCapitalInfo, getCapitalTypes, getInsideCategory} from "entities/capital";
import {useCallback, useEffect, useState} from "react";
import {getPaymentType} from "entities/capital/model/thunk/capitalThunk";
import {onChangeAccountingPage} from "../../../entities/accounting/model/slice/accountingSlice";
import {useParams} from "react-router-dom";

const filter = [
    {name: 'teachersSalary', label: "teacher salary"},
    // {name: 'studentsDiscounts', label: "student discount"},
    {name: 'employeesSalary', label: "employer salary"},
    // {name: 'debtStudents', label: "debt student"},
    {name: 'overhead', label: "overhead"},
    {name: 'studentsPayments', label: "student payment"},
    // {name: 'bookPayment', label: "book payment"},
    {name: 'capital', label: "capital"},
]

export const Inkasatsiya = () => {
    const dispatch = useDispatch()
    const paymentType = useSelector(getCapitalTypes)
    const [activeMenu, setActiveMenu] = useState(filter)
    const navigate = useNavigate()
    let {locationId} = useParams()
    useEffect(() => {
        dispatch(getPaymentType())
    }, [])

    const setPage = useCallback((value) => {
        console.log(value)
        dispatch(onChangeAccountingPage({value: value}))
        navigate(`./${value}`)
    }, [])
    return (
        <div style={{display: "flex", flexDirection: "column", gap: "2rem", padding: "2rem"}}>
            <AccountingHeader paymentType={paymentType}/>
            <AccountingFilter activeMenu={activeMenu} setActive={setActiveMenu} setPage={setPage} filter={filter}/>
            <Routes>
                {/*<Route path={"teachersSalary"}*/}
                {/*       element={<TeachersSalary path={"teachersSalary"} locationId={locationId}/>}/>*/}
                {/*<Route path={"studentsDiscounts"}*/}
                {/*       element={<StudentsDiscount path={"studentsDiscounts"} locationId={locationId}/>}/>*/}
                {/*<Route path={"employeesSalary"}*/}
                {/*       element={<EmployerSalaryPage path={"employeesSalary"} loc ationId={locationId}/>}/>*/}
                {/*<Route path={"debtStudents"} element={<DebtStudents path={"debtStudents"} locationId={locationId}/>}/>*/}
                {/*<Route path={"overhead"}*/}
                {/*       element={<AccountingAdditionalCosts path={"overhead"} locationId={locationId}/>}/>*/}
                {/*<Route path={"studentsPayments"}*/}
                {/*       element={<StudentsPayments onDelete={onDelete} studentData={studentData}*/}
                {/*                                  locationId={locationId}/>}/>*/}
                {/*<Route path={"bookPayment"} element={<AccountingBooks path={"bookPayment"} locationId={locationId}/>}/>*/}
                {/*<Route path={"capital"} element={<AccountingCapitalCosts path={"capital"} locationId={locationId}/>}/>*/}
                {/*<Route path={"debtStudents"} element={<DebtStudents/>}/>*/}
            </Routes>

        </div>
    );
};



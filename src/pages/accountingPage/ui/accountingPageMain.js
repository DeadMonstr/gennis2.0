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

import {Routes, Route} from "react-router";
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


const number = [
    {number: '123232', name: "cash"},
    {number: '-123232', name: "bank"},
    {number: '1232312', name: "click"},
];


export const AccountingPageMain = memo(() => {
    let {locationId} = useParams()
    const getAccountingPage = useSelector(getAccountingSelect)
    const studentData = useSelector(getStudentsData)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {request} = useHttp()


    const setPage = useCallback((e) => {
        console.log(e)
        dispatch(onChangeAccountingPage({value: e}))
        navigate(`./${e}`)
    }, [])




    // const renderTable = renderTables()
    return (
        <div className={cls.accountingMain}>

            <div className={cls.accounting}>
                <div className={cls.accounting__wrapper}>
                    <div className={cls.wrapper__filter}>
                        <Button type={"filter"} status={"filter"}>Filter</Button>
                        <Select options={getAccountingPage} onChangeOption={setPage}/>
                    </div>
                    <div className={cls.wrapper__middle}>
                        <div className={cls.middle__box}>
                            {number.map(item => (
                                <div>{item.name}: {item.number}</div>
                            ))}
                        </div>
                        <div className={cls.typeExpenses}>
                            <Button>
                                Inkasatsiya
                                {/*Harajatlar to’plami*/}
                            </Button>
                            {/*<Button>*/}
                            {/*    Harajatlar tarixi*/}
                            {/*</Button>*/}
                        </div>
                    </div>
                </div>
            </div>

            {/*{renderTable}*/}

            <Routes>


                <Route path={"teachersSalary"} element={<TeacherSalaryPage path={"teachersSalary"} locationId={locationId}/>}/>
                <Route path={"studentsDiscounts"} element={<StudentsDiscount path={"studentsDiscounts"} locationId={locationId}/>}/>
                <Route path={"employeesSalary"} element={<EmployerSalaryPage setPage={setPage} path={"employeesSalary"} locationId={locationId}/>}/>
                <Route path={"debtStudents"} element={<DebtStudents path={"debtStudents"} locationId={locationId}/>}/>
                <Route path={"overhead"} element={<AccountingAdditionalCosts path={"overhead"} locationId={locationId}/>}/>

                <Route path={"studentsPayments"} element={<StudentSalary studentData={studentData} locationId={locationId}/>}/>
                <Route path={"bookPayment"} element={<AccountingBooks path={"bookPayment"} locationId={locationId}/>}/>
                <Route path={"capital"} element={<AccountingCapitalCosts path={"capital"} locationId={locationId}/>}/>

                {/*<Route path={"debtStudents"} element={<DebtStudents/>}/>*/}
            </Routes>

        </div>
    );
});



















// import {AccountingFilter, AccountingHeader} from "entities/accounting";
// import {useDispatch, useSelector} from "react-redux";
// import {Routes, Route} from "react-router";
// import {getCapitalInfo, getCapitalTypes, getInsideCategory} from "entities/capital";
// import {useCallback, useEffect, useState} from "react";
// import {getPaymentType} from "entities/capital/model/thunk/capitalThunk";
// import cls from './accountingPageMain.module.sass'
// import {onChangeAccountingPage} from "../../../entities/accounting/model/slice/accountingSlice";
// import {useNavigate} from "react-router";
// import {set} from "react-hook-form";
// import {useParams} from "react-router-dom";
// import {
//     AccountingAdditionalCosts,
//     AccountingBooks,
//     AccountingCapitalCosts,
//     // AccountingHeader,
//     getAccountingSelect,
//     StudentsPayments,
//     TeachersSalary,
//     DebtStudents,
//     EmployeeSalary,
//     StudentsDiscount,
//     getStudentsData, getEmployerSalary
// } from "entities/accounting";
// import {EmployerSalaryPage} from "../index";
// import {API_URL, headers, useHttp} from "../../../shared/api/base";
// import {onDeleteStudents} from "../../../entities/accounting/model/slice/studetntSlice";
// const filter = [
//     {name: 'teachersSalary', label: "teacher salary"},
//     {name: 'studentsDiscounts', label: "student discount"},
//     {name: 'employeesSalary', label: "employer salary"},
//     {name: 'debtStudents', label: "debt student"},
//     {name: 'overhead', label: "overhead"},
//     {name: 'studentsPayments', label: "student payment"},
//     {name: 'bookPayment', label: "book payment"},
//     {name: 'capital', label: "capital"},
// ]
//
// export const AccountingPageMain = () => {
//     let {locationId} = useParams()
//     const dispatch = useDispatch()
//     const paymentType = useSelector(getCapitalTypes)
//     const [selectRadio, setSelectedRadio] = useState(paymentType[0])
//     const [activeMenu, setActiveMenu] = useState(filter[0]?.name)
//     const studentData = useSelector(getStudentsData)
//     const navigate = useNavigate()
//     const {request} = useHttp()
//
//     const setPage = useCallback((value) => {
//         console.log(value)
//         dispatch(onChangeAccountingPage({value: value}))
//         navigate(`./${value}`)
//     }, [])
//     const handleChange = (value) => {
//         setSelectedRadio(value);
//         console.log(value);
//     };
//     const onDelete = (id) => {
//         console.log(id)
//         request(`${API_URL}Students/student_payment_delete/${id}/`, "DELETE", JSON.stringify({id}), headers())
//             .catch(err => {
//                 console.log(err)
//             })
//         dispatch(onDeleteStudents({id: id}))
//     }
//
//     useEffect(() => {
//         dispatch(getPaymentType())
//     }, [])
//
//     return (
//         <div className={cls.accountingMain}>
//             <AccountingHeader setSelectedRadio={selectRadio} onChange={handleChange} paymentType={paymentType}/>
//             <AccountingFilter setPage={setPage} activeMenu={activeMenu} setActive={setActiveMenu} filter={filter}/>
//
//
//
//             <Routes>
//
//
//                 <Route path={"teachersSalary"}
//                        element={<TeachersSalary path={"teachersSalary"} locationId={locationId}/>}/>
//                 <Route path={"studentsDiscounts"}
//                        element={<StudentsDiscount path={"studentsDiscounts"} locationId={locationId}/>}/>
//                 <Route path={"employeesSalary"}
//                        element={<EmployerSalaryPage path={"employeesSalary"} loc ationId={locationId}/>}/>
//                 <Route path={"debtStudents"} element={<DebtStudents path={"debtStudents"} locationId={locationId}/>}/>
//                 <Route path={"overhead"}
//                        element={<AccountingAdditionalCosts path={"overhead"} locationId={locationId}/>}/>
//
//                 <Route path={"studentsPayments"}
//                        element={<StudentsPayments onDelete={onDelete} studentData={studentData} locationId={locationId}/>}/>
//                 <Route path={"bookPayment"} element={<AccountingBooks path={"bookPayment"} locationId={locationId}/>}/>
//                 <Route path={"capital"} element={<AccountingCapitalCosts path={"capital"} locationId={locationId}/>}/>
//
//                 {/*<Route path={"debtStudents"} element={<DebtStudents/>}/>*/}
//             </Routes>
//
//         </div>
//     );
// };



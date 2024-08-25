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
import {Link} from "../../../shared/ui/link";
import {AdditionalCosts} from "./accountingPages/additionalCosts";
import {Capital} from "./accountingPages/capital";


const number = [
    {number: '123232', name: "cash"},
    {number: '-123232', name: "bank"},
    {number: '1232312', name: "click"},
];


export const AccountingPageMain = memo(() => {
    let {locationId} = useParams()
    const getAccountingPage = useSelector(getAccountingSelect)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {request} = useHttp()

    const {id} = useParams()

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
                            <Link to={`../inkasatsiya/${id}`}>
                                <Button>

                                    Inkasatsiya


                                    {/*Harajatlar to’plami*/}
                                </Button></Link>
                            {/*<Button>*/}
                            {/*    Harajatlar tarixi*/}
                            {/*</Button>*/}
                        </div>
                    </div>
                </div>
            </div>

            {/*{renderTable}*/}

            <Routes>
                <Route path={"studentsPayments"} element={<StudentSalary locationId={locationId}/>}/>
                <Route path={"teachersSalary"} element={<TeacherSalaryPage path={"teachersSalary"} locationId={locationId}/>}/>
                <Route path={"employeesSalary"} element={<EmployerSalaryPage setPage={setPage} path={"employeesSalary"} locationId={locationId}/>}/>
                <Route path={"overhead"} element={<AdditionalCosts path={"overhead"} locationId={locationId}/>}/>
                <Route path={"capital"} element={<Capital path={"capital"} locationId={locationId}/>}/>


                {/*<Route path={"studentsDiscounts"} element={<StudentsDiscount path={"studentsDiscounts"} locationId={locationId}/>}/>*/}
                {/*<Route path={"debtStudents"} element={<DebtStudents path={"debtStudents"} locationId={locationId}/>}/>*/}

                {/*<Route path={"bookPayment"} element={<AccountingBooks path={"bookPayment"} locationId={locationId}/>}/>*/}

                {/*<Route path={"debtStudents"} element={<DebtStudents/>}/>*/}
            </Routes>

        </div>
    );
});



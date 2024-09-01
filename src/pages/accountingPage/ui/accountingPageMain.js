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

import {Routes, Route, Outlet} from "react-router-dom";
import {memo, useCallback, useEffect, useState} from "react";
import cls from './accountingPageMain.module.sass';

import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {onChangeAccountingPage} from "entities/accounting/model/slice/accountingSlice";
import {Button} from "shared/ui/button";
import {Select} from "shared/ui/select";
import {Radio} from "shared/ui/radio";
import {API_URL, headers, useHttp} from "../../../shared/api/base";

import {getEmpSalary} from "../../../entities/accounting/model/thunk/employerSalary";
import {EmployerSalaryPage} from "../index";
import {TeacherSalaryPage} from "../index";
import {StudentSalary} from "./accountingPages/studentSalary";
import {Link} from "../../../shared/ui/link";
import {AdditionalCosts} from "./accountingPages/additionalCosts";
import {Capital} from "./accountingPages/capital";
import {getEncashment} from "../../../entities/accounting/model/selector/accountingSelector";
import {accountingThunk} from "../../../entities/accounting/model/thunk/accountingThunk";
import {useLocation} from "react-router";



export const AccountingPageMain = () => {

    const getAccountingPage = useSelector(getAccountingSelect)
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const { request } = useHttp()

    const encashment = useSelector(getEncashment)


    const {id} = useParams()

    useEffect(() => {
        dispatch(accountingThunk())
    } , [])
    const setPage = useCallback((e) => {
        console.log(e)
        dispatch(onChangeAccountingPage({value: e}))

        navigate(`./${e}`)
    }, [navigate])

    console.log(location)
    // const renderTable = renderTables()
    return (
        <div className={cls.accountingMain}>

            <div className={cls.accounting}>
                <div className={cls.accounting__wrapper}>
                    <div className={cls.wrapper__filter}>
                        <Button type={"filter"} status={"filter"}>Filter</Button>
                        <Select options={getAccountingPage} onChangeOption={setPage} />
                    </div>
                    <div className={cls.wrapper__middle}>
                        <div className={cls.middle__box}>
                            {encashment.map(item => (
                                <div>{item.payment_type}: {item.overall}</div>
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
                <Route path={"studentsPayments"} element={<StudentSalary />}/>
                <Route path={"teachersSalary"} element={<TeacherSalaryPage path={"teachersSalary"} />} />
                <Route path={"employeesSalary"} element={<EmployerSalaryPage setPage={setPage} path={"employeesSalary"} />} />
                <Route path={"overhead"} element={<AdditionalCosts path={"overhead"} />} />
                <Route path={"capital"} element={<Capital path={"capital"} />} />


                {/*<Route path={"studentsDiscounts"} element={<StudentsDiscount path={"studentsDiscounts"} locationId={locationId}/>}/>*/}
                {/*<Route path={"debtStudents"} element={<DebtStudents path={"debtStudents"} locationId={locationId}/>}/>*/}

                {/*<Route path={"bookPayment"} element={<AccountingBooks path={"bookPayment"} locationId={locationId}/>}/>*/}

                {/*<Route path={"debtStudents"} element={<DebtStudents/>}/>*/}
            </Routes>
        </div>
    )
}



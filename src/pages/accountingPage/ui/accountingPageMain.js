import {
    AccountingAdditionalCosts,
    AccountingBooks,
    AccountingCapitalCosts,
    AccountingHeader,
    getAccountingSelect,
    StudentsPayments,
    TeachersSalary,
    DebtStudents,
    EmployeeSalary,
    StudentsDiscount,
    getStudentsData
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


const number = [
    {number: '123232', name: "cash"},
    {number: '-123232', name: "bank"},
    {number: '1232312', name: "click"},
];

const typeExpenses = [
    {name: "Harajatlar to’plami", id: 1},
    {name: "Harajatlar tarixi", id: 2}
];

export const AccountingPageMain = memo(() => {
    let {locationId} = useParams()
    const getAccountingPage = useSelector(getAccountingSelect)
    const studentData = useSelector(getStudentsData)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [selectedRadio, setSelectedRadio] = useState(typeExpenses[0].id);


    const handleChange = (value) => {
        setSelectedRadio(value);
        console.log(value);
    };

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
                            {typeExpenses.map(item => (
                                <div>
                                    <Radio
                                        onChange={() => handleChange(item.name)}
                                        checked={selectedRadio === item.name}
                                        type={"radio"}/>
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/*{renderTable}*/}

            <Routes>


                <Route path={"teachersSalary"}
                       element={<TeachersSalary path={"teachersSalary"} locationId={locationId}/>}/>
                <Route path={"studentsDiscounts"}
                       element={<StudentsDiscount path={"studentsDiscounts"} locationId={locationId}/>}/>
                <Route path={"employeesSalary"}
                       element={<EmployeeSalary path={"employeesSalary"} loc ationId={locationId}/>}/>
                <Route path={"debtStudents"} element={<DebtStudents path={"debtStudents"} locationId={locationId}/>}/>
                <Route path={"overhead"}
                       element={<AccountingAdditionalCosts path={"overhead"} locationId={locationId}/>}/>

                <Route path={"studentsPayments"}
                       element={<StudentsPayments studentData={studentData} locationId={locationId}/>}/>
                <Route path={"bookPayment"} element={<AccountingBooks path={"bookPayment"} locationId={locationId}/>}/>
                <Route path={"capital"} element={<AccountingCapitalCosts path={"capital"} locationId={locationId}/>}/>

                {/*<Route path={"debtStudents"} element={<DebtStudents/>}/>*/}
            </Routes>

        </div>
    );
});
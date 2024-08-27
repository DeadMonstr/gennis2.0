import {AccountingFilter, AccountingHeader} from "entities/accounting";
import {useDispatch, useSelector} from "react-redux";
import {Routes, Route, useNavigate} from "react-router";
import {getCapitalInfo, getCapitalTypes, getInsideCategory} from "entities/capital";
import {useCallback, useEffect, useState} from "react";
import {getPaymentType} from "entities/capital/model/thunk/capitalThunk";
import {onChangeAccountingPage} from "../../../entities/accounting/model/slice/accountingSlice";
import {useParams} from "react-router-dom";
import {inkasatsiyaThunk} from "../../../entities/inkasatsiya/model/inkasatsiyaThunk";
import {Student} from "../../../entities/inkasatsiya/ui/students/student";
import {getInkasatsiya} from "../../../entities/inkasatsiya/model/inkasatsiyaSelector";
import {Overhead} from "../../../entities/inkasatsiya/ui/overhead/overhead";
import {Capital} from "../../../entities/inkasatsiya/ui/capital/capital";

const filter = [
    {name: 'studentsPayments', label: "student payment"},
    // {name: 'studentsDiscounts', label: "student discount"},
    {name: 'teachersSalary', label: "teacher salary"},
    // {name: 'debtStudents', label: "debt student"},
    {name: 'employeesSalary', label: "employer salary"},
    {name: 'overhead', label: "overhead"},
    // {name: 'bookPayment', label: "book payment"},
    {name: 'capital', label: "capital"},
]

export const Inkasatsiya = () => {
    const dispatch = useDispatch()
    const paymentType = useSelector(getCapitalTypes)
    const [activeMenu, setActiveMenu] = useState(filter[0].name)
    const navigate = useNavigate()
    let {locationId} = useParams()
    const [to, setTo] = useState([])
    const [ot, setOt] = useState([])
    const student = useSelector(getInkasatsiya)
    const [radio, setSelectedRadio] = useState([])


    useEffect(() => {
       if (to.length && ot.length && radio > 0){
           const res ={
               do: to,
               ot: ot,
               payment_type: radio,
               branch: 1
           }
           dispatch(inkasatsiyaThunk(res))
       }

        dispatch(getPaymentType())

    }, [to , ot , radio])



    // console.log(res , "res")

    console.log(radio, to , ot)


    console.log(student , "hello")

    const setPage = useCallback((value) => {
        console.log(value)
        dispatch(onChangeAccountingPage({value: value}))
        navigate(`./${value}`)
    }, [])
    return (
        <div style={{display: "flex", flexDirection: "column", gap: "2rem", padding: "2rem"}}>
            <AccountingHeader paymentType={paymentType} to={to} setTo={setTo} ot={ot} setOt={setOt}
                              setSelectedRadio={setSelectedRadio} radio={radio}/>
            <AccountingFilter activeMenu={activeMenu} setActive={setActiveMenu} setPage={setPage} filter={filter}/>
            <Routes>
                {/*<Route path={"teachersSalary"}*/}
                {/*       element={<TeachersSalary path={"teachersSalary"} locationId={locationId}/>}/>*/}
                {/*<Route path={"studentsDiscounts"}*/}
                {/*       element={<StudentsDiscount path={"studentsDiscounts"} locationId={locationId}/>}/>*/}
                {/*<Route path={"employeesSalary"}*/}
                {/*       element={<EmployerSalaryPage path={"employeesSalary"} loc ationId={locationId}/>}/>*/}
                {/*<Route path={"debtStudents"} element={<DebtStudents path={"debtStudents"} locationId={locationId}/>}/>*/}
                <Route path={"overhead"}
                       element={<Overhead overhead={student} path={"overhead"} locationId={locationId}/>}/>
                <Route path={"studentsPayments"}
                       element={<Student students={student} locationId={locationId}/>}/>
                {/*<Route path={"bookPayment"} element={<AccountingBooks path={"bookPayment"} locationId={locationId}/>}/>*/}
                <Route path={"capital"} element={<Capital capital={student} path={"capital"} locationId={locationId}/>}/>
                {/*<Route path={"debtStudents"} element={<DebtStudents/>}/>*/}
            </Routes>

        </div>
    );
};



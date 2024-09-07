
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
import {getEncashment} from "entities/accounting/model/selector/accountingSelector";
import {accountingThunk} from "entities/accounting/model/thunk/accountingThunk";
import {AccountingFilter} from "features/filters/accountingFilter/accountingFilter";
import {MultiPage} from "../../../widgets/multiPage/ui/MultiPage/MultiPage";
import {useSearchParams} from "react-router-dom";


export const AccountingPageMain = memo(() => {
    let {locationId} = useParams()
    const getAccountingPage = useSelector(getAccountingSelect)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {request} = useHttp()
    const [active, setActive] = useState(false)
    const [activeDel, setActiveDel] = useState(false)
    const encashment = useSelector(getEncashment)
    const {id} = useParams()
    const [searchParams] = useSearchParams();


    useEffect(() => {

        const type = searchParams.get("type")


        if (type) {
            setPage(type)
        }
    }, [searchParams])


    useEffect(() => {
        dispatch(accountingThunk())
    }, [])
    const setPage = useCallback((e) => {
        dispatch(onChangeAccountingPage({value: e}))
        navigate(`./${e}`)
    }, [navigate])

    const formatSalary = (payment_sum) => {
        return Number(payment_sum).toLocaleString();
    };
    // const renderTable = renderTables()
    const types= [
        {name: "Students Payments" , type: "studentsPayments"},
        {name: "Teacher Salary" , type: "teachersSalary"},
        {name: "Employer Salary" , type: "employeesSalary"},
        {name: "overhead" , type: "overhead"},
        {name: "capital" , type: "capital"},
    ]
    return (
       <MultiPage  types={types} page={"accounting"}>
           <div className={cls.accountingMain}>
               <div className={cls.accounting}>
                   <div className={cls.accounting__wrapper}>
                       <div className={cls.wrapper__filter}>
                           <Button type={"filter"} status={"filter"} onClick={() => setActive(!active)}>Filter</Button>
                           <Select options={getAccountingPage} onChangeOption={setPage}/>
                       </div>
                       <div className={cls.wrapper__middle}>
                           <div className={cls.middle__box}>
                               {encashment.payments?.map(item => (
                                   <div>{item?.payment_type}: {formatSalary(item.overall)}</div>
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
                   <Route
                       path={"studentsPayments"}
                       element={
                           <StudentSalary
                               deleted={activeDel}
                               setDeleted={setActiveDel}
                               locationId={locationId}
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

               </Routes>
               <AccountingFilter setActive={setActive} active={active} setActiveDel={setActiveDel} activeDel={activeDel}/>
           </div>
       </MultiPage>
    );
});

import cls from "./otchot.module.sass";
import {Button} from "shared/ui/button";
import {Select} from "shared/ui/select";
import {Link} from "shared/ui/link";
import {useDispatch, useSelector} from "react-redux";

import {getAccountingOtchot} from "entities/accounting/model/selector/accountingSelector";
import {useCallback, useState} from "react";
import {onChangePage} from "entities/accounting/model/slice/accountingSlice";
import {Route, Routes, useNavigate, useParams} from "react-router";

import {EmpSalary} from "./otchotPages/empSalary";
import {StudentPayment} from "./otchotPages/studentPayment";
import {TeacherSalary} from "./otchotPages/teacherSalary";
import {AllPages} from "./otchotPages/allPages";

export const AccountingOtchotPage = () => {
    const getAccountingPage = useSelector(getAccountingOtchot)
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()
    const {id} = useParams()

    const navigate = useNavigate()
    const setPage = useCallback((e) => {
        dispatch(onChangePage({value: e}))
        navigate(`${e}`, {relative: "path"})
    }, [navigate])
    return (
        <div className={cls.accounting}>
            <div className={cls.accounting__wrapper}>
                <div className={cls.wrapper__filter}>
                    <Button type={"filter"} status={"filter"} onClick={() => setActive(!active)}>Filter</Button>
                    <Select defaultValue={getAccountingPage[0]?.value} options={getAccountingPage} onChangeOption={setPage}/>
                </div>


                <div className={cls.wrapper__middle}>
                    <div className={cls.typeExpenses}>
                        <Link to={`../inkasatsiya/${id}`}>
                            <Button>
                                Inkasatsiya
                            </Button></Link>
                        <Link to={"../accounting"}>
                            <Button  type={"filter"}>
                                buxgalteriya
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <Routes>
                <Route

                    path={"all"}
                    element={
                        <AllPages

                        />
                    }
                />
                <Route

                    path={"payment"}
                    element={
                        <StudentPayment

                        />
                    }
                />
                <Route
                    path={"teacherSalary"}
                    element={<TeacherSalary

                        path={"teacherSalary"}
                    />
                    }
                />
                <Route
                    path={"employerSalary"}
                    element={
                        <EmpSalary
                            path={"employeesSalary"}
                        />
                    }
                />


            </Routes>
        </div>
    );
};

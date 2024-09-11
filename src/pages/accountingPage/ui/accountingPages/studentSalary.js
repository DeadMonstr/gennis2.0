import {Pagination} from "features/pagination";
import React, {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSearchValue} from "features/searchInput";
import {getLoadingStudent, StudentsPayments, getDeletedStudent} from "entities/accounting";
import {API_URL, headers, useHttp} from "shared/api/base";
import {onDeleteStudents} from "entities/accounting/model/slice/studetntSlice";
import {Button} from "shared/ui/button";
import {getStudentPaymentes} from "entities/accounting";
import {getDeletedPayment, getStudentPayment} from "entities/accounting/model/thunk/student";
import {DefaultPageLoader} from "shared/ui/defaultLoader";
import {
    DeletedStudentPayment
} from "entities/accounting/ui/acauntingTables/accountingTableStudent/deletedStudentPayment";
import {onAddAlertOptions} from "features/alert/model/slice/alertSlice";
import {YesNo} from "shared/ui/yesNoModal";


export const StudentSalary = ({deleted, setDeleted}) => {
    const {request} = useHttp()
    const dispatch = useDispatch()
    const studentData = useSelector(getStudentPaymentes)
    const loading = useSelector(getLoadingStudent)
    const [activeDelete, setActiveDelete] = useState(false)
    const [changingData, setChangingData] = useState({})
    const deletedStudentPayment = useSelector(getDeletedStudent)


    useEffect(() => {
        dispatch(getStudentPayment())
        dispatch(getDeletedPayment())
    }, [deleted])


    const formatSalary = (payment_sum) => {
        return Number(payment_sum).toLocaleString();
    };
    const sum2 = deletedStudentPayment.reduce((a, c) => a + parseFloat(c.payment_sum || 0), 0);
    const sum1 = studentData.reduce((a, c) => a + parseFloat(c.payment_sum || 0), 0);

    const onDelete = () => {

        const {id} = changingData
        request(`${API_URL}Students/student_payment_delete/${id}/`, "DELETE", JSON.stringify({id}), headers())
            .then(res => {
                dispatch(onDeleteStudents({id: id}))
                setActiveDelete(false)
                dispatch(onAddAlertOptions({
                    status: true,
                    type: "success",
                    msg: res.msg
                }))
            })
            .catch(err => {
                console.log(err)
            })
    }

    return loading ? <DefaultPageLoader/> : (
        <div>
            <div style={{display: "flex", gap: "2rem", alignItems: "center", justifyContent: "space-between"}}>
                <div style={{display: "flex", gap: "2rem"}}>
                </div>
                <div
                    style={{
                        color: "rgb(34, 197, 94)",
                        fontSize: "2.2rem",
                        textAlign: "end",
                        marginBottom: "3rem"
                    }}
                >
                    Total : {formatSalary(deleted ? sum2 : sum1)}
                </div>
            </div>
            {deleted ?

                <DeletedStudentPayment
                    formatSalary={formatSalary}
                    deletedStudent={deletedStudentPayment}

                />

                : <StudentsPayments
                    formatSalary={formatSalary}
                    studentData={studentData}
                    deleted={deleted}
                    setActiveDelete={setActiveDelete}
                    activeDelete={activeDelete}
                    changingData={changingData}
                    setChangingData={setChangingData}
                />

            }
            <YesNo activeDelete={activeDelete} setActiveDelete={setActiveDelete} onDelete={onDelete}
                   changingData={changingData}/>

        </div>
    );
};


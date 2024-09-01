import {Pagination} from "features/pagination";
import React, {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSearchValue} from "features/searchInput";
import {getLoadingStudent, StudentsPayments , getDeletedStudent} from "entities/accounting";
import {API_URL, headers, useHttp} from "shared/api/base";
import {onDeleteStudents} from "entities/accounting/model/slice/studetntSlice";
import {Button} from "shared/ui/button";
import {getStudentPaymentes} from "entities/accounting";
import {getDeletedPayment, getStudentPayment} from "entities/accounting/model/thunk/student";
import {DefaultPageLoader} from "shared/ui/defaultLoader";
import {
    DeletedStudentPayment
} from "entities/accounting/ui/acauntingTables/accountingTableStudent/deletedStudentPayment";



export const StudentSalary = () => {



    const {request} = useHttp()
    const [deleted, setDeleted] = useState(false)
    const dispatch = useDispatch()
    const studentData = useSelector(getStudentPaymentes)
    const loading = useSelector(getLoadingStudent)
    const [activeDelete, setActiveDelete] = useState(false)
    const [changingData, setChangingData] = useState({})
    const deletedStudentPayment = useSelector(getDeletedStudent)
    useEffect(() => {
        dispatch(getStudentPayment())
        dispatch(getDeletedPayment())
        console.log("keldiiii")

    }, [deleted])



    const onDelete = () => {
        console.log("bosilvoti")
        const {id} = changingData
        request(`${API_URL}Students/student_payment_delete/${id}/`, "DELETE", JSON.stringify({id}), headers())
            .then(res => {
                console.log(res)
                dispatch(onDeleteStudents({id: id}))
                setActiveDelete(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return loading ? <DefaultPageLoader/> : (
        <div>
            <div style={{display: "flex", gap: "2rem"}}>
                <Button type={"simple__add"}>
                    Archive
                </Button>
                <Button type={"danger"} onClick={() => setDeleted(!deleted)}>
                    Deleted
                </Button>
            </div>
            {deleted ?

                <DeletedStudentPayment
                    deletedStudent={deletedStudentPayment}

                />

                : <StudentsPayments
                    onDelete={onDelete}
                    studentData={studentData}
                    deleted={deleted}
                    setActiveDelete={setActiveDelete}
                    activeDelete={activeDelete}
                    changingData={changingData}
                    setChangingData={setChangingData}
                />

            }

        </div>
    );
};


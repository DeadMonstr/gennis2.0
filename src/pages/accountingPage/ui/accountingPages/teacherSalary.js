import {TeachersSalary} from "entities/accounting";
import {useDispatch, useSelector} from "react-redux";
import {getDeletedTeachersSalaryData, getTeacherSalaryData} from "entities/accounting/model/selector/teacher";
import {onDeleteTeacherSalary, onChangePayment} from "entities/accounting/model/slice/teacher";
import React, {useEffect, useMemo, useState} from "react";
import {Button} from "shared/ui/button";
import {Pagination} from "features/pagination";
import {getSearchValue} from "features/searchInput";
import cls from "../accountingPageMain.module.sass";
import {Select} from "shared/ui/select";
import {Modal} from "shared/ui/modal";
import {getCapitalTypes} from "entities/capital";
import {getPaymentType} from "entities/capital/model/thunk/capitalThunk";
import {
    getDeletedTeacherSalary,
    getTeacherSalary
} from "../../../../entities/accounting/model/thunk/teacherSalarythunk";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";
import {
    DeletedTeacherSalary
} from "../../../../entities/accounting/ui/acauntingTables/accountingTableTeacherSalary/deletedTeacherSalary";


export const TeacherSalaryPage = () => {

    const dispatch = useDispatch()
    const teacherSalary = useSelector(getTeacherSalaryData)
    const getDeletedTeachersSalary = useSelector(getDeletedTeachersSalaryData)
    const [changingData, setChangingData] = useState({})
    const [changePayment, setChangePayment] = useState(false)

    const getPaymentTypes = useSelector(getCapitalTypes)

    const [activeDelete, setActiveDelete] = useState(false)
    const {request} = useHttp()
    const [deleted, setDeleted] = useState(false)

    useEffect(() => {
        dispatch(getPaymentType())
        dispatch(getTeacherSalary())
        dispatch(getDeletedTeacherSalary())
    }, [deleted])


    const onDelete = () => {

        const {id} = changingData
        request(`${API_URL}Teachers/teachers/salary/delete/${id}/`, "DELETE", JSON.stringify({id: id}), headers())
            .then(res => {
                console.log(res)
                dispatch(onDeleteTeacherSalary({id: id}))
                setActiveDelete(false)
            })
            .catch(err => {
                console.log(err)
            })

    }
    // const onChangeType = (id) =>{
    //     console.log(id)
    //     dispatch(onChangePayment({id : id}))
    // }


    const onChangeType = (selectedValue) => {
        dispatch(onChangePayment({
            id: changingData.id,
            payment_types: selectedValue
        }));
        setChangePayment(false);
    };
    return (
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
                <DeletedTeacherSalary setChangingData={setChangingData} setChangePayment={setChangePayment} deletedTeacher={getDeletedTeachersSalary}/>
                :
                <TeachersSalary
                setChangingData={setChangingData}
                changePayment={changePayment}
                setChangePayment={setChangePayment}
                onDelete={onDelete}
                deleted={deleted}
                teacherSalary={teacherSalary}
                changingData={changingData}
                activeDelete={activeDelete}
                setActiveDelete={setActiveDelete}
            />}

            {/*<Modal active={changePayment} setActive={setChangePayment}>*/}
            {/*    <div className={cls.changeType}>*/}
            {/*        <Select options={getPaymentTypes} onChangeOption={onChangeType} title={changingData.payment_types}/>*/}
            {/*    </div>*/}
            {/*</Modal>*/}

            <Modal active={changePayment} setActive={setChangePayment}>
                <div className={cls.changeType}>
                    <Select
                        options={getPaymentTypes}
                        onChangeOption={onChangeType}
                        // value={currentPaymentType ? currentPaymentType.value : ""}
                        title="Select payment type"
                    />
                </div>
            </Modal>
        </div>
    );
};


import {useDispatch, useSelector} from "react-redux";
import {getCapitalList, getDeletedCapitalList} from "entities/accounting/model/selector/capital";
import React, {useEffect, useState} from "react";
import {capitalDeletedListThunk, capitalListThunk} from "entities/accounting/model/thunk/capital";
import {
    CapitalHeader
} from "entities/accounting/ui/acauntingTables/accountingTableCapitalCosts/capitalHeader";
import {
    CapitalModal
} from "entities/accounting/ui/acauntingTables/accountingTableCapitalCosts/capitalModal";
import {getCapitalTypes} from "entities/capital";
import {getPaymentType} from "entities/capital/model/thunk/capitalThunk";
import {getMonthDays} from "entities/accounting/model/selector/additionalCosts";
import {getMonthDay} from "entities/accounting/model/thunk/additionalCosts";
import {useForm} from "react-hook-form";
import {API_URL, headers, useHttp} from "shared/api/base";
import {AccountingCapitalCosts} from "entities/accounting";
import {onDeleteCapital} from "entities/accounting/model/slice/capital";

import {
    CapitalDeleted
} from "entities/accounting/ui/acauntingTables/accountingTableCapitalCosts/capitalDeleted";

import cls from "../accountingPageMain.module.sass"
import {YesNo} from "shared/ui/yesNoModal";
import {onAddAlertOptions} from "../../../../features/alert/model/slice/alertSlice";

export const Capital = () => {
    const capitalList = useSelector(getCapitalList)
    const capitalDeletedList = useSelector(getDeletedCapitalList)
    const dispatch = useDispatch()
    const [activeModal, setActiveModal] = useState(false)
    const paymentType = useSelector(getCapitalTypes)
    const [day, setDay] = useState(null)
    const [month, setMonth] = useState(null)
    const [radio, setRadio] = useState({})
    const [changingData, setChangingData] = useState({})
    const [activeDelete, setActiveDelete] = useState(false)
    // const [alerts, setAlerts] = useState([])
    const [deleted, setDeleted] = useState(false)

    const {register, setValue, handleSubmit} = useForm()

    const monthDay = useSelector(getMonthDays)

    const {request} = useHttp()
    useEffect(() => {
        dispatch(capitalListThunk())
        dispatch(getPaymentType())
        dispatch(getMonthDay())
        dispatch(capitalDeletedListThunk())
    }, [deleted])



    const onAdd = (data) => {

        const res = {
            day: day,
            month: month,
            branch: 1,
            payment_type: radio.id,

            ...data
        }
        console.log(res)
        request(`${API_URL}Capital/old_capital_create/`, "POST", JSON.stringify(res), headers())
            .then(res => {
                console.log(res)
                setActiveModal(false)
                dispatch(onAddAlertOptions({
                    type: "success",
                    status: true,
                    msg: res.msg
                }))
                dispatch(capitalListThunk())
                setValue("name" , "")
                setValue("price" , "")
            })
            .catch(err => {
                console.log(err)
            })
    }
    const onDelete = () => {
        const {id} = changingData
        console.log(id, "log")
        request(`${API_URL}Capital/old_capital_delete/${id}`, "DELETE", JSON.stringify(id), headers())
            .then(res => {
                dispatch(onDeleteCapital({id: id}))
                console.log(res)
                setActiveDelete(false)
                dispatch(onAddAlertOptions({
                    type: "success",
                    status: true,
                    msg: res.msg
                }))
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className={cls.overhead}>
            <CapitalHeader deleted={deleted} setDeleted={setDeleted} setActive={setActiveModal}/>
            {deleted ? <CapitalDeleted deleted={capitalDeletedList}/> : <AccountingCapitalCosts changingData={changingData} activeDelete={activeDelete}
                                                      setActiveDelete={setActiveDelete}
                                                      setChangingData={setChangingData}
                                                      onDelete={onDelete} capitalData={capitalList}/>}
            <CapitalModal radioSelect={radio} setRadio={setRadio} register={register} onAdd={onAdd}
                          handleSubmit={handleSubmit} monthDay={monthDay} setMonth={setMonth} setDay={setDay} day={day}
                          month={month} setActive={setActiveModal} activeModal={activeModal} radio={paymentType}/>
        <YesNo activeDelete={activeDelete} setActiveDelete={setActiveDelete} onDelete={onDelete} changingData={changingData}/>
        </div>
    );
};


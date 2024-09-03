import {Button} from "shared/ui/button";
import React, {useCallback, useEffect, useState} from "react";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import cls from "../accountingPageMain.module.sass"
import {Select} from "shared/ui/select";
import {Input} from "shared/ui/input";
import {OverHeadHeader} from "entities/accounting/ui/acauntingTables/accountingTableAdditionalCosts/overHeadHeader";
import {useDispatch, useSelector} from "react-redux";
import {AccountingAdditionalCosts, getOverHeadLoading, getOverHeadType} from "../../../../entities/accounting";
import {
    getMonthDay,
    getOverheadType,
    overHeadDeletedList,
    overHeadList
} from "entities/accounting/model/thunk/additionalCosts";
import {API_URL, headers, useHttp} from "shared/api/base";
import {getCapitalTypes} from "entities/capital";
import {Radio} from "shared/ui/radio";
import {getPaymentType} from "entities/capital/model/thunk/capitalThunk";
import {useForm} from "react-hook-form";
import {
    getMonthDays, getOverHeadDeletedList,
    getOverHeadList,
} from "entities/accounting/model/selector/additionalCosts";
import {onDeleteOverhead} from "entities/accounting/model/slice/additionalCosts";
import {DefaultPageLoader} from "shared/ui/defaultLoader";
import {
    AdditionalCostsDeleted
} from "entities/accounting/ui/acauntingTables/accountingTableAdditionalCosts/additionalCostsDeleted";
import {onAddAlertOptions} from "../../../../features/alert/model/slice/alertSlice";
import {YesNo} from "../../../../shared/ui/yesNoModal";

export const AdditionalCosts = () => {
    const [activeModal, setActiveModal] = useState(false)
    const overHeadType = useSelector(getOverHeadType)
    const dispatch = useDispatch()
    const [select, setSelect] = useState({})
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);
    const {request} = useHttp()
    const loading = useSelector(getOverHeadLoading)
    const paymentType = useSelector(getCapitalTypes)
    const [radioSelect, setRadioSelect] = useState({})
    const {register, handleSubmit, setValue} = useForm()
    const monthDays = useSelector(getMonthDays)
    const [day, setDay] = useState(null)
    const [month, setMonth] = useState(null)
    const overheadList = useSelector(getOverHeadList)
    const [activeDelete, setActiveDelete] = useState(false)
    const [changingData, setChangingData] = useState({})
    const [deleted, setDeleted] = useState(false)
    const overheadDeletedList = useSelector(getOverHeadDeletedList)
    // const [alerts, setAlerts] = useState([])
    useEffect(() => {
        dispatch(getOverheadType())
        dispatch(getPaymentType())
        dispatch(getMonthDay())
        dispatch(overHeadDeletedList())
        dispatch(overHeadList())
    }, [deleted])

    // useEffect(() => {
    //
    // }, [deleted])


    const onClick = () => {
        setActiveModal(true)
    }

    const onChangeRadio = (value) => {
        console.log(value)
        setRadioSelect(value)
    }
    const onChange = (value) => {
        setSelect(value)
        // console.log(value)
        const {id} = value
        console.log(id)
        if (id === "9") {
            setShowAdditionalFields(true)

        } else {
            setShowAdditionalFields(false)
        }
    }

    const onAdd = (data) => {
        const res = {
            type: select.id,
            month: month,
            day: day,
            branch: 1,
            payment: radioSelect.id,
            ...data
        }
        request(`${API_URL}Overhead/overheads/create/`, "POST", JSON.stringify(res), headers())
            .then(res => {
                console.log(res)
                setActiveModal(false)
                setValue("name", "")
                setValue("price", "")
                dispatch(overHeadList())
                dispatch(onAddAlertOptions({
                    type: "success",
                    status: true,
                    msg: res.msg
                }))

            })
            .catch(err => {
                console.log(err)
            })

        console.log(res, "res")
    }
    const onDelete = () => {
        console.log("bosilvoti")
        const {id} = changingData
        console.log(id, id)
        request(`${API_URL}Overhead/overheads/delete/${id}`, "DELETE", JSON.stringify({id}), headers())
            .then(res => {
                console.log(res)
                dispatch(onDeleteOverhead({id: id}))
                // dispatch(overHeadList())
                setActiveDelete(false)
                // showAlert("success", `${changingData.name} ${res.msg}`)
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
    const sum1 = overheadList.reduce((a, c) => a + parseFloat(c.price || 0), 0);
    const sum2 = overheadDeletedList.reduce((a, c) => a + parseFloat(c.price || 0), 0);

    const formatSalary = (salary) => {
        return Number(salary).toLocaleString();
    };
    return loading ? <DefaultPageLoader/> : (
        <div className={cls.overhead}>

            <OverHeadHeader formatSalary={formatSalary} sum={sum1} deleted={deleted} sum2={sum2} onClick={onClick}
                            setDeleted={setDeleted}/>

            {deleted ? <AdditionalCostsDeleted
                    overheadDeletedList={overheadDeletedList}
                    extraClassName={cls.table}
                    paymentStyle={cls.typeItem}
                /> :
                <AccountingAdditionalCosts
                    formatSalary={formatSalary}
                    loading={loading}
                    onDelete={onDelete}
                    changingData={changingData}
                    setChangingData={setChangingData}
                    setActiveDelete={setActiveDelete}
                    activeDelete={activeDelete} extraclassName={cls.table}
                    additionalCosts={overheadList}
                    paymentStyle={cls.typeItem}
                />
            }
            <AddAdditionalCosts
                showAdditionalFields={showAdditionalFields}
                setActiveModal={setActiveModal}
                activeModal={activeModal}
                option={overHeadType}
                select={select}
                setSelected={setSelect}
                onChange={onChange}
                paymentType={paymentType}
                register={register}
                handleSubmit={handleSubmit}
                onAdd={onAdd}
                radioSelect={radioSelect}
                setRadioSelect={setRadioSelect}
                onChangeRadio={onChangeRadio}
                monthDay={monthDays}
                day={day}
                setDay={setDay}
                month={month}
                setMonth={setMonth}
            />
            <YesNo activeDelete={activeDelete} setActiveDelete={setActiveDelete} onDelete={onDelete} changingData={changingData}/>
        </div>
    );
};


export const AddAdditionalCosts = (props) => {
    const {
        activeModal,
        setActiveModal,
        option,
        showAdditionalFields,
        select,
        setSelected,
        onChange,
        paymentType,
        handleSubmit,
        onAdd,
        register,
        radioSelect,
        setRadioSelect,
        onChangeRadio,
        monthDay,
        day,
        setDay,
        month,
        setMonth
    } = props;


    return (

        <Modal setActive={setActiveModal} active={activeModal}>

            <Form extraClassname={cls.form} onSubmit={handleSubmit(onAdd)}>

                <Select options={option} defaultValue={option[0]?.name} onChangeOption={(e) => {
                    onChange({
                        name: e,
                        id: e
                    })
                }}
                />
                {showAdditionalFields ?
                    <Input name={"name"} register={register} placeholder={"Narsa turi"}/> : null}
                <Input register={register} name={"price"} type={"number"} placeholder={"Narxi"}/>
                <div style={{display: "flex", justifyContent: "center", gap: "2rem"}}>
                    {paymentType.map(item => (
                        <Radio
                            onChange={() => onChangeRadio({
                                name: item.name,
                                id: item.id
                            })}
                            children={item.name}
                            checked={radioSelect?.name === item.name}
                            value={radioSelect === item.name}
                            name={"hello"}
                        />
                    ))}
                </div>

                <Select
                    title={'Oy'}
                    defaultValue={monthDay[0]?.name}
                    options={monthDay}
                    onChangeOption={setMonth}
                />
                <Select
                    title={'Kun'}
                    options={monthDay.filter(item => item?.value === month)[0]?.days}
                    onChangeOption={setDay}
                />
            </Form>
        </Modal>
    )
}

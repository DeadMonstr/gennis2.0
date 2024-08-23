import {getGroupsListData} from "entities/groups";
import {getTeachers} from "entities/teachers";
import React, {memo, useCallback, useState} from 'react';
import classNames from "classnames";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";

import {getGroupProfileData} from "entities/profile/groupProfile";
import {
    amountService,
    amountTypes
} from "entities/profile/studentProfile";
import {EditableCard} from "shared/ui/editableCard";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Button} from "shared/ui/button";
import {Input} from "shared/ui/input";
import {Radio} from "shared/ui/radio";
import {Select} from "shared/ui/select";
import {Table} from "shared/ui/table";

import cls from "./groupProfileDeleteForm.module.sass";
import defaultUserImg from "shared/assets/images/user_image.png";
import bank from "shared/assets/images/Bank.png";
import creditCard from "shared/assets/images/CreditCard.png";
import money from "shared/assets/images/Money.png";

const listPretcent = [-1, 34.8, 70.4]

export const GroupProfileDeleteForm = memo(() => {

    const {
        register,
        handleSubmit
    } = useForm()

    const data = useSelector(getGroupProfileData)
    const teachers = useSelector(getTeachers)
    const groups = useSelector(getGroupsListData)

    const [active, setActive] = useState(false)
    const [activeModal, setActiveModal] = useState("")
    const [select, setSelect] = useState([])
    const [activeService, setActiveService] = useState(amountService[0])
    const [activePaymentType, setActivePaymentType] = useState(0)

    const onSubmitDelete = (data) => {
        console.log(data, "delete data")
    }

    const onSubmitAdd = (data) => {
        console.log(data, "data add")
    }

    const renderStudents = () => {
        return data?.students?.map(item =>
            <tr>
                <td>
                    <div
                        className={cls.students__upper}
                        style={{backgroundColor: item.status}}
                    />
                </td>
                <td>
                    <img src={defaultUserImg} alt=""/>
                </td>
                <td>{item?.user?.name} {item?.user?.surname}</td>
                <td>
                    <div
                        className={classNames(cls.students__money, {
                            [cls.red]: item.status === "red",
                            [cls.yellow]: item.status === "yellow",
                        })}
                        onClick={() => setActiveModal("paymentModal")}
                    >
                        {item.money}
                    </div>
                </td>
                {
                    active ?
                        <td>
                            <div className={cls.delete}>
                                <Input
                                    extraClassName={cls.delete__input}
                                    type={"checkbox"}
                                    onChange={() => {
                                        setSelect(prev => {
                                            if (prev.filter(i => i === item.id)[0]) {
                                                return prev.filter(i => i !== item.id)
                                            } else return [...prev, item.id]
                                        })
                                    }}
                                />
                                <i
                                    className={classNames("fas fa-trash-alt", cls.delete__icon)}
                                    onClick={() => setActiveModal("deleteModal")}
                                />
                            </div>
                        </td>
                        :
                        null
                }
            </tr>
        )
    }

    const renderAmountServiceTypes = useCallback(() => {
        return amountService.map(item =>
            <div className={cls.items__inner}>
                <Radio
                    extraClasses={cls.items__radio}
                    onChange={setActiveService}
                    value={item}
                    checked={item === activeService}
                />
                <p>{item}</p>
            </div>
        )
    }, [activeService])

    const renderAmountService = renderAmountServiceTypes()
    const render = renderStudents()

    return (
        <>
            <EditableCard
                extraClass={cls.students}
                title={<i className="fas fa-edit"/>}
                onClick={() => setActive(!active)}
            >
                <div className={cls.students__title}>
                    <h1>O’quvchilar</h1>
                    {
                        active ?
                            <Button
                                extraClass={cls.students__btn}
                                onClick={() => setActiveModal("addModal")}
                            >
                                Add
                            </Button> : null
                    }
                </div>
                <div className={cls.students__list}>
                    <Table>
                        <tbody>
                        {render}
                        </tbody>
                    </Table>
                </div>
            </EditableCard>
            <Modal
                extraClass={cls.deleteForm}
                active={activeModal === "deleteModal"}
                setActive={setActiveModal}
            >
                <h1>O’chirish</h1>
                <Form
                    extraClassname={cls.deleteForm__form}
                    onSubmit={handleSubmit(onSubmitDelete)}
                    typeSubmit={""}
                >
                    <Select
                        extraClass={cls.deleteForm__select}
                        title={"Lorem"}
                        register={register}
                        name={"lorem"}
                    />
                    <Input
                        extraClassName={cls.deleteForm__input}
                        placeholder={"Sabab"}
                        register={register}
                        name={"reason"}
                    />
                    <Button extraClass={cls.deleteForm__btn}>Add</Button>
                </Form>
            </Modal>
            <Modal
                extraClass={cls.deleteForm}
                active={activeModal === "addModal"}
                setActive={setActiveModal}
            >
                <h1>Boshqa guruhga qo’shish</h1>
                <Form
                    extraClassname={cls.deleteForm__form}
                    onSubmit={handleSubmit(onSubmitAdd)}
                    typeSubmit={""}
                >
                    <Select
                        extraClass={cls.deleteForm__select}
                        options={teachers}
                        title={"Teacher"}
                        register={register}
                        name={"teacher"}
                    />
                    <Select
                        extraClass={cls.deleteForm__select}
                        options={groups}
                        title={"Group"}
                        register={register}
                        name={"group"}
                    />
                    <Button extraClass={cls.deleteForm__btn}>Add</Button>
                </Form>
            </Modal>
            <Modal
                extraClass={cls.paymentForm}
                active={activeModal === "paymentModal"}
                setActive={setActiveModal}
            >
                <div className={cls.paymentForm__header}>
                    <h1>Umumiy Hisob</h1>
                    <div className={cls.items}>
                        <div className={cls.items__inner}>
                            <img src={money} alt=""/>
                            <p>12 000 000</p>
                        </div>
                        <div className={cls.items__inner}>
                            <img src={creditCard} alt=""/>
                            <p>11 000 000</p>
                        </div>
                        <div className={cls.items__inner}>
                            <img src={bank} alt=""/>
                            <p>11 000 000</p>
                        </div>
                    </div>
                </div>
                <div className={cls.paymentForm__content}>
                    <div className={cls.items}>
                        {renderAmountService}
                    </div>
                    <div className={cls.form}>
                        <h1>{activeService}</h1>
                        {
                            activeService === "To'lov"
                                ?
                                <>
                                    <div className={cls.items}>
                                        {
                                            amountTypes.map((item, index) =>
                                                <div
                                                    className={cls.items__inner}
                                                    onClick={() => setActivePaymentType(index)}
                                                >
                                                    <p>{item.name}</p>
                                                    <img src={item.image} alt=""/>
                                                </div>
                                            )
                                        }
                                        <div
                                            className={cls.items__active}
                                            style={{left: `${listPretcent[activePaymentType]}%`}}
                                        />
                                    </div>
                                    <Form onSubmit={handleSubmit()}>
                                        <div className={cls.form__inner}>
                                            <p>{activeService} miqdori</p>
                                            <Input
                                                register={register}
                                                name={"amount"}
                                                placeholder={"Summa"}
                                                // defaultValue={paymentSum}
                                                // onChange={(e) => setPaymentSum(e.target.value)}
                                                type={"number"}
                                            />

                                        </div>
                                    </Form>
                                </>
                                :
                                activeService === "Xayriya"
                                    ?
                                    <Form onSubmit={handleSubmit()}>
                                        <div className={cls.form__container}>
                                            <Select
                                                extraClass={cls.form__select}
                                            />
                                            <div className={cls.form__inner}>
                                                <p>{activeService} miqdori</p>
                                                <Input
                                                    register={register}
                                                    name={"amount"}
                                                    placeholder={"Summa"}
                                                    type={"number"}
                                                />
                                            </div>
                                        </div>
                                    </Form>
                                    :
                                    <Form onSubmit={handleSubmit()}>
                                        <div className={cls.form__inner}>
                                            <p>{activeService} miqdori</p>
                                            <Input
                                                register={register}
                                                name={"amount"}
                                                placeholder={"Summa"}
                                                type={"number"}
                                            />
                                        </div>
                                    </Form>
                        }
                    </div>
                </div>
            </Modal>
        </>
    )
})

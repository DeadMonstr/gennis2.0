import {memo, useCallback, useState} from 'react';
import {useForm} from "react-hook-form";
import classNames from "classnames";

import {amountTypes, amountService} from "entities/profile/studentProfile";
import {EditableCard} from "shared/ui/editableCard";
import {Input} from "shared/ui/input";
import {Radio} from "shared/ui/radio";
import {Select} from "shared/ui/select";
import {Form} from "shared/ui/form";
import {Modal} from "shared/ui/modal";

import cls from "./studentProfileTotalAmount.module.sass";
import money from "shared/assets/images/Money.png";
import creditCard from "shared/assets/images/CreditCard.png";
import bank from "shared/assets/images/Bank.png";

const listPretcent = [-1, 34.8, 70.4]

export const StudentProfileTotalAmount = memo(({active, setActive}) => {

    const {register, handleSubmit} = useForm()

    const [activeService, setActiveService] = useState(amountService[0])
    const [activePaymentType, setActivePaymentType] = useState(0)
    const [data, setData] = useState({})
    const [checkModalStatus, setCheckModalStatus] = useState(false)

    const onSubmitData = (data) => {
        console.log(data)
        setData(data)
        setCheckModalStatus(true)

    }

    const onSubmitPassword = (data) => {
        console.log(data)
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

    return (
        <EditableCard
            extraClass={classNames(cls.amount, {
                [cls.active]: active === "balanceIn"
            })}
            titleType={"cross"}
            onClick={() => setActive("balance")}
        >
            <div className={cls.amount__header}>
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
            <div className={cls.amount__content}>
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
                                <Form onSubmit={handleSubmit(onSubmitData)}>
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
                            </>
                            :
                            activeService === "Xayriya"
                                ?
                                <Form onSubmit={handleSubmit(onSubmitData)}>
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
                                <Form onSubmit={handleSubmit(onSubmitData)}>
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
            <Modal
                active={checkModalStatus}
                setActive={setCheckModalStatus}
            >
                <Form
                    onSubmit={handleSubmit(onSubmitPassword)}
                >
                    <div className={cls.amount__modal}>
                        <h1>Parol</h1>
                        <Input
                            placeholder={"Parol"}
                            type={"password"}
                            register={register}
                            name={"password"}
                            required
                        />
                    </div>
                </Form>
            </Modal>
        </EditableCard>
    )
})
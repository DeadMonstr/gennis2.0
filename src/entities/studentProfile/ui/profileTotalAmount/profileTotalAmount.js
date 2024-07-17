import {memo, useCallback, useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import classNames from "classnames";

import {Context} from "pages/profilePage";
import {EditableCard} from "shared/ui/editableCard";
import {Input} from "shared/ui/input";
import {Radio} from "shared/ui/radio";
import {Form} from "shared/ui/form";
import {amountTypes, amountService} from "entities/studentProfile";

import cls from "./profileTotalAmount.module.sass";
import money from "shared/assets/images/Money.png";
import creditCard from "shared/assets/images/CreditCard.png";
import bank from "shared/assets/images/Bank.png";
import cross from "shared/assets/icons/cross.svg";

export const ProfileTotalAmount = memo(() => {

    const {active, setActive} = useContext(Context)
    const {register, handleSubmit} = useForm()

    const [activeService, setActiveService] = useState(amountService[0])

    const onSubmit = (data) => {
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
            title={<img src={cross} alt=""/>}
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
                    <div className={cls.items}>
                        {
                            amountTypes.map(item =>
                                <div className={cls.items__inner}>
                                    <p>{item.name}</p>
                                    <img src={item.image} alt=""/>
                                </div>
                            )
                        }
                        <div className={cls.items__active}/>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className={cls.form__inner}>
                            <p>To’lov miqdori</p>
                            <Input
                                register={register}
                                name={"amount"}
                                placeholder={"Summa"}
                                type={"number"}
                            />
                        </div>
                    </Form>
                </div>
            </div>
        </EditableCard>
    )
})

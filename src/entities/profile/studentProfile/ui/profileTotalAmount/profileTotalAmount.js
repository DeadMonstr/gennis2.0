import {memo, useCallback, useState} from 'react';
import {useForm} from "react-hook-form";

import {Input} from "shared/ui/input";
import {Radio} from "shared/ui/radio";
import {Form} from "shared/ui/form";
import {amountTypes, amountService} from "../../model/consts";

import cls from "./profileTotalAmount.module.sass";
import money from "shared/assets/images/Money.png";
import creditCard from "shared/assets/images/CreditCard.png";
import bank from "shared/assets/images/Bank.png";

export const ProfileTotalAmount = memo(() => {

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
        <div className={cls.amount}>
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
        </div>
    );
})

import {memo, useCallback, useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import classNames from "classnames";
import {EditableCard} from "shared/ui/editableCard";
import {Input} from "shared/ui/input";
import {Radio} from "shared/ui/radio";
import {Select} from "shared/ui/select";
import {Form} from "shared/ui/form";
import {amountTypes, amountService} from "entities/profile/studentProfile";
import {useDispatch, useSelector} from "react-redux";
import {giveEmployerSalaryThunk} from "features/giveEmployerSalary";
import {addSalary} from "features/giveEmployerSalary/model/giveEmployerSalarySlice";
import cls from "./employerProfileTotalAmount.module.sass";
import money from "shared/assets/images/Money.png";
import creditCard from "shared/assets/images/CreditCard.png";
import bank from "shared/assets/images/Bank.png";
import {getSalaryInsideSource} from "pages/giveSalaryPage";

const listPretcent = [-1, 34.8, 70.4]

export const EmployerProfileTotalAmount = memo(({active, setActive, salary_id, user_id, permission_id}) => {

    const {register, handleSubmit} = useForm()
    const [activeService, setActiveService] = useState(amountService[0])
    const [activePaymentType, setActivePaymentType] = useState(0)
    const [salary, setSalary] = useState(0);
    const [branch, setBranch] = useState(1)
    const [payment, setPayment] = useState(1)
    const [comment, setComment] = useState('')
    const dispatch = useDispatch()
    const userData = useSelector(getSalaryInsideSource)

    console.log(userData, "blet ")

    const handleAddSalary = async () => {
        const newSalary = {
            salary: 13,
            comment: comment,
            deleted: false,
            user_salary: salary_id,
            permission: permission_id,
            payment_types: payment,
            user: user_id,
            branch: branch
        };
        console.log(newSalary)
        try {
            const action = await dispatch(giveEmployerSalaryThunk(newSalary));
            if (giveEmployerSalaryThunk.fulfilled.match(action)) {
                dispatch(addSalary(action.payload));
            } else {
                console.error("Thunk failed with error: ", action.payload);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }


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
            titleType={""}
            onClick={() => setActive("balance")}
        >
            <div className={cls.amount__header}>
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
                                <Form onSubmit={handleSubmit(handleAddSalary)}>
                                    <div className={cls.form__inner}>
                                        <Input
                                            title={"To'lov miqdori"}
                                            register={register}
                                            name={"amount"}
                                            placeholder={"Summa"}
                                            type={"number"}
                                            value={salary}
                                            onChange={(e) => setSalary(e.target.value)}
                                        />
                                        <Input
                                            title={"Sababi"}
                                            register={register}
                                            name={"comment"}
                                            placeholder={"Sababi"}
                                            type={"text"}
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}

                                        />
                                    </div>
                                </Form>
                            </>
                            :
                            activeService === "Xayriya"
                                ?
                                <Form onSubmit={handleSubmit(handleAddSalary)}>
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
                                <Form>
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
        </EditableCard>

    )
})

import {memo, useCallback, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import classNames from "classnames";

import {amountTypes, amountService} from "../../model/consts/amountConsts";
import {EditableCard} from "shared/ui/editableCard";
import {Input} from "shared/ui/input";
import {Radio} from "shared/ui/radio";
import {Select} from "shared/ui/select";
import {Form} from "shared/ui/form";
import {Modal} from "shared/ui/modal";
import {useTheme} from "shared/lib/hooks/useTheme";
import cls from "./studentProfileTotalAmount.module.sass";
import money from "shared/assets/images/Money.png";
import creditCard from "shared/assets/images/CreditCard.png";
import bank from "shared/assets/images/Bank.png";
import {useDispatch, useSelector} from "react-redux";
import {getMonthDataThunk, getMonthData} from "features/studentPayment";
import {API_URL, headers, useHttp} from "shared/api/base";
import {onAddAlertOptions} from "features/alert/model/slice/alertSlice";
import {fetchStudentProfileData} from "pages/profilePage/model/thunk/studentProfileThunk";


const listPretcent = [-1, 34.8, 70.4];

export const StudentProfileTotalAmount = memo(({active, setActive, student_id, branch_id, group_id}) => {

    const {register, handleSubmit, reset} = useForm();
    const getMonthDate = useSelector(getMonthData);
    const [activeService, setActiveService] = useState(amountService[0]);
    const [selectPrice, setSelectPrice] = useState(0);
    const [selectMonth, setSelectedMonth] = useState(0);
    const [getMonth, setGetMonth] = useState(0)
    const [activePaymentType, setActivePaymentType] = useState(0);
    const [option, setOption] = useState(0);
    const [paymentSum, setPaymentSum] = useState(0);
    const [charitysum, setCharitySum] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [checkModalStatus, setCheckModalStatus] = useState(false);
    const [payment, setPayment] = useState(1);
    const dispatch = useDispatch();
    const userSystem = JSON.parse(localStorage.getItem("selectedSystem"));
    const {theme} = useTheme();
    const {request} = useHttp();

    useEffect(() => {
        if (student_id) {
            dispatch(getMonthDataThunk(student_id));
        }
    }, [student_id, dispatch]);

    const onSelect = async (selectedMonthId) => {
        setGetMonth(selectedMonthId)
        const data = {
            id: Number(selectedMonthId),
        };

        const response = await request(`${API_URL}Students/student_payment_month_for_month/`, "POST", JSON.stringify(data), headers());
        setSelectPrice(response);
        return response;
    };

    const handleAddPayment = async (data) => {
        if (theme === "app_school_theme") {
            const newPaymentSchool = {
                id: Number(getMonth),
                student: student_id,
                payment_type: payment,
                payment_sum: paymentSum ? Number(paymentSum) : selectPrice.price,
                status: false,
                branch: branch_id,
                ...data
            }
            const response = await request(`${API_URL}Students/student_payment_month/${student_id}/${selectMonth}/`, "POST", JSON.stringify(newPaymentSchool), headers());
            dispatch(onAddAlertOptions({
                type: "success",
                status: true,
                msg: "O'quvchi uchun to'lov muvofaqqiyatli o'tdi"
            }));
            dispatch(fetchStudentProfileData(student_id))
            setPaymentSum(0);
            setSelectedMonth(0);
            reset()
            return response;
        } else {
            const newPayment = {
                student: student_id,
                payment_type: payment,
                payment_sum: paymentSum,
                status: false,
                branch: branch_id,
                ...data
            };
            const response = await request(`${API_URL}Students/student_payment_create/`, "POST", JSON.stringify(newPayment), headers());
            dispatch(onAddAlertOptions({
                type: "success",
                status: true,
                msg: response.msg
            }));

            setPaymentSum(0);
            return response;
        }

    };

    const handleAddCharity = async (data) => {
        const newCharity = {
            student: student_id,
            group: option,
            charity_sum: charitysum,
            ...data
        };

        const response = await request(`${API_URL}Students/student_charities_create/`, "POST", JSON.stringify(newCharity), headers());
        dispatch(onAddAlertOptions({
            type: "success",
            status: true,
            msg: response.msg
        }));

        setCharitySum(0);
        return response;
    };

    const handleAddDiscount = async (data) => {
        const newDiscount = {
            student: student_id,
            payment_type: 1,
            payment_sum: discount,
            status: true,
            branch: branch_id,
            ...data
        };

        const response = await request(`${API_URL}Students/student_payment_create/`, "POST", JSON.stringify(newDiscount), headers());
        dispatch(onAddAlertOptions({
            type: "success",
            status: true,
            msg: response.msg
        }));

        setDiscount(0);
        return response;
    };

    const onSubmitPassword = (data) => {

    }




    const renderAmountServiceTypes = useCallback(() => {
        return amountService.map(item =>
            <div className={cls.items__inner} key={item}>
                <Radio
                    extraClasses={cls.items__radio}
                    onChange={() => setActiveService(item)}
                    value={item}
                    checked={item === activeService}
                />
                <p>{item}</p>
            </div>
        );
    }, [activeService]);

    const renderAmountService = renderAmountServiceTypes();

    return (
        <EditableCard
            extraClass={classNames(cls.amount, {
                [cls.active]: active === "balanceIn"
            })}
            titleType={"cross"}
            onClick={() => setActive(!"balanceIn")}
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
                    {activeService === "To'lov" && (
                        <>
                            {(theme === "app_school_theme" || userSystem?.id === 2) && (
                                <Select
                                    extraClass={cls.monthSelect}
                                    title={"Oyni tanlang"}
                                    options={getMonthDate}
                                    onChangeOption={(value) => {
                                        setSelectedMonth(value);
                                        onSelect(value);
                                    }}
                                />
                            )}
                            <div className={cls.items}>
                                {amountTypes.map((item, index) => (
                                    <div
                                        className={cls.items__inner}
                                        key={item.name}
                                        onClick={() => {
                                            setActivePaymentType(index);
                                            setPayment(index + 1);
                                        }}
                                    >
                                        <p>{item.name}</p>
                                        <img src={item.image} alt=""/>
                                    </div>
                                ))}
                                <div
                                    className={cls.items__active}
                                    style={{left: `${listPretcent[activePaymentType]}%`}}
                                />
                            </div>
                            <Form onSubmit={handleSubmit(handleAddPayment)}>
                                <div className={cls.form__inner}>
                                    <p>{activeService} miqdori</p>
                                    <Input
                                        {...register("amount")}
                                        placeholder={"Summa"}
                                        value={paymentSum || selectPrice.price}
                                        onChange={(e) => setPaymentSum(e.target.value)}
                                        type={"number"}
                                    />
                                </div>
                            </Form>
                        </>
                    )}
                    {activeService === "Xayriya" && (
                        <Form onSubmit={handleSubmit(handleAddCharity)}>
                            <div className={cls.form__container}>
                                <Select
                                    extraClass={cls.form__select}
                                    options={group_id}
                                    onChangeOption={setOption}
                                />
                                <div className={cls.form__inner}>
                                    <p>{activeService} miqdori</p>
                                    <Input
                                        {...register("amount")}
                                        placeholder={"Summa"}
                                        type={"number"}
                                        value={charitysum}
                                        onChange={(e) => setCharitySum(e.target.value)}
                                    />
                                </div>
                            </div>
                        </Form>
                    )}
                    {activeService === "Chegirma" && (
                        <Form onSubmit={handleSubmit(handleAddDiscount)}>
                            <div className={cls.form__inner}>
                                <p>{activeService} miqdori</p>
                                <Input
                                    {...register("amount")}
                                    placeholder={"Summa"}
                                    type={"number"}
                                    value={discount}
                                    onChange={(e) => setDiscount(e.target.value)}
                                />
                            </div>
                        </Form>
                    )}
                </div>
            </div>
            <Modal
                active={checkModalStatus}
                setActive={setCheckModalStatus}
            >
                <Form onSubmit={handleSubmit(onSubmitPassword)}>
                    <div className={cls.amount__modal}>
                        <h1>Parol</h1>
                        {/*<Input
                            placeholder={"Parol"}
                            type={"password"}
                            register={register}
                            name={"password"}
                            required
                        />*/}
                    </div>
                </Form>
            </Modal>
        </EditableCard>
    );
});

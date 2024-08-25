import {getGroupsListData} from "entities/groups";
import {
    getFilteredGroups,
    getGroupProfileFilteredStudents,
    getReasons
} from "entities/profile/groupProfile/model/groupProfileSelector";
import {fetchFilteredGroups, moveGroup} from "entities/profile/groupProfile/model/groupProfileThunk";
import {getTeachers} from "entities/teachers";
import React, {memo, useCallback, useState} from 'react';
import classNames from "classnames";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {changeGroupProfile, getGroupProfileData} from "entities/profile/groupProfile";
import {
    amountService,
    amountTypes
} from "entities/profile/studentProfile";
import {useParams} from "react-router";
import {useTheme} from "shared/lib/hooks/useTheme";
import {EditableCard} from "shared/ui/editableCard";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Button} from "shared/ui/button";
import {Input} from "shared/ui/input";
import {Radio} from "shared/ui/radio";
import {Select} from "shared/ui/select";
import {Switch} from "shared/ui/switch";
import {Table} from "shared/ui/table";

import cls from "./groupProfileDeleteForm.module.sass";
import defaultUserImg from "shared/assets/images/user_image.png";
import bank from "shared/assets/images/Bank.png";
import creditCard from "shared/assets/images/CreditCard.png";
import money from "shared/assets/images/Money.png";

const listPretcent = [-1, 34.8, 70.4]

const deleteTypeList = [
    {
        id: "deleted",
        name: "O'chirilganlar"
    },
    {
        id: "new_students",
        name: "Yangi o'quvchilar"
    }
]

export const GroupProfileDeleteForm = memo(() => {

    const {
        register,
        handleSubmit
    } = useForm()

    const {theme} = useTheme()
    const {id} = useParams()
    const dispatch = useDispatch()
    const data = useSelector(getGroupProfileData)
    const students = useSelector(getGroupProfileFilteredStudents)
    const teachers = useSelector(getTeachers)
    const groups = useSelector(getFilteredGroups)
    const reasons = useSelector(getReasons)

    const [active, setActive] = useState(false)
    const [activeModal, setActiveModal] = useState("")
    const [select, setSelect] = useState([])
    const [selectDeleteId, setSelectDeleteId] = useState(null)
    const [selectOpt, setSelectOpt] = useState(null)
    const [selectOptId, setSelectOptId] = useState(null)
    const [activeService, setActiveService] = useState(amountService[0])
    const [activePaymentType, setActivePaymentType] = useState(0)
    const [selectedId, setSelectedId] = useState([])

    const onSubmitDelete = (data) => {
        console.log(data, "delete data")
        const res = {
            ...data,
            students: [selectDeleteId],
            update_method: "remove_students"
        }
        dispatch(changeGroupProfile({
            id,
            data: res,
            group_type: theme === "app_center_theme" ? "center" : "school"
        }))
    }

    const onSubmitMove = (data) => {
        console.log(data, "data add")
        const res = {
            ...data,
            students: select
        }
        dispatch(moveGroup({id, res}))
    }

    const onSubmitAddStudents = () => {
        dispatch(changeGroupProfile({
            data: {
                students: selectedId,
                update_method: "add_students"
            },
            id,
            group_type: theme === "app_center_theme" ? "center" : "school"
        }))
    }

    const onFilterGroups = (id) => {
        dispatch(fetchFilteredGroups({id, group_id: data?.id}))
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
                                    onClick={() => {
                                        setActiveModal("deleteModal")
                                        setSelectDeleteId(item?.id)
                                    }}
                                />
                            </div>
                        </td>
                        :
                        null
                }
            </tr>
        )
    }

    const renderStudentsData = () => {
        return students?.map(item =>
            <tr>
                <td>
                    <img src={defaultUserImg} alt=""/>
                </td>
                <td>{item?.user?.name}</td>
                <td>{item?.user?.surname}</td>
                <td>
                    {
                        item?.subject?.map(i =>
                            <div className={cls.addModal__subject}>
                                {i?.name?.slice(0, 16)}
                            </div>
                        )
                    }
                </td>
                <td>
                    <div className={cls.check}>
                        <Input
                            extraClassName={cls.check__input}
                            type={"checkbox"}
                            onChange={() => setSelectedId(prev => {
                                if (prev.filter(i => i === item.id)[0]) {
                                    return prev.filter(i => i !== item.id)
                                } else return [...prev, item.id]
                            })}
                        />
                        <div className={classNames(cls.status, {
                            [cls.active]: item?.extra_info?.status
                        })}>
                            <div className={classNames(cls.status__inner, {
                                [cls.active]: item?.extra_info?.status
                            })}/>
                        </div>
                    </div>
                </td>
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
    const renderStudent = renderStudentsData()

    console.log(selectOpt, "selectOpt")

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
                            <div className={cls.students__wrapper}>
                                <Button
                                    extraClass={cls.students__btn}
                                    onClick={() => setActiveModal("changeModal")}
                                >
                                    Move
                                </Button>
                                <Button
                                    extraClass={cls.students__btn}
                                    onClick={() => setActiveModal("addModal")}
                                >
                                    Add
                                </Button>
                            </div> : null
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
                        options={deleteTypeList}
                        title={"O'chirish uslubi"}
                        onChangeOption={setSelectOpt}
                        register={register}
                        name={"delete_type"}
                        required
                    />
                    {
                        selectOpt === "deleted" ?
                            <Select
                                extraClass={cls.deleteForm__select}
                                options={reasons}
                                title={"Sabablar"}
                                onChangeOption={setSelectOptId}
                                register={register}
                                name={"group_reason"}
                                required
                            /> : null
                    }
                    {
                        reasons?.filter(item =>
                            item?.id === +selectOptId)[0]?.name === "Boshqa" ||
                        selectOpt !== "deleted" ? <Input
                            extraClassName={cls.deleteForm__input}
                            placeholder={"Sabab"}
                            register={register}
                            name={"comment"}
                            required
                        /> : null
                    }
                    <Button extraClass={cls.deleteForm__btn}>Add</Button>
                </Form>
            </Modal>
            <Modal
                extraClass={cls.deleteForm}
                active={activeModal === "changeModal"}
                setActive={setActiveModal}
            >
                <h1>Boshqa guruhga qo’shish</h1>
                <Form
                    extraClassname={cls.deleteForm__form}
                    onSubmit={handleSubmit(onSubmitMove)}
                    typeSubmit={""}
                >
                    <Select
                        extraClass={cls.deleteForm__select}
                        options={teachers}
                        title={"Teacher"}
                        onChangeOption={onFilterGroups}
                        // register={register}
                        // name={"teacher"}
                    />
                    <Select
                        extraClass={cls.deleteForm__select}
                        options={groups}
                        title={"Group"}
                        register={register}
                        name={"to_group_id"}
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
            <Modal
                active={activeModal === "addModal"}
                setActive={setActiveModal}
                extraClass={cls.addModal}
            >
                <Input
                    placeholder={"Search"}
                    // onChange={(e) => setSearchValue(e.target.value)}
                    // defaultValue={searchValue}
                />
                <div className={cls.addModal__container}>
                    <Table>
                        <thead>
                        <tr>
                            <th/>
                            <th>Ism</th>
                            <th>Familya</th>
                            <th>Fanlar</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {renderStudent}
                        </tbody>
                    </Table>
                </div>
                <Button
                    extraClass={cls.addModal__btn}
                    onClick={onSubmitAddStudents}
                >
                    Add
                </Button>
            </Modal>
        </>
    )
})

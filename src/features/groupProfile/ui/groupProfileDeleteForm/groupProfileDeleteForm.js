import {getGroupsListData} from "entities/groups";
import {
    getFilteredGroups,
    getGroupProfileFilteredStudents, getGroupProfileFilteredTeachers,
    getReasons
} from "entities/profile/groupProfile/model/groupProfileSelector";
import {
    fetchFilteredGroups,
    filteredStudents,
    moveGroup,
    moveToClass
} from "entities/profile/groupProfile/model/groupProfileThunk";
import {getFilteredTeachers} from "entities/students";
import {fetchTeachersData, getTeachers} from "entities/teachers";
import {getUserBranchId, getUserSystemId} from "entities/profile/userProfile/model/userProfileSelector";
import {onAddAlertOptions} from "features/alert/model/slice/alertSlice";
import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import classNames from "classnames";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {changeGroupProfile, getGroupProfileData} from "entities/profile/groupProfile";
import {
    amountService,
    amountTypes
} from "entities/profile/studentProfile";
import {useNavigate, useParams} from "react-router";
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

export const GroupProfileDeleteForm = memo(({branch, system}) => {

    const {
        register,
        handleSubmit
    } = useForm()

    const {theme} = useTheme()
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const userSystem = JSON.parse(localStorage.getItem("selectedSystem")) // changed
    const userBranchId = useSelector(getUserBranchId)
    const data = useSelector(getGroupProfileData)
    const students = useSelector(getGroupProfileFilteredStudents)
    const teachers = useSelector(getGroupProfileFilteredTeachers)
    const schoolTeachers = useSelector(getTeachers)
    const groups = useSelector(getFilteredGroups)
    const reasons = useSelector(getReasons)

    useEffect(() => {
        if (data && branch) {
            dispatch(filteredStudents({
                userBranchId: branch,
                group_id: data?.id,
                res: {ignore_students: data?.students.map(item => item.id)}
            }))
            dispatch(fetchTeachersData({userBranchId: branch}))
        }
    }, [data, branch])

    const [active, setActive] = useState(false)
    const [activeModal, setActiveModal] = useState("")
    const [select, setSelect] = useState([])
    const [selectDeleteId, setSelectDeleteId] = useState(null)
    const [selectOpt, setSelectOpt] = useState(null)
    const [selectOptId, setSelectOptId] = useState(null)
    const [activeService, setActiveService] = useState(amountService[0])
    const [activePaymentType, setActivePaymentType] = useState(0)
    const [selectedId, setSelectedId] = useState([])

    const [searchValue, setSearchValue] = useState("")
    const [currentTeachersData, setCurrentTeachersData] = useState([])


    const searched = useMemo(() => {
        const filteredSlice = students?.slice()

        return filteredSlice?.filter(item =>
            item?.user?.name?.toLowerCase().includes(searchValue?.toLowerCase()) ||
            item?.user?.surname?.toLowerCase().includes(searchValue?.toLowerCase())
        )
    }, [students, searchValue])

    const onSubmitDelete = (dataForm) => {
        const place = userSystem?.name === "center" ? "guruh" : "sinf"
        const selectedStudent = data?.students?.filter(item => item.id === selectDeleteId)[0]?.user
        const res = {
            ...dataForm,
            students: [selectDeleteId],
            update_method: "remove_students"
        }
        dispatch(changeGroupProfile({
            id,
            data: res,
            group_type: userSystem?.name
        }))
        dispatch(onAddAlertOptions({
            type: "success",
            status: true,
            msg: `${selectedStudent?.name} ${selectedStudent?.surname} ${place}dan o'chirildi`
        }))
    }

    const onSubmitMove = (data) => {
        let msg;
        if (theme === "app_school_theme" || userSystem?.name === "school") {
            const res = {
                ...data,
                students: select
            }
            dispatch(moveToClass({branch, id, res}))
            msg = `O'quvchilar boshqa sinfga o'tqazildi`
        } else {
            const res = {
                ...data,
                students: select
            }
            dispatch(moveGroup({id, res}))
            msg = `O'quvchilar boshqa guruhga o'tqazildi`
        }
        dispatch(onAddAlertOptions({
            type: "success",
            status: true,
            msg: msg
        }))
    }

    const onSubmitAddStudents = () => {

        const place = userSystem?.name === "center" ? "guruh" : "sinf"
        dispatch(changeGroupProfile({
            data: {
                students: selectedId,
                update_method: "add_students"
            },
            id,
            group_type: userSystem?.name
            // group_type: "center"
        }))
        dispatch(onAddAlertOptions({
            type: "success",
            status: true,
            msg: `O'quvchilar ${place}ga qo'shildi`
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
                    <img
                        onClick={() => navigation(`../students/profile/${item.id}`)}
                        src={defaultUserImg}
                        alt=""
                    />
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
                        {item.debt}
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
        return searched?.map(item =>
            <tr>
                <td>
                    <img
                        src={defaultUserImg}
                        alt=""
                    />
                </td>
                <td>{item?.user?.name}</td>
                <td>{item?.user?.surname}</td>
                <td>
                    {/*{*/}
                    {/*    item?.subject?.map(i =>*/}
                    {/*        <div className={cls.addModal__subject}>*/}
                    {/*            {i?.name?.slice(0, 16)}*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*}*/}
                    {
                        item?.subject.length ?
                            <div className={cls.addModal__subject}>{item?.subject[0]?.name}</div> : null
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
                                    disabled={select.length === 0}
                                    type={select.length === 0 ? "disabled" : ""}
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
                        options={userSystem?.name === "center" ? teachers : schoolTeachers}
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
                    onChange={(e) => setSearchValue(e.target.value)}
                    defaultValue={searchValue}
                />
                <div className={cls.addModal__container}>
                    <Table>
                        <thead>
                        <tr>
                            <th/>
                            <th>Ism</th>
                            <th>Familya</th>
                            {
                                system.name === "center" ? <th>Fanlar</th> : <th>Sinf</th>
                            }

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

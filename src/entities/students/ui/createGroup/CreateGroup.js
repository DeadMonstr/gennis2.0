import cls from "./CreateGroup.module.sass";

import {Button} from "shared/ui/button";

import {Select} from "shared/ui/select";
import {Radio} from "shared/ui/radio";

import {Table} from "shared/ui/table";
import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import React, {memo, useCallback, useEffect, useState} from "react";
import {
    getCurseLevelData,
    getCurseTypesData,
    getFilteredErrors, getFilteredStatus,
    getFilteredStudents,
    getFilteredTeachers,
    getNewStudentsData
} from "../../model/selector/studentsSelector";
import {useDispatch, useSelector} from "react-redux";
import {Teachers} from "../../../teachers";
import {fetchFilteredStudents, fetchNewStudentsData} from "../../model/studentsThunk";
import {Form} from "shared/ui/form";
import {Textarea} from "shared/ui/textArea";
import {SearchInput} from "shared/ui/searchInput";
import {fetchTeachersData} from "../../../teachers";
import {getTeachers} from "../../../teachers/";
import {AnimatedMulti, location} from "../../../../features/workerSelect";
import {EditableCard} from "../../../../shared/ui/editableCard";
import {getUserBranchId} from "pages/profilePage/model/selector/userProfileSelector";
import {API_URL, headers, useHttp} from "shared/api/base";
import {getRoomsData} from "../../../rooms/model/selectors/roomsSelectors";
import {fetchRoomsData} from "../../../rooms/model/roomsThunk";
import {useForm} from "react-hook-form";
import {
    getCurseLevel,
    getCurseTypes,
    getFilteredStudentsData,
    getFilteredStudentsStatus
} from "../../model/studentsSlice";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";
import {DefaultPageLoader} from "../../../../shared/ui/defaultLoader";
import {MiniLoader} from "../../../../shared/ui/miniLoader";
import {fetchSubjectsAndLanguages} from "../../../../pages/registerPage/model/registerThunk";

const branches = [
    {name: "chirhciq"},
    {name: "gazalkent"},
    {name: "xo'jakent"},
]
const peoples = [
    {name: "studying", label: "Students"},
    {name: "teachers", label: "Teachers"},
]
export const CreateGroup = memo(() => {

    const {request} = useHttp()
    const {register, handleSubmit} = useForm()
    const userBranchId = useSelector(getUserBranchId)
    const roomsData = useSelector(getRoomsData);
    const filteredStudents = useSelector(getFilteredStudents)
    const filteredTeachers = useSelector(getFilteredTeachers)
    const filteredErrors = useSelector(getFilteredErrors)
    const filteredStatus = useSelector(getFilteredStatus)
    const curseTypesData = useSelector(getCurseTypesData)
    const curseLevelData = useSelector(getCurseLevelData)
    const languages = useSelector(state => state.registerUser.languages)
    const [weekDays, setWeekDays] = useState()
    const [selectedData, setSelectedData] = useState()
    const [selectedStudents, setSelectedStudents] = useState([])
    const [selectedTeachers, setSelectedTeachers] = useState([])
    const [selectedCurseType, setSelectedCurseType] = useState(null)
    const [selectedCurseLevel, setSelectedCurseLevel] = useState(null)
    const [selectedCurseLanguage, setSelectedCurseLanguage] = useState(null)
    const [selectedSubjectId, setSelectedSubjectId] = useState(null)
    const [selectTime, setSelectTime] = useState([])
    const [timeCounter, setTimeCounter] = useState([1])

    console.log(curseLevelData, "curseLevelData")
    // console.log(selectedTeachers.length, "selectedTeachers length")

    const onSubmitTimeTable = (data) => {
        let arr = Object.entries(data).sort()
        const res = timeCounter.map((item, index) =>
            ({
                end_time: arr[index][1],
                start_time: arr[arr.length / 2 + index][1],
                room: +arr[arr.length / 4 + index][1],
                week: +arr[arr.length - (timeCounter.length - index)][1],
                branch: 2
            })
        )
        console.log(res)
        dispatch(getFilteredStudentsStatus())
        setSelectTime(res)
        request(`${API_URL}Students/api/filter_students_subject/2/`, "POST", JSON.stringify(res), headers())
            .then(res => {
                console.log(res, "timeTable")
                dispatch(getFilteredStudentsData(res))
                setActiveModal(false)
            })
            .catch(err => console.log(err))
    }

    const onSubmitCreateGroup = (data) => {
        const res = {
            ...data,
            students: selectedStudents,
            teacher: selectedTeachers,
            branch: userBranchId,
            course_types: selectedCurseType,
            level: selectedCurseLevel ?? 0,
            subject: selectedSubjectId,
            time_table: selectTime,
            language: selectedCurseLanguage,
            system: 1
        }
        console.log(res)
        request(`${API_URL}Group/groups/create/`, "POST", JSON.stringify(res), headers())
            .then(res => console.log(res, "group create"))
            .catch(err => console.log(err))
    }

    const onSelectStudentId = (id, subjectId) => {
        console.log(subjectId, "subjectId")
        let newId = id
        if (!selectedSubjectId) {
            setSelectedSubjectId(subjectId)
        } else {
            if (selectedSubjectId !== subjectId) {
                console.log(true, "subjectId change")
                setSelectedSubjectId(subjectId)
                return null
            }
        }
        if (!selectedStudents.length) {
            console.log(true)
            setSelectedStudents([newId])
        } else {
            console.log(false)
            selectedStudents.filter(item => {
                if (item !== newId) {
                    console.log("add")
                    if (newId) {
                        setSelectedStudents(arr => [...arr, newId])
                    }
                } else {
                    console.log("filter")
                    setSelectedStudents(selectedStudents.filter(item => item !== newId))
                    newId = null
                }
            })
        }
    }

    useEffect(() => {
        if (selectedSubjectId) {
            request(`${API_URL}Subjects/level-for-subject/${selectedSubjectId}/`, "GET", null, headers())
                .then(res => {
                    console.log(res)
                    dispatch(getCurseLevel(res))
                })
                .catch(err => console.log(err))
        }
    }, [selectedSubjectId])

    console.log(selectedStudents, "selectedStudents")
    console.log(selectedSubjectId, "selectedSubjectId")

    const newStudents = useSelector(getNewStudentsData)
    const teachers = useSelector(getTeachers)
    const [active, setActive] = useState(false)
    const [activeModal, setActiveModal] = useState(false)
    const [selected, setSelected] = useState([])
    const [selectedRadio, setSelectedRadio] = useState(peoples[0].name);
    const [activeBox, setActiveBox] = useState(false)

    const [createGroup, setCreateGroup] = useState(false)

    const [modalAddGroup, setModalAddGroup] = useState(false)

    const dispatch = useDispatch()
    const handleChange = (value) => {
        setSelectedRadio(value);
    };


    // useEffect(() => {
    //     dispatch(fetchNewStudentsData())
    // }, [])

    // useEffect(() => {
    //     dispatch(fetchTeachersData())
    // }, [])

    useEffect(() => {
        dispatch(fetchRoomsData());
        // dispatch(fetchFilteredStudents(userBranchId))
        request(`${API_URL}TimeTable/week_days`, "GET", null, headers())
            .then(res => {
                console.log(res, "days")
                setWeekDays(res.map(item => ({...item, name: item.name_uz})))
            })
            .catch(err => console.log(err))
        request(`${API_URL}Group/course_types/`, "GET", null, headers())
            .then(res => {
                console.log(res, "types")
                dispatch(getCurseTypes(res))
            })
            .catch(err => console.log(err))
        dispatch(fetchSubjectsAndLanguages())
    }, [userBranchId])

    const renterGroups = (data) => {
        return data.map((item, index) => {
            return (
                <>
                    <tbody>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.user.surname} {item.user.name}</td>
                        <td>{item.user.age}</td>
                    </tr>
                    </tbody>
                </>
            )
        })
    }
    const renderStudents = () => {
        return filteredStudents[selectedData]?.students.map((item, i) => (
            <tr>
                <td>{i + 1}</td>
                <td>{item.user.surname} {item.user.name}</td>
                <td>{item.user.age}</td>
                <td>{item.user.registered_date}</td>
                <td>{item.user.comment}</td>
                <td>{item.extra_info.status ? <div className={cls.studentBoxTable__inner}>
                    <div className={cls.status}>
                        <div className={cls.status__inner}/>
                    </div>
                    <Input
                        type={"checkbox"}
                        extraClassName={cls.studentBoxTable__input}
                        onChange={() => onSelectStudentId(item.id, filteredStudents[selectedData]?.id)}
                    />
                </div> : null}</td>
            </tr>
        ));
    };

    const renderStudent = () => {
        return filteredStudents.map((item, index) => {
            return (
                <div
                    onClick={() => {
                        setActiveBox(!activeBox)
                        setSelectedData(index)
                    }} className={cls.table__box}>
                    <h2>{item.name ?? "Ingliz tili"}</h2>
                    <Table extraClass={cls.table__inner}>
                        <thead>
                        <tr>
                            <th>№</th>
                            <th>Full name</th>
                            <th>Age</th>
                        </tr>
                        </thead>
                        {renterGroups(item.students)}
                    </Table>
                </div>
            )
        })
    }

    const onSelectTeacherId = useCallback((id) => {
        setSelectedTeachers([id])
        // setSelectedTeachers(prev => {
        //     if (!prev.length) {
        //         return [id]
        //     } else {
        //         if (prev.filter(item => item === id)[0]) {
        //             return [...prev.filter(item => item !== id)]
        //         } else {
        //             return [...prev, id]
        //         }
        //     }
        // })
    }, [selectedTeachers])

    console.log(timeCounter, "timeCounter")

    return (
        <>
            <div className={cls.mainContainer}>
                <div className={cls.mainContainer_buttonPanelBox}>
                    <div className={cls.mainContainer_buttonPanelBox_leftCreateButton}>
                        <Button onClick={() => setCreateGroup(!createGroup)}
                                type={selectedRadio === "studying" ? modalAddGroup ? "filter" : "btn" : "filter"}
                                extraClass={cls.extraCutClass}>Create group</Button>
                        <Button onClick={() => setModalAddGroup(!modalAddGroup)} type={modalAddGroup ? "btn" : "filter"}
                                extraClass={cls.noneBackground}>Add group</Button>
                    </div>
                    {branches.length >= 1 ? <Select options={branches} onChangeOption={() => setSelected}
                                                    defaultValue={branches[0].name}/> : null}
                </div>
                <div className={cls.mainContainer_filterPanelBox}>
                    <Button
                        status={"filter"}
                        extraClass={cls.extraCutClassFilter}
                        onClick={() => setActive(!active)}
                        type={"filter"}
                    >
                        Filter
                    </Button>
                    <Button onClick={() => setActiveModal(!activeModal)} status={"timeTable"} type={"login"}>Time
                        Table</Button>
                </div>
                <div className={cls.mainContainer_filterPanelBox_leftFilterRadioGroupBox}>
                    {peoples.map((item, id) => (
                        <Radio
                            key={id}
                            onChange={() => handleChange(item.name)}
                            checked={selectedRadio === item.name}
                            extraClasses={selectedRadio === item.name ? cls.activeFilter : null}
                        >
                            {item.label}
                        </Radio>
                    ))}
                </div>
            </div>
            {
                filteredStatus === "loading" ? <DefaultPageLoader/> : <>
                    <div className={cls.mainError}>
                        {
                            filteredErrors?.rooms && filteredErrors.rooms[0] ? <h1>{filteredErrors.rooms[0]}</h1> : null
                        }
                    </div>
                    <div className={cls.mainContainer}>
                        {
                            selectedRadio === "studying" ? <div className={cls.table}>
                                {renderStudent()}
                            </div> : <Teachers
                                data={filteredTeachers}
                                setSelect={onSelectTeacherId}
                                select={selectedTeachers}
                            />
                        }
                    </div>
                </>
            }

            <Modal setActive={setActiveBox} active={activeBox}>
                <div className={cls.studentBox}>
                    <div className={cls.studentBoxHeader}>
                        <h2>Ingliz Tili</h2>
                        <SearchInput/>
                    </div>
                </div>

                <div className={cls.studentBoxTable}>
                    <Table>
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Ism Familiya</th>
                            <th>Yosh</th>
                            <th>Reg.sana</th>
                            <th>Koment</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {renderStudents()}
                        </tbody>
                    </Table>
                </div>
            </Modal>
            <Modal
                setActive={setActiveModal}
                active={activeModal}
            >
                <Form
                    typeSubmit={""}
                    extraClassname={cls.timeTable}
                    onSubmit={handleSubmit(onSubmitTimeTable)}
                >
                    <h1 className={cls.timeTableHeader}>
                        Vaqti Kiritish
                    </h1>
                    <div className={cls.timeTable__scroll}>
                        {
                            timeCounter.map((item, index) => {
                                console.log(item)
                                const days = `week${item}`
                                const room = `room${item}`
                                const start_time = `start_time${item}`
                                const end_time = `end_time${item}`

                                return (
                                    <div className={cls.timeTableForm}>
                                        <Select
                                            title={"Kunlar"}
                                            options={weekDays}
                                            // onChangeOption={setSelectDay}
                                            register={register}
                                            name={days}
                                            defaultValue={selectTime[index]?.week}
                                        />
                                        <Select
                                            title={"Honalar"}
                                            options={roomsData}
                                            // onChangeOption={setSelectRoom}
                                            register={register}
                                            name={room}
                                            defaultValue={selectTime[index]?.room}
                                        />
                                        <Input
                                            type={"time"}
                                            placeholder={"Boshlanish vaqti"}
                                            register={register}
                                            name={start_time}
                                        />
                                        <Input
                                            type={"time"}
                                            placeholder={"Tugash vaqti"}
                                            register={register}
                                            name={end_time}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div
                        className={cls.timeTableAddPlus}
                        onClick={() => setTimeCounter(prev => [...prev, (prev[prev.length - 1] + 1)])}
                    >
                        <i className={"fa fa-plus"}/>
                    </div>
                    <div className={cls.timeTableFooterBtn}>
                        {
                            filteredStatus === "loading" ? <MiniLoader/> : <Button>Tekshirmoq</Button>
                        }
                    </div>
                </Form>
            </Modal>
            <Modal setActive={setCreateGroup} active={createGroup}>
                <div className={cls.createGroup}>
                    <div className={cls.createGroupTitle}>
                        <h2>Gruppa ochish</h2>
                    </div>
                    <div className={cls.createGroupForm}>
                        <Form onSubmit={handleSubmit(onSubmitCreateGroup)}>
                            <Input
                                extraClassName={cls.createGroupFormItem}
                                placeholder={"Gruppa nomi"}
                                register={register}
                                name={"name"}
                            />
                            <Select
                                extraClassName={cls.createGroupFormItem}
                                title={"Kurs turi"}
                                options={curseTypesData}
                                onChangeOption={setSelectedCurseType}
                            />
                            <Select
                                extraClassName={cls.createGroupFormItem}
                                title={"Kurs darajasi"}
                                options={curseLevelData}
                                onChangeOption={setSelectedCurseLevel}
                            />
                            <Select
                                extraClassName={cls.createGroupFormItem}
                                title={"Kurs tili"}
                                options={languages}
                                onChangeOption={setSelectedCurseLanguage}
                            />
                            <Input
                                extraClassName={cls.createGroupFormItem}
                                placeholder={"Gruppa narxi"}
                                register={register}
                                name={"price"}
                                type={"number"}
                            />
                            <Input
                                extraClassName={cls.createGroupFormItem}
                                placeholder={"O'qituvchi ulushi"}
                                register={register}
                                name={"teacher_salary"}
                                type={"number"}
                            />
                        </Form>
                    </div>
                </div>
            </Modal>
            <Modal setActive={setModalAddGroup} active={modalAddGroup}>
                <div className={cls.addModal}>
                    <h2>Add Group</h2>
                    <Select title={"Groups"}></Select>
                    <Button>Tekshirmoq</Button>
                </div>
            </Modal>
        </>
    )
})


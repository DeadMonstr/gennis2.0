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
    getFilteredErrors,
    getFilteredStatus,
    getFilteredStudents,
    getFilteredTeachers,
    getNewStudentsData
} from "entities/students/model/selector/studentsSelector";
import {useDispatch, useSelector} from "react-redux";
import {Teachers} from "../../../../entities/teachers";
import {fetchFilteredStudents, fetchNewStudentsData} from "../../../../entities/students/model/studentsThunk";
import {Form} from "shared/ui/form";
import {Textarea} from "shared/ui/textArea";
import {SearchInput} from "shared/ui/searchInput";
import {fetchTeachersData} from "../../../../entities/teachers";
import {getTeachers} from "../../../../entities/teachers";
import {AnimatedMulti, location} from "../../../../features/workerSelect";
import {EditableCard} from "../../../../shared/ui/editableCard";
import {getUserBranchId} from "pages/profilePage/model/selector/userProfileSelector";
import {API_URL, headers, useHttp} from "shared/api/base";
import {getRoomsData} from "../../../../entities/rooms/model/selectors/roomsSelectors";
import {fetchRoomsData} from "../../../../entities/rooms/model/roomsThunk";
import {useForm} from "react-hook-form";
import {
    getCurseLevel,
    getCurseTypes,
    getFilteredStudentsData,
    getFilteredStudentsStatus
} from "../../../../entities/students/model/studentsSlice";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";
import {DefaultPageLoader} from "../../../../shared/ui/defaultLoader";
import {MiniLoader} from "../../../../shared/ui/miniLoader";
import {fetchSubjectsAndLanguages} from "../../../registerPage/model/registerThunk";

import cls from "./groupCreatePage.module.sass";
import {
    GroupCreateForm,
    GroupAddForm, GroupTimeTableForm
} from "features/group";


const branches = [
    {name: "chirhciq"},
    {name: "gazalkent"},
    {name: "xo'jakent"},
]
const peoples = [
    {name: "studying", label: "Students"},
    {name: "teachers", label: "Teachers"},
]
export const GroupCreatePage = () => {

    const {request} = useHttp()
    const {register, handleSubmit} = useForm()
    const userBranchId = useSelector(getUserBranchId)
    const roomsData = useSelector(getRoomsData);
    const filteredStudents = useSelector(getFilteredStudents)
    const filteredTeachers = useSelector(getFilteredTeachers)
    const filteredErrors = useSelector(getFilteredErrors)
    const filteredStatus = useSelector(getFilteredStatus)

    const [weekDays, setWeekDays] = useState()
    const [selectedData, setSelectedData] = useState()
    const [selectedStudents, setSelectedStudents] = useState([])
    const [selectedTeachers, setSelectedTeachers] = useState([])
    const [selectedSubjectId, setSelectedSubjectId] = useState(null)
    const [selectTime, setSelectTime] = useState([])

    const [activeModal, setActiveModal] = useState("")





    const onSelectStudentId = (id, subjectId) => {
        if (!selectedSubjectId) {
            setSelectedSubjectId(subjectId)
        } else {
            if (selectedSubjectId !== subjectId) {
                setSelectedSubjectId(subjectId)
                return null
            }
        }
        setSelectedStudents(prev => {
            console.log(prev, "prev")
            console.log(id, "id")
            if (prev.filter(item => item === id)[0]){
                return prev.filter(item => item !== id)
            } else return [...prev, id]
        })
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

    const [active, setActive] = useState(false)
    // const [activeModal, setActiveModal] = useState(false)
    const [selected, setSelected] = useState([])
    const [selectedRadio, setSelectedRadio] = useState(peoples[0].name);
    const [activeBox, setActiveBox] = useState(false)


    const [modalAddGroup, setModalAddGroup] = useState(false)

    const dispatch = useDispatch()
    const handleChange = (value) => {
        setSelectedRadio(value);
    };

    useEffect(() => {
        dispatch(fetchRoomsData());
        // dispatch(fetchFilteredStudents(userBranchId))
        request(`${API_URL}TimeTable/week_days`, "GET", null, headers())
            .then(res => {
                // console.log(res, "days")
                setWeekDays(res.map(item => ({...item, name: item.name_uz})))
            })
            .catch(err => console.log(err))
        request(`${API_URL}Group/course_types/`, "GET", null, headers())
            .then(res => {
                // console.log(res, "types")
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
            if (!item.subject_status) return null
            return (
                <div
                    onClick={() => {
                        setActiveBox(!activeBox)
                        setSelectedData(index)
                    }}
                    className={cls.table__box}
                >
                    <h2 className={cls.table__title}>{item.name ?? "Ingliz tili"}</h2>
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
    }, [selectedTeachers])

    return (
        <div>
            <div className={cls.mainContainer}>
                <div className={cls.mainContainer_buttonPanelBox}>
                    <div className={cls.mainContainer_buttonPanelBox_leftCreateButton}>
                        <Button
                            onClick={() => setActiveModal("groupCreate")}
                            type={selectedRadio === "studying" ?
                                activeModal === "groupAdd" ? "filter" : "btn" : "filter"}
                            extraClass={cls.extraCutClass}
                        >
                            Create group
                        </Button>
                        <Button
                            onClick={() => setActiveModal("groupAdd")}
                            type={activeModal === "groupAdd" ? "btn" : "filter"}
                            extraClass={cls.noneBackground}
                        >
                            Add group
                        </Button>
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
                    <Button
                        onClick={() => setActiveModal("timeTable")}
                        status={"timeTable"}
                        type={"login"}
                    >
                        Time Table
                    </Button>
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
                <div className={cls.wrapper}>
                    <div className={cls.studentBox}>
                        <div className={cls.studentBoxHeader}>
                            <h1>{filteredStudents[selectedData]?.name}</h1>
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
                </div>
            </Modal>

            <GroupTimeTableForm
                setActive={setActiveModal}
                active={activeModal === "timeTable"}
                selectTime={selectTime}
                setSelectTime={setSelectTime}
                weekDays={weekDays}
            />


            <GroupAddForm
                setActive={setActiveModal}
                active={activeModal === "groupAdd"}
            />

            <GroupCreateForm
                setActive={setActiveModal}
                active={activeModal === "groupCreate"}
                selectedStudents={selectedStudents}
                selectedTeachers={selectedTeachers}
                selectedSubjectId={selectedSubjectId}
                selectedTime={selectTime}
            />
        </div>
    )
}


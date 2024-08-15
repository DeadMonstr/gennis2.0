import cls from "./CreateGroup.module.sass";

import {Button} from "shared/ui/button";

import {Select} from "shared/ui/select";
import {Radio} from "shared/ui/radio";

import {Table} from "shared/ui/table";
import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import React, {memo, useEffect, useState} from "react";
import {getNewStudentsData} from "../../model/selector/studentsSelector";
import {useDispatch, useSelector} from "react-redux";
import {Teachers} from "../../../teachers";
import {fetchNewStudentsData} from "../../model/studentsThunk";
import {Form} from "shared/ui/form";
import {Textarea} from "shared/ui/textArea";
import {SearchInput} from "shared/ui/searchInput";
import {fetchTeachersData} from "../../../teachers";
import {getTeachers} from "../../../teachers/";

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


    useEffect(() => {
        dispatch(fetchNewStudentsData())
    }, [])

    useEffect(() => {
        dispatch(fetchTeachersData())
    }, [])

    console.log(selectedRadio, "radio")
    const renterGroups = () => {
        return newStudents.map((item) => {
            return (
                <>
                    <tbody>
                    <tr>
                        <td></td>
                        <td>{item.user.surname} {item.user.name}</td>
                        <td>{item.user.age}</td>
                    </tr>
                    </tbody>
                </>
            )
        })
    }
    const renderStudents = () => {
        return newStudents.map((item, i) => (
            <tr>
                <td>{i + 1}</td>
                <td>{item.user.surname} {item.user.name}</td>
                <td>{item.user.age}</td>
                <td>{item.user.registered_date}</td>
                <td>{item.user.comment}</td>
                <td>{item.group}</td>

            </tr>
        ));
    };
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
            <div className={cls.mainContainer}>
                {selectedRadio === "studying" ? <div className={cls.table}>
                    {newStudents.map(item => {
                        return (
                            <>
                                <div onClick={() => setActiveBox(!activeBox)} className={cls.table__box}>
                                    <h2>{item.subject.name}</h2>
                                    <Table>
                                        <thead>
                                        <tr>
                                            <th>№</th>
                                            <th>Full name</th>
                                            <th>Age</th>
                                        </tr>
                                        </thead>
                                        {renterGroups()}
                                    </Table>
                                </div>

                            </>

                        )
                    })}
                </div> : <Teachers data={teachers}/>}
            </div>


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
            <Modal setActive={setActiveModal} active={activeModal}>
                <div className={cls.timeTable}>
                    <h1 className={cls.timeTableHeader}>
                        Vaqti Kiritish
                    </h1>
                    <div className={cls.timeTableForm}>
                        <Select title={"Kunlar"}/>
                        <Select title={"Honalar"}/>
                        <Input placeholder={"Boshlanish vaqti"}/>
                        <Input placeholder={"Tugash vaqti"}/>
                    </div>
                    <div className={cls.timeTableAddPlus}>
                        <i className={"fa fa-plus"}/>
                    </div>
                    <div className={cls.timeTableFooterBtn}>
                        <Button>Tekshirmoq</Button>
                    </div>
                </div>
            </Modal>
            <Modal setActive={setCreateGroup} active={createGroup}>
                <div className={cls.createGroup}>
                    <div className={cls.createGroupTitle}>
                        <h2>Gruppa ochish</h2>
                    </div>
                    <div className={cls.createGroupForm}>
                        <Form>
                            <Select title={"Fanlar"}/>
                            <Input extraClassName={cls.createGroupFormItem} placeholder={"Gruppa nomi"}/>
                            <Select extraClassName={cls.createGroupFormItem} title={"Kurs turi"}/>
                            <Input extraClassName={cls.createGroupFormItem} placeholder={"Gruppa nomi"}/>
                            <Input extraClassName={cls.createGroupFormItem} placeholder={"O'qituvchi ulushi"}/>
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
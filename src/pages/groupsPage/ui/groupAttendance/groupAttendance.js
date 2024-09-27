import {useDispatch, useSelector} from "react-redux";
import {getAttendance, getAttended} from "../../../profilePage/model/selector/groupAttendanceSelector";
import cls from "./groupAttendance.module.sass";
import {Select} from "shared/ui/select";
import {Table} from "shared/ui/table";
import React, {useCallback, useEffect, useState} from "react";
import {Button} from "shared/ui/button";
import {Modal} from "shared/ui/modal";
import {getAttendanceThunk} from "../../../../entities/groups/model/slice/groupsAttendanceThunk";
import {useParams} from "react-router";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";
import {months} from "../../../calendarPage/ui/calendarDetail";
import {value} from "lodash/seq";
import {onAddAlertOptions} from "../../../../features/alert/model/slice/alertSlice";

export const GroupAttendance = () => {


    const [attended, setAttended] = useState(false)
    const [activeModal, setActiveModal] = useState(false)


    const renderTable = () => {
        // return studentAttendance?.map((item, i) => (
        //     <tr>
        //         <td>{i + 1}</td>
        //         <td>{item.name} {item.surname}</td>
        //         <td/>
        //         <td>
        //             <div className={cls.attendance_icon}>
        //                 <i onClick={() => onClick(item)} className={`${cls.attendance_check} fa fa-check`}></i>
        //                 <i className={`${cls.attendance_times} fa fa-times`}></i>
        //             </div>
        //         </td>
        //     </tr>
        // ))
    }

    const render = renderTable()
    return (
        <div className={cls.attendance}>
            <div className={cls.attendance_header}>
                <h2>Davomat </h2>
                <div className={cls.attendance_end}>
                    <Select/>
                    <div onClick={() => setActiveModal(!activeModal)} className={`${cls.attendance_plus} fa fa-plus`}/>
                </div>
            </div>

            <div>
                <Table>
                    <thead>
                    <tr>
                        <th/>
                        <th>Ism Familya</th>
                        {/*{*/}
                        {/*    daysData.map(item => {*/}
                        {/*        return (*/}
                        {/*            <th>*/}
                        {/*                <div className={cls.days}>*/}
                        {/*                    <h2>{item.number}</h2>*/}
                        {/*                </div>*/}
                        {/*            </th>*/}
                        {/*        )*/}
                        {/*    })*/}
                        {/*}*/}
                    </tr>
                    </thead>
                    <tbody>
                    {render}
                    </tbody>
                </Table>
            </div>

            <Attendance active={activeModal} setActive={setActiveModal}/>
        </div>
    );
};


export const Attendance = ({active, setActive}) => {

    const {id} = useParams()
    const dispatch = useDispatch()


    const {request} = useHttp()
    const [attendendModal, setAttendendModal] = useState(false)

    const [students, setStudents] = useState([])

    useEffect(() => {
        dispatch(getAttendanceThunk(id))
    }, [])

    const groupId = id


    const studentAttendance = useSelector(getAttendance)


    // useEffect(() => {
    //     if (studentAttendance) {
    //
    //         setStudents(studentAttendance?.students)
    //
    //     }
    // }, [studentAttendance])

    const [day, setDay] = useState(null)

    const onChangeDate = (data) => {
        setDay(data)

        const res = {
            date: `${studentAttendance.month_number}-${data}`,
        }

        // console.log(res , groupId)
        request(`${API_URL}Attendance/school-to-attend-days/${groupId}/`, "POST", JSON.stringify(res), headers())
            .then(res => {
                console.log(res)
                setStudents(res.students)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const onClickYes = (id) => {
        setStudents(students => {
            return students.map(item => {

                if (item.id === id) {

                    return {...item, attended: true, typeChecked: "yes", reason: "", scores: {},}
                }
                return item
            })

        })
    }

    const renderTable = () => {
        return students?.map((item, i) => {
            if (!item.attended) {
                return (
                    <tr>
                        <td>{i + 1}</td>
                        <td>{item?.name} {item?.surname}</td>
                        <td>
                            <div className={cls.attendance_icon}>
                                <i onClick={() => onClickYes(item?.id)}
                                   className={`${cls.attendance_check} fa fa-check`}></i>
                                <i className={`${cls.attendance_times} fa fa-times`}></i>
                            </div>
                        </td>
                    </tr>
                )
            }
        })
    }

    const returnStudent = (id) => {
        setStudents(students => {
            return students.map(item => {
                if (item.id === id) {

                    return {...item, attended: false}
                }
                return item
            })
        })
    }
    const renderCheckedStudents = useCallback(() => {

        if (students?.length >= 0) {


            return students.map(item => {
                if (item.attended) {
                    return (
                        <div className={cls.checkedStudents__item} onClick={() => returnStudent(item.id)}>
                            <div className={cls.infoStudent}>
                                <div className={cls.info}>
                                    <span>{item.name}</span>
                                    <span>{item.surname}</span>
                                </div>

                                <div className={cls.typeChecked}>
                                    {

                                        item.typeChecked === "yes"
                                            ?
                                            <i className={`fas fa-plus-circle ${cls.green} `}/>
                                            :
                                            <i className={`fas fa-minus-circle ${cls.red}`}/>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        } else {
            return <h1>Studentlar yoq</h1>
        }
    }, [students])

    const updateStatusStudent = ({id, requestType, requestMsg}) => {
        setStudents(students => {
            return students.map(item => {
                if (id === item.id) {
                    return {...item, requestType: requestType, requestMsg: requestMsg}
                }
                return item
            })
        })
        console.log(id , requestType , requestMsg)
    }

    const onCheckedStudents = (e) => {
        e.preventDefault()

        students.map(student => {
            if (student.attended) {
                const data = {

                    date: `${studentAttendance.month_number}-${day}`,
                    students: [{...student, status: true}],
                    group: Number(groupId),
                    teacher: studentAttendance.teachers
                    // teacherId
                }
                const studentId = data?.students?.map(item => item.id)

                updateStatusStudent({id: student.id, requestType: "loading"})
                request(`${API_URL}Attendance/to_attend_school/${studentId}/`, "POST", JSON.stringify(data), headers())
                    .then(res => {
                        if (res.success) {
                            // removeSuccessStudent(res.student_id)
                            setStudents(students => students.filter(item => item.id !== res.student_id))
                            // dispatch(removeCheckedStudent({id:res.student_id}))
                            setAttendendModal(false)

                            // setTypeMsg("success")
                            // setMsg(res.msg)
                            // setActiveMessage(true)
                        }
                        if (res.error) {
                            setAttendendModal(false)

                            updateStatusStudent({id: res.student_id, requestType: res.requestType, requestMsg: res.msg})
                        }

                    })
                    .catch(err => {
                        console.log(err, "err")
                    })
            }
        })
    }


    const render = renderTable()
    const renderCheckedStudent = renderCheckedStudents()
    return (
        <>
            <Modal active={active} setActive={setActive}>

                <div className={cls.attendanceModal}>

                    <h2>{studentAttendance?.month}</h2>
                    <div className={cls.attendanceModal_header}>

                        {/*<Select extraClass={cls.select} options={studentAttendance?.map(item => item?.month)}/>*/}
                        <Select extraClass={cls.select} options={studentAttendance?.weekdays}
                                onChangeOption={onChangeDate}/>
                        <Button onClick={() => setAttendendModal(true)}>
                            Davomat qilinganlar
                        </Button>
                    </div>

                </div>
                <div>
                    <Table>
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Ism Familiya</th>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                        {render}
                        </tbody>
                    </Table>
                </div>
            </Modal>
            <Modal active={attendendModal} setActive={setAttendendModal}>
                <h2 className={cls.attended_title}>Davomat qilinganlar</h2>

                <div className={cls.attendedModal}>
                    <div className="checkedStudents">
                        {students?.filter(item => item?.attended)?.length === 0 ?
                            <h1>Studentlar davomat qilinmagan</h1> : null}
                    </div>
                    {renderCheckedStudent}
                    {students?.filter(item => item?.attended)?.length === 0 ? null :
                        <Button type={day ? "" : "disabled"} onClick={onCheckedStudents}>Kritish</Button>}
                </div>
            </Modal>
        </>
    )
}



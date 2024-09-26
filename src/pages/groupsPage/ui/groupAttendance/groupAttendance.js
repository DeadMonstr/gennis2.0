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

export const GroupAttendance = () => {


    const [attended, setAttended] = useState(false)
    const [activeModal, setActiveModal] = useState(false)


    const onClick = (data) => {
        const id = data.id

        console.log(data, id, "id")
    }

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

    const [item, setItem] = useState([])

    useEffect(() => {
        dispatch(getAttendanceThunk(id))
    }, [])


    const studentAttendance = useSelector(getAttendance)

    useEffect(() => {
        if (studentAttendance) {

            setItem(studentAttendance?.students)

        }
    }, [studentAttendance])

    console.log(studentAttendance)

    console.log(item, "her")
    const [day, setDay] = useState(null)
    const onClickYes = (id) => {
        setItem(item => {
            return item.map(item => {

                if (item.id === id) {

                    return {...item, attended: true, typeChecked: "yes", reason: "", date: {}, scores: {}}
                }
                return item
            })

        })
        console.log(item)
    }

    const renderTable = () => {
        return studentAttendance?.students?.map((item, i) => (
            <tr>
                <td>{i + 1}</td>
                <td>{item?.name} {item?.surname}</td>
                <td>
                    <div className={cls.attendance_icon}>
                        <i onClick={() => onClickYes(item?.id)} className={`${cls.attendance_check} fa fa-check`}></i>
                        <i className={`${cls.attendance_times} fa fa-times`}></i>
                    </div>
                </td>
            </tr>
        ))
    }



    const renderCheckedStudents = useCallback(() => {

        if (item?.length > 0) {
            // eslint-disable-next-line array-callback-return
            return item.map(item => {
                if (item.attended) {
                    return (
                        <div className="checkedStudents__item">
                            <div className="infoStudent">
                                <div className="info">
                                    <span>{item.name}</span>
                                    <span>{item.surname}</span>
                                </div>

                                <div className="typeChecked">
                                    {

                                        item.typeChecked === "yes"
                                            ?
                                            <i className="fas fa-plus-circle green"/>
                                            :
                                            <i className="fas fa-minus-circle red"/>
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
    }, [item])


    const render = renderTable()
    return (
        <Modal active={active} setActive={setActive}>

            <div className={cls.attendanceModal}>

                <h2>{studentAttendance?.month}</h2>
                <div className={cls.attendanceModal_header}>

                    {/*<Select extraClass={cls.select} options={studentAttendance?.map(item => item?.month)}/>*/}
                    <Select extraClass={cls.select} options={studentAttendance?.weekdays} onChangeOption={setDay}/>
                    <Button>
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
    )
}


const attendendStudents = () => {
    return(
        <Modal>

        </Modal>
    )
}
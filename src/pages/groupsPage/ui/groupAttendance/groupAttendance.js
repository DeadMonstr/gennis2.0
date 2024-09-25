import {useDispatch, useSelector} from "react-redux";
import {getAttendance, getAttended} from "../../../profilePage/model/selector/groupAttendanceSelector";
import cls from "./groupAttendance.module.sass";
import {Select} from "shared/ui/select";
import {Table} from "shared/ui/table";
import React, {useEffect, useState} from "react";
import {Button} from "shared/ui/button";
import {Modal} from "shared/ui/modal";
import {getAttendanceThunk} from "../../../../entities/groups/model/slice/groupsAttendanceThunk";

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

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAttendanceThunk())
    }, [])

    const studentAttendance = useSelector(getAttendance)
    console.log(studentAttendance)

    const [day , setDay] = useState(null)

    console.log(day)
    return (
        <Modal active={active} setActive={setActive}>

            <div className={cls.attendanceModal}>

                <h2>{studentAttendance.month}</h2>
                <div className={cls.attendanceModal_header}>
                    {/*<Select extraClass={cls.select} options={studentAttendance?.map(item => item?.month)}/>*/}
                    <Select extraClass={cls.select} options={studentAttendance.weekdays} onChangeOption={setDay}/>
                </div>
            </div>
        </Modal>
    )
}
import {useSelector} from "react-redux";
import {getAttendance, getAttended} from "../../../profilePage/model/selector/groupAttendanceSelector";
import cls from "./groupAttendance.module.sass";
import {Select} from "shared/ui/select";
import {Table} from "shared/ui/table";
import React, {useState} from "react";
import {Button} from "shared/ui/button";
import {Modal} from "shared/ui/modal";

export const GroupAttendance = () => {
    const studentAttendance = useSelector(getAttendance)
    const studentAttended = useSelector(getAttended)

    const [attended, setAttended] = useState(false)
    const onClick = (data) => {
        const id = data.id

        console.log(data, id, "id")
    }

    const renderTable = () => {
        return studentAttendance?.map((item, i) => (
            <tr>
                <td>{i + 1}</td>
                <td>{item.name} {item.surname}</td>
                <td/>
                <td>
                    <div className={cls.attendance_icon}>
                        <i onClick={() => onClick(item)} className={`${cls.attendance_check} fa fa-check`}></i>
                        <i className={`${cls.attendance_times} fa fa-times`}></i>
                    </div>
                </td>
            </tr>
        ))
    }

    const render = renderTable()
    return (
        <div className={cls.attendance}>
            <div className={cls.attendance_header}>
                {/*<h2>Davomat </h2>*/}
                <Select/>
                <Button onClick={() => setAttended(!attended)} type={"filter"}>Davomat qilinganlar</Button>
            </div>
            <div className={cls.attendance_table}>
                <Table>
                    <thead>
                    <tr>
                        <th/>
                        <th>Full name</th>
                        <th/>
                        <th/>
                    </tr>
                    </thead>

                    <tbody>
                    {render}
                    </tbody>
                </Table>
            </div>
            <Attended studentAttended={studentAttended} attended={attended} setAttended={setAttended} />
        </div>
    );
};


export const Attended = ({setAttended, attended , studentAttended}) => {

    const renderTable = () => {
        return studentAttended?.map((item, i) => (
            <tr>
                <td>{i + 1}</td>
                <td>{item.name} {item.surname}</td>
                <td/>
                <td>
                    <div className={cls.attendance_icon}>
                        {item.status ? <i className={`${cls.attended_check} fa fa-check`}></i> : <i className={`${cls.attended_times} fa fa-times`}></i>}
                    </div>
                </td>
            </tr>
        ))
    }

    const render = renderTable()
    return (
        <Modal setActive={setAttended} active={attended}>
            <h2 className={cls.attended_header}>Davomat qilinganlar</h2>
            <div className={cls.attended_table}>
                <Table>
                    <tbody>
                    {render}
                    </tbody>
                </Table>

            </div>
            <Button extraClass={cls.attended_btn}>Kiritish</Button>
        </Modal>
    )
}


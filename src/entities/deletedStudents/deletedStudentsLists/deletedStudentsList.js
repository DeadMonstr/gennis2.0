import cls from "../../../pages/deletedStudents/ui/deletedStudents.module.sass";
import {Table} from "../../../shared/ui/table";
import React, {useState} from "react";
import {menuList} from "../deletedStudentsMenu/deletedStudentsMenu";

export const allStudentsData = [
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 14,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        teacherDontLike: true,
        id: 1
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 15,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        badSituation: true,
        id: 2
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 16,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        couldStudy: true,
        id: 3
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        finished: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 14,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        teacherDontLike: true,
        id: 1
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 15,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        badSituation: true,
        id: 2
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 16,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        couldStudy: true,
        id: 3
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        finished: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 14,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        teacherDontLike: true,
        id: 1
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 15,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        badSituation: true,
        id: 2
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 16,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        couldStudy: true,
        id: 3
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        finished: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 14,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        teacherDontLike: true,
        id: 1
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 15,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        badSituation: true,
        id: 2
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 16,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        couldStudy: true,
        id: 3
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        finished: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 14,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        teacherDontLike: true,
        id: 1
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 15,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        badSituation: true,
        id: 2
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 16,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        couldStudy: true,
        id: 3
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        finished: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 14,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        teacherDontLike: true,
        id: 1
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 15,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        badSituation: true,
        id: 2
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 16,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        couldStudy: true,
        id: 3
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        finished: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 14,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        teacherDontLike: true,
        id: 1
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 15,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        badSituation: true,
        id: 2
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 16,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        couldStudy: true,
        id: 3
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        finished: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 14,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        teacherDontLike: true,
        id: 1
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 15,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        badSituation: true,
        id: 2
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 16,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        couldStudy: true,
        id: 3
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        finished: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 14,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        teacherDontLike: true,
        id: 1
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 15,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        badSituation: true,
        id: 2
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 16,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        couldStudy: true,
        id: 3
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        finished: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
    {
        name: "AnelyaErmekova",
        surname: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        other: true,
        id: 4
    },
]


const DeletedStudentsList = ({currentTableData}) => {
    const [activeMenu, setActiveMenu] = useState(menuList)

    return (
        <div className={cls.table}>
            <Table extraClass={cls.table__head}>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Full name</th>
                    <th>Yosh</th>
                    <th>Telefon nome</th>
                    <th>Guruh</th>
                    <th>Reg.sana</th>
                    <th>O'chir.sana</th>
                    <th>Sabab</th>
                </tr>
                </thead>
                <tbody>


                {currentTableData.map((item, i) => (
                    <tr>
                        <td>{i + 1}</td>
                        <td>{item.name} {item.surname}</td>
                        <td>{item.age}</td>
                        <td>{item.number}</td>
                        <td>{item.group}</td>
                        <td>{item.reg_date}</td>
                        <td>{item.deletedDate}</td>
                        <td>{item.reason}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default DeletedStudentsList;
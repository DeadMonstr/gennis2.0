import cls from "./deletedStudents.module.sass"
import classNames from "classnames";
import {useState} from "react";
import {Table} from "../../shared/ui/table";

const menuList = [
    {name: "all", label: 'hammasi'},
    {name: "teacherDontLike", label: 'O’qituvchi yoqmadi'},
    {name: "badSituation", label: 'Pul oilaviy sharoit'},
    {name: "couldStudy", label: 'O’quvchi o’qishni eplolmadi'},
    {name: "finished", label: 'Kursni tamomladi'},
    {name: "other", label: 'boshqa'},
]

const allStudentsData = [
    {
        fullName: "AnelyaErmekova",
        age: 14,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 1
    },
    {
        fullName: "AnelyaErmekova",
        age: 15,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 2
    },
    {
        fullName: "AnelyaErmekova",
        age: 16,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 3
    },
    {
        fullName: "AnelyaErmekova",
        age: 18,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 4
    },
]
const teacherDontLike = [
    {
        fullName: "AnelyaErmekova",
        age: 120,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 1
    },
    {
        fullName: "AnelyaErmekova",
        age: 35,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 2
    },
    {
        fullName: "AnelyaErmekova",
        age: 56,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 3
    },
    {
        fullName: "AnelyaErmekova",
        age: 68,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 4
    },
]
const badSituation = [
    {
        fullName: "AnelyaErmekova",
        age: 120,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 1
    },
    {
        fullName: "AnelyaErmekova",
        age: 35,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 2
    },
    {
        fullName: "AnelyaErmekova",
        age: 56,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 3
    },
    {
        fullName: "AnelyaErmekova",
        age: 68,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 4
    },
]
const couldStudy = [
    {
        fullName: "AnelyaErmekova",
        age: 120,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 1
    },
    {
        fullName: "AnelyaErmekova",
        age: 35,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 2
    },
    {
        fullName: "AnelyaErmekova",
        age: 56,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 3
    },
    {
        fullName: "AnelyaErmekova",
        age: 68,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 4
    },
]
const finished = [
    {
        fullName: "AnelyaErmekova",
        age: 120,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 1
    },
    {
        fullName: "AnelyaErmekova",
        age: 35,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 2
    },
    {
        fullName: "AnelyaErmekova",
        age: 56,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 3
    },
    {
        fullName: "AnelyaErmekova",
        age: 68,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 4
    },
]
const other = [
    {
        fullName: "AnelyaErmekova",
        age: 120,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 1
    },
    {
        fullName: "AnelyaErmekova",
        age: 35,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 2
    },
    {
        fullName: "AnelyaErmekova",
        age: 56,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 3
    },
    {
        fullName: "AnelyaErmekova",
        age: 68,
        number: 1233131,
        group: "1-guruh",
        reg_date: "22.22.22",
        deletedDate: "12312",
        reason: "boshqa",
        id: 4
    },
]
const DeletedStudents = () => {

    const [activeMenu, setActiveMenu] = useState(menuList[0]?.name)
    return (
        <div className={cls.deletedStudents}>
            <ul className={cls.deletedStudents__menu}>
                {menuList.map((item, i) => <li
                    key={i}
                    className={classNames(cls.other__item, {
                        [cls.active]: activeMenu === item.name
                    })}
                    onClick={() => {
                        setActiveMenu(item.name)
                    }}
                >
                    {item.label}
                </li>)}
            </ul>
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
                    {
                        activeMenu === "all" ?
                            allStudentsData.map((item, index) => {
                                return (
                                    <tbody>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.fullName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.number}</td>
                                        <td>{item.group}</td>
                                        <td>{item.reg_date}</td>
                                        <td>{item.deletedDate}</td>
                                        <td>{item.reason}</td>
                                    </tr>
                                    </tbody>
                                )
                            })
                            :
                            activeMenu === "teacherDontLike" ?
                                teacherDontLike.map((item, index) => {
                                return (
                                    <tbody>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.fullName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.number}</td>
                                        <td>{item.group}</td>
                                        <td>{item.reg_date}</td>
                                        <td>{item.deletedDate}</td>
                                        <td>{item.reason}</td>
                                    </tr>
                                    </tbody>
                                )
                            }) : null


                    }

                </Table>
            </div>
        </div>
    )
}
export default DeletedStudents
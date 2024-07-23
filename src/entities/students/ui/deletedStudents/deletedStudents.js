import cls from "./deletedStudents.module.sass";
import {Table} from "shared/ui/table";
import React, {useMemo, useState} from "react";

import classNames from "classnames";
import {useSelector} from "react-redux";





const menuList = [
    {name: "all", label: 'hammasi'},
    {name: "teacherDontLike", label: 'O’qituvchi yoqmadi'},
    {name: "badSituation", label: 'Pul oilaviy sharoit'},
    {name: "couldStudy", label: 'O’quvchi o’qishni eplolmadi'},
    {name: "finished", label: 'Kursni tamomladi'},
    {name: "other", label: 'boshqa'},

]


export const DeletedStudents = ({currentTableData}) => {
    const [activeMenu, setActiveMenu] = useState(menuList[0]?.name)
    const [deletedStudentsData , setDeletedStudents] = useState([])


    const renderDeletedStudents = () => {
        console.log(currentTableData)

        return currentTableData.map((item,  i) =>{
            switch (activeMenu) {
                case ("all"): {
                    return(
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
                    )
                }
                case "teacherDontLike" :
                    if (item.teacherDontLike){
                        return (
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
                        )
                    }
            }
        })
        // return currentTableData.map((item, i) => {
        //     if (activeMenu === "all") {
        //         return (
        //             <tr>
        //                 <td>{i + 1}</td>
        //                 <td>{item.name} {item.surname}</td>
        //                 <td>{item.age}</td>
        //                 <td>{item.number}</td>
        //                 <td>{item.group}</td>
        //                 <td>{item.reg_date}</td>
        //                 <td>{item.deletedDate}</td>
        //                 <td>{item.reason}</td>
        //             </tr>
        //
        //         )
        //     } else if (activeMenu === "teacherDontLike") {
        //         if (item.teacherDontLike) {
        //             return (
        //
        //                 <tr>
        //                     <td>{i + 1}</td>
        //                     <td>{item.name} {item.surname}</td>
        //                     <td>{item.age}</td>
        //                     <td>{item.number}</td>
        //                     <td>{item.group}</td>
        //                     <td>{item.reg_date}</td>
        //                     <td>{item.deletedDate}</td>
        //                     <td>{item.reason}</td>
        //                 </tr>
        //
        //             )
        //         }
        //     }
        //     else if (activeMenu === "badSituation") {
        //         if (item.badSituation) {
        //             return (
        //
        //                 <tr>
        //                     <td>{i + 1}</td>
        //                     <td>{item.name} {item.surname}</td>
        //                     <td>{item.age}</td>
        //                     <td>{item.number}</td>
        //                     <td>{item.group}</td>
        //                     <td>{item.reg_date}</td>
        //                     <td>{item.deletedDate}</td>
        //                     <td>{item.reason}</td>
        //                 </tr>
        //
        //             )
        //         }
        //     }
        //     else if (activeMenu === "couldStudy") {
        //         if (item.couldStudy) {
        //             return (
        //
        //                 <tr>
        //                     <td>{i + 1}</td>
        //                     <td>{item.name} {item.surname}</td>
        //                     <td>{item.age}</td>
        //                     <td>{item.number}</td>
        //                     <td>{item.group}</td>
        //                     <td>{item.reg_date}</td>
        //                     <td>{item.deletedDate}</td>
        //                     <td>{item.reason}</td>
        //                 </tr>
        //
        //             )
        //         }
        //     }
        //     else if (activeMenu === "finished") {
        //         if (item.finished) {
        //             return (
        //
        //                 <tr>
        //                     <td>{i + 1}</td>
        //                     <td>{item.name} {item.surname}</td>
        //                     <td>{item.age}</td>
        //                     <td>{item.number}</td>
        //                     <td>{item.group}</td>
        //                     <td>{item.reg_date}</td>
        //                     <td>{item.deletedDate}</td>
        //                     <td>{item.reason}</td>
        //                 </tr>
        //
        //             )
        //         }
        //     }
        //     else if (activeMenu === "other") {
        //         if (item.other) {
        //             return (
        //
        //                 <tr>
        //                     <td>{i + 1}</td>
        //                     <td>{item.name} {item.surname}</td>
        //                     <td>{item.age}</td>
        //                     <td>{item.number}</td>
        //                     <td>{item.group}</td>
        //                     <td>{item.reg_date}</td>
        //                     <td>{item.deletedDate}</td>
        //                     <td>{item.reason}</td>
        //                 </tr>
        //
        //             )
        //         }
        //     }
        // })
    }

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
                    <tbody>

                    {renderDeletedStudents()}
                    </tbody>
                </Table>
            </div>

        </div>

    );
};






//export const allStudentsData = [
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 14,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         teacherDontLike: true,
//         id: 1
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 15,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         badSituation: true,
//         id: 2
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 16,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         couldStudy: true,
//         id: 3
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         finished: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 14,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         teacherDontLike: true,
//         id: 1
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 15,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         badSituation: true,
//         id: 2
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 16,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         couldStudy: true,
//         id: 3
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         finished: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 14,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         teacherDontLike: true,
//         id: 1
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 15,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         badSituation: true,
//         id: 2
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 16,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         couldStudy: true,
//         id: 3
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         finished: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 14,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         teacherDontLike: true,
//         id: 1
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 15,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         badSituation: true,
//         id: 2
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 16,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         couldStudy: true,
//         id: 3
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         finished: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 14,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         teacherDontLike: true,
//         id: 1
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 15,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         badSituation: true,
//         id: 2
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 16,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         couldStudy: true,
//         id: 3
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         finished: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 14,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         teacherDontLike: true,
//         id: 1
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 15,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         badSituation: true,
//         id: 2
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 16,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         couldStudy: true,
//         id: 3
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         finished: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 14,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         teacherDontLike: true,
//         id: 1
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 15,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         badSituation: true,
//         id: 2
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 16,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         couldStudy: true,
//         id: 3
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         finished: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 14,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         teacherDontLike: true,
//         id: 1
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 15,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         badSituation: true,
//         id: 2
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 16,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         couldStudy: true,
//         id: 3
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         finished: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 14,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         teacherDontLike: true,
//         id: 1
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 15,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         badSituation: true,
//         id: 2
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 16,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         couldStudy: true,
//         id: 3
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         finished: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
//     {
//         name: "AnelyaErmekova",
//         surname: "AnelyaErmekova",
//         age: 18,
//         number: 1233131,
//         group: "1-guruh",
//         reg_date: "22.22.22",
//         deletedDate: "12312",
//         reason: "boshqa",
//         other: true,
//         id: 4
//     },
// ]
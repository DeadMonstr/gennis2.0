import cls from "./deletedStudents.module.sass"
import classNames from "classnames";
import React, {useMemo, useState} from "react";
import {Table} from "../../shared/ui/table";
import {Pagination} from "../../shared/ui/pagination";

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
]

const DeletedStudents = () => {

    let PageSize = useMemo(() => 50, [])

    const [currentPage, setCurrentPage] = useState(1);


    const [activeMenu, setActiveMenu] = useState(menuList[0]?.name)

    const [search, setSearch] = useState("")


    const searchedUsers = useMemo(() => {
        const filteredHeroes = allStudentsData.slice()
        setCurrentPage(1)
        return filteredHeroes.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.surname.toLowerCase().includes(search.toLowerCase()) ||
            item.username.toLowerCase().includes(search.toLowerCase())
        )
    }, [allStudentsData, search])

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return searchedUsers.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, currentPage, searchedUsers]);



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
                        currentTableData.map((item, i) => {
                            if (activeMenu === "all"){
                                return (
                                    <tbody>
                                    <tr>
                                        <td>{i +1}</td>
                                        <td>{item.name} {item.surname}</td>
                                        <td>{item.age}</td>
                                        <td>{item.number}</td>
                                        <td>{item.group}</td>
                                        <td>{item.reg_date}</td>
                                        <td>{item.deletedDate}</td>
                                        <td>{item.reason}</td>
                                    </tr>
                                    </tbody>
                                )
                            }
                            if (activeMenu === "teacherDontLike") {
                                if (item.teacherDontLike){
                                    return (
                                        <tbody>
                                        <tr>
                                            <td>{i +1}</td>
                                            <td>{item.name} {item.surname}</td>
                                            <td>{item.age}</td>
                                            <td>{item.number}</td>
                                            <td>{item.group}</td>
                                            <td>{item.reg_date}</td>
                                            <td>{item.deletedDate}</td>
                                            <td>{item.reason}</td>
                                        </tr>
                                        </tbody>
                                    )
                                }
                            }
                            if (activeMenu === "badSituation") {
                                if (item.badSituation){
                                    return (
                                        <tbody>
                                        <tr>
                                            <td>{i +1}</td>
                                            <td>{item.name} {item.surname}</td>
                                            <td>{item.age}</td>
                                            <td>{item.number}</td>
                                            <td>{item.group}</td>
                                            <td>{item.reg_date}</td>
                                            <td>{item.deletedDate}</td>
                                            <td>{item.reason}</td>
                                        </tr>
                                        </tbody>
                                    )
                                }
                            }
                            if (activeMenu === "couldStudy") {
                                if (item.couldStudy){
                                    return (
                                        <tbody>
                                        <tr>
                                            <td>{i +1}</td>
                                            <td>{item.name} {item.surname}</td>
                                            <td>{item.age}</td>
                                            <td>{item.number}</td>
                                            <td>{item.group}</td>
                                            <td>{item.reg_date}</td>
                                            <td>{item.deletedDate}</td>
                                            <td>{item.reason}</td>
                                        </tr>
                                        </tbody>
                                    )
                                }
                            }
                            if (activeMenu === "finished") {
                                if (item.finished){
                                    return (
                                        <tbody>
                                        <tr>
                                            <td>{i +1}</td>
                                            <td>{item.name} {item.surname}</td>
                                            <td>{item.age}</td>
                                            <td>{item.number}</td>
                                            <td>{item.group}</td>
                                            <td>{item.reg_date}</td>
                                            <td>{item.deletedDate}</td>
                                            <td>{item.reason}</td>
                                        </tr>
                                        </tbody>
                                    )
                                }
                            }
                            if (activeMenu === "other") {
                                if (item.other){
                                    return (
                                        <tbody>
                                        <tr>
                                            <td>{i +1}</td>
                                            <td>{item.name} {item.surname}</td>
                                            <td>{item.age}</td>
                                            <td>{item.number}</td>
                                            <td>{item.group}</td>
                                            <td>{item.reg_date}</td>
                                            <td>{item.deletedDate}</td>
                                            <td>{item.reason}</td>
                                        </tr>
                                        </tbody>
                                    )
                                }
                            }
                        })
                    }
                </Table>
            </div>
            <Pagination
                currentPage={currentPage}
                totalCount={searchedUsers.length}
                pageSize={PageSize}
                onPageChange={page => {
                    setCurrentPage(page)
                }}
            />
        </div>
    )
}
export default DeletedStudents
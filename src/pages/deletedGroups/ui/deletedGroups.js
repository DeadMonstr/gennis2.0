import React, {useMemo, useState} from "react";

import {Pagination} from "features/pagination";
import {GroupsFilter} from "features/filters";
import {Table} from "shared/ui/table";
import {Button} from "shared/ui/button";

import cls from "./deletedGroups.module.sass";

const deletedGroupsData = [
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "rus tili",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "uzb",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "rus",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "rus tili",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "uzb",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "rus",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "rus tili",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "uzb",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "rus",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "rus tili",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "uzb",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "rus",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "rus tili",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "uzb",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "rus",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "rus tili",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "uzb",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "rus",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "rus tili",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "uzb",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "rus",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },
    {
        groupName: "dew1d",
        name: "dadsd",
        surname: "de",
        subject: "ingliz",
        typeCourse: "standart",
        groupPrice: -223,
        deletedDate: "2222.22.22"
    },


]

export const DeletedGroups = () => {
    const [active, setActive] = useState(false);
    let PageSize = useMemo(() => 50, [])

    const [currentPage, setCurrentPage] = useState(1);

    const [search, setSearch] = useState("")

    const [currentTableData, setCurrentTableData] = useState([])
    const searchedUsers = useMemo(() => {
        const filteredHeroes = deletedGroupsData.slice()
        setCurrentPage(1)
        return filteredHeroes.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.surname.toLowerCase().includes(search.toLowerCase()) ||
            item.username.toLowerCase().includes(search.toLowerCase())
        )
    }, [deletedGroupsData, search])

    // const currentTableData = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * PageSize;
    //     const lastPageIndex = firstPageIndex + PageSize;
    //     return searchedUsers.slice(firstPageIndex, lastPageIndex);
    // }, [PageSize, currentPage, searchedUsers]);


    return (
        <div className={cls.deletedGroups}>
            <div className={cls.mainContainer_filterPanelBox}>
                <Button type={"filter"}
                        extraClass={cls.extraCutClassFilter}
                        onClick={() => setActive(true)}
                >
                    Filter
                </Button>

            </div>
            <div className={cls.table}>
                <Table extraClass={cls.table__head}>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Guruh Nomi</th>
                        <th>Full name</th>
                        <th>Fan</th>
                        <th>Kurs Turi</th>
                        <th>Guruh narxi</th>
                        <th>O'chirilgan sana</th>
                    </tr>
                    </thead>
                    {currentTableData.map((item, i) => {
                        return (
                            <tbody>
                            <tr>
                                <td>{i + 1}</td>
                                <td>{item.groupName}</td>
                                <td>{item.name} {item.surname}</td>
                                <td
                                    style={{
                                        border: "1px solid",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "15px",
                                        height: "4rem",
                                        width: "fit-content",
                                        margin: "5px 0"
                                    }}>{item.subject}</td>
                                <td>{item.typeCourse}</td>
                                <td style={{
                                    color: '#00C2FF',
                                    border: "1px solid #00C2FF",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "15px",
                                    height: "4rem",
                                    width: "fit-content",
                                    margin: "5px 0"
                                }}>{item.groupPrice}</td>
                                <td>{item.deletedDate}</td>
                            </tr>
                            </tbody>
                        )
                    })}
                </Table>
            </div>
            <Pagination
                setCurrentTableData={setCurrentTableData}
                users={deletedGroupsData}
                search={search}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageSize={PageSize}
                onPageChange={page => {
                    setCurrentPage(page)
                }}
            />
            <GroupsFilter setActive={setActive} active={active}/>
        </div>
    )
}
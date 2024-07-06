import React, {useMemo, useState} from "react";
import cls from "./students.module.sass";
import {Table} from "../../shared/ui/table";
import {Pagination} from "../../shared/ui/pagination";

const studentsData = [
    {name: "dewd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: 123},
    {name: "dewd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: 123},
    {name: "dewd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: 123},
    {name: "dewd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: 123},
]
const Students = () => {

    let PageSize = useMemo(() => 50, [])

    const [currentPage, setCurrentPage] = useState(1);




    const [search, setSearch] = useState("")


    const searchedUsers = useMemo(() => {
        const filteredHeroes = studentsData.slice()
        setCurrentPage(1)
        return filteredHeroes.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.surname.toLowerCase().includes(search.toLowerCase()) ||
            item.username.toLowerCase().includes(search.toLowerCase())
        )
    }, [studentsData, search])

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return searchedUsers.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, currentPage, searchedUsers]);


    return (
        <div className={cls.students}>
            <div className={cls.table}>
                <Table extraClass={cls.table__head}>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Full name</th>
                        <th>Yosh</th>
                        <th>Telefon nome</th>
                        <th>Guruh</th>
                        <th>Guruh narxi</th>
                    </tr>
                    </thead>
                    {studentsData.map((item, i) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{item.name} {item.surname}</td>
                                    <td>{item.age}</td>
                                    <td>{item.number}</td>
                                    <td>{item.group}</td>
                                    <td>{item.groupPrice}</td>
                                </tr>
                            </tbody>
                        )
                    })}
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
export default Students
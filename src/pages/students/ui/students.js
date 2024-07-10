import React, {useMemo, useState} from "react";

import {Pagination} from "features/pagination";
import {StudentsFilter} from "features/filters";
import {Table} from "shared/ui/table";
import {Button} from "shared/ui/button";
import {Radio} from "shared/ui/radio";

import cls from "./students.module.sass";

const studentsData = [
    {name: "dew1d", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -223},
    {name: "de32wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: 123},
    {name: "de321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: 13},
    {name: "dewedwd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: 123},
    {name: "dedqwdwd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: 123},
    {name: "dedqwdwd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: 123},
    {name: "dedqwdwd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: 123},
    {name: "dedqwdwd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: 123},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -112332132131232312},

]
export const Students = () => {

    let PageSize = useMemo(() => 50, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const peoples = ["New students", "Studying students", "Deleted students"];
    const [active, setActive] = useState(false);
    const [search, setSearch] = useState("")
    const [selected, setSelected] = useState("");
    const handleChange = (value) => {
        setSelected(value);
    };


    const searchedUsers = useMemo(() => {
        const filteredHeroes = studentsData.slice()
        setCurrentPage(1)
        return filteredHeroes.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.surname.toLowerCase().includes(search.toLowerCase()) ||
            item.username.toLowerCase().includes(search.toLowerCase())
        )
    }, [studentsData, search])

    // const currentTableData = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * PageSize;
    //     const lastPageIndex = firstPageIndex + PageSize;
    //     return searchedUsers.slice(firstPageIndex, lastPageIndex);
    // }, [PageSize, currentPage, searchedUsers]);

    const renderStudents = () => {
        return currentTableData.map((item, i) => (
            <tr>
                <td>{i + 1}</td>
                <td>{item.name} {item.surname}</td>
                <td>{item.age}</td>
                <td>{item.number}</td>
                <td>{item.group}</td>
                <td style={{color: '#FF3B30'}}>{item.groupPrice}</td>
            </tr>
        ))
    }
    return (
        <div className={cls.students}>
            <div className={cls.mainContainer_filterPanelBox}>
                <Button type={"filter"}
                        extraClass={cls.extraCutClassFilter}
                        onClick={() => setActive(true)}
                >
                    Filter
                </Button>
                <div className={cls.mainContainer_filterPanelBox_rightFilterRadioGroupBox}>
                    {peoples.map((item, id) => (
                        <Radio
                            key={id}
                            onChange={() => handleChange(item)}
                            checked={selected === item}
                        >
                            {item}
                        </Radio>
                    ))}
                </div>
            </div>
            <div className={cls.table}>
                <Table extraClass={cls.table__head}>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Full name</th>
                        <th>Yosh</th>
                        <th>Telefon nomer</th>
                        <th>Guruh</th>
                        <th>Guruh narxi</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderStudents()}
                    </tbody>
                </Table>
            </div>
            <Pagination
                setCurrentTableData={setCurrentTableData}
                users={studentsData}
                search={search}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageSize={PageSize}
                onPageChange={page => {
                    setCurrentPage(page)
                }}
            />
            <StudentsFilter setActive={setActive} active={active}/>
        </div>
    )
}
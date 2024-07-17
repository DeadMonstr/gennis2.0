import React, {useMemo, useState} from "react";
import {Table} from "shared/ui/table";
import cls from "./studnets.module.sass";

export const studentsData = [

    {name: "de32wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: 123},
    {name: "de321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: 13},
    {name: "dewedwd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: 123},
    {name: "dedqwdwd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: 123},
    {name: "dedqwdwd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: 123},
    {name: "dedqwdwd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: 123},
    {name: "dedqwdwd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: 123},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -213},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -321},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -123},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},
    {name: "de1321wd", surname: "de", age: 12, number: 2323213, group: "dwqd", groupPrice: -312},

]
export const Students = ({currentTableData}) => {
    const renderStudents = () => {
        return currentTableData.map((item, i) => (
            <tr>
                <td>{i + 1}</td>
                <td>{item.name} {item.surname}</td>
                <td>{item.age}</td>
                <td>{item.number}</td>
                <td>{item.group}</td>
                <td><div style={{color: '#FF3B30'}}>{item.groupPrice}</div></td>
            </tr>
        ))
    }
    return (
        <div className={cls.students}>
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
        </div>
    )
}
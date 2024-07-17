import React, { useMemo, useState } from 'react';
import {StudentsFilter} from "features/filters/studentsFilter";
import { Table } from "shared/ui/table";
import cls from "./newStudents.module.sass";

export const users = [
    {
        username: "NoN",
        name: "Shohjahon",
        surname: "Unarov",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "noname",
        name: "Alex",
        surname: "Omonboyev",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "killer",
        name: "Stive",
        surname: "Smith",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "god",
        name: "Notch",
        surname: "Smith",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "NoN",
        name: "John",
        surname: "Smith",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "noname",
        name: "Alex",
        surname: "Smith",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "killer",
        name: "Stive",
        surname: "Smith",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "god",
        name: "Notch",
        surname: "Smith",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "NoN",
        name: "John",
        surname: "Smith",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "noname",
        name: "Alex",
        surname: "Smith",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "killer",
        name: "Stive",
        surname: "Smith",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "god",
        name: "Notch",
        surname: "Smith",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "NoN",
        name: "John",
        surname: "Smith",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "noname",
        name: "Alex",
        surname: "Smith",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "killer",
        name: "Stive",
        surname: "Smith",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "god",
        name: "Notch",
        surname: "Smith",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "NoN",
        name: "John",
        surname: "Smith",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "noname",
        name: "Alex",
        surname: "Smith",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "killer",
        name: "Stive",
        surname: "Smith",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "god",
        name: "Notch",
        surname: "Smith",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    },
    {
        username: "NoN",
        name: "Shohjahon",
        surname: "Unarov",
        age: "16",
        tel: " (99)001-11-01",
        lang: "uzbek",
        group: "1-guruh",
        dataReg: "2024.07.05"
    }

];

export const NewStudents = ({currentTableData}) => {
    const [active, setActive] = useState(false);
    const [activeMenu, setActiveMenu] = useState("");
    const PageSize = useMemo(() => 10, []);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");

    const renderStudents = () => {
        return currentTableData.map((item, index) => (
            <tr key={index + 1}>
                <td>{(currentPage - 1) * PageSize + index + 1}</td>
                <td>{item.surname} {item.name}</td>
                <td>{item.age}</td>
                <td>{item.number}</td>
                <td>{item.language}</td>
                <td>{item.group}</td>
                <td>{item.reg_date}</td>
            </tr>
        ));
    };

    return (
        <div className={cls.mainContainer}>

            <div className={cls.mainContainer_tablePanelBox}>
                <Table>
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Full name</th>
                        <th>Age</th>
                        <th>Telefon numer</th>
                        <th>Til</th>
                        <th>Guruh</th>
                        <th>Reg. sana</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderStudents()}
                    </tbody>
                </Table>
            </div>
            {/*<Pagination*/}
            {/*    setCurrentTableData={setCurrentTableData}*/}
            {/*    users={users}*/}
            {/*    search={search}*/}
            {/*    setCurrentPage={setCurrentPage}*/}
            {/*    currentPage={currentPage}*/}
            {/*    pageSize={PageSize}*/}
            {/*    onPageChange={page => {*/}
            {/*        setCurrentPage(page)*/}
            {/*    }}*/}
            {/*/>*/}
            <StudentsFilter
                active={active}
                setActive={setActive}
            />
        </div>
    );
};
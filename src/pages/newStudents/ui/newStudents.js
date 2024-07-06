import React, { useMemo, useState } from 'react';
import cls from "./newStudents.module.sass";
import Button from "shared/ui/button/button";
import { Select } from "shared/ui/select";
import Radio from "shared/ui/radio/radio";
import { Table } from "shared/ui/table";
import { Pagination } from "../../../shared/ui/pagination";

const users = [
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

export const NewStudents = () => {
    const [active, setActive] = useState("");
    const PageSize = useMemo(() => 10, []);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState("");

    const peoples = ["New students", "Studying students", "Deleted students"];

    const handleChange = (value) => {
        setSelected(value);
    };

    const searchedUsers = useMemo(() => {
        const filteredHeroes = users.slice();
        setCurrentPage(1);
        return filteredHeroes.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.surname.toLowerCase().includes(search.toLowerCase()) ||
            item.username.toLowerCase().includes(search.toLowerCase())
        );
    }, [users, search]);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return searchedUsers.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, currentPage, searchedUsers]);

    const renderStudents = () => {
        return currentTableData.map((item, index) => (
            <tr key={index + 1}>
                <td>{(currentPage - 1) * PageSize + index + 1}</td>
                <td>{item.surname} {item.name}</td>
                <td>{item.age}</td>
                <td>{item.tel}</td>
                <td>{item.lang}</td>
                <td>{item.group}</td>
                <td>{item.dataReg}</td>
            </tr>
        ));
    };

    return (
        <div className={cls.mainContainer}>
            <div className={cls.mainContainer_buttonPanelBox}>
                <div className={cls.mainContainer_buttonPanelBox_leftCreateButton}>
                    <Button>Create group</Button>
                    <Button>Add group</Button>
                </div>
                <Select />
            </div>
            <div className={cls.mainContainer_filterPanelBox}>
                <Button>Filter</Button>
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
            <div className={cls.mainContainer_tablePanelBox}>
                <Table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Full name</th>
                        <th>Age</th>
                        <th>Tel</th>
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
            <Pagination
                currentPage={currentPage}
                totalCount={searchedUsers.length}
                pageSize={PageSize}
                onPageChange={page => {
                    setCurrentPage(page);
                }}
            />
        </div>
    );
};

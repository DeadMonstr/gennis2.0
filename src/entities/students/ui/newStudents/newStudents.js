import React, {memo, useState} from 'react';
import {useNavigate} from "react-router";

import {StudentsFilter} from "features/filters/studentsFilter";
import {Table} from "shared/ui/table";

import cls from "./newStudents.module.sass";


export const NewStudents = memo(({currentTableData}) => {
    const [active, setActive] = useState(false);
    const navigation = useNavigate()


    const renderStudents = () => {
        return currentTableData?.map((item, i) => (
            <tr onClick={() => navigation(`profile/${item.id}`)}>
                <td>{i + 1}</td>
                <td>{item.user.surname} {item.user.name}</td>
                <td>{item.user.age}</td>
                <td>{item.user.phone}</td>
                <td>{item.user.language?.name}</td>
                <td>{item.group}</td>
                <td>{item.user.registered_date}</td>
            </tr>
        ));
    };

    const render = renderStudents()

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
                    {render}
                    </tbody>
                </Table>

            </div>

            <StudentsFilter
                active={active}
                setActive={setActive}
            />
        </div>
    );
})
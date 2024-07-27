import React, {memo} from 'react';

import {Table} from "shared/ui/table";

import cls from "./timeTableList.module.sass";

export const TimeTableList = memo(({data, setIsChange}) => {

    const renderTimeTableList = () => {
        return data.map((item, i) =>
            <tr>
                <td>{item.id}</td>
                <td>{item.timeList}</td>
                <td>{item.startTime}</td>
                <td>{item.finishTime}</td>
                <td>{item.name}</td>
                <td>
                    <i
                        onClick={() => setIsChange(item)}
                        className="fas fa-pen"
                    />
                </td>
            </tr>
        )
    }

    const render = renderTimeTableList()

    return (
        <div className={cls.timeTableList}>
            <Table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Soatlar ro’yxati</th>
                    <th>Boshlanish vaqt</th>
                    <th>Tugash vaqti</th>
                    <th>Name</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {render}
                </tbody>
            </Table>
        </div>

    )
})

import React, {memo, useState} from 'react';

import {EditableCard} from "shared/ui/editableCard";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Table} from "shared/ui/table";
import {Select} from "shared/ui/select";

import cls from "./groupProfileAttendanceForm.module.sass";

const data = [
    {
        name: "Madina",
        surname: "Abdurahmonova",
        days: [true, false, true, true, false, true, true, false, true, true, false, true, false]
    },
    {
        name: "Madina",
        surname: "Abdurahmonova",
        days: [true, false, true, true, false, true, true, false, true, true, false, true, false]
    },
    {
        name: "Madina",
        surname: "Abdurahmonova",
        days: [true, false, true, false, false, true, true, false, true, true, false, true, false]
    },
    {
        name: "Madina",
        surname: "Abdurahmonova",
        days: [true, false, true, true, false, true, false, false, true, false, false, true, false]
    }

]
const daysData = [
    {
        number: "01",
        day: "Dushanba"
    },
    {
        number: "03",
        day: "Dushanba"
    },
    {
        number: "05",
        day: "Dushanba"
    },
    {
        number: "07",
        day: "Dushanba"
    },
    {
        number: "09",
        day: "Dushanba"
    },
    {
        number: 11,
        day: "Dushanba"
    },
    {
        number: "13",
        day: "Dushanba"
    },
    {
        number: "15",
        day: "Dushanba"
    },
    {
        number: "17",
        day: "Dushanba"
    },
    {
        number: "19",
        day: "Dushanba"
    },
    {
        number: "21",
        day: "Dushanba"
    },
    {
        number: 23,
        day: "Dushanba"
    },
    {
        number: 25,
        day: "Dushanba"
    }
]

export const GroupProfileAttendanceForm = memo(() => {

    const [active, setActive] = useState(false)

    const renderAttendance = (limit = 3) => {
        return data.map(item =>
            <tr>
                <td/>
                <td>{item.name} {item.surname}</td>
                {
                    item.days.map((i, index) => {
                        if (index >= limit) return null
                        return (
                            <td>
                                {
                                    i ? <i className="fas fa-check" style={{color: "#22C55E"}}/> :
                                        <i className="fas fa-times" style={{color: "#F43F5E"}}/>
                                }
                            </td>
                        )
                    })
                }
            </tr>
        )
    }

    const render = renderAttendance()

    return (
        <>
            <EditableCard
                extraClass={cls.attendance}
                onClick={() => setActive(true)}
            >
                <h1>Davomat</h1>
                <div className={cls.attendance__contauner}>
                    <Table>
                        <thead>
                        <tr>
                            <th/>
                            <th>Ism Familya</th>
                            {
                                daysData.map((item, index) => {
                                    if (index >= 3) return null
                                    return (
                                        <th>
                                            <div className={cls.days}>
                                                <h2>{item.number}</h2>
                                                <p>{item.day}</p>
                                            </div>
                                        </th>
                                    )
                                })
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {render}
                        </tbody>
                    </Table>
                </div>
            </EditableCard>
            <Modal
                active={active}
                setActive={setActive}
            >
                <div>
                    <Select
                        title={"Til"}
                    />
                    <Select
                        title={"Oy"}
                    />
                </div>
                <div>
                    <Table>
                        <thead>
                        <tr>
                            <th/>
                            <th>Ism Familya</th>
                            {
                                daysData.map(item => {
                                    return (
                                        <th>
                                            <div className={cls.days}>
                                                <h2>{item.number}</h2>
                                            </div>
                                        </th>
                                    )
                                })
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {render}
                        </tbody>
                    </Table>
                </div>
            </Modal>
        </>
    )
})
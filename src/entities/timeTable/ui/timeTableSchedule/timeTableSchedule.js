import {memo, useEffect, useState} from 'react';

import {Table} from "shared/ui/table";
import {Droppable} from "shared/ui/droppable";

import cls from "./timeTableSchedule.module.sass";

const data = [
    {
        day: "Mon",
        subjects: [
            {
                subject: {
                    id: "1drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "2drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "3drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "4drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "5drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "6drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            }
        ]
    },
    {
        day: "Tue",
        subjects: [
            {
                subject: {
                    id: "7drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "8drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "9drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "10drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "11drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "12drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            }
        ]
    },
    {
        day: "Wed",
        subjects: [
            {
                subject: {
                    id: "13drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "14drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "15drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "16drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "17drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "18drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "19drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            }
        ]
    },
    {
        day: "Thu",
        subjects: [
            {
                subject: {
                    id: "20drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "21drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "22drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "23drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "24drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "25drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            }
        ]
    },
    {
        day: "Sat",
        subjects: [
            {
                subject: {
                    id: "26drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "27drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "28drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "29drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "30drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "31drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            }
        ]
    },
    {
        day: "Sun",
        subjects: [
            {
                subject: {
                    id: "32drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "33drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "34drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "35drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "36drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            },
            {
                subject: {
                    id: "37drop",
                    value: "3ds max"
                },
                teacher: "Yusupova.Sh",
                room: "1.4"
            }
        ]
    }
]

const timesData = [
    {
        startTime: "14:50",
        endTime: "15:35"
    },
    {
        startTime: "14:50",
        endTime: "15:35"
    },
    {
        startTime: "14:50",
        endTime: "15:35"
    },
    {
        startTime: "14:50",
        endTime: "15:35"
    },
    {
        startTime: "14:50",
        endTime: "15:35"
    },
    {
        startTime: "14:50",
        endTime: "15:35"
    },
    {
        startTime: "14:50",
        endTime: "15:35"
    }
]

export const TimeTableSchedule = memo(({subjectData, activeDrop}) => {

    const [currentData, setCurrentData] = useState([])

    useEffect(() => {
        if (!activeDrop && !subjectData) {
            setCurrentData(data)
        } else {
            setCurrentData(
                currentData.map(item => ({
                        day: item.day,
                        subjects: item.subjects.map(i => {
                            if (i.subject.id === activeDrop) {
                                return {
                                    subject: {
                                        id: i.subject.id,
                                        value: subjectData?.value
                                    },
                                    teacher: i.teacher,
                                    room: i.room
                                }
                            } else return i
                        })
                    })
                )
            )
        }
    }, [data, activeDrop, subjectData])

    const renderData = () => {
        return currentData.map((item, iI) =>
            <tr>
                <td style={{padding: "3rem 1.5rem"}}>{item.day}</td>
                {
                    item.subjects.map((i, index) =>
                        <td className={cls.days__item}>
                            <Droppable
                                id={i.subject.id}
                                key={i.subject.id}
                            >
                                <p className={cls.subject}>
                                    {i.subject.value}
                                </p>
                                <p className={cls.teacher}>{i.teacher}</p>
                                <p className={cls.room}>{i.room}</p>
                            </Droppable>
                        </td>
                    )
                }
            </tr>
        )
    }

    const render = renderData()

    return (
        <div className={cls.schedule}>
            <Table extraClass={cls.schedule__inner}>
                <thead>
                <tr>
                    <th/>
                    {
                        timesData.map((item, i) =>
                            <th>
                                <p className={cls.index}>{i + 1}</p>
                                <div>
                                    {item.startTime} {item.endTime}
                                </div>
                            </th>
                        )
                    }
                </tr>
                </thead>
                <tbody>
                {render}
                </tbody>
            </Table>
        </div>
    )
})

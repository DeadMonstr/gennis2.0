import {memo, useCallback, useEffect, useState} from 'react';
import classNames from "classnames";

import {Table} from "shared/ui/table";
import {Droppable} from "shared/ui/droppable";

import cls from "./timeTableSchedule.module.sass";


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

export const TimeTableSchedule = memo(({subjectData, activeDrop, uid, setData, data, length}) => {

    const [currentData, setCurrentData] = useState([])

    useEffect(() => {
        // console.log(data, "data", uid)
        // console.log(currentData, "currentData")
        // console.log(uid, "uid")
        // if (currentData.length === 0) {
            // console.log(true)
            if (Array.isArray(data)) {
                // console.log(data)
                // console.log(true, "data is arr",uid)
                setCurrentData(
                    data.map(item => ({
                        dayId: item.dayId,
                        day: item.day,
                        subjects: item.subjects.map(i => ({
                            subjectsId: i.subjectsId + uid,
                            subject: i.subject,
                            teacher: i.teacher,
                            room: i.room
                        }))
                    }))
                )
            } else {
                // console.log(data)
                // console.log(true, "data is obj", uid)
                setCurrentData(data.data)
            }
        // }
    }, [data, length])


    useEffect(() => {
        // if (!activeDrop && !subjectData) {
        //     // console.log(data, "data")
        //     // console.log(currentData.length, "data2")
        //     // console.log(!currentData.length, "data3")
        //     if (data.id && data.data.length) {
        //         setCurrentData(data.data)
        //     } else {
        //         setCurrentData(
        //             data.map(item => ({
        //                 day: item.day,
        //                 subjects: item.subjects.map(i => ({
        //                     subject: {
        //                         id: i.subject.id + uid,
        //                         value: i.subject.value
        //                     },
        //                     teacher: i.teacher,
        //                     room: i.room
        //                 }))
        //             }))
        //         )
        //     }
        // } else {
        if (subjectData && currentData.length) {
            // console.log(activeDrop, "activeDrop")
            // console.log(subjectData, "subjectData")
            // console.log(true, "true")
            setCurrentData(
                currentData.map(item => ({
                        day: item.day,
                        subjects: item.subjects.map(i => {
                            if (i.subjectsId === activeDrop) {
                                return {
                                    subjectsId: i.subjectsId,
                                    subject: subjectData?.name === "subject" ?
                                        subjectData?.value : i.subject,
                                    teacher: subjectData?.name === "teacher" ?
                                        subjectData?.value : i.teacher,
                                    room: subjectData?.name === "room" ?
                                        subjectData?.value : i.room
                                }
                            } else return i
                        })
                    })
                )
            )
        }
        // }
        // setSubjectData(null)
    }, [data, activeDrop, subjectData])


    // console.log(data, uid)


    // useEffect(() => {
    //     if (activeDrop) {
    //         let filtered;
    //         let filteredDay;
    //         currentData.filter(item =>
    //             item.subjects.map(i => {
    //                 if (i.subject.id === activeDrop) {
    //                     filtered = i
    //                     filteredDay = item.day
    //                 }
    //             })
    //         )
    //         console.log(filtered, "filtered")
    //         const {subject, teacher, room} = filtered
    //         if (subject.value && teacher && room) {
    //             console.log(true)
    //         }
    //     }
    // }, [activeDrop, currentData])

    // console.log(currentData, "currentData")

    useEffect(() => {
        setData(arr => {
            const filtered = arr.filter(item => item.id !== uid)
            return [...filtered, {id: uid, data: currentData}]
        })
    }, [currentData])

    const renderData = useCallback(() => {
        // console.log(currentData, "currentData render")
        // console.log(uid, "currentData render")
        return currentData.map((item, iI) =>
            <tr>
                <td style={{padding: "3rem 1.5rem"}}>{item.day}</td>
                {
                    item.subjects.map((i, index) =>
                        <td className={cls.days__item}>
                            <Droppable
                                id={i.subjectsId}
                                key={i.subjectsId}
                            >
                                <p
                                    className={classNames(cls.subject, {
                                        [cls.notActive]: !i.subject
                                    })}
                                >
                                    {i.subject}
                                </p>
                                <p
                                    className={classNames(cls.teacher, {
                                        [cls.notActive]: !i.teacher
                                    })}
                                >
                                    {i.teacher}
                                </p>
                                <p
                                    className={classNames(cls.room, {
                                        [cls.notActive]: !i.room
                                    })}
                                >
                                    {i.room}
                                </p>
                            </Droppable>
                        </td>
                    )
                }
            </tr>
        )
    }, [currentData, uid])

    const render = renderData()

    if (length.includes(data.id)) {
        return null
    }

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

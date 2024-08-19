import {memo, useCallback, useMemo, useState} from 'react';

import {TimeTableSchedule} from "../timeTableSchedule/timeTableSchedule";

import cls from "./timeTableScheduleList.module.sass";

export const TimeTableScheduleList = memo((props) => {

    const {
        data,
        setData,
        activeDrop,
        length
    } = props

    const itemData = useMemo(() => [
        {
            dayId: 1,
            day: "Mon",
            subjects: [
                {
                    subjectsId: "1drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "2drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "3drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "4drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "5drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "6drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "7drop",
                    subject: "",
                    teacher: "",
                    room: ""
                }
            ]
        },
        {
            dayId: 2,
            day: "Tue",
            subjects: [
                {
                    subjectsId: "8drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "9drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "10drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "11drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "12drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "13drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "14drop",
                    subject: "",
                    teacher: "",
                    room: ""
                }
            ]
        },
        {
            dayId: 3,
            day: "Wed",
            subjects: [
                {
                    subjectsId: "15drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "16drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "17drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "18drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "19drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "20drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "21drop",
                    subject: "",
                    teacher: "",
                    room: ""
                }
            ]
        },
        {
            dayId: 4,
            day: "Thu",
            subjects: [
                {
                    subjectsId: "22drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "23drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "24drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "25drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "26drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "27drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "28drop",
                    subject: "",
                    teacher: "",
                    room: ""
                }
            ]
        },
        {
            dayId: 5,
            day: "Sat",
            subjects: [
                {
                    subjectsId: "29drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "30drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "31drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "32drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "33drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "34drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "35drop",
                    subject: "",
                    teacher: "",
                    room: ""
                }
            ]
        },
        {
            dayId: 6,
            day: "Sun",
            subjects: [
                {
                    subjectsId: "36drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "37drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "38drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "39drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "40drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "41drop",
                    subject: "",
                    teacher: "",
                    room: ""
                },
                {
                    subjectsId: "42drop",
                    subject: "",
                    teacher: "",
                    room: ""
                }
            ]
        }
    ], [])

    const [totalData, setTotalData] = useState([])

    const renderScheduleItems = useCallback(() => {
        return length.map(item => {
            const curData = totalData.filter(i => i.id === `${item}class`)
            // console.log(curData, "curData", `${item}class`)
            // console.log(curData[0]?.data.length, "length")
            // console.log(curData[0]?.data.length ? curData[0] : itemData)
            let cData =
                curData[0]?.data.length && curData[0]?.id === `${item}class` ? curData[0] : itemData
            return (
                <TimeTableSchedule
                    length={length}
                    uid={`${item}class`}
                    subjectData={data}
                    setSubjectData={setData}
                    activeDrop={activeDrop}
                    setData={setTotalData}
                    data={cData}
                />
            )
        })
    }, [length, activeDrop, data])

    const render = renderScheduleItems()

    return (
        <div className={cls.scheduleList}>
            {render}
        </div>
    )
})

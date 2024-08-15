import {memo, useCallback, useEffect, useMemo, useState} from 'react';
import classNames from "classnames";

import {Table} from "shared/ui/table";
import {monthNameList, weekDaysList} from "../../model/consts/constsMonthList";

import cls from "./calendarListItem.module.sass";
import 'react-calendar/dist/Calendar.css';

export const CalendarListItem = memo((props) => {

    const {
        month,
        setActive,
        data,
        onActiveDays,
        sortWeeksDays,
        currentData
    } = props

    const weeksCount = useMemo(() =>
        ["1week", "2week", "3week", "4week", "5week", "6week"], [])

    const [totalWeeksCount, setTotalWeeksCount] = useState([])
    const [demoActive, setDemoActive] = useState([])
    const [trueActive, setTrueActive] = useState([{}])
    const [daysList, setDaysList] = useState([])

    // const onSelectDay = (id) => {
    //     setTotalWeeksCount(totalWeeksCount.map(item => item.map(i => i.id === id ? {...i, checked: true} : i)))
    // }

    useEffect(() => {
        setTotalWeeksCount(sortWeeksDays(data.daysList, weekDaysList.indexOf(data.day.toUpperCase())))
    }, [data])

    useEffect(() => {
        if (currentData.name) {
            setDaysList(arr => [...arr, currentData])
            setTrueActive(trueActive.map(item => ({...item, bgColor: currentData.color})))
        }
    }, [currentData])

    const renderWeekDays = () => {
        return weeksCount.map((item, index) =>
            <tr key={index}>
                {
                    totalWeeksCount[index]?.map((i, iI) => {
                        return (
                            <td
                                key={iI}
                                onClick={() => {
                                    if (i.value) {
                                        // onSelectDay(i.id)
                                        onActiveDays(i.id, i.value, trueActive, setTrueActive, setDemoActive, month)
                                        if (demoActive.length === 2) {
                                            setDemoActive([])
                                        } else {
                                            setDemoActive([i.id])
                                        }
                                    }
                                }}
                                onMouseEnter={() => {
                                    if (demoActive.length) {
                                        setDemoActive([demoActive[0], i.id])
                                    }
                                }}
                                className={classNames(cls.inner__day, {
                                    [cls.active]:
                                    trueActive.filter(item => item?.startId <= i.id && item?.finishId >= i.id)[0],
                                    [cls.demoActive]:
                                    (demoActive[0] > demoActive[1] ? demoActive[1] : demoActive[0]) < i.id
                                    &&
                                    (demoActive[0] > demoActive[1] ? demoActive[0] : demoActive[1]) > i.id
                                })}
                                style={{
                                    backgroundColor:
                                    trueActive.filter(item => item?.startId <= i.id && item?.finishId >= i.id)[0]?.bgColor
                                }}
                            >
                                {i.value}
                            </td>
                        )
                    })
                }
            </tr>
        )
    }

    const renderCelebrateDays = useCallback(() => {
        return daysList.map(item => {
            return (
                <div className={cls.item}>
                    {
                        item.startValue !== item.finishValue ? <p className={cls.item__inner}>
                            {
                                item.startValue < item.finishValue ?
                                    item.startValue : item.finishValue
                            }-
                            {
                                item.startValue < item.finishValue ?
                                    item.finishValue : item.startValue
                            }
                            <span>{monthNameList[month]}</span>
                            <span>/</span>
                            <span>{item.name}</span>
                        </p> : <p className={cls.item__inner}>
                            {item.startValue}
                            <span>{monthNameList[month]}</span>
                            <span>/</span>
                            <span>{item.name}</span>
                        </p>
                    }
                    <div className={cls.item__icons}>
                        <i className={classNames("fas fa-pen", cls.item__icon)}/>
                        <i
                            className={classNames("fas fa-trash", cls.item__icon)}
                            onClick={() => {
                                setDaysList(daysList.filter(i => i.name !== item.name))
                                setTrueActive(trueActive.filter(i =>
                                    i.startId !== item.startId && i.finishId !== item.finishId
                                ))
                                // setTotalWeeksCount(totalWeeksCount.map(inner =>
                                //     inner.map(i =>
                                //         (i.id === item.startId) || (i.id === item.finishId) ?
                                //             {...i, checked: false} : i)))
                            }}
                        />
                    </div>
                </div>
            )
        })
    }, [daysList])

    const render = renderWeekDays()
    const renderDays = renderCelebrateDays()

    return (
        <div className={cls.calendarListItem}>
            <div className={cls.inner}>
                <div className={cls.inner__title}>
                    {monthNameList[month]}
                </div>
                <Table extraClass={cls.inner__items}>
                    <thead>
                    <tr>
                        {
                            weekDaysList.map((item, i) =>
                                <th
                                    key={i}
                                    style={{width: `${39 / 7}rem`}}
                                >
                                    <div className={cls.inner__item}>
                                        {item}
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
            <div className={cls.calendarListItem__item}>
                <div className={cls.calendarListItem__title}>
                    {monthNameList[month]}
                </div>
                <div className={cls.calendarListItem__container}>
                    {renderDays}
                </div>
            </div>
        </div>
    )
})

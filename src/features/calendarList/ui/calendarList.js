import {memo, useCallback} from 'react';

import {CalendarListItem} from "entities/calendar";
import {data} from "entities/calendar";

import cls from "./calendarList.module.sass";

export const CalendarList = memo(({setActive, currentData}) => {


    const onActiveDays = (id, value, trueActive, setTrueActive, setDemoActive, i) => {
        let newArr = trueActive.map((item, index) => {
            if (item?.startId && !item?.finishId) {
                const startID = item.startId < id ? item.startId : id
                const finishID = item.startId < id ? id : item.startId
                if (trueActive.filter(i => {
                    // console.log(startID <= i.id && finishID >= i.id)
                    // console.log(startID, "startID")
                    // console.log(i.finishId, "i.id")
                    // console.log(i.finishId, "i.id")
                    // console.log(finishID, "finishID")
                    // console.log(item.startId <= i.startId, "start")
                    // console.log(item.finishId >= i.finishId, "finish")
                    // console.log(i.finishId, "i.finishId")
                    // console.log(item.finishId, "item.finishId")
                    // console.log(i, "i")
                    return item.startId <= i.startId && item?.finishId ? item.finishId : id >= i.finishId
                })[0]) {
                    console.log(true, 1)
                    return item
                } else {
                    setActive(obj => ({
                        ...obj,
                        finishValue: value,
                        startId: startID,
                        finishId: finishID
                    }))
                    return {
                        startId: startID,
                        finishId: finishID
                    }
                }
            } else if (!item?.startId && trueActive[index - 1]?.finishId !== id) {
                if (trueActive.filter(i => id <= i.id && id >= i.id)[0]) {
                    console.log(true, 2)
                    return item
                } else {
                    setActive({id: i, startValue: value, startId: id})
                    return {startId: id}
                }
            } else {
                return item
            }
        })
        const newActives =
            newArr[newArr.length - 1].startId && newArr[newArr.length - 1].finishId ? [...newArr, {}] : newArr
        setTrueActive(newActives)
        setDemoActive([])
    }

    function sortWeeksDays(arr, startDay) {
        let i = 0
        let arrContainer = []
        let totalArr = []
        const whileCount = (arr.length + startDay) <= 35 ? 35 : 42

        while (i < whileCount) {
            if (i < startDay) {
                arrContainer.push("")
            } else {
                if ((i - startDay) < arr.length) {
                    arrContainer.push({id: arr[i - startDay], value: arr[i - startDay]})
                } else arrContainer.push("")
            }
            if (arrContainer.length === 7) {
                totalArr.push(arrContainer)
                arrContainer = []
            }
            i = i + 1
        }
        return totalArr
    }

    const renderMonthList = useCallback(() => {
        return data.map((item, index) => {
            return (
                <CalendarListItem
                    key={index}
                    month={index}
                    setActive={setActive}
                    data={item}
                    onActiveDays={onActiveDays}
                    sortWeeksDays={sortWeeksDays}
                    currentData={currentData.id === index ? currentData : {}}
                />
            )
        })
    }, [currentData, setActive])

    const render = renderMonthList()

    return (
        <div className={cls.calendarList}>
            {render}
        </div>
    )
})

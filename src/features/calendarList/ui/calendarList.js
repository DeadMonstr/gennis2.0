import {memo, useCallback, useEffect, useState} from 'react';

import {CalendarListItem} from "entities/calendar";
import {DefaultPageLoader} from "shared/ui/defaultLoader";

import cls from "./calendarList.module.sass";

export const CalendarList = (props) => {

    const {
        setActive,
        currentData,
        loading,
        data,
        onSubmit,
        onDelete,
        isChanged,
        setIsChanged,
        onSubmitDelete
    } = props

    const [selected, setSelected] = useState([])

    useEffect(() => {
        if (isChanged) {
            setSelected([])
            setIsChanged(false)
        } else {
            if (selected.length) {
                setActive(obj => ({
                    ...obj,
                    days: selected
                }))
            }
        }
    }, [isChanged, selected])

    // useEffect(() => {
    //     if (selected.length && !isChanged) {
    //         setActive(obj => ({
    //             ...obj,
    //             days: selected
    //         }))
    //     }
    // }, [selected, isChanged])

    const onActiveDays = (id, value, trueActive, setTrueActive, setDemoActive, i, selected, obj) => {
        // let newArr = trueActive.map((item, index) => {
        //     if (item?.startId && !item?.finishId) {
        //         const startID = item.startId < id ? item.startId : id
        //         const finishID = item.startId < id ? id : item.startId
        //         // if (trueActive.filter(i => {
        //         //     // console.log(startID <= i.id && finishID >= i.id)
        //         //     // console.log(startID, "startID")
        //         //     // console.log(i.finishId, "i.id")
        //         //     // console.log(i.finishId, "i.id")
        //         //     // console.log(finishID, "finishID")
        //         //     // console.log(item.startId <= i.startId, "start")
        //         //     // console.log(item.finishId >= i.finishId, "finish")
        //         //     // console.log(i.finishId, "i.finishId")
        //         //     // console.log(item.finishId, "item.finishId")
        //         //     // console.log(i, "i")
        //         //     return item.startId <= i.startId && item?.finishId ? item.finishId : id >= i.finishId
        //         // })[0]) {
        //         //     console.log(true, 1)
        //         //     return item
        //         // } else {
        //             setActive(obj => ({
        //                 ...obj,
        //                 finishValue: value,
        //                 startId: startID,
        //                 finishId: finishID,
        //                 selected: selected
        //             }))
        //             console.log(true)
        //             return {
        //                 startId: startID,
        //                 finishId: finishID
        //             }
        //         // }
        //     } else if (!item?.startId && trueActive[index - 1]?.finishId !== id) {
        //         if (trueActive.filter(i => id <= i.id && id >= i.id)[0]) {
        //             console.log(true, 2)
        //             return item
        //         } else {
        //             setActive({id: i, startValue: value, startId: id})
        //             return {startId: id}
        //         }
        //     } else {
        //         return item
        //     }
        // })
        // const newActives =
        //     newArr[newArr.length - 1].startId && newArr[newArr.length - 1].finishId ? [...newArr, {}] : newArr
        // setTrueActive(newActives)
        // setDemoActive([])
        // if (newArr[newArr.length - 1].startId && newArr[newArr.length - 1].finishId) {
        //     setTrueActive([{}])
        //     setDemoActive([])
        // }
        console.log(selected, "selected ewgdf sg")

        let newArr = trueActive.map((item, index) => {
            if (item.startId && !item?.finishId) {
                const startID = item.startId < id ? item.startId : id
                const finishID = item.startId < id ? id : item.startId
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
            } else if (!item?.startId && trueActive[index - 1]?.finishId !== id) {
                return {startId: id}
            } else {
                return item
            }
        })
        const newActives =
            newArr[newArr.length - 1].startId && newArr[newArr.length - 1].finishId ? [...newArr, {}] : newArr
        setTrueActive(newActives)
        setDemoActive([])
    }

    console.log(selected, 'wewegweg')

    function sortWeeksDays(arr, startDay) {
        let newArr = [...arr]?.sort(compareById)
        let i = 0
        let arrContainer = []
        let totalArr = []
        // console.log(arr ,"arr")
        const whileCount = (newArr.length + startDay) <= 35 ? 35 : 42

        while (i < whileCount) {
            if (i < startDay) {
                arrContainer.push("")
            } else {
                if ((i - startDay) < newArr.length) {
                    arrContainer.push({id: newArr[i - startDay], value: newArr[i - startDay]})
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

    function compareById(a, b) {
        return a.id - b.id;
    }

    const renderMonthList = useCallback(() => {
        // console.log(data, "data")
        return data && [...data]?.map((item, index) => {
            // console.log(item, "item")
            return (
                <CalendarListItem
                    key={index}
                    month={index}
                    setActive={setActive}
                    data={item.months}
                    onActiveDays={onActiveDays}
                    sortWeeksDays={sortWeeksDays}
                    currentData={currentData.id === index ? currentData : {}}
                    setSelected={setSelected}
                    onSubmit={onSubmit}
                    isChanged={isChanged}
                    setIsChanged={setIsChanged}
                    onSubmitDelete={onSubmitDelete}
                />
            )
        })
    }, [currentData, data])

    const render = loading ? <DefaultPageLoader/> : renderMonthList()

    return (
        <div className={cls.calendarList}>
            {render}
        </div>
    )
}

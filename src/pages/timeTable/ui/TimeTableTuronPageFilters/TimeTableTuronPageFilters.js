import React, {useEffect, useState} from 'react';


import cls from "./TimeTableTuronPageFilters.module.sass"
import {Button} from "shared/ui/button";
import {Select} from "shared/ui/select";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {
    onChangeColorTimeTable,
    onChangeDayTimeTable, onChangeFilterClassTimeTable,
    onChangeTypeTimeTable
} from "../../model/slice/timeTableTuronSlice";
import {
    getTimeTableTuronColor,
    getTimeTableTuronColors,
    getTimeTableTuronDay,
    getTimeTableTuronType,
    getTimeTableTuronWeekDays
} from "pages/timeTable/model/selectors/timeTableTuronSelectors";
import {fetchTimeTableColors, fetchTimeTableWeekDays} from "pages/timeTable/model/thunks/timeTableTuronThunks";


const TimeTableTuronPageFilters = (props) => {

    const {
        setFullScreen,
        isSelected,
        setIsSelected,
        setClassView,
        groups
    } = props

    const [activeIdColor, setActiveIdColor] = useState(1)

    const dispatch = useDispatch()

    const type = useSelector(getTimeTableTuronType)
    const weekDays = useSelector(getTimeTableTuronWeekDays)
    const day = useSelector(getTimeTableTuronDay)
    const colors = useSelector(getTimeTableTuronColors)
    const color = useSelector(getTimeTableTuronColor)

    useEffect(() => {
        dispatch(fetchTimeTableWeekDays())
        dispatch(fetchTimeTableColors())
    }, [])

    const onChangeColor = (id) => {

        dispatch(onChangeColorTimeTable(id))

    }


    const renderColorTypes = () => {
        return colors?.map(item => {
                return (
                    <div
                        style={{color: item?.value}}
                        className={classNames(cls.colorList__inner, {
                            [cls.active]: +color === item.id
                        })}
                        onClick={() => onChangeColor(item.id)}
                    >
                        {item.name}
                    </div>
                )
            }
        )
    }


    const onChangeType = (type) => {
        setIsSelected()
        dispatch(onChangeTypeTimeTable(type))
    }


    const renderColor = renderColorTypes()


    const onChangeOption = (item) => {
        dispatch(onChangeDayTimeTable(item))
        localStorage.setItem("item", item)
    }


    const onChangeOptionClassLesson = (item) => {
        dispatch(onChangeFilterClassTimeTable(item))
    }

    return (
        <div className={cls.filters}>
            <div className={cls.navigators}>
                <div
                    id="unique-id"
                    className={cls.navigators__inner}
                >
                    <Button
                        onClick={() => onChangeType("group")}
                        type={type === "group" ? "simple" : "simple-add"}
                    >
                        Class
                    </Button>
                    <Button
                        onClick={() => onChangeType("flow")}
                        type={type === "flow" ? "simple" : "simple-add"}
                    >
                        Flow
                    </Button>
                </div>

                <div style={{display: "flex"}}>
                    <Button onClick={() => setFullScreen(true)}>Full screen</Button>
                    <Button onClick={() => setClassView(true)}>Class view</Button>
                </div>

                <Select
                    onChangeOption={onChangeOptionClassLesson}
                    options={groups}
                    title={"filter"}
                />
                <Select
                    defaultValue={day}
                    onChangeOption={onChangeOption}
                    // title={"Kun tanlang"}
                    options={weekDays}
                />
            </div>
            {
                type === "group" && !isSelected && <div className={cls.colorList}>
                    {renderColor}
                </div>
            }

        </div>
    );
};

export default TimeTableTuronPageFilters;
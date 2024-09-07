import React, {useCallback} from 'react';


import cls from "./TimeTableDragItems.module.sass"
import {TimeTableDragItem} from "entities/timeTableTuron/ui/TimeTableDragItem/TimeTableDragItem";

import {Button} from "shared/ui/button";


export const TimeTableDragItems = (props) => {

    const {groups, isSelected, subjects, teachers, selectedSubject,color,setSelectedSubject} = props





    const filteredColors = () => {
        return groups?.filter(item => {
            if (item.type === "group") return item?.color?.id === +color
            return true
        })
    }



    const renderItems = useCallback(() => {
        if (!isSelected) {
            if (!groups.length ) {
                return <h1 style={{color: 'red'}}>Sinflar yoq</h1>
            }
            return filteredColors()?.map(item => {
                return <TimeTableDragItem color={item.type === "group" ? item.color.value : ""} type={"class"} item={item}>{item.name}</TimeTableDragItem>
            })
        } else if (!selectedSubject) {
            if (!subjects.length ) {
                return <h1 style={{color: 'red'}}>Fanlar yoq</h1>
            }

            return subjects.map(item => {
                return <TimeTableDragItem type={"subject"} item={item}>{item.name}</TimeTableDragItem>
            })
        } else {



            return teachers.map(item => {
                return <TimeTableDragItem type={"teacher"} item={item}>{item?.user?.name} {item?.user?.surname}</TimeTableDragItem>
            })
        }
    }, [isSelected,selectedSubject,groups,teachers,color,subjects])


    return (
        <div className={cls.dragItems}>
            {selectedSubject && <Button type={"danger"} onClick={() => setSelectedSubject(null)}>Fanlar</Button>}
            {renderItems()}
        </div>
    );
};


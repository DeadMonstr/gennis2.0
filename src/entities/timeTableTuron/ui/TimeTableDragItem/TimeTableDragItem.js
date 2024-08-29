import React from 'react';
import {Draggable} from "shared/ui/draggable";



import cls from "./TimeTableDragItem.module.sass"


export const TimeTableDragItem = (props) => {


    const {item,children,color} = props









    return (
        <Draggable
            data={{
                type: item.type
            }}
            id={item.dndId}
            extraClass={cls.dnd}

        >
            <div className={cls.class}  style={{backgroundColor: color || null}}>
                {children}
            </div>
        </Draggable>
    )
};

import {useState} from 'react';
import {DndContext} from "@dnd-kit/core"

import {
    TimeTableFilters,
    TimeTableSchedule,
    TimeTableError
} from "entities/timeTable";

import cls from "./timeTable.module.sass";

export const TimeTable = () => {

    const [activeDrag, setActiveDrag] = useState(null)
    const [activeDrop, setActiveDrop] = useState(null)
    const [data, setData] = useState(null)

    const [activeModal, setActiveModal] = useState(false)

    return (
        <DndContext onDragEnd={handleDragEnd} >
            <div className={cls.timeTable}>
                <TimeTableFilters
                    setActiveModal={setActiveModal}
                    activeDrag={activeDrag}
                    setData={setData}
                />
                <TimeTableSchedule
                    subjectData={data}
                    activeDrop={activeDrop}
                />
                <TimeTableError
                    setActive={setActiveModal}
                    active={activeModal}
                />
            </div>
        </DndContext>
    )

    function handleDragEnd(event) {
        const { over, active } = event;
        setActiveDrag(active?.id)
        setActiveDrop(over?.id)
    }
}

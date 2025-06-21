import cls from "./taskManager.module.sass"
import {TaskManagerLeft, TaskManagerRight} from "features/taskManager";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {fetchBranch, fetchTaskManager} from "features/taskManager/modal/taskManagerThunk";
import {formatDate} from "shared/ui/formDate/formDate";



export const TaskManager = () => {

    const dispatch = useDispatch()

    const [selectedDate, setSelectedDate] = useState(new Date())


    const formatted = formatDate(selectedDate)


    useEffect(() => {
        dispatch(fetchTaskManager({date: formatted}))
        dispatch(fetchBranch())
    }, [formatted])


    return (
        <div className={cls.container}>
            <div className={cls.box}>
                <div className={cls.box__header}>
                    <h1 className={cls.box__header_title}>
                        My Projects
                    </h1>
                </div>

                <div className={cls.box__sides}>
                    <TaskManagerLeft formatted={formatted}/>
                    <TaskManagerRight selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>

                </div>
            </div>
        </div>
    );
};


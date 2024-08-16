import {useState} from 'react';
import {useForm} from "react-hook-form";

import {CalendarList} from "features/calendarList"
import {
    CalendarHeader,
    CalendarAdd
} from "entities/calendar";

import cls from "./calendarPage.module.sass";

export const CalendarPage = () => {

    const {register, handleSubmit, setValue} = useForm()
    const [active, setActive] = useState(false)
    const [data, setData] = useState({})

    const onSubmitAdd = (data) => {
        setData({...data, ...active})
        setActive(false)
    }

    return (
        <div className={cls.calendarPage}>
            <CalendarHeader/>
            <CalendarList
                setActive={setActive}
                currentData={data}
            />
            <CalendarAdd
                active={active?.finishValue}
                setActive={setActive}
                onSubmit={handleSubmit(onSubmitAdd)}
                register={register}
                setValue={setValue}
                success={data}
            />
        </div>
    )
}

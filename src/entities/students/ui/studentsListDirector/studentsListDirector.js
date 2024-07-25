import {memo} from 'react';

import {StudentsListItemDirector} from "../studentsListItemDirector/studentsListItemDirector";

import cls from "./studentsListDirector.module.sass";

export const StudentsListDirector = memo(({data}) => {

    const renderStudents = () => {
        return data.map(item =>
            <StudentsListItemDirector
                title={item.title}
                data={item.locations}
            />
        )
    }

    const render = renderStudents()

    return (
        <div className={cls.studentsList}>
            {render}
        </div>
    )
})

import React from 'react';
import {useSelector} from "react-redux";

import {StudentsListDirector} from "entities/students";
import {getStudentsListDirector} from "../../model/selectors/studentsListDirector";

import cls from "./studentsDirectorPage.module.sass";


export const StudentsDirectorPage = () => {

    const data = useSelector(getStudentsListDirector)

    console.log(data, "data")

    return (
        <div className={cls.studentsPage}>
            <StudentsListDirector
                data={data}
            />
        </div>
    )
}

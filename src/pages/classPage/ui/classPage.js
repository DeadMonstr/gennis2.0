import {ClassTable} from "entities/class";
import {ClassHeader} from "entities/class";
import cls from "./classPage.module.sass"
import {ClassFilter} from "entities/class"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {classData, classItems, classTypeNumber} from "../../../entities/class/model/selector/classSelector";
import {classItem, getClassTypeNumber, getClassTypes} from "../../../entities/class/model/thunk/classThunk";
import {Button} from "../../../shared/ui/button";
import {API_URL, headers, useHttp} from "../../../shared/api/base";
import {fetchSubjects, getSubjectsData} from "../../registerPage";

export const ClassPage = ({setEdit, edit, activeEdit, setActiveEdit, activeMenu, setActiveMenu, classes}) => {

    const {request} = useHttp()
    const [selectBox, setSelectBox] = useState([])
    const selectOptions = useSelector(getSubjectsData)


    const dispatch = useDispatch()
    // const classType = useSelector(classTypeNumber)
    const classType = useSelector(classItems)

    // useEffect(() => {
    //     dispatch(classItem())
    //     dispatch(fetchSubjects())
    //     // dispatch(getClassTypeNumber())
    // }, [])

    const id = edit.id


    return (
        <>
            <ClassFilter classesType={classes} setActiveEdit={setActiveEdit} edit={edit} setEdit={setEdit}
                         active={activeMenu} setActive={setActiveMenu}/>
            <ClassTable id={id} selectOptions={selectOptions} active={activeMenu} classType={classType}
                        selectBox={selectBox}
                        setSelectBox={setSelectBox} edit={edit}/>
            {/*<Button onClick={onClick}>Tastiqlash</Button>*/}
        </>
    )
}
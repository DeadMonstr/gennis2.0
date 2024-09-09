import {ClassTable} from "entities/class";
import {ClassFilter} from "entities/class"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {classItems} from "entities/class/model/selector/classSelector";
import {useHttp} from "shared/api/base";
import {fetchClassSubjects} from "entities/class/model/thunk/classThunk";

export const ClassPage = ({setEdit, edit, activeEdit, setActiveEdit, activeMenu, setActiveMenu, classes}) => {

    const {request} = useHttp()
    const [selectBox, setSelectBox] = useState([])



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
            <ClassTable id={id}  active={activeMenu} classType={classType}
                        selectBox={selectBox}
                        setSelectBox={setSelectBox} edit={edit}/>
            {/*<Button onClick={onClick}>Tastiqlash</Button>*/}
        </>
    )
}
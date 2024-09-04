import {ClassHeader} from "../../../entities/class";
import {useEffect, useState} from "react";
import cls from "./classPage.module.sass";
import {ClassPage} from "./classPage";
import {ClassAddColorPage} from "./classAddColorPage";
import {useDispatch, useSelector} from "react-redux";
import {classData, colorItem} from "../../../entities/class/model/selector/classSelector";
import {getClassTypes, getColor} from "../../../entities/class/model/thunk/classThunk";


export const ClassMain = () => {

    const classes = useSelector(classData)
    const color = useSelector(colorItem)
    const [activeMenu, setActiveMenu] = useState(classes[0])
    const [edit, setEdit] = useState({})
    const [activeEdit, setActiveEdit] = useState(false)


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getClassTypes())
        dispatch(getColor())
    }, [])
    const [activeSwitch, setActiveSwitch] = useState(true)


    return (
        <div className={cls.class}>
            <ClassHeader
                activeMenu={activeMenu}
                activeEdit={activeEdit}
                setActiveEdit={setActiveEdit}
                edit={edit}
                setEdit={setEdit}
                activeSwitch={activeSwitch}
                setActiveSwitch={setActiveSwitch}
            />

            {activeSwitch ?
                <ClassPage
                    setActiveEdit={setActiveEdit}
                    classes={classes}
                    setActiveMenu={setActiveMenu}
                    activeMenu={activeMenu}
                    activeEdit={activeEdit}
                    edit={edit}
                    setEdit={setEdit}
                />
                :
                <ClassAddColorPage
                    color={color}
                />
            }
        </div>
    );
};


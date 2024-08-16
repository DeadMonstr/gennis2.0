import cls from "./locations.module.sass"
import {Button} from "shared/ui/button";
import React, {useEffect, useState} from "react";
import {ModalLocation} from "../modals/modal";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {getSystemName} from "../../model/selector/systemSelector";

import {getLocationThunk} from "../../model/thunk/locationSlice";
import {getLocation} from "../../model/selector/locationSelector";


export const Location = () => {

    const [activeLocationModal, setActiveLocationModal] = useState(false)

    const getName = useSelector(getLocation)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLocationThunk())
    }, [])


    console.log(getName)

    const onAdd = () => {
        console.log("hello")
    }

    return (
        <div className={cls.location}>
            <div className={cls.location__wrapper}>
                {getName?.map(item => (
                    <div className={cls.locationsBox}>
                        <div className={cls.locationHeader}>
                            <h2>{item.name}</h2>
                            <Button onClick={() => setActiveLocationModal(!activeLocationModal)} type={"editPlus"}
                                    children={<i className={"fa fa-pen"}/>}/>
                        </div>
                        <div className={cls.location__info}>
                            <h2>{item.number}</h2>
                            <span>
                            {item.old_id}
                        </span>
                        </div>
                    </div>
                ))}
            </div>


            <i onClick={onAdd} className={classNames("fa fa-plus", cls.plus)}></i>
            <ModalLocation activeModal={activeLocationModal} setActive={setActiveLocationModal}/>
        </div>
    );
};


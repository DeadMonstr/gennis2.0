import cls from "../location/locations.module.sass";
import {Button} from "shared/ui/button";
import {ModalBranch, ModalSystem} from "../modals/modal";
import React, {useEffect, useState} from "react";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {getSystemName} from "../../model/selector/systemSelector";
import {getSystemThunk} from "../../model/thunk/systemThunk";

export const System = () => {
    const [activeLocationModal, setActiveLocationModal] = useState(false)

    const getName = useSelector(getSystemName)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSystemThunk())
    }, [])


    console.log(getName)

    const onAdd = () => {
        console.log("hello")
    }

    return (
        <div>
            <div className={cls.location}>
                <div className={cls.location__wrapper}>
                    {getName.map(item => (
                        <div className={cls.locationsBox}>
                            <div className={cls.locationHeader}>
                                <h2>{item?.name}</h2>
                                <Button onClick={() => setActiveLocationModal(!activeLocationModal)} type={"editPlus"}
                                        children={<i className={"fa fa-pen"}/>}/>
                            </div>
                            <div className={cls.location__info}>
                            <span>
                            {item?.number}
                        </span>
                            </div>
                        </div>
                    ))}


                </div>


                <i onClick={onAdd} className={classNames("fa fa-plus", cls.plus)}></i>

                <ModalSystem activeModal={activeLocationModal} setActive={setActiveLocationModal}/>
            </div>
        </div>
    );
};


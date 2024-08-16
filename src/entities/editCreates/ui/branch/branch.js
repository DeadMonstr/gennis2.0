import cls from "../location/locations.module.sass";
import {Button} from "shared/ui/button";
import {ModalBranch} from "../modals/modal";
import React, {useEffect, useState} from "react";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {getSystemName} from "../../model/selector/systemSelector";
import {getSystemThunk} from "../../model/thunk/systemThunk";
import {getBranchThunk} from "../../model/thunk/branchThunk";

export const Branch = () => {
    const [activeLocationModal, setActiveLocationModal] = useState(false)

    const getName = useSelector(getSystemName)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBranchThunk())
    }, [])


    console.log(getName)
    const onAdd = () => {
        console.log("hello")
    }

    return (
        <div>
            <div className={cls.location}>
                <div className={cls.locations__wrapper}>
                    <div className={cls.locationsBox}>
                        <div className={cls.locationHeader}>
                            <h2>Location</h2>
                            <Button onClick={() => setActiveLocationModal(!activeLocationModal)} type={"editPlus"}
                                    children={<i className={"fa fa-pen"}/>}/>
                        </div>
                        <div className={cls.location__info}>
                            <h2>Number</h2>
                            <span>
                            System_id2
                        </span>
                        </div>
                    </div>
                </div>


                <i onClick={onAdd} className={classNames("fa fa-plus", cls.plus)}></i>

                <ModalBranch activeModal={activeLocationModal} setActive={setActiveLocationModal}/>
            </div>
        </div>
    );
};


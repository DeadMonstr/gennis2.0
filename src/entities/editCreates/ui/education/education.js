import React, {useState} from "react";
import cls from "../location/locations.module.sass";
import {Button} from "../../../../shared/ui/button";
import classNames from "classnames";
import {ModalEducation, ModalLocation} from "../modals/modal";

export const Education = () => {

    const [activeLocationModal, setActiveLocationModal] = useState(false)


    const onAdd = () => {
        console.log("hello")
    }

    return (
        <div className={cls.location}>
            <div className={cls.locations__wrapper}>
                <div style={{width: "fit-content"}} className={cls.locationsBox}>
                    <div className={cls.locationHeader}>
                        <h2>Education_language</h2>
                        <Button onClick={() => setActiveLocationModal(!activeLocationModal)} type={"editPlus"}
                                children={<i className={"fa fa-pen"}/>}/>
                    </div>
                    <div className={cls.location__info}>
                        <h2>Number</h2>

                    </div>
                </div>
            </div>


            <i onClick={onAdd} className={classNames("fa fa-plus", cls.plus)}></i>
            <ModalEducation activeModal={activeLocationModal} setActive={setActiveLocationModal}/>
        </div>
    );
};

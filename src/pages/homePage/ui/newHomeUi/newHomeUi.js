import cls from "./newHomeUi.module.sass"
import {NewHomeAdmissions, NewHomeHeader, NewHomeMain} from "entities/newHomeUi";
import {useState} from "react";


export const NewHomeUi = () => {

    const [sectionTop, setSectionTop] = useState({
        home: null,
        about: null,
        advantages: null,
        comments: null,
        events: null,
        gallery: null,
        contact: null
    })

    return (
        <div className={cls.wrapper}>

            <NewHomeHeader/>
            <div className={cls.wrapper__container}>
                <NewHomeMain/>
                <NewHomeAdmissions/>
            </div>

        </div>
    );
};


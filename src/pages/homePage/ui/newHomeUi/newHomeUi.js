import cls from "./newHomeUi.module.sass"
import {NewHomeAdmissions, NewHomeHeader, NewHomeMain} from "entities/newHomeUi";
import {useState} from "react";


export const NewHomeUi = () => {
    return (
        <div className={cls.wrapper}>

            {/*<NewHomeHeader/>*/}
            <section id="homepage">
                <NewHomeHeader/>
            </section>
            <div className={cls.wrapper__container}>
                {/* Submenu scroll targetlari */}
                <section id="homepage">
                    <NewHomeMain/>
                </section>

                <section id="events">
                    <div style={{ height: "100vh", padding: "100px" }}>Events content</div>
                </section>

                <section id="slider">
                    <div style={{ height: "100vh", padding: "100px" }}>Slider content</div>
                </section>


                {/* Admissions (ariza) */}
                <section id="quickLinks">
                    <NewHomeAdmissions/>
                </section>
            </div>

        </div>
    );
};


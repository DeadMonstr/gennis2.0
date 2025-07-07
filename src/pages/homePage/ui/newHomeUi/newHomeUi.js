import cls from "./newHomeUi.module.sass"
import {
    NewHomeCurriculum,
    NewHomeDailyLife,
    NewHomeFileDownload,
    NewHomeHeader,
    NewHomePrincipal
} from "entities/newHomeUi";

import {NewHomeAdmissions, NewHomeHeader, NewHomeMain} from "entities/newHomeUi";
import {useState} from "react";
import {Route, Routes} from "react-router";


export const NewHomeUi = () => {
    return (
        <div className={cls.wrapper}>

            {/*<NewHomeHeader/>*/}
            <section id="homepage">
                <NewHomeHeader/>
            </section>
            <Routes>
                <Route path={"/"} element={<>
                    <div className={cls.wrapper__container}>
                        {/* Submenu scroll targetlari */}
                        <section id="homepage">
                            <NewHomeMain/>
                        </section>

                        <section id="events">
                            <div style={{height: "100vh", padding: "100px"}}>Events content</div>
                        </section>

                        <section id="slider">
                            <div style={{height: "100vh", padding: "100px"}}>  <NewHomeCurriculum/></div>
                        </section>


                        {/* Admissions (ariza) */}
                        <section id="quickLinks">
                            <NewHomeAdmissions/>
                        </section>
                    </div>
                </>}/>
            </Routes>

        </div>
    );
};


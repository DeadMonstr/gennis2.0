import cls from "./newHomeUi.module.sass"
import {
    NewHomeCurriculum,
    NewHomeDailyLife,
    NewHomeFileDownload,
    NewHomeHeader,
    NewHomePrincipal,
    NewHomeMain,
    NewHomeAdmissions, NewHomeClubs
} from "entities/newHomeUi";

import {Route, Routes} from "react-router";


export const NewHomeUi = () => {
    return (
        <div className={cls.wrapper}>

            {/*<NewHomeHeader/>*/}

                <NewHomeHeader/>

            <div className={cls.wrapper__container}>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/student_life"} element={<NewHomeClubs/>}/>
                </Routes>
            </div>

        </div>
    );
};

const Home = () => {
    return (
        <>
            <section id="homepage">
                <NewHomeMain/>
            </section>

            <section id="events">
                <div ><NewHomePrincipal/></div>
            </section>

            <section id="slider">
                <div><NewHomeDailyLife/></div>
            </section>


            {/* Admissions (ariza) */}
            <section id="quickLinks">
                <NewHomeAdmissions/>
            </section>
        </>
    )
}



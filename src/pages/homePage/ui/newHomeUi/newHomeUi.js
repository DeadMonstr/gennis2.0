import cls from "./newHomeUi.module.sass"
import {
    NewHomeCurriculum,
    NewHomeDailyLife,
    NewHomeFileDownload,
    NewHomeHeader,
    NewHomePrincipal,
    NewHomeMain,
    NewHomeAdmissions, NewHomeClubs, NewHomeGrade, NewHomeAssessment, NewHomeFaculty, NewHomeContact
} from "entities/newHomeUi";

import {Route, Routes} from "react-router";
import {SchoolHomeContact} from "entities/schoolHome";


export const NewHomeUi = () => {
    return (
        <div className={cls.wrapper}>

            {/*<NewHomeHeader/>*/}

                <NewHomeHeader/>

            <div className={cls.wrapper__container}>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/student_life"} element={<NewHomeClubs/>}/>
                    <Route path={"/academics"} element={<Academics/>}/>
                    <Route path={"/faculty"} element={<NewHomeFaculty/>}/>
                    <Route path={"/contact"} element={<SchoolHomeContact/>}/>
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
                {/*<div ><NewHomePrincipal/></div>*/}
            </section>
            <section id="slider">
                {/*<div><NewHomeDailyLife/></div>*/}
            </section>
            <section id="quickLinks">
                <NewHomeAdmissions/>
            </section>
        </>
    )
}

const Academics = () => {
    return (
        <>
            <NewHomeCurriculum/>
            <NewHomeGrade/>
            <NewHomeAssessment/>
        </>
    )
}

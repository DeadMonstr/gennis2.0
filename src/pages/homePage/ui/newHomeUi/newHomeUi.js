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
                    <Route path={"/student_life"} element={<StudentLife/>}/>
                </Routes>
            </div>

        </div>
    );
};

const Home = () => {
    return (
        <div className={cls.wrapper__container}>
            {/* Submenu scroll targetlari */}
            <section id="homepage">
                <NewHomeMain/>
            </section>

            <section id="events">
                <div ><NewHomePrincipal/></div>
            </section>

            <section id="slider">
                <div >  <NewHomeDailyLife/></div>
            </section>


            {/* Admissions (ariza) */}
            <section id="quickLinks">
                <NewHomeAdmissions/>
            </section>
        </div>
    )
}


const StudentLife = () => {
    return (
        <div className={cls.wrapper__container}>
            {/* Submenu scroll targetlari */}
                <NewHomeClubs/>
            {/*<section id="sports_and_arts">*/}
            {/*    <div ><NewHomePrincipal/></div>*/}
            {/*</section>*/}

            {/*<section id="school_trips">*/}
            {/*    <div >  <NewHomeDailyLife/></div>*/}
            {/*</section>*/}


            {/*/!* Admissions (ariza) *!/*/}
            {/*<section id="competitions">*/}
            {/*    <NewHomeAdmissions/>*/}
            {/*</section>*/}
            {/*<section id="student_council">*/}
            {/*    <NewHomeAdmissions/>*/}
            {/*</section>*/}
        </div>
    )
}
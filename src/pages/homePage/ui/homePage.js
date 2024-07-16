import React, {useState} from 'react';

import {Home} from "entities/home/ui/home";
import {HomeHeader} from "entities/home/ui/homeHeader";
import {HomeAbout} from "entities/home/ui/homeAbout";
import {Course} from "entities/home/ui/course";
import {HomeAdvantages} from "entities/home/ui/homeAdvantages/ui/homeAdvantages";
import {Results} from "entities/home/ui/homeResults";
import {HomeTeachers} from "../../../entities/home/ui/homeTeachers";
import {HomeNews} from "../../../entities/home/ui/homeNews";
import {Contact} from "../../../entities/home/ui/contact";

import cls from "./homePage.module.sass"
export const Context = React.createContext()

export const HomePage = () => {

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
        <>
            <Context.Provider value={{setSectionTop  ,sectionTop}}>
                <div className={cls.homeMain}>

                    <Home/>
                    <HomeAbout/>
                    <Course/>
                    <Results/>
                    <HomeTeachers/>
                    <HomeNews/>
                    <HomeAdvantages/>
                    <Contact/>
                </div>
            </Context.Provider>
        </>


    );
};

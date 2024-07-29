import React, {useState} from 'react';

import {
    Home,
    Course,
    Contact,
    Results,
    HomeNews,
    HomeAbout,
    HomeHeader,
    HomeTeachers,
    HomeAdvantages
} from "entities/home";

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
                    <HomeHeader/>
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

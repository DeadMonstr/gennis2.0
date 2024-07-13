import React from 'react';
import {Home} from "entities/home/ui/home";
import {HomeHeader} from "entities/home/ui/homeHeader";
import {HomeAbout} from "entities/home/ui/homeAbout";
import {Course} from "entities/home/ui/course";
import {HomeAdvantages} from "entities/home/ui/homeAdvantages/ui/homeAdvantages";
import {Results} from "entities/home/ui/homeResults";
import {HomeTeachers} from "../../../entities/home/ui/homeTeachers";
import {HomeNews} from "../../../entities/home/ui/homeNews";
import {Contact} from "../../../entities/home/ui/contact";

export const HomePage = () => {
    return (
        <div>
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
    );
};

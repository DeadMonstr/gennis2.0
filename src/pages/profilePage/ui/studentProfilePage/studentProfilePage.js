import {useState, createContext, useMemo} from 'react';
import classNames from "classnames";

import {
    ProfileInfo,
    ProfileRating,
    ProfileReward,
    ProfileSubjects,
    ProfileTeachers,
    ProfileAttendance,
    ProfileTotalAmount, ProfileAmountPath
} from "entities/studentProfile";

import cls from "./studentProfilePage.module.sass";

export const Context = createContext(null)

export const StudentProfilePage = () => {

    const [active, setActive] = useState(false)

    const contextObj = useMemo(() => ({
        active,
        setActive
    }), [active])

    return (
        <Context.Provider value={contextObj}>
            <div
                className={classNames(cls.profile, {
                    [cls.active]: active
                })}
            >
                <ProfileInfo/>
                <div
                    className={classNames(cls.profile__mainContent, {
                        [cls.active]: active
                    })}
                >
                    <ProfileTeachers/>
                    <ProfileRating/>
                    <ProfileReward/>
                    <ProfileSubjects/>
                    <ProfileAttendance/>
                </div>
                <div
                    className={classNames(cls.profile__otherContent, {
                        [cls.active]: active
                    })}
                >
                    <ProfileAmountPath/>
                    <ProfileTotalAmount/>
                </div>
            </div>
        </Context.Provider>

    );
};

import {useState, createContext, useMemo} from 'react';
import classNames from "classnames";

import {
    StudentProfileInfo,
    StudentProfileRating,
    StudentProfileReward,
    StudentProfileSubjects,
    StudentProfileTeachers,
    StudentProfileAttendance,
    StudentProfileTotalAmount,
    StudentProfileAmountPath,
    StudentProfileTotalRating,
    StudentProfileGroupsHistory, StudentProfileTotalAttendance
} from "entities/profile";

import cls from "./studentProfilePage.module.sass";

export const ContextStuPro = createContext(null)

export const StudentProfilePage = () => {

    const [active, setActive] = useState(false)

    const contextObj = useMemo(() => ({
        active,
        setActive
    }), [active])

    return (
        <ContextStuPro.Provider value={contextObj}>
            <div
                className={classNames(cls.profile, {
                    [cls.active]: active
                })}
            >
                <StudentProfileInfo/>
                <div
                    className={classNames(cls.profile__mainContent, {
                        [cls.active]: active
                    })}
                >
                    <StudentProfileTeachers/>
                    <StudentProfileRating/>
                    <StudentProfileReward/>
                    <StudentProfileSubjects/>
                    <StudentProfileAttendance/>
                </div>
                <div
                    className={classNames(cls.profile__otherContent, {
                        [cls.active]: active
                    })}
                >
                    <StudentProfileTotalAmount/>
                    <StudentProfileAmountPath/>
                    <StudentProfileTotalRating/>
                    <StudentProfileGroupsHistory/>
                    <StudentProfileTotalAttendance/>
                </div>
            </div>
        </ContextStuPro.Provider>
    )
}

import {useState} from 'react';
import classNames from "classnames";

import {
    StudentProfileInfo,
    StudentProfileRating,
    StudentProfileReward,
    StudentProfileSubjects,
    StudentProfileTeachers,
    StudentProfileAmountPath,
    StudentProfileAttendance,
    StudentProfileTotalRating,
    StudentProfileTotalAmount,
    StudentProfileGroupsHistory,
    StudentProfileTotalAttendance
} from "entities/profile/studentProfile";

import cls from "./studentProfilePage.module.sass";

export const StudentProfilePage = () => {

    const [active, setActive] = useState(false)

    return (
        <div
            className={classNames(cls.profile)}
        >
            <StudentProfileInfo setActive={setActive}/>
            <div
                className={classNames(cls.profile__mainContent, {
                    [cls.active]: active
                })}
            >
                <StudentProfileTeachers/>
                <StudentProfileRating setActive={setActive}/>
                <StudentProfileReward/>
                <StudentProfileSubjects setActive={setActive}/>
                <StudentProfileAttendance setActive={setActive}/>
            </div>
            <div
                className={classNames(cls.profile__otherContent, {
                    [cls.active]: active
                })}
            >
                <StudentProfileTotalAmount
                    active={active}
                    setActive={setActive}
                />
                <StudentProfileAmountPath
                    active={active}
                    setActive={setActive}
                />
                <StudentProfileTotalRating
                    active={active}
                    setActive={setActive}
                />
                <StudentProfileGroupsHistory
                    active={active}
                    setActive={setActive}
                />
                <StudentProfileTotalAttendance
                    active={active}
                    setActive={setActive}
                />
            </div>
        </div>
    )
}

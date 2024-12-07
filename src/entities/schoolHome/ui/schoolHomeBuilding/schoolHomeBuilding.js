import React from 'react';

import cls from "./schoolHomeBuilding.module.sass";
import image from "shared/assets/images/studentBuilding.png";
import iconImage1 from "shared/assets/images/studentBuildImage1.png";
import classNames from "classnames";

export const SchoolHomeBuilding = () => {
    return (
        <div className={cls.building}>
            <div className={cls.building__header}>
                <h1>Student Profile - Building Tomorrow's Leaders</h1>
                <p>
                    "At Turon International School, we are committed to developing well-rounded
                    individuals. We believe that fostering essential <br/>
                    traits such as collaboration, critical thinking, and innovation in our students
                    is the foundation for academic and personal <br/>
                    success. Once these qualities are nurtured, education becomes an easier and
                    more enriching journey."
                </p>
            </div>
            <div className={cls.container}>
                <div className={cls.container__list}>
                    <div className={cls.item}>
                        <div className={cls.item__info}>
                            <h2>Collaborator (Jamoada hamkorlikda ishlovchi</h2>
                            <p>
                                Our students learn the value of teamwork, respect diverse perspectives,
                                and contribute effectively to group success.
                            </p>
                        </div>
                        <div className={cls.item__image}>
                            <img src={iconImage1} alt=""/>
                        </div>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.item__info}>
                            <h2>Collaborator (Jamoada hamkorlikda ishlovchi</h2>
                            <p>
                                Our students learn the value of teamwork, respect diverse perspectives,
                                and contribute effectively to group success.
                            </p>
                        </div>
                        <div className={cls.item__image}>
                            <img src={iconImage1} alt=""/>
                        </div>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.item__info}>
                            <h2>Collaborator (Jamoada hamkorlikda ishlovchi</h2>
                            <p>
                                Our students learn the value of teamwork, respect diverse perspectives,
                                and contribute effectively to group success.
                            </p>
                        </div>
                        <div className={cls.item__image}>
                            <img src={iconImage1} alt=""/>
                        </div>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.item__info}>
                            <h2>Collaborator (Jamoada hamkorlikda ishlovchi</h2>
                            <p>
                                Our students learn the value of teamwork, respect diverse perspectives,
                                and contribute effectively to group success.
                            </p>
                        </div>
                        <div className={cls.item__image}>
                            <img src={iconImage1} alt=""/>
                        </div>
                    </div>
                </div>
                <img src={image} alt=""/>
                <div className={cls.container__list}>
                    <div className={classNames(cls.item, {
                        [cls.reverse]: true
                    })}>
                        <div className={cls.item__info}>
                            <h2>Collaborator (Jamoada hamkorlikda ishlovchi</h2>
                            <p>
                                Our students learn the value of teamwork, respect diverse perspectives,
                                and contribute effectively to group success.
                            </p>
                        </div>
                        <div className={cls.item__image}>
                            <img src={iconImage1} alt=""/>
                        </div>
                    </div>
                    <div className={classNames(cls.item, {
                        [cls.reverse]: true
                    })}>
                        <div className={cls.item__info}>
                            <h2>Collaborator (Jamoada hamkorlikda ishlovchi</h2>
                            <p>
                                Our students learn the value of teamwork, respect diverse perspectives,
                                and contribute effectively to group success.
                            </p>
                        </div>
                        <div className={cls.item__image}>
                            <img src={iconImage1} alt=""/>
                        </div>
                    </div>
                    <div className={classNames(cls.item, {
                        [cls.reverse]: true
                    })}>
                        <div className={cls.item__info}>
                            <h2>Collaborator (Jamoada hamkorlikda ishlovchi</h2>
                            <p>
                                Our students learn the value of teamwork, respect diverse perspectives,
                                and contribute effectively to group success.
                            </p>
                        </div>
                        <div className={cls.item__image}>
                            <img src={iconImage1} alt=""/>
                        </div>
                    </div>
                    <div className={classNames(cls.item, {
                        [cls.reverse]: true
                    })}>
                        <div className={cls.item__info}>
                            <h2>Collaborator (Jamoada hamkorlikda ishlovchi</h2>
                            <p>
                                Our students learn the value of teamwork, respect diverse perspectives,
                                and contribute effectively to group success.
                            </p>
                        </div>
                        <div className={cls.item__image}>
                            <img src={iconImage1} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import doctor from "shared/assets/images/studentCouncil.svg"
import logo from "shared/assets/images/studentCouncilLogo.svg"
import cls from "./studentConcul.module.sass";
import image from "../../../../shared/assets/images/championImage.png";
import React from "react";


const data = [
    {title: "Begzod Jumaniyozov", img: doctor},
    {title: "Begzod Jumaniyozov", img: doctor},
    {title: "Begzod Jumaniyozov", img: doctor},
]


const council = [
    {title: "What is Lorem Ipsum?", img: logo},
    {title: "What is Lorem Ipsum?", img: logo},
    {title: "What is Lorem Ipsum?", img: logo},

]


export const StudentCouncil = () => {
    return (
        <div className={cls.champions}>
            <div className={cls.champions__title}>
                <h1>Studen council</h1>
                <div className={cls.champions__locations}>
                    <span>Chirchiq</span>
                    <span>Chirchiq</span>
                    <span>Chirchiq</span>
                </div>
            </div>

            <div className={cls.champions__container}>
                {data.map(item => (
                    <div className={cls.champions__container_box}>
                        <img src={item.img} alt=""/>

                        <div className={cls.champions__container_box_info}>
                            <h2>{item.title}</h2>

                            <div>
                                School president
                            </div>

                        </div>

                    </div>
                ))}
            </div>

            <div className={cls.champions__footer}>
                {council.map(item => (
                    <div className={cls.champions__footer_box}>
                        <div className={cls.champions__footer_box_img}>
                            <img src={item.img} alt=""/>
                        </div>
                        <div className={cls.champions__footer_box_info}>
                            <h2>{item.title}</h2>

                            <div>
                                200 members
                            </div>

                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

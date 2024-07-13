import cls from "./homeAdvantages.module.sass"
import img1 from "shared/assets/images/photo_2023-11-22_16-14-45.jpg"
import img2 from "shared/assets/images/photo_2023-11-22_16-14-53.jpg"
import img3 from "shared/assets/images/photo_2023-11-22_16-32-58.jpg"
import img4 from "shared/assets/images/photo_2023-11-22_16-30-42.jpg"
import img from "../../../../../shared/assets/images/login-page-4468581-3783954 1.svg";
import React from "react";


const advantagesData = [
    {img: img1 , advantagesTitle: "Co-Working Zone" , advantagesSubTitle: "lorem ipsum dolor sit amet"},
    {img: img2 , advantagesTitle: "Friendly atmosphere" , advantagesSubTitle: "lorem ipsum dolor sit amet"},
    {img: img3 , advantagesTitle: "Different interesting events" , advantagesSubTitle: "lorem ipsum dolor sit amet"},
    {img: img4 , advantagesTitle: "Football games in 3 branches\n" , advantagesSubTitle: "lorem ipsum dolor sit amet"},
    {img: img4 , advantagesTitle: "Football games in 3 branches\n" ,},
]
export const HomeAdvantages = () => {
    return (
        <div className={cls.advantages}>

                <div className={cls.advantages__wrapper}>

                    {advantagesData.map((item) => {
                        return (
                            <div className={cls.advantages__box}>
                                <h2>{item.advantagesTitle}</h2>
                                <div className={cls.advantages__box_item}>
                                    <div className={cls.advantages__box_img}>
                                        <img src={item.img} alt=""/>
                                    </div>
                                    {item.advantagesSubTitle?.length >1 ? <div className={cls.advantages__box_info}>
                                        {item.advantagesSubTitle}
                                    </div> : null}

                                </div>
                            </div>
                        )
                    })}
                </div>

        </div>
    );
};


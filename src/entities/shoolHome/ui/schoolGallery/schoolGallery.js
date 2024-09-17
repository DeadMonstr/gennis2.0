import React from 'react';
import cls from './schoolGallery.module.sass'
import back from 'shared/assets/images/4k-basketball-6kdg85ia8zm4jpqc.jpg'
import {galleryList} from "../../model/consts/consts";

export const SchoolGallery = () => {
    return (
        <div className={cls.main}>
            <div className={cls.sectionTitle}>
                <h1 className={cls.sectionTitle_title}>gallery</h1>
            </div>
            <div className={cls.galleryBox}>
                <div className={cls.galleryBox_title}>
                    <h1>Our <br/> project</h1>
                </div>
                {
                    galleryList.map((item,index) => (
                        <div className={cls.galleryBox_galleryContainer}>
                            <div className={cls.galleryBox_galleryContainer_handlerBox}>
                                <h3>{item.name}</h3>
                            </div>
                            <img src={item.src} alt="" className={cls.galleryBox_galleryContainer_img}/>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

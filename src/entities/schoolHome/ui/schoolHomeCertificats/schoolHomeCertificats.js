import React, {memo} from 'react';

import cls from "./schoolHomeCertificats.module.sass";
import image1 from "shared/assets/images/turonIGCSE.png";

export const SchoolHomeCertificats = memo(() => {
    return (
        <div className={cls.certificats}>
            <h2 className={cls.certificats__title}>Certificats</h2>
            <div className={cls.item}>
                <div className={cls.item__container}>
                    <img src={image1} alt=""/>
                    <div className={cls.item__inner}>
                        <h2 className={cls.item__title}>
                            IGCSE
                        </h2>
                        <p className={cls.item__text}>
                            Cambridge IGCSE is the world’s most popular international curriculum for 14-16 year olds,
                            leading to globally recognised and valued Cambridge IGCSE qualifications. It is part of the
                            Cambridge Secondary 2 stage. Schools worldwide have helped develop Cambridge IGCSE, which
                            provides excellent preparation for the Cambridge Advanced stage including Cambridge
                            International AS and A Levels and Cambridge Pre-U, as well as other progression routes. It
                            incorporates the best in international education for learners at this level. It develops in
                            line with changing needs, and is regularly updated and extended.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
})
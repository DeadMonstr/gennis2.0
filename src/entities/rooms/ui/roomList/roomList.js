import React, { useState, useEffect } from 'react';
import cls from "./roomsList.module.sass";
import { Switch } from "shared/ui/switch";
import {SkeletonCard} from "shared/ui/roomsSkeleton/ui/roomsSkeleton";

export const RoomsList = ({ currentTableData }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className={cls.skeletonContainer}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))}
            </div>
        );
    }

    return currentTableData.map((item, index) => (
        <div key={index} className={cls.mainContainer_tablePanelBox_cardBox}>
            <div className={cls.mainContainer_tablePanelBox_cardBox_imgBox}>
                <img src={item.icon} alt="" className={cls.mainContainer_tablePanelBox_cardBox_imgBox_img}/>
            </div>
            <div className={cls.mainContainer_tablePanelBox_cardBox_articleBox}>
                <div className={cls.mainContainer_tablePanelBox_cardBox_articleBox_sitterBox}>
                    <h2 className={cls.mainContainer_tablePanelBox_cardBox_articleBox_sitterBox_sitterArticle}>O'rindiqlar soni</h2>
                    <h2 className={cls.mainContainer_tablePanelBox_cardBox_articleBox_sitterBox_sitterCounter}>{item.sitterNumber}</h2>
                </div>
                <div className={cls.mainContainer_tablePanelBox_cardBox_articleBox_boardBox}>
                    <h2 className={cls.mainContainer_tablePanelBox_cardBox_articleBox_boardBox_isBoard}>Elektron doska</h2>
                    <Switch/>
                </div>
                <div className={cls.mainContainer_tablePanelBox_cardBox_articleBox_roomNumBox}>
                    <h2 className={cls.mainContainer_tablePanelBox_cardBox_articleBox_roomNumBox_roomNum}>{item.roomNumber}-xona</h2>
                </div>
            </div>
        </div>
    ));
};

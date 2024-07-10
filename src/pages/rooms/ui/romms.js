import React, { useMemo, useState, useCallback } from 'react';
import cls from "./rooms.module.sass";
import Button from "shared/ui/button/button";
import { Select } from "shared/ui/select";
import {Pagination} from "features/pagination";
import Rooms_icon from "shared/assets/images/room_image.svg"
import {Switch} from "shared/ui/switch";

const users = [
    {
        icon: Rooms_icon,
        sitterNumber: "13",
        roomNumber: "12"
    },
    {
        icon: Rooms_icon,
        sitterNumber: "13",
        roomNumber: "12"
    },
    {
        icon: Rooms_icon,
        sitterNumber: "13",
        roomNumber: "12"
    },
    {
        icon: Rooms_icon,
        sitterNumber: "13",
        roomNumber: "12"
    }


];

export const Rooms = () => {
    const [active, setActive] = useState("");
    const PageSize = useMemo(() => 10, []);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState("");
    const [currentTableData, setCurrentTableData] = useState([])


    const handleChange = (value) => {
        setSelected(value);
    };


    const renderCurrentTableDate = useCallback( () => {
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
    }, [currentTableData]);

    const currentTable = renderCurrentTableDate()

    return (
        <div className={cls.mainContainer}>
            <div className={cls.mainContainer_buttonPanelBox}>
                <div className={cls.mainContainer_buttonPanelBox_leftCreateButton}>

                </div>
                <Select />
            </div>
            <div className={cls.mainContainer_filterPanelBox}>
                <Button extraClass={cls.extraCutClassFilter}>Filter</Button>
                <div className={cls.mainContainer_filterPanelBox_rightFilterRadioGroupBox}>
                </div>
            </div>
            <div className={cls.mainContainer_tablePanelBox}>
                {/*{*/}
                {/*    users.map((item, index) => {*/}
                {/*    return (*/}
                {/*        <div key={index+1} className={cls.mainContainer_tablePanelBox_cardBox}>*/}
                {/*            <div className={cls.mainContainer_tablePanelBox_cardBox_imgBox}>*/}
                {/*                <img src={item.icon} alt="" className={cls.mainContainer_tablePanelBox_cardBox_imgBox_img}/>*/}
                {/*            </div>*/}
                {/*            <div className={cls.mainContainer_tablePanelBox_cardBox_articleBox}>*/}
                {/*                <div className={cls.mainContainer_tablePanelBox_cardBox_articleBox_sitterBox}>*/}
                {/*                    <h2 className={cls.mainContainer_tablePanelBox_cardBox_articleBox_sitterBox_sitterArticle}>O'rindiqlar soni</h2>*/}
                {/*                    <h2 className={cls.mainContainer_tablePanelBox_cardBox_articleBox_sitterBox_sitterCounter}>{item.sitterNumber}</h2>*/}
                {/*                </div>*/}
                {/*                <div className={cls.mainContainer_tablePanelBox_cardBox_articleBox_boardBox}>*/}
                {/*                    <h2 className={cls.mainContainer_tablePanelBox_cardBox_articleBox_boardBox_isBoard}>Elektron doska</h2>*/}
                {/*                    <Switch/>*/}
                {/*                </div>*/}
                {/*                <div className={cls.mainContainer_tablePanelBox_cardBox_articleBox_roomNumBox}>*/}
                {/*                    <h2 className={cls.mainContainer_tablePanelBox_cardBox_articleBox_roomNumBox_roomNum}>{item.roomNumber}-xona</h2>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*})}*/}
                {currentTable}
            </div>
            {/*<Pagination*/}
            {/*    setCurrentTableData={setCurrentTableData}*/}
            {/*    search={search}*/}
            {/*    users={users}*/}
            {/*    setCurrentPage={setCurrentPage}*/}
            {/*    currentPage={currentPage}*/}
            {/*    pageSize={PageSize}*/}
            {/*    onPageChange={page => {*/}
            {/*        setCurrentPage(page)*/}
            {/*    }}*/}
            {/*/>*/}
        </div>
    );
};

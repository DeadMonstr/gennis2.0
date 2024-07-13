import React, { useMemo, useState, useEffect } from 'react';
import cls from "./rooms.module.sass";
import { Button } from "shared/ui/button";
import { Select } from "shared/ui/select";
import { Pagination } from "features/pagination";
import { RoomsList } from "entities/rooms/ui";
import { rooms } from "entities/rooms/model";
import { RoomsFilter } from "features/filters/roomsFilter";

export const Rooms = () => {
    const [active, setActive] = useState("");
    const PageSize = useMemo(() => 10, []);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState("");
    const [currentTableData, setCurrentTableData] = useState([]);

    useEffect(() => {
        setCurrentTableData(rooms.slice(0, PageSize));
    }, [PageSize]);

    const handleChange = (value) => {
        setSelected(value);
    };

    return (
        <div className={cls.mainContainer}>
            <div className={cls.mainContainer_buttonPanelBox}>
                <div className={cls.mainContainer_buttonPanelBox_leftCreateButton}></div>
                <Select />
            </div>
            <div className={cls.mainContainer_filterPanelBox}>
                <Button extraClass={cls.extraCutClassFilter} type={"filter"} onClick={() => setActive(true)}>Filter</Button>
                <div className={cls.mainContainer_filterPanelBox_rightFilterRadioGroupBox}></div>
            </div>
            <div className={cls.mainContainer_tablePanelBox}>
                <RoomsList
                    currentTableData={currentTableData}
                />
            </div>
            <RoomsFilter
                active={active}
                setActive={setActive}
            />
            <Pagination
                setCurrentTableData={setCurrentTableData}
                search={search}
                users={rooms}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageSize={PageSize}
                onPageChange={page => {
                    setCurrentPage(page)
                }}
            />
        </div>
    );
};

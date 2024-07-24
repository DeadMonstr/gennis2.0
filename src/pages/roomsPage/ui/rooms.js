import React, { useMemo, useState, useEffect } from 'react';

import { RoomsFilter } from "features/filters/roomsFilter";
import { Pagination } from "features/pagination";
import { RoomsList, rooms } from "entities/rooms";
import { Button } from "shared/ui/button";
import { Select } from "shared/ui/select";

import cls from "./rooms.module.sass";

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
            <div className={cls.paginationBox}>
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

        </div>
    );
};

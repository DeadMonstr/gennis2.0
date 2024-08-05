import React, { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/button';
import { Select } from 'shared/ui/select';
import { Pagination } from 'features/pagination';
import {RoomsList} from "entities/rooms/ui/roomList/roomList";
import { RoomsFilter } from 'features/filters/roomsFilter';
import { RoomModal } from 'features/roomsAddModal';
import { getRoomsData } from 'entities/rooms/model/selectors/roomsSelectors';
import { fetchRoomsData } from 'entities/rooms/model/roomsThunk';
import cls from './rooms.module.sass';
import {getSearchValue} from "../../../features/searchInput";

export const Rooms = () => {
    const [modal, setModal] = useState(false);
    const [active, setActive] = useState(false);
    const PageSize = useMemo(() => 10, []);
    const [currentPage, setCurrentPage] = useState(1);
    const search = useSelector(getSearchValue)
    const [selected, setSelected] = useState('');
    const [currentTableData, setCurrentTableData] = useState([]);
    const dispatch = useDispatch();

    const roomsData = useSelector(getRoomsData);
    console.log(roomsData)

    useEffect(() => {
        dispatch(fetchRoomsData())
    }, [dispatch]);

    const searchedUsers = useMemo(() => {
        const filteredHeroes = roomsData?.slice()
        setCurrentPage(1)

        console.log(search, true)

        if (!search) return filteredHeroes

        return filteredHeroes.filter(item =>
            item.sitterNumber?.toLowerCase().includes(search.toLowerCase())
        )
    }, [roomsData, setCurrentPage, search])

    // useEffect(() => {
    //     if (roomsData && Array.isArray(roomsData)) {
    //         setCurrentTableData(roomsData.slice(0, PageSize));
    //     }
    // }, [roomsData, PageSize]);


    const handleChange = (value) => {
        setSelected(value);
    };

    return (
        <div className={cls.mainContainer}>
            <div className={cls.mainContainer_buttonPanelBox}>
                <div className={cls.mainContainer_buttonPanelBox_leftCreateButton}>
                    <Button onClick={() => setActive(true)} children={'Add room'} />
                </div>
                <Select />
            </div>
            <div className={cls.mainContainer_filterPanelBox}>
                <Button
                    extraClass={cls.extraCutClassFilter}
                    type={'filter'}
                    onClick={() => setModal(true)}
                >
                    Filter
                </Button>
                <div className={cls.mainContainer_filterPanelBox_rightFilterRadioGroupBox}></div>
            </div>
            <div className={cls.mainContainer_tablePanelBox}>
                <RoomsList currentTableData={currentTableData} />
            </div>
            <RoomsFilter active={modal} setActive={setModal} />
            <div className={cls.paginationBox}>
                <Pagination
                    setCurrentTableData={setCurrentTableData}
                    users={searchedUsers}
                    currentPage={currentPage}
                    pageSize={PageSize}
                    onPageChange={page => {
                        setCurrentPage(page);
                    }}
                />
            </div>
            <RoomModal isOpen={active} onClose={setActive} />
        </div>
    );
};

import React, { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/button';
import { Select } from 'shared/ui/select';
import { Pagination } from 'features/pagination';
import { RoomsList } from 'entities/rooms/ui/roomList/roomList';
import { RoomsFilter } from 'features/filters/roomsFilter';
import { RoomModal } from 'features/roomsAddModal';
import {getLoading, getRoomsData} from 'entities/rooms/model/selectors/roomsSelectors';
import { fetchRoomsData } from 'entities/rooms/model/roomsThunk';
import cls from './rooms.module.sass';
import { getSearchValue } from 'features/searchInput';
import {DefaultLoader} from "../../../shared/ui/defaultLoader";

export const Rooms = () => {
    const [modal, setModal] = useState(false);
    const [active, setActive] = useState(false);
    const PageSize = useMemo(() => 10, []);
    const [currentPage, setCurrentPage] = useState(1);
    const search = useSelector(getSearchValue);
    const [selected, setSelected] = useState('');
    const dispatch = useDispatch();
    const roomsData = useSelector(getRoomsData);
    const loading = useSelector(getLoading);

    useEffect(() => {
        dispatch(fetchRoomsData());
    }, [dispatch]);

    const searchedRooms = useMemo(() => {
        const filteredRooms = roomsData?.filter(item => !item.deleted) || [];
        setCurrentPage(1);

        if (!search) return filteredRooms;

        return filteredRooms.filter(item =>
            item.name?.toLowerCase().includes(search.toLowerCase())
        );
    }, [roomsData, search]);

    const handleChange = (value) => {
        setSelected(value);
    };

    return (
        <div className={cls.mainContainer}>
            <div className={cls.mainContainer_buttonPanelBox}>
                <div className={cls.mainContainer_buttonPanelBox_leftCreateButton}>
                    <Button onClick={() => setActive(true)}>Add room</Button>
                </div>
                <Select value={selected} onChange={handleChange} />
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
                {
                    loading ? <DefaultLoader/> :  <RoomsList currentTableData={searchedRooms.slice((currentPage - 1) * PageSize, currentPage * PageSize)} />
                }
                {/*<RoomsList currentTableData={searchedRooms.slice((currentPage - 1) * PageSize, currentPage * PageSize)} />*/}
            </div>
            <RoomsFilter active={modal} setActive={setModal} />
            <div className={cls.paginationBox}>
                <Pagination
                    setCurrentTableData={() => {}}
                    search={search}
                    users={searchedRooms}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    pageSize={PageSize}
                    onPageChange={(page) => {
                        setCurrentPage(page);
                    }}
                />
            </div>
            <RoomModal isOpen={active} onClose={() => setActive(false)} />
        </div>
    );
};

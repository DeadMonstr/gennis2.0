import React, {useMemo, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'shared/ui/button';
import {Select} from 'shared/ui/select';
import {Pagination} from 'features/pagination';
import {RoomsList} from 'entities/rooms/ui/roomList/roomList';
import {RoomsFilter} from 'features/filters/roomsFilter';
import {RoomModal} from 'features/roomsAddModal';
import {getLoading, getRoomsData} from 'entities/rooms/model/selectors/roomsSelectors';
import {fetchRoomsData} from 'entities/rooms/model/roomsThunk';
import cls from './rooms.module.sass';
import {getSearchValue} from 'features/searchInput';
import {DefaultLoader, DefaultPageLoader} from "../../../shared/ui/defaultLoader";
import {MultiPage} from "../../../widgets/multiPage/ui/MultiPage/MultiPage";
import {useParams} from "react-router-dom";
// import {RequirePermission} from "app/routers";

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
    const {"*": id} = useParams();
    const userBranchId = id

    useEffect(() => {
        if (!userBranchId) return;
        dispatch(fetchRoomsData({id}));
    }, [dispatch, userBranchId]);

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

    const types = [
        {
            name: "Xonalar",
            type: "rooms"
        }
    ]
    return (
        <MultiPage types={types} page={"rooms"}>
            <div className={cls.mainContainer}>
                <div className={cls.mainContainer_buttonPanelBox}>
                    <div className={cls.mainContainer_buttonPanelBox_leftCreateButton}>
                        {/*<RequirePermission permission={true}>*/}
                        <Button onClick={() => setActive(true)}>Xona qo'shish</Button>
                        {/*</RequirePermission>*/}
                    </div>
                    {/*<Select value={selected} onChange={handleChange} />*/}
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
                        // loading ? <DefaultPageLoader/> :
                            <RoomsList
                            currentTableData={searchedRooms.slice((currentPage - 1) * PageSize, currentPage * PageSize)}/>
                    }
                    {/*<RoomsList currentTableData={searchedRooms.slice((currentPage - 1) * PageSize, currentPage * PageSize)} />*/}
                </div>
                <RoomsFilter active={modal} setActive={setModal}/>
                <div className={cls.paginationBox}>
                    <Pagination
                        setCurrentTableData={() => {
                        }}
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
                <RoomModal isOpen={active} onClose={() => setActive(false)}/>
            </div>
        </MultiPage>

    );
};

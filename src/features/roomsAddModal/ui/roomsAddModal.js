import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {roomsAddThunk} from 'pages/roomsPage/model/roomsAddThunk';
import {useParams} from "react-router-dom";
import {Modal} from 'shared/ui/modal';
import {Input} from 'shared/ui/input';
import {Button} from 'shared/ui/button';
import cls from './roomsAddModal.module.sass';
import {addRoom} from "pages/roomsPage/model/roomsAddSlice";
import {getBranchThunk, getLocations} from "entities/editCreates";
import {Select} from "shared/ui/select";
import {value} from "lodash/seq";
import {fetchRoomsData} from "entities/rooms";
import {onAddAlertOptions} from "../../alert/model/slice/alertSlice";
import {branchQueryId} from "../../../shared/api/base";

export const RoomModal = ({isOpen, onClose, branch}) => {
    const [groupName, setGroupName] = useState('');
    const [seatCount, setSeatCount] = useState('');
    const [electronicBoard, setElectronicBoard] = useState(false);
    const dispatch = useDispatch();
    const getBranches = useSelector(getLocations)
    const {"*": id} = useParams()

    const handleAddRoom = () => {
        const newRoom = {
            name: groupName,
            seats_number: parseInt(seatCount, 10),
            electronic_board: electronicBoard,
            deleted: false,
            branch: branchQueryId(),
        };

        dispatch(roomsAddThunk(newRoom))
            .then((action) => {
                if (roomsAddThunk.fulfilled.match(action)) {
                    dispatch(addRoom(action.payload));
                }
            });

        setGroupName("")
        setSeatCount("")
        dispatch(onAddAlertOptions({
            type: "success",
            status: true,
            msg: "Xona muvofaqqiyatli qo'shildi"
        }))
        dispatch(fetchRoomsData({id}));
        onClose();
    };

    useEffect(() => {
        dispatch(getBranchThunk())
    }, [])

    if (!isOpen) return null;

    return (
        <Modal active={isOpen} setActive={onClose}>
            <div className={cls.filter}>
                <h1>Xona qo'shish</h1>
                <div>
                    <div>
                        <Input
                            title={"Xona nomi"}
                            type={"text"}
                            value={groupName}
                            onChange={(e) => setGroupName(e.target.value)}
                        />
                    </div>
                    <div>
                        <Input
                            title={"O'rindiqlar soni"}
                            type={"number"}
                            value={seatCount}
                            onChange={(e) => setSeatCount(e.target.value)}
                        />
                    </div>
                    <div>
                        <Input
                            title={"Elektron doska (bor/yo'q)"}
                            type={"checkbox"}
                            checked={electronicBoard}
                            onChange={(e) => setElectronicBoard(e.target.checked)}
                        />
                    </div>
                    {/*<div>*/}
                    {/*    <Select*/}
                    {/*        title={"Branch"}*/}
                    {/*        extraClass={cls.filter__select}*/}
                    {/*        options={getBranches}*/}
                    {/*        onChangeOption={onSelectBranch}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div className={cls.filter__switch}>
                        <Button onClick={handleAddRoom}>Add room</Button>
                        <Button onClick={onClose} extraClass={cls.buttonStyle}>Close</Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

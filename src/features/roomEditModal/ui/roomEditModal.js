import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {editRoomThunk} from "../model/roomEditThunk";
import { Modal } from 'shared/ui/modal';
import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import cls from './roomEditModal.module.sass';
import {getRoomEdit} from "../model/selectors/selectors";

export const RoomEditModal = ({ isOpen, onClose, roomId }) => {
    const dispatch = useDispatch();
    const room = useSelector(getRoomEdit);

    const [groupName, setGroupName] = useState('');
    const [seatCount, setSeatCount] = useState('');
    const [electronicBoard, setElectronicBoard] = useState(false);
    const [branch, setBranch] = useState(1);

    useEffect(() => {
        if (room) {
            setGroupName(room.name || '');
            setSeatCount(room.seats_number || '');
            setElectronicBoard(room.electronic_board || false);
            setBranch(room.branch || 1);
        }
    }, [room]);

    const handleEditRoom = () => {
        if (!roomId) return;
        const updatedRoom = {
            name: groupName,
            seats_number: parseInt(seatCount, 10),
            electronic_board: electronicBoard,
            branch: branch,
        };

        dispatch(editRoomThunk({ id: roomId, updatedRoom }));
        window.location.reload()
        onClose();
    };

    if (!isOpen) return null;

    return (
        <Modal active={isOpen} setActive={onClose}>
            <div className={cls.filter}>
                <h1>Edit room</h1>
                <div>
                    <div>
                        <Input
                            title={"Group name"}
                            type={"text"}
                            value={groupName}
                            onChange={(e) => setGroupName(e.target.value)}
                        />
                    </div>
                    <div>
                        <Input
                            title={"Count sitter"}
                            type={"number"}
                            value={seatCount}
                            onChange={(e) => setSeatCount(e.target.value)}
                        />
                    </div>
                    <div>
                        <Input
                            title={"Electronic Board"}
                            type={"checkbox"}
                            checked={electronicBoard}
                            onChange={(e) => setElectronicBoard(e.target.checked)}
                        />
                    </div>
                    <div>
                        <Input
                            title={"Branch"}
                            type={"number"}
                            value={branch}
                            onChange={(e) => setBranch(parseInt(e.target.value, 10))}
                        />
                    </div>
                    <div className={cls.filter__switch}>
                        <Button onClick={handleEditRoom} children={"Edit room"} />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

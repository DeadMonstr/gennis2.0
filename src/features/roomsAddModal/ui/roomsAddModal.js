import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { roomsAddThunk } from 'pages/roomsPage/model/roomsAddThunk';
import { Modal } from '../../../shared/ui/modal';
import { Input } from '../../../shared/ui/input';
import { Button } from '../../../shared/ui/button';
import cls from './roomsAddModal.module.sass';

export const RoomModal = ({ isOpen, onClose }) => {
    const [groupName, setGroupName] = useState('');
    const [seatCount, setSeatCount] = useState('');
    const [image, setImage] = useState(null);
    const [electronicBoard, setElectronicBoard] = useState(false);
    const [branch, setBranch] = useState(1);
    const dispatch = useDispatch();

    const handleAddRoom = () => {
        const newRoom = {
            name: groupName,
            seats_number: parseInt(seatCount, 10),
            electronic_board: electronicBoard,
            deleted: false,
            branch: branch,
        };

        dispatch(roomsAddThunk(newRoom));
        onClose();
    };

    if (!isOpen) return null;

    return (
        <Modal active={isOpen} setActive={onClose}>
            <div className={cls.filter}>
                <h1>Add room</h1>
                <div>
                    <div>
                        <Input
                            title={"Group name"}
                            type={"text"}
                            onChange={(e) => setGroupName(e.target.value)}
                        />
                    </div>
                    <div>
                        <Input
                            title={"Count sitter"}
                            type={"number"}
                            onChange={(e) => setSeatCount(e.target.value)}
                        />
                    </div>
                    <div>
                        <Input
                            title={"Electronic Board"}
                            type={"checkbox"}
                            onChange={(e) => setElectronicBoard(e.target.checked)}
                        />
                    </div>
                    <div>
                        <Input
                            title={"Branch"}
                            type={"number"}
                            onChange={(e) => setBranch(parseInt(e.target.value, 10))}
                        />
                    </div>
                    <div className={cls.filter__switch}>
                        <Button onClick={handleAddRoom} children={"Add room"} />
                        <Button onClick={onClose} children={"Close"} extraClass={cls.buttonStyle} />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

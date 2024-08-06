import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchInsideRoom } from 'features/roomsEditModal/ui/roomThunk';
import cls from './roomsProfilePage.module.sass';
import Icon from 'shared/assets/images/room_image.svg';
import { getRoomsID } from 'features/roomsEditModal/model';
import { Button } from 'shared/ui/button';
import { Switch } from 'shared/ui/switch';
import { RoomEditModal } from 'features/roomEditModal';
import { RoomDeleteModal } from 'features/roomDeleteModal';
import { RoomImageAddModal } from 'features/roomImageAddModal';
import { fetchRoomImages } from 'features/roomImagePareModal/model/roomImageParseModalThunk';
import { getRoomImage } from 'features/roomImagePareModal/model';
import { API_URL } from "../../../shared/api/base";
import { RoomImageParseModal } from "../../../features/roomImagePareModal";

export const RoomsProfilePage = () => {
    const [switchStates, setSwitchStates] = useState({});
    const [active, setActive] = useState(false);
    const [modal, setModal] = useState(false);
    const [window, setWindow] = useState(false)
    const [image, setImage] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
    const roomsID = useSelector(getRoomsID);
    const roomImageData = useSelector(getRoomImage);
    const API_URL_IMAGE = `${API_URL}media/`

    useEffect(() => {
        if (roomsID) {
            const initialSwitchStates = {
                [roomsID?.id]: roomsID.electronic_board || false,
            };
            setSwitchStates(initialSwitchStates);
        }
    }, [roomsID]);

    useEffect(() => {
        if (id) {
            dispatch(fetchInsideRoom(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (id) {
            dispatch(fetchRoomImages(id));
        }
    }, [dispatch, id]);


    const handleSwitchChange = (id) => {
        setSwitchStates((prevStates) => ({
            ...prevStates,
            [id]: !prevStates[id],
        }));
    };

    return (
        <>
            <div className={cls.container}>
                <div className={cls.container_leftBox}>
                    <div className={cls.container_leftBox_buttonPanel}>
                        <Button onClick={() => setModal(true)} extraClass={cls.buttonDelete} children={<i className="fa-solid fa-trash"></i>} />
                    </div>
                    <div className={cls.container_leftBox_sliderBox}>
                        <span className={cls.visibleBlack} onClick={() => setImage(true)}>
                            <i className="fa-solid fa-file-arrow-up"></i>
                            Rasm yuklash
                        </span>
                        {roomImageData.length > 0 ? (
                            <img className={cls.container_leftBox_sliderBox_imgSlide} src={`${API_URL_IMAGE}${roomImageData[0]?.image}`} alt="Classroom Image" />
                        ) : (
                            <img className={cls.container_leftBox_sliderBox_imgSlide} src={Icon} alt="Default Icon" />
                        )}
                        <span onClick={() => setWindow(true)} className={cls.roomSlider} title={"Rasmlarni ko'rish"}>
                            <i className="fa-solid fa-camera"></i>
                            <h4 >{roomImageData.length}</h4>
                        </span>
                    </div>

                    <h1 className={cls.container_leftBox_roomName}>{roomsID?.name} - xonasi</h1>
                    <span className={cls.statusRoom}>Room</span>
                    <Button onClick={() => setActive(true)} extraClass={cls.changeButton} children={"Change"} />
                    <div className={cls.container_leftBox_seatsNumberBox}>
                        <h4 className={cls.container_leftBox_seatsNumberBox_label}>O'rindiqlar soni</h4>
                        <h2 className={cls.container_leftBox_seatsNumberBox_label}>{roomsID?.seats_number}</h2>
                    </div>
                    <div className={cls.container_leftBox_seatsNumberBox}>
                        <h4 className={cls.container_leftBox_seatsNumberBox_label}>Qo'shimcha</h4>
                        <div className={cls.arounder}>
                            <h2 className={cls.container_leftBox_seatsNumberBox_label}>Elektron doska</h2>
                            <Switch
                                disabled
                                activeSwitch={switchStates[roomsID?.id]}
                                onChangeSwitch={() => handleSwitchChange(roomsID?.id)}
                            />
                        </div>
                    </div>
                    <RoomImageParseModal isOpen={window} onClose={() => setWindow(false)} roomId={roomsID?.id} />
                    <RoomImageAddModal isOpen={image} onClose={() => setImage(false)} roomId={roomsID?.id} />
                    <RoomDeleteModal isOpen={modal} onClose={() => setModal(false)} roomId={roomsID?.id} />
                    {roomsID?.id && <RoomEditModal isOpen={active} onClose={() => setActive(false)} roomId={roomsID.id} />}
                </div>
                <div className={cls.container_rightBox}>

                </div>
            </div>
        </>
    );
};

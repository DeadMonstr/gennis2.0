import React from 'react';
import cls from "./roomsProfilePage.module.sass"
import Icon from 'shared/assets/images/room_image.svg'
export const RoomsProfilePage = ({currentTableData}) => {
    return (
        <div className={cls.container}>
            <div className={cls.box}>
                <img src={Icon} alt="Classroom Image" />
                <h3>1-Xona</h3>
                <button>Delete</button>
                <form>
                    <label htmlFor="teacher">O'qituvchi nomi:</label>
                    <input type="text" id="teacher" name="teacher" />
                    <label htmlFor="room">Guruh nomi:</label>
                    <input type="text" id="room" name="room" />
                    <label>
                        Elektron doska:
                        <input type="checkbox" name="smartboard" />
                    </label>
                    <button type="submit">O'zgartirish</button>
                </form>
            </div>
            <div className={cls.box}>
                <h3>Dars jadvali</h3>
                {/* Dars jadvali mazmuni */}
            </div>
        </div>
    );
};

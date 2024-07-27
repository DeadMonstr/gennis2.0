import {memo} from 'react';

import {EditableCard} from "shared/ui/editableCard";

import cls from "./studentProfileAttendance.module.sass";

export const StudentProfileAttendance = memo(({setActive}) => {
    return (
        <EditableCard
            extraClass={cls.attendance}
            onClick={() => setActive("totalAttendance")}
        >
            <div className={cls.attendance__title}>
                <h1>Davomat</h1>
                <p>1 oylik davomat</p>
            </div>
            <div className={cls.attendance__list}>
                <div className={cls.item}>
                    <h2>Matematika</h2>
                    <div className={cls.item__action}>
                        <p>Kelmagan</p>
                        <div className={cls.item__progress}>
                            <div
                                className={cls.item__completed}
                                style={{width: "20%"}}
                            />
                        </div>
                    </div>
                    <div className={cls.item__action}>
                        <p style={{color: "#22C55E"}}>Kelgan</p>
                        <div
                            className={cls.item__progress}
                            style={{backgroundColor: "#DCFCE7"}}
                        >
                            <div
                                className={cls.item__completed}
                                style={{width: "80%", backgroundColor: "#22C55E"}}
                            />
                        </div>
                    </div>
                    <h1 className={cls.item__count}>
                        <span style={{color: "#22C55E"}}>12</span>
                        /
                        <span style={{color: "#F43F5E"}}>1</span>
                    </h1>
                </div>
                <div className={cls.item}>
                    <h2>Matematika</h2>
                    <div className={cls.item__action}>
                        <p>Kelmagan</p>
                        <div className={cls.item__progress}>
                            <div
                                className={cls.item__completed}
                                style={{width: "20%"}}
                            />
                        </div>
                    </div>
                    <div className={cls.item__action}>
                        <p style={{color: "#22C55E"}}>Kelgan</p>
                        <div
                            className={cls.item__progress}
                            style={{backgroundColor: "#DCFCE7"}}
                        >
                            <div
                                className={cls.item__completed}
                                style={{width: "80%", backgroundColor: "#22C55E"}}
                            />
                        </div>
                    </div>
                    <h1 className={cls.item__count}>
                        <span style={{color: "#22C55E"}}>12</span>
                        /
                        <span style={{color: "#F43F5E"}}>1</span>
                    </h1>
                </div>
                <div className={cls.item}>
                    <h2>Matematika</h2>
                    <div className={cls.item__action}>
                        <p>Kelmagan</p>
                        <div className={cls.item__progress}>
                            <div
                                className={cls.item__completed}
                                style={{width: "20%"}}
                            />
                        </div>
                    </div>
                    <div className={cls.item__action}>
                        <p style={{color: "#22C55E"}}>Kelgan</p>
                        <div
                            className={cls.item__progress}
                            style={{backgroundColor: "#DCFCE7"}}
                        >
                            <div
                                className={cls.item__completed}
                                style={{width: "80%", backgroundColor: "#22C55E"}}
                            />
                        </div>
                    </div>
                    <h1 className={cls.item__count}>
                        <span style={{color: "#22C55E"}}>12</span>
                        /
                        <span style={{color: "#F43F5E"}}>1</span>
                    </h1>
                </div>

            </div>
        </EditableCard>
    );
})
import {memo, useCallback} from 'react';
import classNames from "classnames";

import {EditableCard} from "shared/ui/editableCard";

import cls from "./studentProfileSubjects.module.sass";
import time from "shared/assets/images/oclock.png";

export const StudentProfileSubjects = memo(({setActive, data}) => {

    const renderSubjects = useCallback(() => {
        // return data.map(item =>
        //     <div className={cls.item}>
        //         <div className={cls.item__inner}>
        //             <div
        //                 className={classNames(cls.item__status, {
        //                     [cls.red]: false,
        //                     [cls.yellow]: false
        //                 })}
        //             />
        //             <div className={cls.item__info}>
        //                 <h2>{item.name} Kurs</h2>
        //                 <p>Seshanba 14:00</p>
        //             </div>
        //         </div>
        //         <p
        //             className={classNames(cls.item__money, {
        //                 [cls.red]: false,
        //                 [cls.yellow]: false
        //             })}
        //         >
        //             390.000
        //         </p>
        //     </div>
        // )
    }, [data])

    const render = renderSubjects()

    return (
        <EditableCard
            extraClass={cls.subject}
            onClick={() => setActive("groupsHistory")}
        >
            <div className={cls.subject__edit}>
                <img src={time} alt=""/>
            </div>
            <h1>O’qiyotgan fanlari</h1>
            <div className={cls.subject__list}>
                <div className={cls.item}>
                    <div className={cls.item__inner}>
                        <div
                            className={classNames(cls.item__status, {
                                [cls.red]: false,
                                [cls.yellow]: false
                            })}
                        />
                        <div className={cls.item__info}>
                            <h2>Matematika Kurs</h2>
                            <p>Seshanba 14:00</p>
                        </div>
                    </div>
                    <p
                        className={classNames(cls.item__money, {
                            [cls.red]: false,
                            [cls.yellow]: false
                        })}
                    >
                        390.000
                    </p>
                </div>
                <div className={cls.item}>
                    <div className={cls.item__inner}>
                        <div
                            className={classNames(cls.item__status, {
                                [cls.red]: true,
                                [cls.yellow]: false
                            })}
                        />
                        <div className={cls.item__info}>
                            <h2>Matematika Kurs</h2>
                            <p>Seshanba 14:00</p>
                        </div>
                    </div>
                    <p
                        className={classNames(cls.item__money, {
                            [cls.red]: true,
                            [cls.yellow]: false
                        })}
                    >
                        390.000
                    </p>
                </div>
                <div className={cls.item}>
                    <div className={cls.item__inner}>
                        <div
                            className={classNames(cls.item__status, {
                                [cls.red]: false,
                                [cls.yellow]: true
                            })}
                        />
                        <div className={cls.item__info}>
                            <h2>Matematika Kurs</h2>
                            <p>Seshanba 14:00</p>
                        </div>
                    </div>
                    <p
                        className={classNames(cls.item__money, {
                            [cls.red]: false,
                            [cls.yellow]: true
                        })}
                    >
                        390.000
                    </p>
                </div>
            </div>
        </EditableCard>
    );
})
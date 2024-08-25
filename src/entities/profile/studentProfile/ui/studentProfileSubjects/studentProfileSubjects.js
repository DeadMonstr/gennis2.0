import React, { memo, useCallback } from 'react';
import classNames from "classnames";

import { EditableCard } from "shared/ui/editableCard";

import cls from "./studentProfileSubjects.module.sass";
import time from "shared/assets/images/oclock.png";

export const StudentProfileSubjects = memo(({ setActive, data, onSelectSubject }) => {

    const renderSubjects = useCallback(() => {
        const subjects = Array.isArray(data)
            ? data.flatMap(group => ({
                ...group.subject,
                price: group.price
            }))
            : (data?.subject ? [{
                ...data.subject,
                price: data.price
            }] : []);

        return subjects?.map(item =>
            <div onClick={() => {
                setActive("groupsHistory");
                onSelectSubject(item.id)
            }} key={item?.id} className={cls.item}>
                <div className={cls.item__inner}>
                    <div
                        className={classNames(cls.item__status, {
                            [cls.red]: false,
                            [cls.yellow]: false
                        })}
                    />
                    <div className={cls.item__info}>
                        <h2>{item?.name}</h2>
                        <p>{item?.schedule || "Kun sana yo'q"}</p>
                    </div>
                </div>
                <p
                    className={classNames(cls.item__money, {
                        [cls.red]: false,
                        [cls.yellow]: false
                    })}
                >
                    {item?.price || "No price info"}
                </p>
            </div>
        );
    }, [data]);

    const render = renderSubjects();

    return (
        <EditableCard
            extraClass={cls.subject}
        >
            <div className={cls.subject__edit}>
                <img src={time} alt="" />
            </div>
            <h1>O’qiyotgan fanlari</h1>
            <div className={cls.subject__list}>
                {render.length > 0 ? (
                    render
                ) : (
                    <p style={{
                        alignSelf: "center",
                        marginTop: 30+"px",
                        fontSize: 21+"px",
                        color: "#F3F4F6"
                    }}>Fan mavjud emas</p>
                )}
            </div>
        </EditableCard>
    );
});

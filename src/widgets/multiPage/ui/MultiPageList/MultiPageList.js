import React from 'react';
import cls from "./MultiPageList.module.sass";
import MultiPageListItem from "../MultiPageListItem/MultiPageListItem";

export const MultiPageList = ({data}) => {


    let isType = data.length > 1

    const renderStudents = () => {



        return data.map(item =>
            <MultiPageListItem
                isType={isType}
                item={item}
                title={item.name}
                data={item.list}
            />
        )
    }



    const render = renderStudents()

    return (
        <div className={cls.list}>
            {render}
        </div>
    )
};

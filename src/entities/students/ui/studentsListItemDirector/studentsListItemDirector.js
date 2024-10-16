import {memo} from 'react';
import classNames from "classnames";

import cls from "./studentsListItemDirector.module.sass";
import {Link} from "shared/ui/link";

export const StudentsListItemDirector = memo(({title, data}) => {

    const renderData = () => {
        return data.map((item, i) =>
            <div className={cls.studentsListItem__item}>
                <h2 className={classNames(cls.studentsListItem__innerTitle, {
                    [cls.eval]: (i + 1) % 2 === 0
                })}>
                    {item.name}
                    <span>{item.count}</span>
                </h2>
                {
                    item?.list?.map(branch =>
                        <Link to={`../students/${branch?.id}`}>
                            <h2
                                className={classNames(cls.studentsListItem__inner, {
                                    [cls.eval]: (i + 1) % 2 === 0
                                })}
                            >
                                {branch?.name}
                                <span>{branch?.count}</span>
                            </h2>
                        </Link>
                    )
                }
            </div>
        )
    }

    const render = renderData()

    return (
        <div className={cls.studentsListItem}>
            <h1 className={cls.studentsListItem__title}>
                <i className="fas fa-user-alt"/>
                {title}
            </h1>
            {render}
        </div>
    )
})

import {memo} from 'react';
import classNames from "classnames";

import cls from "./editableCard.module.sass";
import beetwean from "shared/assets/images/in.png";

export const EditableCard = memo(({extraClass, children, childrenEdit}) => {
    return (
        <div className={classNames(cls.editableCard, extraClass)}>
            <div className={cls.editableCard__edit}>
                {childrenEdit ?? <img src={beetwean} alt=""/>}
            </div>
            {children}
        </div>
    );
})
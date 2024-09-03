import cls from "./classColorAddFilter.module.sass"
import classNames from "classnames";
import {useState} from "react";


export const ClassColorAddFilter = ({color}) => {

    const [activeMenu, setActiveMenu] = useState(color[0].name)

    return (
        <div className={cls.filter}>
            <div className={cls.filter__wrapper}>
                <ul>
                    {color.map((item, i) => (
                        <li
                            className={classNames(cls.classFilter_li, {
                                [cls.active]: activeMenu === item.name,
                            })}
                            key={i}
                            onClick={() => {
                                setActiveMenu(item.name)
                            }}
                        >{item.name}
                            <span>{item.class}</span>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
};

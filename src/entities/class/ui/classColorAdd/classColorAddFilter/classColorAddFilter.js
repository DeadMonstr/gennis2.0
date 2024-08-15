import cls from "./classColorAddFilter.module.sass"
import classNames from "classnames";
import {useState} from "react";


const className = [
    {name: "Green" ,id:1},
    {name: "Blue" ,id:2}
]


export const ClassColorAddFilter = () => {

    const [activeMenu , setActiveMenu] = useState(className[0].name)

    return (
        <div className={cls.filter}>
            <div className={cls.filter__wrapper}>
            <ul>
                {className.map((item, i ) => (
                    <li
                        className={classNames(cls.classFilter_li , {
                            [cls.active] : activeMenu === item.name,
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

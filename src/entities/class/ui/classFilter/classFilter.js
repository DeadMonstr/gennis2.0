import cls from "./classFilter.module.sass"
import {useState} from "react";
import classNames from "classnames";

const data = [
    {
        name: "Nursery",
        class: "1-2"
    },
    {
        name: "Primary",
        class: "2-4"
    },
    {
        name: "Lower-Secondary",
        class: "5-7"
    },
    {
        name: "Upper-Secondary",
        class: "8-9"
    },
    {
        name: "Advanced",
        class: "10-11"
    },
    {
        name: "Curriculum"
    }
]

export const ClassFilter = () => {

    const [activeMenu, setActiveMenu] = useState(data[0]?.name)

    return (
        <div className={cls.classFilter}>
            <div className={cls.classFilter__wrapper}>
                <ul>
                    {data.map((item , i) => {
                        return (
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
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
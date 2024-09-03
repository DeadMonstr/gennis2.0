import cls from "./classFilter.module.sass"
import {useState} from "react";
import classNames from "classnames";
import {API_URL, headers, useHttp} from "shared/api/base";
import {useDispatch, useSelector} from "react-redux";
import {classItem} from "../../model/thunk/classThunk";
import {classItems} from "../../model/selector/classSelector";

// const data = [
//     {
//         name: "Nursery",
//         class: "1-2"
//     },
//     {
//         name: "Primary",
//         class: "2-4"
//     },
//     {
//         name: "Lower-Secondary",
//         class: "5-7"
//     },
//     {
//         name: "Upper-Secondary",
//         class: "8-9"
//     },
//     {
//         name: "Advanced",
//         class: "10-11"
//     },
//     {
//         name: "Curriculum"
//     }
// ]

export const ClassFilter = ({classesType, active, setActive, edit, setEdit}) => {

    const {request} = useHttp()
    const className = useSelector(classItems)
    const dispatch = useDispatch()
    const onClick = (id) => {
        dispatch(classItem(id))
    }
    function compareById(a, b) {
        return a.id - b.id;
    }

    return (
        <div className={cls.classFilter}>
            <div className={cls.classFilter__wrapper}>
                <ul>

                    {[...classesType].sort(compareById)?.map((item, i) => {
                        return (
                            <li
                                className={classNames(cls.classFilter_li, {
                                    [cls.active]: active === item?.id,

                                })}
                                key={i}
                                onClick={() => {
                                    onClick(item.id)
                                    setActive(item.id)
                                    setEdit({
                                        id: item.id,
                                        name: item.name
                                    })

                                }}
                            >{item?.name}
                                <div>
                                    {item.class_numbers?.map(item => (
                                        <span>{item?.number}</span>
                                    ))}
                                </div>
                            </li>
                        )
                    })}

                </ul>


            </div>
        </div>
    )
}
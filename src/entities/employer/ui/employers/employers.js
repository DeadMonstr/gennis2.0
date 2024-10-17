import cls from "./employers.module.sass"
import {Table} from "shared/ui/table";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {DefaultPageLoader} from "../../../../shared/ui/defaultLoader";
import {getEmployerDataWithFilter, getEmployerLoading} from "../../model/selector/employersSelector";
import {useSelector} from "react-redux";


export const Employers = ({currentTableData, loading}) => {

    const [clickedCheckbox, setClickedCheckbox] = useState([])
    const loadingDef = useSelector(getEmployerLoading)
    const [removeClickedCheckbox , setRemovedClickedCheckbox] = useState([])
    const filteredEmployer = useSelector(getEmployerDataWithFilter)
    // const checkedItem = (id) => {
    //     const filteredCheckbox = clickedCheckbox.filter(item => item !== id)
    //     setClickedCheckbox([...filteredCheckbox , id])
    //
    //
    // }



    const renderEmployers = () => {

        if (loadingDef) {
            return (
                <tr>
                    <td colSpan="6">Yuklanmoqda...</td>
                </tr>
            )
        }
        const employerToRender = filteredEmployer && filteredEmployer.length > 0 ? filteredEmployer : currentTableData

        // if (!employerToRender || employerToRender.length === 0)
        // {
        //     return (
        //         <DefaultPageLoader/>
        //     )
        // }

        return employerToRender?.map((item, i) => {
            if (typeof item === "object" && !Array.isArray(item)) {
                return (
                    <tr>
                        <td>{i + 1}</td>
                        <Link to={`employerProfile/${item?.id}`}>
                            <td>{item?.name} {item?.surname}</td>
                        </Link>
                        <td>{item?.phone}</td>
                        <td>{item?.age}</td>
                        <td>{item?.job}</td>
                        <td>
                            {item.status ?
                                <div
                                    onClick={() => setClickedCheckbox(arr => {
                                        if (clickedCheckbox.includes(item?.id)) {
                                            return [...arr.filter(i => i !== item?.id)]
                                        } else return [...arr, item?.id]
                                    })}
                                    className={clickedCheckbox.includes(item?.id)
                                        ?
                                        cls.checkbox__checked : cls.checkbox__minus
                                    }>
                                    {clickedCheckbox.includes(item?.id) ?
                                        <i className={"fa fa-check"}/> :
                                        <i className={"fa fa-minus"}/>
                                    }
                                </div>
                                :
                                null
                            }
                        </td>
                    </tr>
                )
            }
        })
    }

    const renderData = renderEmployers()

    return (
        <div className={cls.employer}>
            <div className={cls.table}>
                <Table>
                    <thead className={cls.thead}>
                    <tr>
                        <th>No</th>
                        <th>Full name</th>
                        <th>Tel</th>
                        <th>Yosh</th>
                        <th>Ish</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    {
                        loadingDef ? <DefaultPageLoader/>
                            :
                            <tbody>
                            {renderData}
                            </tbody>
                    }

                </Table>
            </div>
        </div>
    )
}
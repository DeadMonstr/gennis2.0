import cls from "./employers.module.sass"
import {Table} from "shared/ui/table";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {DefaultPageLoader} from "../../../../shared/ui/defaultLoader";
import {getEmployerLoading} from "../../model/selector/employersSelector";
import {useSelector} from "react-redux";


export const Employers = ({currentTableData, loading}) => {

    const [clickedCheckbox, setClickedCheckbox] = useState([])
    const loadingDef = useSelector(getEmployerLoading)
    const [removeClickedCheckbox , setRemovedClickedCheckbox] = useState([])

    const checkedItem = (id) => {
        const filteredCheckbox = clickedCheckbox.filter(item => item !== id)
        setClickedCheckbox([...filteredCheckbox , id])


        // const unFilteredCheckbox = removeClickedCheckbox.filter(item => item === id)
        // setRemovedClickedCheckbox([...unFilteredCheckbox , id])

    }



    const renderEmployers = () => {
        return currentTableData?.map((item, i) => {
            return (
                <tr>
                    <td>{i + 1}</td>
                    <Link to={`employerProfile/${item?.id}`}>
                        <td>{item?.user.name} {item?.user.surname}</td>
                    </Link>
                    <td>{item?.user.phone}</td>
                    <td>{item?.user.age}</td>
                    <td>{item?.group.name}</td>
                    <td>
                        {item.status ?
                            <div
                                onClick={() => setClickedCheckbox(arr => {
                                    if (clickedCheckbox.includes(item?.user.id)){
                                        return [...arr.filter(i => i !== item?.user.id)]
                                    }else return [...arr , item?.user.id]
                                })}
                                className={clickedCheckbox.includes(item?.user.id)
                                    ?
                                    cls.checkbox__checked : cls.checkbox__minus
                                }>
                                {clickedCheckbox.includes(item?.user.id) ?
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
        })
    }
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
                            {renderEmployers()}
                            </tbody>
                    }

                </Table>
            </div>
        </div>
    )
}
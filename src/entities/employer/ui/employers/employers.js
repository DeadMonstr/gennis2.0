import cls from "./employers.module.sass"
import {useSelector} from "react-redux";
import {getEmployersData} from "../../model/selector/employersSelector";
import {Table} from "shared/ui/table";
import React, {useState} from "react";


export const Employers = () => {
    const employersData = useSelector(getEmployersData)
    console.log(employersData)

    const [clickedCheckbox, setClickedCheckbox] = useState([])

    const renderEmployers = () => {
        return employersData?.map((item, i) => {
            return (
                <tr>
                    <td>{i + 1}</td>
                    <td>{item.name} {item.surname}</td>
                    <td>{item.phone}</td>
                    <td>{item.age}</td>
                    <td>{item.work}</td>
                    <td>
                        {item.status ?
                            <div
                                onClick={() => setClickedCheckbox(arr => {
                                    if (clickedCheckbox.includes(item.id)){
                                        return [...arr.filter(i => i !== item.id)]
                                    }else return [...arr , item.id]
                                })}
                                className={clickedCheckbox.includes(item.id)
                                    ?
                                    cls.checkbox__checked : cls.checkbox__minus
                                }>
                                {clickedCheckbox.includes(item.id) ?
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
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Full name</th>
                        <th>Tel</th>
                        <th>Yosh</th>
                        <th>Fan</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderEmployers()}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
import cls from "./employers.module.sass"
import {Table} from "shared/ui/table";
import React, {useEffect, useState} from "react";


export const Employers = ({currentTableData}) => {

    const [clickedCheckbox, setClickedCheckbox] = useState([])


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
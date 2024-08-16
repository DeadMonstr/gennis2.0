import React, {useState} from 'react';
import {Input} from "shared/ui/input";
import {Table} from "shared/ui/table";
import {Modal} from "../../../../../shared/ui/modal";
import {Form} from "../../../../../shared/ui/form";
import cls from "../../classTable/classTable.module.sass";
import {Button} from "../../../../../shared/ui/button";
import {useForm} from "react-hook-form";



export const ClassType = [
    {className: "1-sinf" , id:1},
    {className: "2-sinf" , id:2},
    {className: "3-sinf" , id:3},
    {className: "4-sinf" , id:4},
]

export const ClassColorAddTable = () => {


    const [editClass, setEditClass] = useState(false)

    return (
        <div>

            <Table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Sinf Raqami</th>
                    <th/>

                </tr>
                </thead>
                <tbody>
                {ClassType?.map((item, i) => (
                    <tr>
                        <td>{i + 1}</td>
                        <td>{item.className}</td>
                        <td style={{width: "3rem"}}>
                            <div style={{display: "flex"}}>
                                <Input type={"checkbox"}/>
                                <i onClick={() => setEditClass(item.id)} className={"fa fa-pen"}/>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>




        </div>
    );
};


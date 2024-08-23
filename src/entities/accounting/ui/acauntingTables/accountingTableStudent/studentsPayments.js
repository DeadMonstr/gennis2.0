import {Table} from "shared/ui/table";
import {Button} from "shared/ui/button";
import {Modal} from "../../../../../shared/ui/modal";
import React from "react";


export const StudentsPayments = ({studentData , onDelete , deleted}) => {
    console.log(studentData)
    const filteredDeletedStudents = studentData.filter(item => item.deleted);
    const filteredStudents = studentData.filter(item => !item.deleted);
    const formatSalary = (salary) => {
        return Number(salary).toLocaleString();
    };

    const sum1 = filteredDeletedStudents.reduce((a, c) => a + parseFloat(c.payment || 0), 0);
    const sum2 = filteredStudents.reduce((a, c) => a + parseFloat(c.payment || 0), 0);
    const renderDeletedStudents = () => {
        return filteredDeletedStudents.map((item, i) => (
            <tr>
                <td>{i + 1}</td>
                <td>{item.name} {item.surname}</td>
                <td>{item.payment}</td>
                <td>{item.date}</td>
                <td>
                    <div style={{border: "1px solid", width: "fit-content" , padding: "5px 10px", borderRadius: "15px", textTransform: "capitalize", cursor: "pointer"}}>{item.typePayment}</div>
                </td>
                <td>
                    <div><Button onClick={()=>onDelete(item.id)} type={"delete"} children={<i className={"fa fa-times"} style={{color: "white"}}/>}/>
                    </div>
                </td>
            </tr>
        ))
    }

    const renderStudents = () => {
        return filteredStudents.map((item, i) => (
            <tr>
                <td>{i + 1}</td>
                <td>{item.name} {item.surname}</td>
                <td>{item.payment}</td>
                <td>{item.date}</td>
                <td>
                    <div style={{border: "1px solid", width: "fit-content" , padding: "5px 10px", borderRadius: "15px", textTransform: "capitalize", cursor: "pointer"}}>{item.typePayment}</div>
                </td>
                <td>
                    <div><Button onClick={()=>onDelete(item.id)} type={"delete"} children={<i className={"fa fa-times"} style={{color: "white"}}/>}/>
                    </div>
                </td>
            </tr>
        ))
    }
    return (
        <div>
            <div style={{
                // textAlign: "right",
                display: "flex",
                justifyContent: "flex-end"
            }}>

                <div style={{
                    alignSelf: "flex-end",
                    fontSize: "2rem",
                    color: "#22C55E",
                    padding: "1rem 2rem 1rem 1rem",
                    borderRadius: "5px",
                    marginBottom: "10px"
                }}>Total : {deleted ? formatSalary(sum1) : formatSalary(sum2)} sum</div>
            </div>
            <Table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Ism Familiya</th>
                    <th>To'lov</th>
                    <th>Sana</th>
                    <th>To'lov turi</th>
                    <th>Ochirich </th>
                </tr>
                </thead>
                <tbody>
                {deleted ? renderDeletedStudents() : renderStudents()}
                </tbody>
            </Table>

            <Modal>

            </Modal>
        </div>
    );
};


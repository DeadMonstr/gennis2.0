import React from 'react';
import {Table} from "../../../../../shared/ui/table";
import {Button} from "../../../../../shared/ui/button";
import {color} from "framer-motion";

export const TeachersSalary = ({
                                   teacherSalary,
                                   onDelete,
                                   deleted,
                                   setChangePayment,
                                   setChangingData,
                                   changePayment
                               }) => {
    const filteredDeletedTeachers = teacherSalary.filter(item => item.deleted);
    const filteredTeachers = teacherSalary.filter(item => !item.deleted);

    // const sum1 = filteredDeletedTeachers.reduce((a, c) => a + parseFloat(c.salary || 0), 0);
    // const sum2 = filteredTeachers.reduce((a, c) => a + parseFloat(c.salary || 0), 0);


    const formatSalary = (salary) => {
        return Number(salary).toLocaleString();
    };

    const sum1 = filteredDeletedTeachers.reduce((a, c) => a + parseFloat(c.salary || 0), 0);
    const sum2 = filteredTeachers.reduce((a, c) => a + parseFloat(c.salary || 0), 0);

    const renderTeacherDeleted = () => {
        return filteredDeletedTeachers.map((item, index) => (
            <>

                <tbody>
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name} {item.surname}</td>
                    <td>{item.salary}</td>
                    <td>{item.comment}</td>
                    <td>{item.date}</td>
                    <td
                        onClick={() => {
                            setChangingData({
                                id: item.id,
                                payment_types: item.payment_types
                            });
                            setChangePayment(true);
                        }}
                    >
                        {item.payment_types}
                    </td>
                    {/*<td>{index + 1}</td>*/}
                    {/*<td>{item.name} {item.surname}</td>*/}
                    {/*<td>{formatSalary(item.salary)}</td>*/}
                    {/*<td>{item.comment}</td>*/}
                    {/*<td>{item.date}</td>*/}
                    {/*<td onClick={() => {*/}
                    {/*    setChangingData({*/}
                    {/*        id: item.id,*/}
                    {/*        // payment_types: item.payment_types?.name,*/}
                    {/*        payment_types: item.payment_types,*/}
                    {/*        // userId: item.user.id,*/}
                    {/*    })*/}
                    {/*    setChangePayment(!changePayment)*/}
                    {/*}}>*/}
                    {/*    <div style={{*/}
                    {/*        border: "1px solid",*/}
                    {/*        width: "fit-content",*/}
                    {/*        padding: "5px 10px",*/}
                    {/*        borderRadius: "15px",*/}
                    {/*        textTransform: "capitalize",*/}
                    {/*        cursor: "pointer"*/}
                    {/*    }}>{item.payment_types}</div>*/}
                    {/*</td>*/}
                    <td>
                        <div>
                            <Button
                                onClick={() => onDelete(item.id)}
                                type={"delete"}
                                children={
                                    <i className={"fa fa-times"} style={{color: "white"}}
                                    />
                                }
                            />
                        </div>
                    </td>
                </tr>
                </tbody>
            </>
        ))
    }

    const renderTeacherSalary = () => {
        return filteredTeachers.map((item, index) => (
            <tbody>
            <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name} {item.surname}</td>
                <td>{item.salary}</td>
                <td>{item.comment}</td>
                <td>{item.date}</td>
                <td
                    onClick={() => {
                        setChangingData({
                            id: item.id,
                            payment_types: item.payment_types
                        });
                        setChangePayment(true);
                    }}
                >
                    {item.payment_types}
                </td>
            </tr>

            {/*<tr>*/}
            {/*    <td>{index + 1}</td>*/}
            {/*    <td>{item.name} {item.surname}</td>*/}
            {/*    <td>{item.salary}</td>*/}
            {/*    <td>{item.comment}</td>*/}
            {/*    <td>{item.date}</td>*/}
            {/*    <td>{item.payment_types}</td>*/}
            {/*</tr>*/}
            </tbody>
        ))
    }

    const renderDeleted = renderTeacherDeleted()
    const render = renderTeacherSalary()
    return (
        <>
            <div style={{
                // textAlign: "right",
                display: "flex",
                justifyContent: "flex-end"
            }}>

                <div style={{
                    color: "#22C55E",
                    fontSize: "2rem",
                    marginBottom: "10px"
                }}>Total : {deleted ? formatSalary(sum2) : formatSalary(sum1)} sum
                </div>
            </div>
            <div style={{height: "calc(100vh - 43rem)", overflow: "auto"}}>

                <Table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Ism Familiya</th>
                        <th>Oylik</th>
                        <th>Sabab</th>
                        <th>Sana</th>
                        <th>To'lov turi</th>
                        {deleted ? null : <th>O'chirish</th>}
                    </tr>
                    </thead>
                    {deleted ? render : renderDeleted}
                </Table>
            </div>

        </>

    );
};

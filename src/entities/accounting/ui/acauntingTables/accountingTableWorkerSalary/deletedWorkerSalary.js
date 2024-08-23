import cls from "./empSalary.module.sass";
import React from "react";
import {Table} from "../../../../../shared/ui/table";

export const DeletedWorkerSalary = ({filteredDeletedSalary , formatSalary , sum2 , onChange}) => {
    const renderFilteredDeletedSalary = () => {
        return filteredDeletedSalary?.map((item, i) => (
            <>
                <tbody>
                <tr>
                    <td>{i + 1}</td>
                    <td>{item?.user?.name}</td>
                    <td>{item?.salary}</td>
                    <td>{item?.date}</td>
                    <td>{item?.user?.job?.length ? item?.user?.job : "ish turi mavjud emas"}</td>
                    <td onClick={() => onChange(item.id)}>
                        <div className={cls.cash}>{item?.payment_types?.name}</div>
                    </td>
                </tr>
                </tbody>
            </>
        ))
    }
    return (
        <div className={cls.empSalary}>
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
                }}>
                    Total :{formatSalary(sum2)}
                </div>
            </div>
            <Table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Ism Familiya</th>
                    <th>Oylik</th>
                    <th>Sana</th>
                    <th>Kasb</th>
                    <th>To'lov turi</th>
                </tr>
                </thead>
                {renderFilteredDeletedSalary()}
            </Table>
        </div>
    );
};


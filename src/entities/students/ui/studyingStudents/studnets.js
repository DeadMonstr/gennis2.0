import { useNavigate } from "react-router";
import { Table } from "shared/ui/table";
import cls from "./studnets.module.sass";

export const Students = ({ currentTableData }) => {
    const navigation = useNavigate();

    const renderStudents = () => {


        return currentTableData?.map((item, i) => {

                return (
                    <tr key={item.id} onClick={() => navigation(`profile/${item.id}`)}>
                        <td>{i + 1}</td>
                        <td>{item?.user?.name} {item?.user?.surname}</td>
                        <td>{item?.user?.age}</td>
                        <td>{item?.user?.phone}</td>
                        <td>{item?.group[0]?.name}</td>
                        <td>
                            <div style={{ width: "fit-content", border: `2px solid ${item.color}`, color: `${item.color}`, padding: "1.5rem", borderRadius: "10px" }}>
                                {item.debt}
                            </div>
                        </td>
                    </tr>
                )

        });
    };

    return (
        <div className={cls.students}>
            <div className={cls.table}>
                <Table extraClass={cls.table__head}>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Full name</th>
                        <th>Yosh</th>
                        <th>Telefon nomer</th>
                        <th>Guruh</th>
                        <th>Guruh </th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderStudents()}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

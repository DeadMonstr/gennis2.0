
import {Table} from "shared/ui/table";
import cls from "./studnets.module.sass";

export const Students = ({currentTableData}) => {


    const renderStudents = () => {
        return currentTableData.map((item, i) => (
            <tr>
                <td>{i + 1}</td>
                <td>{item.student.user.name} {item.student.user.surname}</td>
                <td>{item.student.user.age}</td>
                <td>{item.student.user.phone}</td>
                <td>{item.student.user.group}</td>
                <td><div style={{color: '#FF3B30'}}>{item.groupPrice}</div></td>
            </tr>
        ))
    }
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
                        <th>Guruh narxi</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderStudents()}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
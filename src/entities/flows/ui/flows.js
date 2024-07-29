import cls from "pages/flowsPage/ui/flowsPage.module.sass";
import {Table} from "shared/ui/table";
import {Link} from "react-router-dom";

export const Flows = ({currentTableData}) => {
    return (
        <>
            <div className={cls.table}>
                <h2>Flows</h2>
                <div className={cls.table__wrapper}>
                    <Table>
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Nomi</th>
                            <th>Sinf</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentTableData.map((item, i) => {
                            return (

                                <tr>

                                    <td><Link to={"/class"}>{i + 1} </Link></td>
                                    <td><Link to={"class"}>{item.name}</Link></td>
                                    <td>
                                        <div className={item.class ? cls.flow__itemClass : null}>{item.class}</div>
                                    </td>

                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}
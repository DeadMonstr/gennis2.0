import {Table} from "../../../../shared/ui/table";

export const Employer = ({workers , extraClass , formatSalary}) => {

    const renderTable = () => {
        return workers?.workers?.worker_data?.map((item , i) => (
            <tr>
                <td>{i +1}</td>
                <td>{item.name} {item.surname}</td>
                <td>{item.payment_type_name}</td>
                <td>{formatSalary(item.salary)}</td>
                <td>{item.date}</td>
            </tr>
        ))

    }

    const render = renderTable()
    return (
        <div className={extraClass}>
            <Table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Ism Familiya</th>
                    <th>To'lov turi</th>
                    <th>Oylik</th>
                    <th>Sana</th>
                </tr>
                </thead>
                <tbody>
                {render}
                </tbody>
            </Table>
        </div>
    );
};

import {Table} from "../../../../shared/ui/table";

export const PaymentTable = ({classes, extraClass, extraClassTable}) => {

    const renderTable = () => {

        return classes?.class?.map((item, i) => (
            <>
                <h2 className={extraClass}>{item.class_number} {item.class_color}</h2>

                {item?.students.map((itemIn, i) => (

                    <tbody>
                    <tr>
                        <td>{i + 1}</td>
                        <td>{itemIn.name} {itemIn.surname}</td>
                        <td>{itemIn.phone}</td>
                        <td>{itemIn.total_debt}</td>
                        <td>{itemIn.remaining_debt}</td>
                        <td>{itemIn.cash}</td>
                        <td>{itemIn.bank}</td>
                        <td>{itemIn.click}</td>
                    </tr>
                    </tbody>

                ))}

            </>
        ))
    }
    const render = renderTable()
    return (
        <div className={extraClassTable}>
            <Table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Ism Familiya</th>
                    <th>Tel raqami</th>
                    <th>Oylik qarz</th>
                    <th>Qolgan qarz</th>
                    <th>Cash</th>
                    <th>Bank</th>
                    <th>Click</th>
                </tr>
                </thead>
                {render}
            </Table>
        </div>
    );
};


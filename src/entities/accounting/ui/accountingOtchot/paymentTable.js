import {Table} from "../../../../shared/ui/table";

export const PaymentTable = ({classes, extraClass, extraClassTable}) => {

    const renderTable = () => {

        return classes.map((item, i) => (
            <>
                <h2 className={extraClass}>{item.groupName}</h2>

                {item.accounting.map((itemIn, i) => (

                    <tbody>
                    <tr>
                        <td>{i + 1}</td>
                        <td>{itemIn.name} {itemIn.surname}</td>
                        <td>{itemIn.number}</td>
                        <td>{itemIn.allDebt}</td>
                        <td>{itemIn.debt}</td>
                        <td>{itemIn.payment}</td>
                    </tr>
                    </tbody>

                ))}

            </>
        ))
    }
    const render = renderTable()
    return (
        <div  className={extraClassTable}>
            <Table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Ism Familiya</th>
                    <th>Tel raqami</th>
                    <th>Umumiy qarz</th>
                    <th>Qolgan qarz</th>
                    <th>To'lov turi</th>
                </tr>
                </thead>
                {render}
            </Table>
        </div>
    );
};


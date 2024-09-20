import {Table} from "../../../../shared/ui/table";

export const AllTable = () => {

    const renderTable = ({all}) => {
        return all.map((item , i) => (
            <tr>
                <td></td>
            </tr>
        ))
    }
    const render = renderTable()
    return (
        <div>
            <Table>
                <thead>
                <tr>
                    <th>Umumiy to'lov</th>
                    <th>Umumiy oyliklar</th>
                    <th>Umumiy xarajat</th>
                    <th>Umumiy Kapital</th>
                    <th>Arenda</th>
                    <th>Foyda</th>
                </tr>
                </thead>
                <tbody>
                {render}
                </tbody>
            </Table>
        </div>
    );
};


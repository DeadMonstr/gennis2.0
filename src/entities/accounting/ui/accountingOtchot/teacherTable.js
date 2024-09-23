import {Table} from "../../../../shared/ui/table";

export const TeacherTable = ({teacherSalary}) => {

    const renderTable = () => {
        return teacherSalary?.salary?.map((item, i) => (
            <tr>
                <td>{i + 1}</td>
                <td>{item?.name} {item?.surname}</td>
                <td>{item?.phone}</td>
                <td>{item?.subject}</td>
                <td>{item?.total_salary}</td>
                <td>{item?.taken_salary}</td>
                <td>{item?.remaining_salary}</td>
                <td>{item?.click}</td>
                <td>{item?.bank}</td>
                <td>{item?.cash}</td>

            </tr>
        ))
    }

    const render = renderTable()
    return (
        <div>

            <Table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Ism Familiya</th>
                    <th>Telefon numer</th>
                    <th>Fan</th>
                    <th>Umimiy oylik</th>
                    <th>Olingan oylik</th>
                    <th>Qolgan oylik</th>
                    <th>Click</th>
                    <th>Bank</th>
                    <th>Cash</th>
                </tr>
                </thead>
                <tbody>
                {render}
                </tbody>
            </Table>
        </div>
    );
};


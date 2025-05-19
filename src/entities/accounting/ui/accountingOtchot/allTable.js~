import {useState} from "react";

import {Table} from "shared/ui/table";
import {Select} from "shared/ui/select";
import {value} from "lodash/seq";


export const AllTable = ({allTable}) => {

    const option = allTable?.payment_results?.map(item => ({
        name: item.payment_type
    }))
    const [selected, setSelected] = useState(null)
    const renderPayment = () => {
        switch (selected) {
            // case "cash" :
            //     return <h1>hello</h1>
            //
            case "click" :
                return <TableClick alltable={allTable}/>
            case "bank" :
                return <TableBank alltable={allTable}/>
            default:
                return <TableCash alltable={allTable}/>
        }
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
            }}
        >
            <Select options={option} onChangeOption={setSelected} defaultValue={"w"}/>
            {/*{renderPayment()}*/}
        </div>
    );
};


const TableCash = ({alltable}) => {
    const allTable = alltable?.payment_results

    console.log(alltable?.payment_results)
    // const render = renderTable()
    if (!allTable) return null
    return (

        <Table>
            <thead>
            <tr>
                <th>No</th>
                <th>Umumiy to'lov</th>
                <th>Umumiy oyliklar</th>
                <th>Umumiy xarajat</th>
                <th>Umumiy Kapital</th>
                <th>Arenda</th>
                <th>Foyda</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td/>

                <td>{allTable[0]?.students?.student_total_payment}</td>
                <td>{allTable[0]?.teachers?.teacher_total_salary}</td>
                <td>{allTable[0]?.overheads?.total_overhead_payment}</td>
                <td>{allTable[0]?.capitals?.total_capital}</td>
                <td/>
                {/*<td>{allTable.capitals.total_capital}</td>*/}
                <td>{allTable[0]?.payment_total}</td>
            </tr>
            {/*{render}*/}
            </tbody>
        </Table>
    )
}

const TableClick = ({alltable}) => {

    const allTable = alltable?.payment_results[1]
    console.log(allTable)
    // const render = renderTable()

    return (

        <Table>
            <thead>
            <tr>
                <th>No</th>
                <th>Umumiy to'lov</th>
                <th>Umumiy oyliklar</th>
                <th>Umumiy xarajat</th>
                <th>Umumiy Kapital</th>
                <th>Arenda</th>
                <th>Foyda</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td/>

                <td>{allTable?.students?.student_total_payment}</td>
                <td>{allTable?.teachers?.teacher_total_salary}</td>
                <td>{allTable?.overheads?.total_overhead_payment}</td>
                <td>{allTable?.capitals?.total_capital}</td>
                <td/>
                {/*<td>{allTable.capitals.total_capital}</td>*/}
                <td>{allTable?.payment_total}</td>
            </tr>
            {/*{render}*/}
            </tbody>
        </Table>
    )
}


const TableBank = ({alltable}) => {

    const allTable = alltable?.payment_results[2]

    console.log(allTable)
    // const render = renderTable()

    return (

        <Table>
            <thead>
            <tr>
                <th>No</th>
                <th>Umumiy to'lov</th>
                <th>Umumiy oyliklar</th>
                <th>Umumiy xarajat</th>
                <th>Umumiy Kapital</th>
                <th>Arenda</th>
                <th>Foyda</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td/>

                <td>{allTable?.students?.student_total_payment}</td>
                <td>{allTable?.teachers?.teacher_total_salary}</td>
                <td>{allTable?.overheads?.total_overhead_payment}</td>
                <td>{allTable?.capitals?.total_capital}</td>
                <td/>
                {/*<td>{allTable.capitals.total_capital}</td>*/}
                <td>{allTable?.payment_total}</td>
            </tr>
            {/*{render}*/}
            </tbody>
        </Table>
    )
}


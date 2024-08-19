import {Table} from "shared/ui/table";
import {Button} from "shared/ui/button";
import {Modal} from "../../../../../shared/ui/modal";


export const StudentsPayments = ({studentData}) => {
    console.log(studentData)

    const renderStudents = () => {
        return studentData.map((item, i) => (
            <tr>
                <td>{i + 1}</td>
                <td>{item.name} {item.surname}</td>
                <td>{item.payment}</td>
                <td>{item.date}</td>
                <td>
                    <div style={{border: "1px solid", width: "fit-content" , padding: "5px 10px", borderRadius: "15px", textTransform: "capitalize", cursor: "pointer"}}>{item.typePayment}</div>
                </td>
                <td>
                    <div><Button type={"delete"} children={<i className={"fa fa-times"} style={{color: "white"}}/>}/>
                    </div>
                </td>
            </tr>
        ))
    }
    const totalPayment = studentData.reduce((sum, item) => sum + Number(item.payment), 0);
    const render = renderStudents()
    return (
        <div>
            <h2 style={{textAlign: "end", marginBottom: "20px", color: "green"}}>Total : {totalPayment}</h2>
            <Table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Ism Familiya</th>
                    <th>To'lov</th>
                    <th>Sana</th>
                    <th>To'lov turi</th>
                    <th>Ochirich <i style={{
                        color: "white",
                        padding: "2px 5px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        background: "red"
                    }} className={'fa fa-times'}/></th>
                </tr>
                </thead>
                <tbody>
                {render}
                </tbody>
            </Table>

            <Modal>

            </Modal>
        </div>
    );
};


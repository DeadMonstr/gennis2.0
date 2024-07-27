
import cls  from "./deletedTeachers.module.sass"

import {Table} from "shared/ui/table";

const teachersData = [
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},

]
export const DeletedTeachers = ({data}) => {
    const renderTeacher = () =>{
        return data.map((item , i) =>(
            <tr>
                <td>{i + 1}</td>
                <td>{item.name} {item.surname}</td>
                <td>{item.age}</td>
                <td>{item.number}</td>
                <td>{item.age}</td>
                <td>{item.subject}</td>
                <td>{item.deleteData}</td>
            </tr>
        ))
    }
    return (
        <div className={cls.teacher}>

            <div className={cls.table}>
                <Table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Full name</th>
                        <th>Username</th>
                        <th>Tel</th>
                        <th>Yosh</th>
                        <th>Fan</th>
                        <th>O'chirilgan sana</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderTeacher()}
                    </tbody>
                </Table>
            </div>


        </div>
    );
};


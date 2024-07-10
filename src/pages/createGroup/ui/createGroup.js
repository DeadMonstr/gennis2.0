import cls from "./createGroup.module.sass"
import {Button} from "shared/ui/button";
import {Table} from "shared/ui/table";
import {Input} from "../../../shared/ui/input";

const createGroupData = [
    {name: 'saras' , surname: "sa" , age: 12 , reg_date: "2122212" , comment: "qweq", subject: "das" , reason: "dsa" , status: ""}
]

export const CreateGroup = () => {

    const renderDate = () =>{
        return createGroupData.map((item , i) =>(
            <tr>
                <td>{i +1}</td>
                <td>{item.name} {item.surname}</td>
                <td>{item.age} </td>
                <td>{item.reg_date} </td>
                <td>{item.comment} </td>
                <td>{item.subject} </td>
                <td>{item.reason} </td>
                <td><Input extraClassName={cls.createGroupInput} type={'checkbox'}/><div></div></td>
            </tr>
        ))
    }
    return (
        <div className={cls.createGroup}>
            <div className={cls.createGroupHeader}>
                <div className={cls.createGroupFilter}>
                    <Button type={"filter"}>
                        Filter
                    </Button>
                </div>
                <div className={cls.createGroupHeaderBtn}>
                    <Button type={"simple__add"}>
                        create grooup
                    </Button>
                    <Button type={"login"} status={"timeTable"}>Time Table</Button>
                </div>
            </div>

            <div className={cls.createGroupTable}>
                <Table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Full name</th>
                        <th>Yosh</th>
                        <th>Registratsiya sana</th>
                        <th>Izoh</th>
                        <th>Fanlar</th>
                        <th>Sabab</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderDate()}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};


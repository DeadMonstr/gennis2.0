import { useNavigate } from "react-router";
import { Table } from "shared/ui/table";
import cls from "./studnets.module.sass";
import { useSelector } from "react-redux";
import { getStudyingStudentsWithBranch, getStudyingStudentsLoading } from "../../model/selector/studentsSelector";
import {DefaultPageLoader} from "../../../../shared/ui/defaultLoader";

export const Students = ({ currentTableData }) => {
    const getStStudents = useSelector(getStudyingStudentsWithBranch);
    const loadingDef = useSelector(getStudyingStudentsLoading);
    const navigation = useNavigate();

    const renderStudents = () => {
        if (loadingDef) {
            return (
                <tr>
                    <td colSpan="6">Yuklanmoqda...</td>
                </tr>
            );
        }

        const studentsToRender = getStStudents && getStStudents.length > 0 ? getStStudents : currentTableData;

        if (!studentsToRender || studentsToRender.length === 0) {
            return (
               <DefaultPageLoader/>
            );
        }

        return studentsToRender.map((item, i) => (
            <tr key={item.id} onClick={() => navigation(`profile/${item.id}`)}>
                <td>{i + 1}</td>
                <td>{item.user.name} {item.user.surname}</td>
                <td>{item.user.age}</td>
                <td>{item.user.phone}</td>
                <td>{item.group[0]?.name}</td>
                <td>
                    <div style={{ width: "fit-content", border: `2px solid ${item.color}`, color: `${item.color}`, padding: "1.5rem", borderRadius: "10px" }}>
                        {item.debt}
                    </div>
                </td>
            </tr>
        ));
    };

    return (
        <div className={cls.students}>
            <div className={cls.table}>
                <Table extraClass={cls.table__head}>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Full name</th>
                        <th>Yosh</th>
                        <th>Telefon nomer</th>
                        <th>Guruh</th>
                        <th>Guruh narxi</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderStudents()}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

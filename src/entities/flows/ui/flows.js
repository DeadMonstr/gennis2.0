import {Table} from "shared/ui/table";
import cls from "pages/flowsPage/ui/flowsPage.module.sass";
import {Button} from "shared/ui/button";
import {useState} from "react";
import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import {Textarea} from "shared/ui/textArea";


export const Flows = ({currentTableData}) => {
    const [activeFlow, setActiveFlow] = useState(false)
    const [addFlow, setAddFlow] = useState(false)

    const [activeCheckbox, setActiveCheckBox] = useState(false)


    const renderFlowData = () => {
        return currentTableData.map((item, i) => {
            return (
                <tr>
                    <td>{i + 1}</td>
                    <td>{item.level.subject.name} / {item.level.name} </td>
                    <td>{item.teacher.total_students}</td>
                    <td>{item.teacher.user.name}</td>
                </tr>
            )
        })
    }

    console.log(currentTableData, 'flow item')

    return (
        <div className={cls.flowMain}>
            <div className={cls.flow__filter}>
                <Button onClick={() => setActiveFlow(!activeFlow)} type={"simple"}>Create Flow</Button>
                <Button type={"simple-add"} onClick={() => setAddFlow(!addFlow)}>Add Flow</Button>
            </div>

            <Table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Fan Level</th>
                    <th>O'quvchi soni</th>
                    <th>O'qituvchisi</th>
                </tr>
                </thead>
                <tbody>
                {renderFlowData()}
                </tbody>

            </Table>

            <Modal active={activeFlow} setActive={setActiveFlow}>
                <h2>Create Flow</h2>
                <div className={cls.flowModal}>

                    <div className={cls.flowModalHeader}>
                        <h2>Activity</h2>
                        <Input onChange={() => setActiveCheckBox(!activeCheckbox)} type={"checkbox"}/>
                    </div>

                    <div className={cls.flowModalForm}>
                        {activeCheckbox ?
                            <><Input/></> :
                            <>
                                <Select title={"O'qituvchini tanlang"}/>
                                <Select title={"Level"}/>
                                <Textarea/>
                            </>}
                        <Button type={'simple'}>Create</Button>
                    </div>
                </div>
            </Modal>
            <Modal active={addFlow} setActive={setAddFlow}>
                <h2>Add Flow</h2>

                <div className={cls.flowModalForm}>
                    <Select/>
                    <Button type={"simple"}>Add</Button>
                </div>

            </Modal>

        </div>
    );
};


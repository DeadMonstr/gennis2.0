import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";
import cls from "../location/locations.module.sass"


export const ModalLocation = ({activeModal, setActive}) => {
    return (
        <Modal setActive={setActive} active={activeModal}>
            <div style={{display: "flex", flexDirection: "column", gap: "2rem", padding: '3rem 2rem'}}>
                <Button extraClass={cls.btn} type={`editPlus`} children={<><i className={"fa fa-trash"}/></>}/>
                <Input title={"Name"}/>
                <Input title={"Number"}/>
                <Input title={"System_id"}/>
            </div>
        </Modal>
    );
};
export const ModalSystem = ({activeModal, setActive}) => {
    return (
        <div>
            <Modal setActive={setActive} active={activeModal}>
                <div style={{display: "flex", flexDirection: "column", gap: "2rem", padding: '3rem 2rem'}}>
                    <Button extraClass={cls.btn} type={`editPlus`} children={<><i className={"fa fa-trash"}/></>}/>
                    <Input title={"Name"}/>
                    <Input title={"System_id"}/>
                </div>
            </Modal>
        </div>
    );
};

export const ModalBranch = ({activeModal, setActive}) => {
    return (
        <div>
            <Modal setActive={setActive} active={activeModal}>
                <div style={{display: "flex", flexDirection: "column", gap: "2rem", padding: '3rem 2rem'}}>
                    <Button extraClass={cls.btn} type={`editPlus`} children={<><i className={"fa fa-trash"}/></>}/>
                    <Input title={"Name"}/>
                    <Input title={"Number"}/>
                    <Input title={"System_id"}/>
                </div>
            </Modal>
        </div>
    );
};


export const ModalEducation = ({activeModal, setActive}) => {
    return (
        <div>
            <Modal setActive={setActive} active={activeModal}>
                <div style={{display: "flex", flexDirection: "column", padding: '3rem 2rem'}}>
                    <Button extraClass={cls.btn} type={`editPlus`} children={<><i className={"fa fa-trash"}/></>}/>
                    <Input title={"Name"}/>
                </div>
            </Modal>
        </div>
    );
};


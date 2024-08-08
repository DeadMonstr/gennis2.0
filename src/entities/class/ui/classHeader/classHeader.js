import {HexColorPicker} from "react-colorful";

import cls from "./classHeader.module.sass"
import {Select} from "shared/ui/select";
import {useState} from "react";
import {Modal} from "shared/ui/modal";
import {Button} from "shared/ui/button";
import {ClassModal} from "../classModal/classModal";
import {useForm} from "react-hook-form";


export const ClassHeader = () => {
    const [color, setColor] = useState("")
    const {register, handleSubmit, setValue} = useForm()


    const [activeEdit, setActiveEdit] = useState(false)

    const [addClass, setAddClass] = useState(false)

    const [active, setActive] = useState(false)


    const editClassName = (data) => {
        console.log(data)
        setActiveEdit(!activeEdit)
        setValue("editClassName", "")

    }

    const createClass = (data) => {
        console.log(data)
        setAddClass(!addClass)
        setValue("addClass", "")
    }
    return (
        <div className={cls.header}>
            <div className={cls.header__branch}>
                <Select title={"Branches"}/>
            </div>
            <div className={cls.header__btn}>
                <div onClick={() => setActive(!active)} className={cls.header__changeColor}>
                    <div className={cls.changeColorBox} style={{background: color ? color : null}}></div>
                    <h2>Types</h2>
                </div>
                <div style={{display: "flex"}}>
                    <Button onClick={() => setAddClass(!addClass)} type={"editPlus"}><i
                        className="fa fa-plus"/></Button>
                    <Button onClick={() => setActiveEdit(!activeEdit)} type={"editPlus"}> <i
                        className="fa fa-pen"/></Button>

                </div>
            </div>


            <Modal setActive={setActive} active={active}>

                <div className={cls.changeColorItem}>
                    <div>
                        <h2>Tanlangan rang :</h2>
                        <div className={cls.modalBox} style={{background: color}}></div>
                    </div>
                    <HexColorPicker style={{width: "35rem", height: "20rem"}} color={color} onChange={setColor}/>


                   <div style={{display: "flex" , flexWrap: "wrap",width: "30rem"}}>
                       {/*<Button onClick={() => setColor("#c6ad23")}>Choose gold</Button>*/}
                       <Button onClick={() => setColor("#22C55E")}>Choose green</Button>
                       <Button onClick={() => setColor("#2563EB")}>Choose blue</Button>
                   </div>

                </div>
            </Modal>
            <ClassModal handleSubmit={handleSubmit} register={register} onClick={editClassName}
                        createClass={createClass} activeEdit={activeEdit}
                        setActiveEdit={setActiveEdit} addClass={addClass} setAddClass={setAddClass}/>
        </div>
    )
}
import cls from './classColorAdd.module.sass'
import {Button} from "shared/ui/button";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Select} from "../../../../../shared/ui/select";


export const ClassColorAdd = () => {


    const {register, handleSubmit, setValue} = useForm()
    const [activeEdit, setActiveEdit] = useState(false)
    const [activeAdd, setActiveAdd] = useState(false)

    return (
        <div className={cls.colorAdd}>
            <div className={cls.colorAdd_wrapper}>
                <div className={cls.colorAdd_header}>
                    <div className={cls.header__btnDiv}>
                        Colors
                        <span>T</span>
                    </div>
                    <div className={cls.header__rightBtn}>
                        <Button onClick={() => setActiveAdd(!activeAdd)} type={"editPlus"}>
                            <i className={"fa fa-plus"}/>
                        </Button>
                        <Button  onClick={() => setActiveEdit(!activeEdit)}  type={"editPlus"}>
                            <i className={"fa fa-pen"}/>
                        </Button>
                    </div>
                </div>
            </div>
            <Modal active={activeAdd} setActive={setActiveAdd}>
                <h2>Rang  qo’shish   </h2>
                <div>
                    <Form extraClassname={cls.extraClassForm} typeSubmit={""} onSubmit={handleSubmit}>
                        <Select title={"rang"}/>
                        <Input name={"editColorName"} register={register}/>
                        <Button extraClass={cls.btn}>Add</Button>
                    </Form>
                </div>
            </Modal>

            <Modal active={activeEdit} setActive={setActiveEdit}>
                <h2>Rang  o’zgartirish </h2>
                <div>
                    <Form extraClassname={cls.extraClassForm} typeSubmit={""} onSubmit={handleSubmit}>
                        <Select title={"rang"}/>
                        <Input name={"editColorName"} register={register}/>
                        <Button extraClass={cls.btn}>Edit</Button>
                    </Form>
                </div>
            </Modal>

        </div>
    );
};


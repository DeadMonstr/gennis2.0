
import {Input} from "shared/ui/input";
import {Form} from "shared/ui/form";
import {Button} from "shared/ui/button";
import cls from "../../creates.module.sass"
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {postCreateSystemThunk} from "../../model/createThunk/createThunk";

export const SystemCreate = () => {

const {register , handleSubmit,setValue} = useForm()






    const dispatch = useDispatch()


    const onClick = (data) =>{
        console.log(data)
        dispatch(postCreateSystemThunk(data))
        setValue("name" , "")
        setValue("number" , "")
    }

    return (
        <div className={cls.formMain}>
            <div className={cls.formBox}>
                <h1 className={cls.formTitle}>System</h1>
                <Form onSubmit={handleSubmit(onClick)} extraClassname={cls.form} typeSubmit={""}>
                    <Input register={register} name={"name"} title={"System"}/>
                    <Input type={"number"} register={register} name={"number"} title={"Number"}/>
                    <Button children={"create"}/>
                </Form>
            </div>
        </div>
    );
};
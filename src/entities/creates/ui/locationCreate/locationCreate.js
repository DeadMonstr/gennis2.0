
import {Input} from "shared/ui/input";
import {Form} from "shared/ui/form";
import {Button} from "shared/ui/button";
import cls from "../../creates.module.sass"
import {Select} from "shared/ui/select";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {createLocationThunk} from "../../model/createThunk/locationThunk";

export const LocationCreate = () => {

    const {register , handleSubmit , setValue} = useForm()

    const dispatch = useDispatch()
    const onClick = (data) => {
        console.log(data)
        dispatch(createLocationThunk(data))
        setValue("name" , "")
        setValue("number" , "")
        setValue("system" , "")
    }
    return (
        <div className={cls.formMain}>
            <div className={cls.formBox}>
                <h1 className={cls.formTitle}>Location</h1>
                <Form onSubmit={handleSubmit(onClick)} extraClassname={cls.form} typeSubmit={""}>
                    <Input register={register} name={"name"} title={"Name"}/>
                    <Input title={"Number"} register={register} name={"number"}/>
                    <Input register={register} name={"system"} title={"System_id"}/>
                    <Button children={"create"}/>
                </Form>
            </div>
        </div>
    );
};
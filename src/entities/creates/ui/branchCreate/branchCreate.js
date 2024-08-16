
import {Input} from "shared/ui/input";
import {Form} from "shared/ui/form";
import {Button} from "shared/ui/button";
import cls from "../../creates.module.sass"
import {Select} from "../../../../shared/ui/select";
import {useDispatch} from "react-redux";

import {useForm} from "react-hook-form";
import {createBranchThunk} from "../../model/createThunk/createBranchThunk";

export const BranchCreate = () => {
    const {register , handleSubmit,setValue} = useForm()

    const dispatch = useDispatch()
    //
    //
    const onClick = (data) =>{
        console.log(data)
        dispatch(createBranchThunk(data))
        // setValue("name" , "")
        // setValue("number" , "")
    }

    return (
        <div className={cls.formMain}>
            <div className={cls.formBox}>
                <h1 className={cls.formTitle}>Branches</h1>
                <Form onSubmit={handleSubmit(onClick)} extraClassname={cls.form} typeSubmit={""}>
                    <Input register={register} name={"name"} title={"Name"}/>
                    <Input register={register} name= {"number"} title={"Number"}/>
                    <Input register={register} name={"system_id"} title={"System_id"}/>
                    <Button children={"create"}/>
                </Form>
            </div>
        </div>
    );
};




import {Input} from "shared/ui/input";
import {Form} from "shared/ui/form";
import {Button} from "shared/ui/button";
import cls from "../../creates.module.sass"
import {Select} from "shared/ui/select";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createLocationThunk} from "../../model/createThunk/locationThunk";

import {useCallback, useEffect, useState} from "react";
import {getLocationThunk, getSystemId} from "../../model/createThunk/createBranchThunk";
import {getSystemIdSelector} from "../../model/createSelector/locationSelector";
import {Modal} from "../../../../shared/ui/modal";


export const LocationCreate = ({active , setActive}) => {

    const {register, handleSubmit, setValue} = useForm()
    const [select, setSelect] = useState([])

    const dispatch = useDispatch()
    const systemId = useSelector(getSystemIdSelector)

    useEffect(() => {
        dispatch(getSystemId())
    }, [])


    const onClick = (data) => {
        console.log(data)
        console.log(select)
        const res = {
            ...data,
            system: select

        }
        dispatch(createLocationThunk(res))
        dispatch(getLocationThunk())
        setActive(!active)
        setValue("name", "")
        setValue("number", "")
        setValue("system", "")
    }


    return (
       <Modal setActive={setActive} active={active}>
           <div className={cls.formMain}>
               <div className={cls.formBox}>
                   <h1 className={cls.formTitle}>Location</h1>
                   <Form onSubmit={handleSubmit(onClick)} extraClassname={cls.form} typeSubmit={""}>
                       <Input register={register} name={"name"} title={"Name"}/>
                       <Input title={"Number"} register={register} name={"number"}/>
                       <Select options={systemId} title={"System name"} onChangeOption={setSelect}/>
                       <Button children={"create"}/>
                   </Form>
               </div>
           </div>
       </Modal>
    );
};
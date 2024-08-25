import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import cls from "./studentProfileContract.module.sass"
import {useForm} from "react-hook-form";
import {EditableCard} from "shared/ui/editableCard";
import {memo} from "react";
import classNames from "classnames";
import { FileUploader } from 'react-drag-drop-files';
import {Button} from "../../../../../shared/ui/button";
export const StudentProfileContract = memo(({setActive, active}) => {

    const {register , handleSubmit ,setValue} = useForm()
    const fileTypes = ["PDF", "JPG", "PNG"]; // Ruxsat etilgan fayl turlari

    const onClickForm = (data) => {
        console.log(data)
        setValue("name" , "")
        setValue("campusName" , "")
        setValue("code" , "")
        setValue("director" , "")
        setValue("locationType" , "")
        setValue("district" , "")
        setValue("bankSheet" , "")
        setValue("inn" , "")
        setValue("mfo" , "")
        setValue("number" , "")
    }

    const handleFileChange = (file) => {
        setValue("contract", file); // react-hook-form orqali faylni saqlash
    };
    return (
        <EditableCard titleType={"cross"} extraClass={classNames(cls.contractMain, {
            [cls.active] : active === "contract"
        })}
        onClick={() => setActive(!"contract")}
        >
            <div className={cls.form}>

                <Form extraClassname={cls.btn} onSubmit={handleSubmit(onClickForm)}>
                    <Input extraClassName={cls.input} register={register} name={"name"} title={"Ism"}/>
                    <Input register={register} name={"campusName"}  title={"Familiya"}/>
                    <Input register={register} name={"code"} title={"Otasining ismi"}/>
                    <Input register={register} name={"director"} title={"Passport seriyasi"} defaultValue={"AD"}/>
                    <Input register={register} name={"locationType"} title={"Berilgan vaqti"}/>
                    <Input register={register} name={"district"} title={"Berilgan joyi"}/>
                    <Input register={register} name={"bankSheet"} title={"Manzil"}/>
                    <Input register={register} name={"from_date"} title={"Dan"} type={"date"}/>
                    <Input register={register} name={"until_date"} title={"Gacha"} type={"date"}/>
                </Form>

                <div className={cls.fileDrop}>
                    <FileUploader
                        handleChange={handleFileChange}
                        name="contract"
                        types={fileTypes}
                        classes={cls.fileUploader}
                        label="Pdf fayl kiriting yoki bu yerga tortib qo'ying"
                    />
                    <Button type={"submit"} children={"Yuborish"}/>
                </div>

            </div>
        </EditableCard>

    );
})

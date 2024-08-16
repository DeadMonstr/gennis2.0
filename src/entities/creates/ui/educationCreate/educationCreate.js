
import {Input} from "shared/ui/input";
import {Form} from "shared/ui/form";
import {Button} from "shared/ui/button";
import cls from "../../creates.module.sass"

export const EducationCreate = () => {

    return (
        <div className={cls.formMain}>
            <div className={cls.formBox}>
                <h1 className={cls.formTitle}>Education </h1>
                <Form extraClassname={cls.form} typeSubmit={""}>
                    <Input title={"Name"}/>
                    <Button children={"create"}/>
                </Form>
            </div>
        </div>
    );
};
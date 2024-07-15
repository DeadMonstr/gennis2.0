import React from 'react';
import classNames from "classnames";

import cls from "./form.module.sass"

export const Form = ({id, extraClassname, onSubmit, children, typeSubmit= "inside"}) => {
    return (
        <form
            id={id}
            className={classNames(cls.form, extraClassname)}
            onSubmit={onSubmit}
            action=""
        >

            {children}

            {
                typeSubmit === "inside"
                    ?
                    <input value={"Tasdiqlash"} className={cls.submit} type="submit"/>
                    :
                    null
            }

        </form>
    );
};
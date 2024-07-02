import React from 'react';
import cls from "./textArea.module.sass"
import classNames from "classnames";


const Textarea = React.memo((
    {
        defaultValue,
        register,
        title = "",
        required,
        name,
        subTitle = "",
        errors,
        placeholder,
        onChange,
        style,
        extraClassName,
        value
    }) => {


    return register ? (
        <label style={style} className={cls.textareaLabel} htmlFor={name}>
            {
                title || subTitle ?
                    <div className={cls.info}>
                        <span>{title}</span>
                        <span>{subTitle}</span>
                    </div> : null
            }

            <textarea
                id={name}
                className={classNames(cls.textarea,extraClassName,{
                    [`${cls?.error}`] : errors?.[name]
                })}
                required={required}
                {...register(name,{
                    value:value,
                    defaultValue: defaultValue,
                    placeholder: placeholder,
                    onChange: e => onChange ? onChange(e): null
                })}
            />
            <div className={cls.message}>
                {
                    errors?.[name] &&
                    <span className={cls.message__error}>
				        {errors?.[name].message}
				    </span>
                }
            </div>
        </label>
    ) : (
        <label style={style} className={cls.textareaLabel} htmlFor={name}>
            <div className={cls.info}>
                <span>{title} </span>
                <span>{subTitle}</span>
            </div>
            <textarea
                id={name}
                className={classNames(cls.textarea,extraClassName,{
                    [`${cls?.error}`] : errors?.[name]
                })}
                value={value}
                required={required}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onChange={e => onChange(e.target.value)}
            />
        </label>
    );
});

export default Textarea;
import React, {useCallback, useEffect, useState} from 'react';
import classNames from "classnames";

import cls from "./select.module.sass"

export const Select = React.memo(({options, keyValue, required, defaultValue, title, onChangeOption, status, extraClass}) => {

    const [selectOption, setSelectOption] = useState("")
    const [optionsData, setOptionsData] = useState([])
    const [isChanged, setIsChanged] = useState(false)

    useEffect(() => {
        setOptionsData(options)
    }, [options])

    useEffect(() => {
        if (defaultValue) {
            setSelectOption(defaultValue)
        }
    }, [defaultValue])

    useEffect(() => {
        if (isChanged) {
            if (!selectOption) return
            onChangeOption(selectOption)
            setIsChanged(false)
        }
    }, [selectOption, onChangeOption, isChanged])


    const renderOptionsOfSelect = useCallback(() => {
        return optionsData?.map((item, index) => {

            //
            const value = item[keyValue] || item.value || item.id || item.name || item
            const key = item.name || item
            //
            // if (!item.length)
            return (
                <option
                    disabled={item.disabled}
                    key={index}
                    value={value}
                >
                    {key}
                </option>

            )

        })
    }, [optionsData, keyValue])

    const renderedOptions = renderOptionsOfSelect()

    return (
        <label className={classNames(cls.label, extraClass)}>
            {/*<span*/}
            {/*    className={classNames(cls.label__title, {*/}
            {/*        [cls.disabled]: status === "disabled",*/}
            {/*        [cls.error]: status === "error"*/}
            {/*    })}*/}
            {/*>*/}
            {/*    {title}*/}
            {/*</span>*/}
            <select
                disabled={status === "disabled"}
                className={classNames(cls.label__inner, extraClass, {
                    [cls.error]: status === "error"
                })}
                required={required}
                value={selectOption}
                onChange={(e) => {
                    setSelectOption(e.target.value)
                    setIsChanged(true)
                }}
            >
                {title ? <option value={""}>{title}</option> : <option value={""} disabled>Tanlang</option>}
                {renderedOptions}
            </select>
            {status === "error" ? <span className={cls.label__error}>Error</span> : null}
        </label>
    );
})
import cls from "./studentsHeader.module.sass";
import {Link} from "react-router-dom";
import {Button} from "shared/ui/button";
import {Select} from "shared/ui/select";
import {Radio} from "shared/ui/radio";
import React, {useState} from "react";
import classNames from "classnames";



export const StudentsHeader = ({onChange , selectedRadio , setSelectedRadio , peoples , onClick , active , setActive , branches , selected , setSelected}) => {

    return (
        <div className={cls.mainContainer}>
            <div className={cls.mainContainer_buttonPanelBox}>
                <div className={cls.mainContainer_buttonPanelBox_leftCreateButton}>
                    <Link to={`createGroup`}><Button extraClass={cls.extraCutClass}>Create group</Button></Link>
                    <Button extraClass={cls.noneBackground}>Add group</Button>
                </div>
                <Select options={branches} onChangeOption={() => setSelected} defaultValue={branches[0].name}/>
            </div>
            <div className={cls.mainContainer_filterPanelBox}>
                    <Button
                        extraClass={cls.extraCutClassFilter}
                        onClick={() => setActive(!active)}
                        type={"filter"}
                    >
                        Filter
                    </Button>
                <div  className={cls.mainContainer_filterPanelBox_rightFilterRadioGroupBox}>
                    {peoples.map((item, id) => (
                        <Radio
                            key={id}
                            onChange={() => onChange(item.name)}
                            checked={selectedRadio === item.name}
                            extraClasses={selectedRadio === item.name ? cls.activeFilter : null}
                        >
                            {item.label}
                        </Radio>
                    ))}
                </div>
            </div>
        </div>
    )
}
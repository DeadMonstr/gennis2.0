import React, {useState} from 'react';

import cls from "./switch.module.sass"

export const Switch = React.memo((
    {
        disabled
    }) => {

    const [swtichOff, setSwitchOff ] = useState(false)

    return (
        <div className={cls.mainBody}>
            <button
                disabled={disabled}
                className={`${cls.mainSwitchBox}  
                ${disabled ?
                    `${cls.disabled}` :
                    `${cls.notDisabled}`
                }
                ${swtichOff ? 
                    `${cls.switchOff}` : 
                    `${cls.switchOn}`}`}
                onClick={()=> setSwitchOff(!swtichOff)}>
                {swtichOff ?

                    <span className={cls.mainSwitchBox__offSwitch}></span>
                    :
                    <span className={cls.mainSwitchBox__onSwitch}></span>
                }

            </button>
        </div>

    );
});
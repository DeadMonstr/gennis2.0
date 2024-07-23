import React from 'react';
import cls from "./switch.module.sass";

export const Switch = React.memo(({ switchOn, setSwitchOn, disabled }) => {
    return (
        <div className={cls.mainBody}>
            <button
                disabled={disabled}
                className={`${cls.mainSwitchBox}  
                ${disabled ? `${cls.disabled}` : `${cls.notDisabled}`}
                ${switchOn ? `${cls.switchOn}` : `${cls.switchOff}`}`}
                onClick={() => setSwitchOn(!switchOn)}>
                {switchOn ?
                    <span className={cls.mainSwitchBox__onSwitch}></span>
                    :
                    <span className={cls.mainSwitchBox__offSwitch}></span>
                }
            </button>
        </div>
    );
});

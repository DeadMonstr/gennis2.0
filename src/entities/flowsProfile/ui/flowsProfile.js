import {memo} from 'react';
import classNames from "classnames";

import cls from "./flowsProfile.module.sass";
import teacher from "shared/assets/images/teachingTeacher.png";
import defaultUser from "shared/assets/images/user_image.png";
import defaultRoom from "shared/assets/images/room.png";
import coin from "shared/assets/images/coin.png";
import {FlowProfileStudentsList} from "./flowsProfileItem";

export const FlowProfileNavigators = memo(() => {
    return (
        <div className={cls.flowProfile}>
            <div className={cls.navigators}>
                <div
                    className={cls.navigatorsItem}
                    style={{borderColor: "#3B82F6"}}
                >
                    <div className={cls.navigatorsItem__link}>
                        <p>Next lesson</p>
                        <i
                            className={classNames("fas fa-share", cls.navigatorsItem__icon)}
                        />
                    </div>
                    <div className={cls.navigatorsItem__border}/>
                    <div className={cls.navigatorsItem__info}>
                        <h2>WEDNESDAY</h2>
                        <h2>14:00</h2>
                        <h2>Lincoln</h2>
                    </div>
                </div>
                <div
                    className={cls.navigatorsItem}
                    style={{borderColor: "#5A588E"}}
                >
                    <div className={cls.navigatorsItem__link}>
                        <p>Next lesson</p>
                        <img src={teacher} alt=""/>
                    </div>
                    <div className={cls.navigatorsItem__border}/>
                    <div className={cls.navigatorsItem__info}>
                        <img className={cls.navigatorsItem__image} src={defaultUser} alt=""/>
                        <h2>Rustamova Sh</h2>
                        <h2 className={cls.navigatorsItem__subject}>Matematika</h2>
                    </div>
                </div>
                <div
                    className={cls.navigatorsItem}
                    style={{borderColor: "#22C55E"}}
                >
                    <div className={cls.navigatorsItem__link}>
                        <p>Class</p>
                        <h1
                            className={cls.navigatorsItem__icon}
                            style={{color: "black"}}
                        >
                            7
                        </h1>
                        <h2 className={cls.navigatorsItem__subject}>Green</h2>
                    </div>
                    <div className={cls.navigatorsItem__border}/>
                    <div className={cls.navigatorsItem__info}>
                        <img className={cls.navigatorsItem__image} src={defaultRoom} alt=""/>
                        <h2>1-xona</h2>
                    </div>
                </div>
            </div>
            <FlowProfileStudentsList/>
        </div>
    )
})
import cls from "./locations.module.sass"
import {Button} from "../../../../shared/ui/button";


export const Location = () => {
    return (
        <div className={cls.location}>
            <div className={cls.locations__wrapper}>
                <div className={cls.locationsBox}>
                    <div className="locationHeader">
                        <span>

                        Location
                        </span>
                        <Button type={"editPlus"} children={<i className={"fa fa-pen"}/>}/>
                    </div>
                    <div className={cls.location__info}>

                    </div>

                </div>
            </div>
        </div>
    );
};


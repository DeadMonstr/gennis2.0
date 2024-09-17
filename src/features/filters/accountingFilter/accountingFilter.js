import {Modal} from "shared/ui/modal";
import {Select} from "shared/ui/select";
import {Switch} from "shared/ui/switch";

import cls from "../filters.module.sass"
export const AccountingFilter = ({setActive, active , setActiveDel , activeDel}) => {

    return (
        <div>
            <Modal setActive={setActive} active={active}>
                <div className={cls.filter}>
                    <h1>
                        Filter
                    </h1>
                    <div className={cls.filter__container}>
                        <Select extraClass={cls.filter_select} />
                        <Select extraClass={cls.filter_select}/>
                        <Select extraClass={cls.filter_select}/>
                        <div className={cls.filter__switch}>
                            <p>
                                O'chirilganlar
                            </p>
                            <Switch  onChangeSwitch={setActiveDel} activeSwitch={activeDel} />
                        </div>
                        <div className={cls.filter__switch}>
                            <p>
                                Arxiv
                            </p>
                            <Switch/>
                        </div>

                    </div>
                </div>
            </Modal>
        </div>
    );
};


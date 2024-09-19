import React from 'react';
import cls from "../../../entities/accounting/ui/acauntingTables/accountingTableWorkerSalary/empSalary.module.sass";
import {Button} from "../button";
import {Modal} from "../modal";

export const YesNo = ({activeDelete  ,setActiveDelete , changingData , onDelete}) => {


    return (
        <Modal active={activeDelete} setActive={setActiveDelete}>
            {!changingData ? <h1>Rostan ham <br></br> o'chirmoqchimisz</h1> : <div className={cls.modalHeader}>{changingData?.name} ni <br/>
                o'chirmoqchimisz
            </div>
            }

            <div className={cls.deletemodal}>
                <Button type={"danger"} onClick={onDelete}> Xa</Button>
                <Button onClick={() => setActiveDelete(!activeDelete)}>Yo'q</Button>
            </div>
        </Modal>
    );
};


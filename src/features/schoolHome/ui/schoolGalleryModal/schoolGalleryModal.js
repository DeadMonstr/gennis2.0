import React, {useState} from 'react';

import {SchoolHomeGallery} from "entities/schoolHome";
import {Button} from "shared/ui/button";
import {Modal} from "shared/ui/modal";

import cls from "./schoolGalleryModal.module.sass";

export const SchoolGalleryModal = () => {

    const [active, setActive] = useState(false)
    
    const onDeleteText = () => {
      
    }

    return (
        <>


            <SchoolHomeGallery setActive={setActive}/>

            <Modal
                active={active}
                setActive={setActive}
                extraClass={cls.imageEdit}
            >
                <h1>Edit box</h1>
                <div className={cls.image}>
                    <div className={cls.image__container}>
                        <i className="far fa-image"/>
                    </div>
                </div>
                <div className={cls.imageEdit__btns}>
                    <Button
                        type={"danger"}
                        onClick={() => onDeleteText()}
                    >
                        Delete
                    </Button>
                    <Button>Add</Button>
                </div>
            </Modal>

        </>
    );
}

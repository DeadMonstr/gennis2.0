import cls from "./schoolHomeStudentProfile.module.sass"
import editIcon from "shared/assets/icons/edittTuron.svg"
import addIcon from "shared/assets/icons/PlusCircle.svg"


export const SchoolHomeStudentProfile = ({data , setValue , setEdit , add , setAdd , setDeleteId}) => {





    const renderData = () => {
        return data.map(item => (
            <div className={cls.main__box}>
                <div className={cls.main__box_img}>

                    <div onClick={() => {
                        setEdit(true)
                        setValue("name", item.name)
                        setValue("text", item.text)
                        setDeleteId(item)
                    }}
                         className={cls.main__edit}
                    >
                        <img src={editIcon} alt=""/>
                    </div>
                    <img src={item?.images.map(item => item.image)} alt=""/>

                </div>

                <div className={cls.main__box_title}>

                    {item?.name}
                </div>
                <div className={cls.main__box_descr}>

                    {item?.text}
                </div>
            </div>
        ))
    }
    const render = renderData()

    return (
        <div className={cls.main}>
            <div className={cls.main__header}>
                <div className={cls.main__title}>
                    Student Profile
                </div>


                <div className={cls.main__add} onClick={() => setAdd(!add)}>
                    <img src={addIcon} alt=""/>
                </div>
            </div>
            <div className={cls.main__wrapper}>
                {render}
            </div>

        </div>
    );
};




import cls from "./course.module.sass"
import englishStatus from "shared/assets/images/english.status.jfif"
import {Button} from "shared/ui/button";
const subjectData = [
    {name: 'English' , status: englishStatus},
    {name: 'English' , status: englishStatus},
    {name: 'English' , status: englishStatus},
    {name: 'English' , status: englishStatus},
    {name: 'English' , status: englishStatus},
    {name: 'English' , status: englishStatus},
    {name: 'English' , status: englishStatus},
]

export const Course = () => {
    return (
        <div className={cls.course}>
            <div className={cls.course__wrapper}>
                {subjectData.map(item =>{
                    return(
                       <div className={cls.course__box}>
                           <div className={cls.course__box_img}>
                               <img src={item.status} alt=""/>
                           </div>
                           <div className={cls.course__box_title}>
                               <h2>{item.name}</h2>
                           </div>
                           <div className={cls.course__box_btn}>
                               <Button>
                                   Register
                               </Button>
                           </div>
                       </div>
                    )
                })}
            </div>
        </div>
    );
};


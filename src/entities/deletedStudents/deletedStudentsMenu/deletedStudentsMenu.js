import cls from "./deletedStudentsMenu.module.sass";
import classNames from "classnames";
import {useState} from "react";


export const menuList = [
    {name: "all", label: 'hammasi'},
    {name: "teacherDontLike", label: 'O’qituvchi yoqmadi'},
    {name: "badSituation", label: 'Pul oilaviy sharoit'},
    {name: "couldStudy", label: 'O’quvchi o’qishni eplolmadi'},
    {name: "finished", label: 'Kursni tamomladi'},
    {name: "other", label: 'boshqa'},

]

 const DeletedStudentsMenu = () => {
     const [activeMenu, setActiveMenu] = useState(menuList[0]?.name)

     return (
         <ul className={cls.deletedStudents__menu}>
             {menuList.map((item, i) => <li
                 key={i}
                 className={classNames(cls.other__item, {
                     [cls.active]: activeMenu === item.name
                 })}
                 onClick={() => {
                     setActiveMenu(item.name)
                 }}
             >
                 {item.label}
             </li>)}
         </ul>
     );
 };

 export default DeletedStudentsMenu;
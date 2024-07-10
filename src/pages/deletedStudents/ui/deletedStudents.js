import React, {useMemo, useState} from "react";
import classNames from "classnames";

import {Pagination} from "features/pagination";
import {StudentsFilter} from "features/filters/studentsFilter";
import {Table} from "shared/ui/table";
import {Button} from "shared/ui/button";
import {Select} from "shared/ui/select";

import cls from "./deletedStudents.module.sass"
import DeletedStudentsMenu from "../../../entities/deletedStudentsMenu/deletedStudentsMenu";
import DeletedStudentsList from "../../../entities/deletedStudentsLists/deletedStudentsList";



const branches =[
    {name: "chirchiq" , label: "chirchiq"},
    {name: "chirchiq1" , label: "chirchiq2"},
]
export const DeletedStudents = () => {

    let PageSize = useMemo(() => 50, [])
    const [active, setActive] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentTableData, setCurrentTableData] = useState([])

    // const [activeMenu, setActiveMenu] = useState(menuList[0]?.name)

    const [search, setSearch] = useState("")


    // const searchedUsers = useMemo(() => {
    //     const filteredHeroes = allStudentsData.slice()
    //     setCurrentPage(1)
    //     return filteredHeroes.filter(item =>
    //         item.name.toLowerCase().includes(search.toLowerCase()) ||
    //         item.surname.toLowerCase().includes(search.toLowerCase()) ||
    //         item.username.toLowerCase().includes(search.toLowerCase())
    //     )
    // }, [allStudentsData, search])

    // const currentTableData = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * PageSize;
    //     const lastPageIndex = firstPageIndex + PageSize;
    //     return searchedUsers.slice(firstPageIndex, lastPageIndex);
    // }, [PageSize, currentPage, searchedUsers]);
    //


    return (
        <div className={cls.deletedStudents}>
            <div className={cls.mainContainer_filterPanelBox}>
                <Button type={"filter"}
                    extraClass={cls.extraCutClassFilter}
                    onClick={() => setActive(true)}
                >
                    Filter
                </Button>
                <Select options={branches}/>
            </div>
            <DeletedStudentsMenu/>
            <DeletedStudentsList/>
            {/*<Pagination*/}
            {/*    setCurrentTableData={setCurrentTableData}*/}
            {/*    users={allStudentsData}*/}
            {/*    search={search}*/}
            {/*    setCurrentPage={setCurrentPage}*/}
            {/*    currentPage={currentPage}*/}
            {/*    pageSize={PageSize}*/}
            {/*    onPageChange={page => {*/}
            {/*        setCurrentPage(page)*/}
            {/*    }}*/}
            {/*/>*/}
            <StudentsFilter setActive={setActive} active={active}/>
        </div>
    )
}




// if (activeMenu === "all"){
//     return (
//         <tbody>
//         <tr>
//             <td>{i +1}</td>
//             <td>{item.name} {item.surname}</td>
//             <td>{item.age}</td>
//             <td>{item.number}</td>
//             <td>{item.group}</td>
//             <td>{item.reg_date}</td>
//             <td>{item.deletedDate}</td>
//             <td>{item.reason}</td>
//         </tr>
//         </tbody>
//     )
// }
// if (activeMenu === "teacherDontLike") {
//     if (item.teacherDontLike){
//         return (
//             <tbody>
//             <tr>
//                 <td>{i +1}</td>
//                 <td>{item.name} {item.surname}</td>
//                 <td>{item.age}</td>
//                 <td>{item.number}</td>
//                 <td>{item.group}</td>
//                 <td>{item.reg_date}</td>
//                 <td>{item.deletedDate}</td>
//                 <td>{item.reason}</td>
//             </tr>
//             </tbody>
//         )
//     }
// }
// if (activeMenu === "badSituation") {
//     if (item.badSituation){
//         return (
//             <tbody>
//             <tr>
//                 <td>{i +1}</td>
//                 <td>{item.name} {item.surname}</td>
//                 <td>{item.age}</td>
//                 <td>{item.number}</td>
//                 <td>{item.group}</td>
//                 <td>{item.reg_date}</td>
//                 <td>{item.deletedDate}</td>
//                 <td>{item.reason}</td>
//             </tr>
//             </tbody>
//         )
//     }
// }
// if (activeMenu === "couldStudy") {
//     if (item.couldStudy){
//         return (
//             <tbody>
//             <tr>
//                 <td>{i +1}</td>
//                 <td>{item.name} {item.surname}</td>
//                 <td>{item.age}</td>
//                 <td>{item.number}</td>
//                 <td>{item.group}</td>
//                 <td>{item.reg_date}</td>
//                 <td>{item.deletedDate}</td>
//                 <td>{item.reason}</td>
//             </tr>
//             </tbody>
//         )
//     }
// }
// if (activeMenu === "finished") {
//     if (item.finished){
//         return (
//             <tbody>
//             <tr>
//                 <td>{i +1}</td>
//                 <td>{item.name} {item.surname}</td>
//                 <td>{item.age}</td>
//                 <td>{item.number}</td>
//                 <td>{item.group}</td>
//                 <td>{item.reg_date}</td>
//                 <td>{item.deletedDate}</td>
//                 <td>{item.reason}</td>
//             </tr>
//             </tbody>
//         )
//     }
// }
// if (activeMenu === "other") {
//     if (item.other){
//         return (
//             <tbody>
//             <tr>
//                 <td>{i +1}</td>
//                 <td>{item.name} {item.surname}</td>
//                 <td>{item.age}</td>
//                 <td>{item.number}</td>
//                 <td>{item.group}</td>
//                 <td>{item.reg_date}</td>
//                 <td>{item.deletedDate}</td>
//                 <td>{item.reason}</td>
//             </tr>
//             </tbody>
//         )
//     }
// }
import {DeletedStudents, NewStudents, Students} from "entities/students";
import {StudentsHeader} from "../../../entities/students/studentsHeader/ui/studentsHeader";
import {useMemo, useState} from "react";



import {allStudentsData} from "entities/students/studentsData/studentsData";
import {Pagination} from "features/pagination";

import cls from "./students.module.sass"
import {StudentsFilter} from "features/filters/studentsFilter";

const studentsFilter = [
    {name: "newStudents", label: "New studyingStudents"},
    {name: "studying", label: "Studying studyingStudents"},
    {name: "deletedStudents", label: "Deleted studyingStudents"},
]


const branches = [
    {name: "chirhciq"},
    {name: "gazalkent"},
    {name: "xo'jakent"},
]
export const StudentsPage = () => {


    let PageSize = useMemo(() => 50, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("")
    const [active , setActive] = useState(false)
    const [selectedRadio, setSelectedRadio] = useState(studentsFilter[0].name);
    const [selected , setSelected] = useState([])
    const handleChange = (value) => {
        setSelectedRadio(value);
        console.log(value)
    };
    const renderStudents = () => {
        switch (selectedRadio) {
            case "newStudents" :
                return <NewStudents currentTableData={currentTableData}/>
            case "deletedStudents":
                return <DeletedStudents currentTableData={currentTableData} />
            case "studying" :
                return <Students currentTableData={currentTableData}/>
        }
    }
    return (
        <>
            <StudentsHeader selected={selected} setSelected={setSelected} branches={branches} active={active} setActive={setActive} onChange={handleChange} selectedRadio={selectedRadio} setSelectedRadio={setSelectedRadio}
                            peoples={studentsFilter}/>

            <div className={cls.tableMain}>
                {renderStudents()}
            </div>
            <Pagination
                setCurrentTableData={setCurrentTableData}
                users={allStudentsData}
                search={search}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageSize={PageSize}
                onPageChange={page => {
                    setCurrentPage(page)
                }}
                type={"custom"}/>


            <StudentsFilter active={active} setActive={setActive} activePage={selectedRadio}/>
        </>
    )
}
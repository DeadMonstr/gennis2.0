import {CreateGroup, DeletedStudents, NewStudents, Students} from "entities/students";
import {StudentsHeader} from "entities/students";
import {useCallback, useEffect, useMemo, useState} from "react";


import {Pagination} from "features/pagination";

import cls from "./students.module.sass"
import {StudentsFilter} from "features/filters/studentsFilter";
import {useDispatch, useSelector} from "react-redux";
import {fetchNewStudentsData} from "entities/students";
import {getNewStudentsData, getStudyingStudents} from "entities/students";

const studentsFilter = [
    {name: "newStudents", label: "New Students"},
    {name: "studying", label: "Studying Students"},
    {name: "deletedStudents", label: "Deleted Students"},
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
    const [active, setActive] = useState(false)
    const [selectedRadio, setSelectedRadio] = useState(studentsFilter[0].name);
    const [selected, setSelected] = useState([])
    const dispatch = useDispatch()


    // const [newStudentsData, setNewStudentsData] = useState([])
    // const [deletedStudentsData , setDeletedStudentsData] = useState([])


    const studyingStudents = useSelector(getStudyingStudents)
    const newStudents = useSelector(getNewStudentsData)

    useEffect(() => {
        dispatch(fetchNewStudentsData())
    }, [])

    useEffect(() =>{
        dispatch(fetchNewStudentsData())
    } , [])

    const handleChange = (value) => {
        setSelectedRadio(value);
    };
    const renderStudents = () => {
        switch (selectedRadio) {
            case "newStudents" :
                return <NewStudents  currentTableData={newStudents}/>
            case "deletedStudents":
                return <DeletedStudents  currentTableData={currentTableData}/>
            case "studying" :
                return <Students currentTableData={studyingStudents}/>

        }
    }



    return (
        <>

            <StudentsHeader selected={selected}
                            setSelected={setSelected} branches={branches} active={active} setActive={setActive}
                            onChange={handleChange} selectedRadio={selectedRadio} setSelectedRadio={setSelectedRadio}
                            peoples={studentsFilter}/>

            <div className={cls.tableMain}>
                {renderStudents()}
            </div>
            {/*<Pagination*/}
            {/*    setCurrentTableData={setCurrentTableData}*/}
            {/*    users={newStudents || studyingStudents}*/}
            {/*    search={search}*/}
            {/*    setCurrentPage={setCurrentPage}*/}
            {/*    currentPage={currentPage}*/}
            {/*    pageSize={PageSize}*/}
            {/*    onPageChange={page => {*/}
            {/*        setCurrentPage(page)*/}
            {/*    }}*/}
            {/*    type={"custom"}/>*/}


            <StudentsFilter active={active} setActive={setActive} activePage={selectedRadio}/>
        </>
    )
}
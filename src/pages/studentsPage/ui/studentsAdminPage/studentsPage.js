import {memo, useCallback, useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {GroupCreatePage, DeletedStudents, NewStudents, Students} from "entities/students";
import {StudentsHeader} from "entities/students";
import {StudentsFilter} from "features/filters/studentsFilter";
import {fetchOnlyNewStudentsData, fetchOnlyStudyingStudentsData} from "entities/students";
import {getNewStudentsData, getStudyingStudents, getNewStudentsLoading} from "entities/students";
import {Pagination} from "features/pagination";

import cls from "./students.module.sass"
import {getSearchValue} from "features/searchInput";


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

export const StudentsPage = memo(() => {

    const dispatch = useDispatch()


    const studyingStudents = useSelector(getStudyingStudents)
    const newStudents = useSelector(getNewStudentsData)
    const newStudentsLoading = useSelector(getNewStudentsLoading)
    const [active, setActive] = useState(false)
    const [selectedRadio, setSelectedRadio] = useState(studentsFilter[0].name);
    const [selected, setSelected] = useState([])

    const search = useSelector(getSearchValue)
    let PageSize = useMemo(() => 50, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    console.log(studyingStudents, "data")

    const searchedUsers = useMemo(() => {
        const filteredHeroes = newStudents?.slice()
        setCurrentPage(1)

        console.log(search, true)

        if (!search) return filteredHeroes

        return filteredHeroes.filter(item =>
            item.name?.toLowerCase().includes(search.toLowerCase())
        )
    }, [newStudents, setCurrentPage, search])

    // Radio tanlangan holatga qarab tegishli dispatch funksiyasini chaqirish
    useEffect(() =>{
        if (selectedRadio === "newStudents") {
            dispatch(fetchOnlyNewStudentsData())
        } else if (selectedRadio === "studying") {
            dispatch(fetchOnlyStudyingStudentsData())
        }
    } , [dispatch, selectedRadio])


    const handleChange = (value) => {
        setSelectedRadio(value);
    };
    const renderStudents = () => {
        switch (selectedRadio) {
            case "newStudents" :
                return <NewStudents currentTableData={newStudents}/>
            case "studying" :
                return <Students currentTableData={studyingStudents}/>
            // case "deletedStudents":
            //     return <DeletedStudents currentTableData={currentTableData}/>

        }
    }


    const renderNewStudents = renderStudents()

    return (
        <>

            <StudentsHeader
                selected={selected}
                setSelected={setSelected}
                branches={branches}
                active={active}
                setActive={setActive}
                onChange={handleChange}
                selectedRadio={selectedRadio}
                setSelectedRadio={setSelectedRadio}
                peoples={studentsFilter}
            />

            <div className={cls.tableMain}>
                {renderNewStudents}
            </div>
            {/*<Pagination*/}
            {/*    setCurrentTableData={setCurrentTableData}*/}
            {/*    users={searchedUsers}*/}
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
})

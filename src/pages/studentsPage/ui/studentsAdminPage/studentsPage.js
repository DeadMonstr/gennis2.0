import {memo, useCallback, useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
    GroupCreatePage,
    DeletedStudents,
    NewStudents,
    Students,
    fetchClassColors,
    fetchClassNumberList, getSchoolClassNumbers, getSchoolClassColors
} from "entities/students";
import {StudentsHeader} from "entities/students";
import {StudentsFilter} from "features/filters/studentsFilter";
import {fetchOnlyNewStudentsData, fetchOnlyStudyingStudentsData} from "entities/students";
import {getNewStudentsData, getStudyingStudents, getNewStudentsLoading} from "entities/students";
import {Pagination} from "features/pagination";

import cls from "./students.module.sass"
import {getSearchValue} from "features/searchInput";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Select} from "shared/ui/select";
import {fetchTeachersData, getTeachers} from "entities/teachers";
import {useForm} from "react-hook-form";
import {fetchSubjectsAndLanguages} from "../../../registerPage";
import {getSchoolStudents} from "entities/students/model/selector/studentsSelector";
import {createSchoolClass, fetchSchoolStudents} from "entities/students/model/studentsThunk";
import {Radio} from "shared/ui/radio";
import {getUserBranchId} from "../../../profilePage";
import {Input} from "shared/ui/input";


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

    // let newStudents
    const dispatch = useDispatch()
    const __THEME__ = localStorage.getItem("theme")
    const {register, handleSubmit} = useForm()

    const studyingStudents = useSelector(getStudyingStudents)
    const newStudentsLoading = useSelector(getNewStudentsLoading)
    // if (__THEME__) {
    //     newStudents = useSelector(getSchoolStudents)
    // } else {
    //     newStudents = useSelector(getNewStudentsData)
    // }
    const newStudents = useSelector(__THEME__ ? getSchoolStudents : getNewStudentsData)
    const schoolClassNumbers = useSelector(getSchoolClassNumbers)
    const schoolClassColors = useSelector(getSchoolClassColors)
    const teachers = useSelector(getTeachers)
    const userBranchId = useSelector(getUserBranchId)
    const languages = useSelector(state => state.registerUser.languages)

    const [selectColor, setSelectColor] = useState()
    const [selectTeacher, setSelectTeacher] = useState()
    const [selectStudents, setSelectStudents] = useState([])

    const [activeModal, setActiveModal] = useState(false)
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

    useEffect(() =>{
        if (__THEME__) {
            dispatch(fetchSchoolStudents())
        } else {
            // dispatch(fetchNewStudentsData())
        }
        dispatch(fetchClassColors())
        dispatch(fetchClassNumberList())
        dispatch(fetchTeachersData())
        dispatch(fetchSubjectsAndLanguages())
    } , [])

    const onSubmit = (data) => {
        const res = {
            ...data,
            teacher: [+selectTeacher],
            students: selectStudents,
            color: selectColor,
            branch: userBranchId,
            create_type: __THEME__ === "app_school_theme" ? "school" : "center"
        }
        console.log(res, "res")
        dispatch(createSchoolClass(res))
    }

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
                // return <NewStudents currentTableData={newStudents}/>
                return <NewStudents
                    currentTableData={currentTableData}
                    theme={__THEME__ === "app_school_theme"}
                    setSelectStudents={setSelectStudents}
                    // setSelectId={}
                />
            case "deletedStudents":
                return <DeletedStudents currentTableData={currentTableData}/>
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
                theme={__THEME__ === "app_school_theme"}
                onClick={setActiveModal}
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
            <Modal
                active={activeModal}
                setActive={setActiveModal}
            >
                <div className={cls.modal}>
                    <h1>Sinf yaratish</h1>
                    <Form
                        onSubmit={handleSubmit(onSubmit)}
                        extraClassname={cls.modal__form}
                    >
                        <Select
                            extraClass={cls.modal__select}
                            title={"O'qituvchi"}
                            options={teachers}
                            onChangeOption={setSelectTeacher}
                        />
                        <Select
                            extraClass={cls.modal__select}
                            title={"Til"}
                            options={languages}
                            register={register}
                            name={"language"}
                        />
                        <Select
                            extraClass={cls.modal__select}
                            title={"Sinf raqami"}
                            options={schoolClassNumbers}
                            register={register}
                            name={"class_number"}
                        />
                        <div className={cls.modal__radios}>
                            {
                                schoolClassColors.map(item => {
                                    return (
                                        <div>
                                            <Radio
                                                onChange={() => setSelectColor(item.id)}
                                                checked={selectColor === item.id}
                                                name={"color"}
                                            />
                                            {
                                                item.name
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <Input
                            placeholder={"price"}
                            name={"price"}
                            register={register}
                        />
                    </Form>
                </div>
            </Modal>
        </>
    )
})

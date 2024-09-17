import {ClassAddForm} from "features/classProfile";
import {StudentCreateClass} from "features/studentCreateClass";
import React, {memo, useEffect, useMemo, useState} from "react";

import {useDispatch, useSelector} from "react-redux";

import {
    DeletedStudents,
    NewStudents,
    Students,
    fetchClassColors,
    fetchClassNumberList,
    getSchoolClassNumbers,
    getSchoolClassColors, getStudyingStudentsWithBranch, getStudentsWithBranch,fetchOnlyNewStudentsData,
    fetchOnlyStudyingStudentsData,
    fetchOnlyDeletedStudentsData,
    getNewStudentsData,
    getStudyingStudents,
    getOnlyDeletedStudents
} from "entities/students";
import {StudentsHeader} from "entities/students";
import {fetchDeletedNewStudentsThunk, getDeletedNewStudents, StudentsFilter} from "features/filters/studentsFilter";

import {Pagination} from "features/pagination";
import {Button} from "shared/ui/button";
import {useNavigate} from "react-router";
import {DefaultPageLoader} from "shared/ui/defaultLoader";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Select} from "shared/ui/select";
import {fetchTeachersData, getTeachers} from "entities/teachers";
import {useForm} from "react-hook-form";
import {fetchLanguages} from "pages/registerPage";
import {
    getLoadingDeletedStudents,
    getLoadingNewStudents,
    getLoadingStudyingStudents,

} from "entities/students/model/selector/studentsSelector";
import {createSchoolClass, fetchSchoolStudents, fetchStudentsByClass} from "entities/students/model/studentsThunk";
import {Radio} from "shared/ui/radio";
import {Input} from "shared/ui/input";
import {useTheme} from "shared/lib/hooks/useTheme";
import cls from "./students.module.sass"
import {getSearchValue} from "features/searchInput";
import {MultiPage} from "widgets/multiPage/ui/MultiPage/MultiPage";

import {useParams, useSearchParams} from "react-router-dom";
import {useHttp} from "shared/api/base";
import {
    savePageTypeToLocalStorage,
    getPageTypeFromLocalStorage,
    removePageTypeFromLocalStorage
} from "features/pagesType";

const studentsFilter = [
    {name: "new_students", label: "New Students"},
    {name: "studying_students", label: "Studying Students"},
    {name: "deleted_students", label: "Deleted Students"},
];

const branches = [
    {name: "chirhciq"},
    {name: "gazalkent"},
    {name: "xo'jakent"},
];

export const StudentsPage = () => {

    // let newStudents

    const [searchParams] = useSearchParams();
    const [selectedRadio, setSelectedRadio] = useState(getPageTypeFromLocalStorage("selectedRadio") || studentsFilter[0].name);
    const {request} = useHttp()
    const dispatch = useDispatch()
    const {theme} = useTheme()
    const __THEME__ = localStorage.getItem("theme");
    const {register, handleSubmit} = useForm();
    const localSystem = JSON.parse(localStorage.getItem(""))
    const navigation = useNavigate()
    const loadingNewStudents = useSelector(getLoadingNewStudents);
    const loadingStudyingStudents = useSelector(getLoadingStudyingStudents);
    const loadingDeletedStudents = useSelector(getLoadingDeletedStudents);
    const studyingStudents = useSelector(getStudyingStudents);
    const filteredStudyingStudents = useSelector(getStudyingStudentsWithBranch);
    const newStudents = useSelector(getNewStudentsData);
    const filteredNewStudents = useSelector(getStudentsWithBranch);
    const deletedStudents = useSelector(getOnlyDeletedStudents)
    const schoolClassNumbers = useSelector(getSchoolClassNumbers);
    const schoolClassColors = useSelector(getSchoolClassColors);
    const {"*": id} = useParams()
    const userBranchId = id
    const teachers = useSelector(getTeachers);
    const userSystem = JSON.parse(localStorage.getItem("selectedSystem")) // changed
    const languages = useSelector(state => state.registerUser.languages);



    const [data, setData] = useState({})
    const [selectColor, setSelectColor] = useState();
    const [colorError, setColorError] = useState(false);
    const [selectTeacher, setSelectTeacher] = useState();
    const [selectStudents, setSelectStudents] = useState([]);
    const [activeModal, setActiveModal] = useState(false);
    const [active, setActive] = useState("");
    const [isFilter, setIsFilter] = useState("");
    const [selected, setSelected] = useState([]);
    const [currentTableData, setCurrentTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeFormBtn, setActiveFormBtn] = useState(true)
    const search = useSelector(getSearchValue);
    let PageSize = useMemo(() => 50, []);

    const searchedUsers = useMemo(() => {
        let filteredStudents = [];
        switch (selectedRadio) {
            case "new_students":
                filteredStudents = isFilter === "new_students" ? filteredNewStudents?.slice() : newStudents?.slice();
                break;
            case "studying_students":
                filteredStudents = isFilter === "studying_students" ? filteredStudyingStudents?.slice() : studyingStudents?.slice();
                break;
            case "deleted_students":
                filteredStudents = deletedStudents?.slice();
                break;
            default:
                filteredStudents = [];
        }

        setCurrentPage(1);

        if (!search) return filteredStudents;

        return filteredStudents.filter(item =>
            (item.user?.name?.toLowerCase().includes(search.toLowerCase()) ||
                item.user?.surname?.toLowerCase().includes(search.toLowerCase()) ||
                item?.student?.user?.name.toLowerCase().includes(search.toLowerCase()) ||
                item?.student?.user?.surname.toLowerCase().includes(search.toLowerCase()))
        );
    }, [newStudents, studyingStudents, deletedStudents, search, selectedRadio, isFilter, filteredNewStudents, filteredStudyingStudents]);

    useEffect(() => {
        if (userBranchId) {
            dispatch(fetchTeachersData({userBranchId}))
            dispatch(fetchLanguages())
        }
    }, [userBranchId])



    useEffect(() => {
        if (userSystem?.name === "school" && userBranchId) {
            // dispatch(fetchSchoolStudents({userBranchId}))
            dispatch(fetchClassColors())
            dispatch(fetchClassNumberList({branch: userBranchId}))
        }
    }, [userSystem?.name, userBranchId])

    const onSubmit = (data) => {
        if (!selectColor && schoolClassColors.length <= 3) {
            setColorError(true)
            return null
        }
        const res = {
            ...data,
            teacher: [+selectTeacher],
            // students: selectStudents,
            color: data?.color ?? selectColor,
            branch: userBranchId,
            create_type: "school",
            system: userSystem.id
        }
        setData(res)
        // dispatch(fetchOnlyNewStudentsData({id:userBranchId, number: data?.class_number}))
        setActive("post")
        // dispatch(createSchoolClass({res}))

        // setSelectStudents([])
    }

    const onSubmitFilteredByClass = (data) => {
        setActiveFormBtn(schoolClassNumbers.filter(item => item.id === +data)[0]?.price === 0 || !schoolClassNumbers.filter(item => item.id === +data)[0]?.price)
        dispatch(fetchStudentsByClass({branch: userBranchId, number: data}))
    }


    useEffect(() => {
        if (!userBranchId) return;

        switch (selectedRadio) {
            case "new_students":
                dispatch(fetchOnlyNewStudentsData({id: userBranchId}));
                break;
            case "studying_students":
                dispatch(fetchOnlyStudyingStudentsData({id: userBranchId}));
                break;
            case "deleted_students":
                dispatch(fetchOnlyDeletedStudentsData({id: userBranchId}));
                break;
            default:
                break;
        }
    }, [dispatch, selectedRadio, userBranchId]);

    useEffect(() => {

        const type = searchParams.get("type")


        if (type) {
            setSelectedRadio(type)
        }
    }, [searchParams])

    useEffect(() => {
        savePageTypeToLocalStorage("selectedRadio", selectedRadio);
    }, [selectedRadio]);


    const handleChange = (value) => {
        setSelectedRadio(value);
    };

    const renderStudents = () => {
        switch (selectedRadio) {
            case "new_students":
                if (loadingNewStudents === "loading") return <DefaultPageLoader/>
                return (
                    <NewStudents
                        theme={theme === "app_school_theme"}
                        setSelectStudents={setSelectStudents}
                        currentTableData={searchedUsers.slice((currentPage - 1) * PageSize, currentPage * PageSize)}
                    />
                );
            case "deleted_students":
                if (loadingDeletedStudents === "loading") return <DefaultPageLoader/>
                return <DeletedStudents
                    currentTableData={searchedUsers.slice((currentPage - 1) * PageSize, currentPage * PageSize)}/>;
            case "studying_students":
                if (loadingStudyingStudents === "loading") return <DefaultPageLoader/>
                return <Students
                    currentTableData={searchedUsers.slice((currentPage - 1) * PageSize, currentPage * PageSize)}/>;
            default:
                return null;
        }
    };

    const renderNewStudents = renderStudents()


    const types = [
        {
            name: "Yangi o'quvchilar",
            type: "new_students"
        },
        {
            name: "O'chirilgan o'quvchilar",
            type: "deleted_students"
        },
        {
            name: "O'qiyotgan o'quvchilar",
            type: "studying_students"
        }
    ]


    return (
        <MultiPage types={types} page={"students"}>
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
            <Pagination
                setCurrentTableData={setCurrentTableData}
                users={searchedUsers}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageSize={PageSize}
                onPageChange={page => {
                    setCurrentPage(page)
                }}
                type={"custom"}
            />


            <StudentsFilter
                active={active === "filter"}
                setActive={setActive}
                activePage={selectedRadio}
                isFilter={setIsFilter}
            />
            <Modal
                active={activeModal === "create"}
                setActive={setActiveModal}
            >
                <div className={cls.modal}>
                    <h1>Sinf yaratish</h1>
                    <Form
                        onSubmit={handleSubmit(onSubmit)}
                        extraClassname={cls.modal__form}
                        typeSubmit={activeFormBtn ? "" : "inside"}
                    >
                        <Input
                            required
                            extraClassName={cls.modal__input}
                            placeholder={"Sinf nomi"}
                            name={"name"}
                            register={register}
                        />
                        <Select
                            required
                            extraClass={cls.modal__select}
                            title={"O'qituvchi"}
                            options={teachers}
                            onChangeOption={setSelectTeacher}
                        />
                        <Select
                            required
                            extraClass={cls.modal__select}
                            title={"Til"}
                            options={languages}
                            register={register}
                            name={"language"}
                        />
                        <Select
                            required
                            extraClass={cls.modal__select}
                            title={"Sinf raqami"}
                            options={schoolClassNumbers}
                            register={register}
                            onChangeOption={onSubmitFilteredByClass}
                            name={"class_number"}
                        />
                        {
                            colorError ? <span className={cls.modal__error}>Sinfga rang tanlang</span> : null
                        }
                        {
                            schoolClassColors.length <= 3 ?
                                <div className={cls.modal__radios}>

                                    {
                                        schoolClassColors?.map(item => {
                                            return (
                                                <div className={cls.modal__inner}>
                                                    <Radio
                                                        extraClasses={cls.modal__item}
                                                        onChange={() => {
                                                            setSelectColor(item.id)
                                                            setColorError(false)
                                                        }}
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
                                :
                                <Select
                                    required
                                    extraClass={cls.modal__select}
                                    title={"Sinf rangi"}
                                    name={"color"}
                                    options={schoolClassColors}
                                    register={register}
                                />
                        }

                        {/*<Input*/}
                        {/*    extraClassName={cls.modal__input}*/}
                        {/*    placeholder={"price"}*/}
                        {/*    name={"price"}*/}
                        {/*    register={register}*/}
                        {/*/>*/}
                    </Form>
                </div>
            </Modal>
            <ClassAddForm
                setActive={setActiveModal}
                active={activeModal === "add"}
            />
            <StudentCreateClass
                deactiveModal={setActiveModal}
                setActive={setActive}
                active={active === "post"}
                data={data}
                branch={userBranchId}
            />
        </MultiPage>
        // </>
    )
}
import React, {memo, useEffect, useMemo, useState} from "react";
import {user} from "entities/user";
import {useDispatch, useSelector} from "react-redux";

import {
    GroupCreatePage,
    DeletedStudents,
    NewStudents,
    Students,
    fetchClassColors,
    fetchClassNumberList,
    getSchoolClassNumbers,
    getSchoolClassColors, getStudentsWithBranch, StudentsListDirector
} from "entities/students";
import {StudentsHeader} from "entities/students";
import {StudentsFilter} from "features/filters/studentsFilter";
import {
    fetchOnlyNewStudentsData,
    fetchOnlyStudyingStudentsData,
    getNewStudentsData,
    getNewStudentsLoading,
    getStudyingStudents
} from "entities/students";
import {Pagination} from "features/pagination";
import {useNavigate} from "react-router";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Select} from "shared/ui/select";
import {fetchTeachersData, getTeachers} from "entities/teachers";
import {useForm} from "react-hook-form";
import {fetchSubjectsAndLanguages} from "pages/registerPage";
import {getSchoolStudents} from "entities/students/model/selector/studentsSelector";
import {createSchoolClass, fetchSchoolStudents} from "entities/students/model/studentsThunk";
import {Radio} from "shared/ui/radio";
import {Input} from "shared/ui/input";
import {getStudentsListDirector} from "../../model/selectors/studentsListDirector";
import {useTheme} from "shared/lib/hooks/useTheme";
import cls from "./students.module.sass"
import {getSearchValue} from "features/searchInput";
import {getUserBranchId, getUserSystemId} from "entities/profile/userProfile";

const studentsFilter = [
    {name: "newStudents", label: "New Students"},
    {name: "studying", label: "Studying Students"},
    {name: "deletedStudents", label: "Deleted Students"},
];

const branches = [
    {name: "chirhciq"},
    {name: "gazalkent"},
    {name: "xo'jakent"},
];

export const StudentsPage = memo(() => {
    const dispatch = useDispatch();
    const {theme} = useTheme()
    const __THEME__ = localStorage.getItem("theme");
    const { register, handleSubmit } = useForm();
    const navigation = useNavigate()
    const studyingStudents = useSelector(getStudyingStudents);
    const newStudents = useSelector( getNewStudentsData);
    const schoolClassNumbers = useSelector(getSchoolClassNumbers);
    const schoolClassColors = useSelector(getSchoolClassColors);
    const teachers = useSelector(getTeachers);
    const userBranchId = useSelector(getUserBranchId);
    const languages = useSelector(state => state.registerUser.languages);
    const [selectColor, setSelectColor] = useState();
    const [selectTeacher, setSelectTeacher] = useState();
    const [selectStudents, setSelectStudents] = useState([]);
    const [activeModal, setActiveModal] = useState(false);
    const [active, setActive] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState(studentsFilter[0].name);
    const [selected, setSelected] = useState([]);
    const [currentTableData, setCurrentTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const search = useSelector(getSearchValue);
    let PageSize = useMemo(() => 50, []);

    const searchedUsers = useMemo(() => {
        const filteredStudents = selectedRadio === "newStudents"
            ? newStudents?.slice()
            : studyingStudents?.slice();

        setCurrentPage(1);

        if (!search) return filteredStudents;

        return filteredStudents.filter(item =>
            item.name?.toLowerCase().includes(search.toLowerCase())
        )
    }, [newStudents, studyingStudents, search])

    useEffect(() => {
        if (userBranchId) {
            dispatch(fetchTeachersData({userBranchId}))
            dispatch(fetchSubjectsAndLanguages())
        }
    } , [userBranchId])

    // useEffect(() => {
    //     setCurrentTableData(searchedUsers);
    // }, [searchedUsers]);

    useEffect(() => {
        if (userSystemId === 2 && userBranchId) {
            dispatch(fetchSchoolStudents({userBranchId}))
            dispatch(fetchClassColors())
            dispatch(fetchClassNumberList())
        } else {
            // dispatch(fetchNewStudentsData())
        }
    }, [userSystemId, userBranchId])

    const onSubmit = (data) => {
        const res = {
            ...data,
            teacher: [+selectTeacher],
            students: selectStudents,
            color: selectColor,
            branch: userBranchId,
            create_type: theme === "app_school_theme" ? "school" : "center",
            system: 2
        }
        console.log(res, "res")
        dispatch(createSchoolClass({res}))
        // setSelectStudents([])
    }
    // useEffect(() =>{
    //     dispatch(fetchOnlyNewStudentsData())
    // } , [])
    // Radio tanlangan holatga qarab tegishli dispatch funksiyasini chaqirish
    useEffect(() =>{
        if (selectedRadio === "newStudents") {
            dispatch(fetchOnlyNewStudentsData());
        } else if (selectedRadio === "studying") {
            dispatch(fetchOnlyStudyingStudentsData());
        }
    }, [dispatch, selectedRadio]);

    console.log(currentTableData, "newSt")

    const handleChange = (value) => {
        setSelectedRadio(value);
    };

    const renderStudents = () => {
        switch (selectedRadio) {
            case "newStudents":
                return (
                    <NewStudents
                        theme={ theme === "app_school_theme"}
                        setSelectStudents={setSelectStudents}
                        currentTableData={searchedUsers.slice((currentPage - 1) * PageSize, currentPage * PageSize)}
                    />
                );
            case "deletedStudents":
                return <DeletedStudents currentTableData={searchedUsers.slice((currentPage - 1) * PageSize, currentPage * PageSize)} />;
            case "studying":
                return <Students currentTableData={searchedUsers.slice((currentPage - 1) * PageSize, currentPage * PageSize)} />;
            default:
                return null;
        }
    };

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

            {/*<div className={cls.tableMain}>*/}
            {/*    {renderStudents()}*/}
            {/*</div>*/}
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
                        <Input
                            extraClassName={cls.modal__input}
                            placeholder={"Sinf nomi"}
                            name={"name"}
                            register={register}
                        />
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
                                        <div className={cls.modal__inner}>
                                            <Radio
                                                extraClasses={cls.modal__item}
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
                            extraClassName={cls.modal__input}
                            placeholder={"price"}
                            name={"price"}
                            register={register}
                        />
                    </Form>
                </div>
            </Modal>
        </>
    );
});

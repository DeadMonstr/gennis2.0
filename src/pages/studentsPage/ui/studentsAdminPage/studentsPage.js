import React, { memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
import { StudentsHeader } from "entities/students";
import { StudentsFilter } from "features/filters/studentsFilter";
import { fetchOnlyNewStudentsData, fetchOnlyStudyingStudentsData , getNewStudentsData, getNewStudentsLoading, getStudyingStudents} from "entities/students";
import { Pagination } from "features/pagination";
import {useNavigate} from "react-router";
import cls from "./students.module.sass";
import { getSearchValue } from "features/searchInput";
import { Modal } from "shared/ui/modal";
import { Form } from "shared/ui/form";
import { Select } from "shared/ui/select";
import { fetchTeachersData, getTeachers } from "entities/teachers";
import { useForm } from "react-hook-form";
import { fetchSubjectsAndLanguages } from "../../../registerPage";
import { getSchoolStudents } from "entities/students/model/selector/studentsSelector";
import { createSchoolClass, fetchSchoolStudents } from "entities/students/model/studentsThunk";
import { Radio } from "shared/ui/radio";
import { getUserBranchId } from "../../../profilePage";
import { Input } from "shared/ui/input";
import {getStudentsListDirector} from "../../model/selectors/studentsListDirector";

const studentsFilter = [
    { name: "newStudents", label: "New Students" },
    { name: "studying", label: "Studying Students" },
    { name: "deletedStudents", label: "Deleted Students" },
];

const branches = [
    { name: "chirhciq" },
    { name: "gazalkent" },
    { name: "xo'jakent" },
];

export const StudentsPage = memo(() => {
    const dispatch = useDispatch();
    const __THEME__ = localStorage.getItem("theme");
    const { register, handleSubmit } = useForm();
    const navigation = useNavigate()
    const studyingStudents = useSelector(getStudyingStudents);
    const newStudentsLoading = useSelector(getNewStudentsLoading);
    const newStudents = useSelector(__THEME__ ? getSchoolStudents : getStudentsWithBranch);
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
    const lenghts = localStorage.getItem("lenght")
    const data = useSelector(getStudentsListDirector)
    const search = useSelector(getSearchValue);
    let PageSize = useMemo(() => 20, []);

    const searchedUsers = useMemo(() => {
        const filteredStudents = selectedRadio === "newStudents"
            ? newStudents?.slice()
            : studyingStudents?.slice();

        setCurrentPage(1);

        if (!search) return filteredStudents;

        return filteredStudents.filter(item =>
            item.name?.toLowerCase().includes(search.toLowerCase())
        );
    }, [newStudents, studyingStudents, search, selectedRadio]);

    useEffect(() => {
        setCurrentTableData(searchedUsers);
    }, [searchedUsers]);

    useEffect(() => {
        if (__THEME__) {
            dispatch(fetchSchoolStudents());
        }
        dispatch(fetchClassColors());
        dispatch(fetchClassNumberList());
        dispatch(fetchTeachersData());
        dispatch(fetchSubjectsAndLanguages());
    }, [dispatch, __THEME__]);

    // useEffect(() => {
    //     if (lenghts > 1)
    //     {
    //         navigation(`/platform/locations-overview`)
    //     }
    // })

    const onSubmit = (data) => {
        const res = {
            ...data,
            teacher: [+selectTeacher],
            students: selectStudents,
            color: selectColor,
            branch: userBranchId,
            create_type: __THEME__ === "app_school_theme" ? "school" : "center",
        };
        dispatch(createSchoolClass(res));
    };

    useEffect(() => {
        if (selectedRadio === "newStudents") {
            dispatch(fetchOnlyNewStudentsData());
        } else if (selectedRadio === "studying") {
            dispatch(fetchOnlyStudyingStudentsData());
        }
    }, [dispatch, selectedRadio]);

    console.log(newStudents, "newSt")

    const handleChange = (value) => {
        setSelectedRadio(value);
    };

    const renderStudents = () => {
        switch (selectedRadio) {
            case "newStudents":
                return (
                    // <Misol/>
                    <NewStudents
                        theme={__THEME__ === "app_school_theme"}
                        setSelectStudents={setSelectStudents}
                    />
                );
            case "deletedStudents":
                return <DeletedStudents currentTableData={currentTableData} />;
            case "studying":
                return <Students currentTableData={currentTableData} />;
            default:
                return null;
        }
    };

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
                            {renderStudents()}
                        </div>

                        <Pagination
                            setCurrentTableData={setCurrentTableData}
                            users={searchedUsers}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                            pageSize={PageSize}
                            onPageChange={page => {
                                setCurrentPage(page);
                            }}
                            type={"custom"}
                        />

                        <StudentsFilter active={active} setActive={setActive} activePage={selectedRadio} />

                        <Modal active={activeModal} setActive={setActiveModal}>
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
                                        {schoolClassColors.map(item => (
                                            <div key={item.id}>
                                                <Radio
                                                    onChange={() => setSelectColor(item.id)}
                                                    checked={selectColor === item.id}
                                                    name={"color"}
                                                />
                                                {item.name}
                                            </div>
                                        ))}
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
    );
});

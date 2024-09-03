import {onAddAlertOptions} from "features/alert/model/slice/alertSlice";
import {ClassAddForm} from "features/classProfile";
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
import {Button} from "shared/ui/button";
import {useNavigate, useParams} from "react-router";
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
import {MultiPage} from "widgets/multiPage/ui/MultiPage/MultiPage";
import {getSelectedLocations} from "features/locations";
import {getSelectedLocationsByIds} from "features/locations/model/selector/locationsSelector";
import {useSearchParams} from "react-router-dom";
import {API_URL, branchQuery, headers, useHttp} from "shared/api/base";

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

export const StudentsPage = () => {

    // let newStudents

    const [searchParams] = useSearchParams();

    const {"*": id} = useParams()


    const {request} = useHttp()
    const dispatch = useDispatch()
    const {theme} = useTheme()
    const {register, handleSubmit} = useForm()

    const studyingStudents = useSelector(getStudyingStudents)
    // if (__THEME__) {
    //     newStudents = useSelector(getSchoolStudents)
    // } else {
    //     newStudents = useSelector(getNewStudentsData)
    // }
    const newStudents = useSelector(theme === "app_school_theme" ? getSchoolStudents : getNewStudentsData)
    const schoolClassNumbers = useSelector(getSchoolClassNumbers)
    const schoolClassColors = useSelector(getSchoolClassColors)
    const teachers = useSelector(getTeachers)
    const userBranchId = id
    const userSystem = JSON.parse(localStorage.getItem("selectedSystem"))
    const languages = useSelector(state => state.registerUser.languages)

    const [selectColor, setSelectColor] = useState()
    const [selectTeacher, setSelectTeacher] = useState()
    const [selectStudents, setSelectStudents] = useState([])

    const [activeModal, setActiveModal] = useState("")
    const [createStatus, setCreateStatus] = useState(false)
    const newStudentsLoading = useSelector(getNewStudentsLoading)
    const [active, setActive] = useState(false)
    const __THEME__ = localStorage.getItem("theme");
    const localSystem = JSON.parse(localStorage.getItem(""))
    const navigation = useNavigate()
    const [selectedRadio, setSelectedRadio] = useState(studentsFilter[0].name);
    const [selected, setSelected] = useState([]);
    const [currentTableData, setCurrentTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const search = useSelector(getSearchValue);

    let PageSize = useMemo(() => 20, []);

    const searchedUsers = useMemo(() => {
        const filteredStudents = selectedRadio === "newStudents"
            ? newStudents?.slice()
            : studyingStudents?.slice();
        // const filteredStudents = newStudents ?  newStudents?.slice(): []
        setCurrentPage(1)


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
    }, [userBranchId])


    useEffect(() => {
        if (userSystem?.id === 2 && userBranchId) {
            dispatch(fetchSchoolStudents({userBranchId}))
            dispatch(fetchClassColors())
            dispatch(fetchClassNumberList())
        }
    }, [userSystem?.id, userBranchId])

    const onSubmit = (data) => {
        const res = {
            ...data,
            teacher: [+selectTeacher],
            students: selectStudents,
            color: selectColor,
            // branch: userBranchId,
            create_type: "school",
            system: 2
        }
        request(`${API_URL}Group/groups/create/?branch=${userBranchId}`, "POST", JSON.stringify(res), headers())
            .then(res => {
                console.log(res, "res classAdd")
                dispatch(onAddAlertOptions({
                    type: "success",
                    status: true,
                    msg: `Sinf yaratildi`
                }))
                setActiveModal(false)
                // setCreateStatus(true)
            })
        dispatch(createSchoolClass({res}))

        // setSelectStudents([])
    }

    useEffect(() => {

        const type = searchParams.get("type")


        if (type) {
            setSelectedRadio(type)
        }
    }, [searchParams])


    // Radio tanlangan holatga qarab tegishli dispatch funksiyasini chaqirish


    useEffect(() => {
        if (!id) return;

        if (selectedRadio === "newStudents") {
            dispatch(fetchOnlyNewStudentsData())
        } else if (selectedRadio === "studying") {
            dispatch(fetchOnlyStudyingStudentsData())
        }
    }, [dispatch, selectedRadio, id])


    const handleChange = (value) => {
        setSelectedRadio(value);
    };
    const renderStudents = () => {


        switch (selectedRadio) {
            case "newStudents" :
                return <NewStudents
                    currentTableData={currentTableData}
                    theme={theme === "app_school_theme"}
                    setSelectStudents={setSelectStudents}
                />
            case "deletedStudents":
                return <DeletedStudents currentTableData={currentTableData}/>;
            case "studying":
                return <Students currentTableData={currentTableData}/>;
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
        },
        {
            name: "O'qiyotgan o'quvchilar",
            type: "new_teacher"
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


            <StudentsFilter active={active} setActive={setActive} activePage={selectedRadio}/>
            <Modal
                active={activeModal === "create"}
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
                                schoolClassColors?.map(item => {
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
            <ClassAddForm
                setActive={setActiveModal}
                active={activeModal === "add"}
            />
        </MultiPage>
        // </>
    )
}
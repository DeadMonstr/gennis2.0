import {onAddAlertOptions} from "features/alert/model/slice/alertSlice";
import {ClassAddForm} from "features/classProfile";
import {StudentCreateClass} from "features/studentCreateClass";
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
    fetchOnlyDeletedStudentsData,
    getNewStudentsData,
    getNewStudentsLoading,
    getStudyingStudents,
    getOnlyDeletedStudents
} from "entities/students";
import {Pagination} from "features/pagination";
import {Button} from "shared/ui/button";
import {useNavigate} from "react-router";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Select} from "shared/ui/select";
import {fetchTeachersData, getTeachers} from "entities/teachers";
import {useForm} from "react-hook-form";
import {fetchLanguages} from "pages/registerPage";
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
import {useParams, useSearchParams} from "react-router-dom";
import {getBranch} from "features/branchSwitcher";
import {API_URL, branchQuery, branchQueryId, headers, useHttp} from "shared/api/base";

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



    const {request} = useHttp()
    const dispatch = useDispatch()
    const {theme} = useTheme()
    const __THEME__ = localStorage.getItem("theme");
    const { register, handleSubmit } = useForm();
    const localSystem = JSON.parse(localStorage.getItem(""))
    const navigation = useNavigate()
    const studyingStudents = useSelector(getStudyingStudents);
    const newStudents = useSelector(getNewStudentsData);
    const deletedStudents = useSelector(getOnlyDeletedStudents)
    const schoolClassNumbers = useSelector(getSchoolClassNumbers);
    const schoolClassColors = useSelector(getSchoolClassColors);
    const {"*": id} = useParams()


    const userBranchId = id
    const teachers = useSelector(getTeachers);
    const userSystem = JSON.parse(localStorage.getItem("selectedSystem"))
    const languages = useSelector(state => state.registerUser.languages);
    const [data, setData] = useState({})
    const [selectColor, setSelectColor] = useState();
    const [selectTeacher, setSelectTeacher] = useState();
    const [selectStudents, setSelectStudents] = useState([]);
    const [activeModal, setActiveModal] = useState(false);
    const [active, setActive] = useState("");
    const [selectedRadio, setSelectedRadio] = useState(studentsFilter[0].name);
    const [selected, setSelected] = useState([]);
    const [currentTableData, setCurrentTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const search = useSelector(getSearchValue);
    let PageSize = useMemo(() => 50, []);

    const searchedUsers = useMemo(() => {
        let filteredStudents = [];
        switch (selectedRadio) {
            case "new_students":
                filteredStudents = newStudents?.slice();
                break;
            case "studying_students":
                filteredStudents = studyingStudents?.slice();
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
    }, [newStudents, studyingStudents, deletedStudents, search, selectedRadio]);

    useEffect(() => {
        if (userBranchId) {
            dispatch(fetchTeachersData({userBranchId}))
            dispatch(fetchLanguages())
        }
    } , [userBranchId])


    useEffect(() => {
        if (userSystem?.id === 2 && userBranchId) {
            // dispatch(fetchSchoolStudents({userBranchId}))
            dispatch(fetchClassColors())
            dispatch(fetchClassNumberList())
        }
    }, [userSystem?.id, userBranchId])

    const onSubmit = (data) => {

        const res = {
            ...data,
            teacher: [+selectTeacher],
            // students: selectStudents,
            color: selectColor,
            branch: userBranchId,
            create_type: "school",
            system: userSystem.id
        }
        setData(res)
        dispatch(fetchOnlyNewStudentsData({userBranchId, number: data?.class_number}))
        setActive("post")
        // dispatch(createSchoolClass({res}))

        // setSelectStudents([])
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
    },[dispatch, selectedRadio,userBranchId]);

    useEffect(() => {

        const type = searchParams.get("type")


        if (type) {
            setSelectedRadio(type)
        }
    }, [searchParams])








    const handleChange = (value) => {
        setSelectedRadio(value);
    };

    const renderStudents = () => {
        switch (selectedRadio) {
            case "new_students":
                return (
                    <NewStudents
                        theme={ theme === "app_school_theme"}
                        setSelectStudents={setSelectStudents}
                        currentTableData={searchedUsers.slice((currentPage - 1) * PageSize, currentPage * PageSize)}
                    />
                );
            case "deleted_students":
                return <DeletedStudents currentTableData={searchedUsers.slice((currentPage - 1) * PageSize, currentPage * PageSize)} />;
            case "studying_students":
                return <Students currentTableData={searchedUsers.slice((currentPage - 1) * PageSize, currentPage * PageSize)} />;
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


            <StudentsFilter active={active==="filter"} setActive={setActive} activePage={selectedRadio}/>
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
                setActive={setActive}
                active={active === "post"}
                data={data}
            />
        </MultiPage>
        // </>
    )
}
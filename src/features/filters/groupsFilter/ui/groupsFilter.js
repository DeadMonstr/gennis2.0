import React, {useEffect, useState} from 'react';
import {API_URL, headers, useHttp} from "shared/api/base";
import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import {Switch} from "shared/ui/switch";

import cls from "../../filters.module.sass";
import {useDispatch, useSelector} from "react-redux";
import {getUserBranchId} from "../../../../entities/profile/userProfile";
import {fetchTeachersData, getTeachers} from "../../../../entities/teachers";
import {fetchGroupsDataWithFilter, fetchGroupTypeThunk, getGroupTypes} from "../../../../entities/groups";
import {fetchSubjects, getSubjectsData} from "pages/registerPage";
import {fetchTeachersDataWithFilter} from "../../../../entities/teachers/model/teacherThunk";

export const GroupsFilter = React.memo((props) => {

    const {active, setActive, activeSwitch, setActiveSwitch, isFilter} = props

    const branch = localStorage.getItem("selectedBranch")
    const getTeacher = useSelector(getTeachers)
    const [selectedSubject, setSelectedSubject] = useState("")
    const [selectedTeacher, setSelectedTeacher] = useState("")
    const [selectedType, setSelectedType] = useState("")
    // const [activeSwitch, setActiveSwitch] = useState(false)
    const dispatch = useDispatch()
    const userBranchId = useSelector(getUserBranchId)
    const subjects = useSelector(getSubjectsData)
    const types = useSelector(getGroupTypes)

    useEffect(() => {
        setSelectedSubject("")
        setSelectedTeacher("")
        setSelectedType("")
    }, [activeSwitch])

    useEffect(() => {
        if (selectedType || selectedTeacher || selectedSubject) {
            console.log(true)
            dispatch(fetchGroupsDataWithFilter({
                teacherId: selectedTeacher,
                subjId: selectedSubject,
                typeId: selectedType,
                userBranchId: branch
            }))
            isFilter(true)
        }
    }, [selectedSubject, selectedTeacher, selectedType])

    useEffect(() => {
        if (branch)
            dispatch(fetchTeachersData({userBranchId: branch}))
    }, [branch])

    useEffect(() => {
        dispatch(fetchSubjects());
    }, []);

    useEffect(() => {
        dispatch(fetchGroupTypeThunk())
    }, [])

    const onSelectTeacher = (value) => {
        setSelectedTeacher(value)
        // dispatch(fetchGroupsDataWithFilter({teacherId: value}))
        // isFilter(true)
    }

    const onSelectType = (value) => {
        setSelectedType(value)
        // dispatch(fetchGroupsDataWithFilter({typeId: value}))
        // isFilter(true)
    }

    const onSelectSubject = (value) => {
        setSelectedSubject(value);
        // const selectedSubjectData = subjects.find(subj => subj.id === Number(value));
        // const subjectId = value !== "all" ? selectedSubjectData.id : "all";
        // dispatch(fetchGroupsDataWithFilter({
        //     subjId: subjectId
        // }))
        // isFilter(true)
    }

    const onChangeSwitch = () => {
        setActiveSwitch(!activeSwitch)
    }

    // console.log(getTeacher, "teacherss")
    // console.log(selectedTeacher, "seelectw")
    return (
        <Modal
            active={active}
            setActive={setActive}
        >
            <div className={cls.filter}>
                <h1>Filter</h1>
                <div className={cls.filter__container}>

                    <Select
                        title={"Teacher"}
                        options={[{name: "Hamma", id: "all"}, ...getTeacher]}
                        extraClass={cls.filter__select}
                        onChangeOption={onSelectTeacher}
                        defaultValue={"all"}
                    />
                    <Select
                        title={"Fan"}
                        options={[{name: "Hamma", id: "all"}, ...subjects]}
                        extraClass={cls.filter__select}
                        onChangeOption={(value) => onSelectSubject(value)}
                        defaultValue={"all"}
                    />
                    <Select
                        title={"Kurs turi"}
                        options={[{name: "Hamma", id: "all"}, ...types]}
                        extraClass={cls.filter__select}
                        onChangeOption={onSelectType}
                        defaultValue={"all"}
                    />


                    <div className={cls.filter__switch}>
                        <p>O’chirilgan</p>
                        <Switch onChangeSwitch={() => onChangeSwitch()} activeSwitch={activeSwitch}/>
                    </div>

                </div>
            </div>
        </Modal>
    );
})
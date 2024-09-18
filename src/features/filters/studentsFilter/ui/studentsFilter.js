import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import {Switch} from "shared/ui/switch";
import {getLanguagesData, getSubjectsData} from "pages/registerPage";
import {fetchLanguages, fetchSubjects} from "pages/registerPage";
import {
    fetchNewStudentsDataWithBranch,
    fetchOnlyNewStudentsData,
    fetchStudyingStudentsDataWithBranch
} from "entities/students";

import cls from "../../filters.module.sass";
import {fetchDeletedNewStudentsThunk} from "entities/students";

export const StudentsFilter = React.memo(({active, setActive, activePage, isFilter, branchId}) => {

    const [selectedAgeFrom, setSelectedAgeFrom] = useState("")
    const [selectedAgeTo, setSelectedAgeTo] = useState("")
    const [selectedSubject, setSelectedSubject] = useState("")
    const [selectedLang, setSelectedLanguage] = useState("")
    const [selectedClass, setSelectedClass] = useState("")
    const [selectedStatus, setSelectedStatus] = useState("")
    const [isSwitch, setIsSwitch] = useState(false);
    const dispatch = useDispatch()
    const languages = useSelector(getLanguagesData)
    const subjects = useSelector(getSubjectsData)

    useEffect(() => {
        if (selectedAgeFrom || selectedAgeTo || selectedLang || selectedSubject || selectedClass) {
            if (activePage === "studying_students") {
                dispatch(fetchStudyingStudentsDataWithBranch({
                    subjId: selectedSubject,
                    langId: selectedLang,
                    fromAge: selectedAgeFrom,
                    untilAge: selectedAgeTo
                }))
                isFilter("studying_students")
            } else {
                dispatch(fetchNewStudentsDataWithBranch({
                    subjId: selectedSubject,
                    langId: selectedLang,
                    fromAge: selectedAgeFrom,
                    untilAge: selectedAgeTo
                }));
                isFilter("new_students")
            }
            // isFilter(true)
        }
    }, [selectedAgeFrom, selectedAgeTo, selectedSubject, selectedLang, selectedClass])

    useEffect(() => {
        setSelectedAgeTo("")
        setSelectedSubject("")
        setSelectedLanguage("")
        setSelectedClass("")
        setSelectedAgeFrom("")
    }, [activePage])

    const onSelectSubject = (value) => {
        setSelectedSubject(value);
        // const selectedSubjectData = subjects.find(subj => subj.id === Number(value));
        // const subjectId = value !== "all" ? selectedSubjectData.id : "all";
        // {
        //     activePage === "studying_students"
        //         ?
        //         dispatch(fetchStudyingStudentsDataWithBranch({subjId: subjectId}))
        //         :
        //         dispatch(fetchNewStudentsDataWithBranch({subjId: subjectId}));
        // }
        // setActive(false)
    }

    const onSelectLanguage = (value) => {
        setSelectedLanguage(value);
        // const selectedLanguageData = languages.find(lang => lang.id === Number(value));
        // const languageId = value !== "all" ? selectedLanguageData.id : "all"
        // {
        //     activePage === "studying_students"
        //         ?
        //         dispatch(fetchStudyingStudentsDataWithBranch({langId: languageId}))
        //         :
        //         dispatch(fetchNewStudentsDataWithBranch({langId: languageId}))
        // }
        // setActive(false)

    }

    const handleAgeFromBlur = (e) => {
        setSelectedAgeFrom(e.target.value);
        // {
        //     activePage === "studying_students"
        //         ?
        //         dispatch(fetchStudyingStudentsDataWithBranch({fromAge: e.target.value, untilAge: selectedAgeTo}))
        //         :
        //         dispatch(fetchNewStudentsDataWithBranch({fromAge: e.target.value, untilAge: selectedAgeTo}))
        // }

    }

    const handleAgeToBlur = (e) => {
        setSelectedAgeTo(e.target.value);
        // {
        //     activePage === "studying_students"
        //         ?
        //         dispatch(fetchStudyingStudentsDataWithBranch({fromAge: selectedAgeFrom, untilAge: e.target.value}))
        //         :
        //         dispatch(fetchNewStudentsDataWithBranch({fromAge: selectedAgeFrom, untilAge: e.target.value}));
        // }

    }

    const handleSwitchData = () => {
        const newState = !isSwitch;
        setIsSwitch(newState);

        if (newState) {
            dispatch(fetchDeletedNewStudentsThunk());
        } else {
            dispatch(fetchOnlyNewStudentsData({id: branchId}));
        }
    }


    useEffect(() => {
        dispatch(fetchSubjects());
    }, [dispatch]);
    useEffect(() => {
        dispatch(fetchLanguages())
    }, [dispatch])

    return (
        <Modal
            active={active}
            setActive={setActive}
        >
            <div className={cls.filter}>
                <h1>Filter</h1>
                <div className={cls.filter__container}>
                    {
                        activePage !== "deleted" ? <Select
                            title={"Fan"}
                            options={[{name: "Hamma", id: "all"}, ...subjects]}
                            extraClass={cls.filter__select}
                            onChangeOption={(value) => onSelectSubject(value)}
                            defaultValue={"all"}
                        /> : null
                    }

                    {
                        activePage === "deleted" ? <Select
                            title={"Sinf"}
                            extraClass={cls.filter__select}
                            onChangeOption={setSelectedClass}
                            defaultValue={"all"}
                        /> : null
                    }

                    <div className={cls.filter__age}>
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"Yosh (От)"}
                            onChange={(e) => setSelectedAgeFrom(e.target.value)}
                            onBlur={handleAgeFromBlur}
                            defaultValue={selectedAgeFrom}
                        />
                        <Input
                            type={"number"}
                            extraClassName={cls.filter__input}
                            placeholder={"Yosh (До)"}
                            onChange={(e) => setSelectedAgeTo(e.target.value)}
                            onBlur={handleAgeToBlur}
                            defaultValue={selectedAgeTo}
                        />
                    </div>
                    <Select
                        title={"Til"}
                        options={[{name: "Hamma", id: "all"}, ...languages]}
                        extraClass={cls.filter__select}
                        onChangeOption={(value) => onSelectLanguage(value)}
                        defaultValue={"all"}
                    />
                    <div className={cls.filter__switch}>
                        <p>O’chirilgan</p>
                        <Switch onChangeSwitch={handleSwitchData} activeSwitch={isSwitch}/>
                    </div>
                    {/*<div className={cls.filter__switch}>*/}
                    {/*    <p>Filterlangan</p>*/}
                    {/*    <Switch />*/}
                    {/*</div>*/}
                </div>
            </div>
        </Modal>
    );
})

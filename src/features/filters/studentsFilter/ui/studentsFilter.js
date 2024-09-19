import {fetchLanguagesData, fetchSubjectsData, getLanguagesData, getSubjectsData} from "entities/oftenUsed";
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Select} from "shared/ui/select";
import {Switch} from "shared/ui/switch";
// import {getLanguagesData, getSubjectsData} from "pages/registerPage";
// import {fetchLanguages, fetchSubjects} from "pages/registerPage";
import {
    fetchOnlyNewStudentsData,
    fetchOnlyStudyingStudentsData
} from "entities/students";

import cls from "../../filters.module.sass";
import {fetchDeletedNewStudentsThunk} from "entities/students";

export const StudentsFilter = React.memo(({active, setActive, activePage, setIsFilter, branchId}) => {

    const [selectedAgeFrom, setSelectedAgeFrom] = useState("")
    const [selectedAgeTo, setSelectedAgeTo] = useState("")
    const [selectedSubject, setSelectedSubject] = useState("")
    const [selectedLang, setSelectedLanguage] = useState("")
    const [selectedClass, setSelectedClass] = useState("")
    const [isSwitch, setIsSwitch] = useState(false);
    const dispatch = useDispatch()
    const languages = useSelector(getLanguagesData)
    const subjects = useSelector(getSubjectsData)

    function fetchStudents(from, to, sub, lang) {
        if (activePage === "studying_students") {
            dispatch(fetchOnlyStudyingStudentsData({
                subjId: sub,
                langId: lang,
                fromAge: from,
                untilAge: to
            }))
        } else {
            dispatch(fetchOnlyNewStudentsData({
                subjId: sub,
                langId: lang,
                fromAge: from,
                untilAge: to
            }))
        }
    }

    // useEffect(() => {
    //     if (selectedAgeFrom || selectedAgeTo || selectedLang || selectedSubject || selectedClass) {
    //         if (activePage === "studying_students") {
    //             dispatch(fetchOnlyStudyingStudentsData({
    //                 subjId: selectedSubject,
    //                 langId: selectedLang,
    //                 fromAge: selectedAgeFrom,
    //                 untilAge: selectedAgeTo
    //             }))
    //             setIsFilter("studying_students")
    //         } else {
    //             dispatch(fetchOnlyNewStudentsData({
    //                 subjId: selectedSubject,
    //                 langId: selectedLang,
    //                 fromAge: selectedAgeFrom,
    //                 untilAge: selectedAgeTo
    //             }));
    //             setIsFilter("new_students")
    //         }
    //         // isFilter(true)
    //     }
    // }, [selectedAgeFrom, selectedAgeTo, selectedSubject, selectedLang, selectedClass, activePage])

    const onSelectSubject = useCallback((value) => {
        setSelectedSubject(value);
        fetchStudents(selectedAgeFrom, selectedAgeTo, value, selectedLang)
    }, [])

    const onSelectLanguage = useCallback((value) => {
        setSelectedLanguage(value);
        fetchStudents(selectedAgeFrom, selectedAgeTo, selectedSubject, value)
    }, [])

    const handleAgeFromBlur = (e) => {
        setSelectedAgeFrom(e.target.value);
        fetchStudents(e.target.value, selectedAgeTo, selectedSubject, selectedLang)
    }

    const handleAgeToBlur = (e) => {
        setSelectedAgeTo(e.target.value);
        fetchStudents(selectedAgeFrom, e.target.value, selectedSubject, selectedLang)
    }

    const handleSwitchData = () => {
        const newState = !isSwitch;
        setIsSwitch(newState);

        if (newState) {
            dispatch(fetchDeletedNewStudentsThunk());
        } else {
            dispatch(fetchOnlyNewStudentsData({userBranchId: branchId}));
        }
    }


    useEffect(() => {
        dispatch(fetchSubjectsData())
        dispatch(fetchLanguagesData())
    }, [dispatch]);

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
                </div>
            </div>
        </Modal>
    );
})

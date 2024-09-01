import classNames from "classnames";
import {fetchGroupsData, getGroupsListData} from "entities/groups";
import {
    changeGroupProfile,
    fetchFilteredStudentsAndTeachers,
    fetchGroupProfile, fetchGroupProfileTimeTable,
    getGroupProfileData, getGroupProfileLoading,
    getTimeTable
} from "entities/profile/groupProfile";
import {getGroupProfileFilteredStudents} from "entities/profile/groupProfile/model/groupProfileSelector";
import {getUserBranchId, getUserSystemId} from "entities/profile/userProfile";
import {onAddAlertOptions} from "features/alert/model/slice/alertSlice";
import React, {memo, useEffect, useMemo, useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import defaultUserImg from "shared/assets/images/user_image.png";
import {Input} from "shared/ui/input";
import {MiniLoader} from "shared/ui/miniLoader";

import {Select} from "shared/ui/select";
import {Button} from "shared/ui/button";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Table} from "shared/ui/table";

import cls from "./groupAddForm.module.sass";

export const GroupAddForm = memo((props) => {

    const {
        setActive,
        active
    } = props

    const dispatch = useDispatch()
    const {
        register,
        handleSubmit
    } = useForm()
    const groupData = useSelector(getGroupsListData)
    const loading = useSelector(getGroupProfileLoading)
    const students = useSelector(getGroupProfileFilteredStudents)
    const data = useSelector(getGroupProfileData)
    const branchId = useSelector(getUserBranchId)
    const systemId = useSelector(getUserSystemId)
    const timeTable = useSelector(getTimeTable)

    const [activeModal, setActiveModal] = useState(false)
    const [selectedId, setSelectedId] = useState([])
    const [searchValue, setSearchValue] = useState("")

    const onSubmit = (data) => {
        dispatch(fetchGroupProfile({id: data?.group}))
        setActiveModal(true)
    }

    const onSubmitAddStudents = () => {
        // const place = userSystemId === 1 ? "guruh" : "sinf"
        dispatch(changeGroupProfile({
            data: {
                students: selectedId,
                update_method: "add_students"
            },
            id: data?.id,
            group_type: "center"
            // group_type: "center"
        }))

        dispatch(onAddAlertOptions({
            type: "success",
            status: true,
            msg: `O'quvchilar guruhga qo'shildi`
        }))
    }

    useEffect(() => {
        if (branchId)
            dispatch(fetchGroupsData({userBranchId:branchId}))
    }, [branchId])

    useEffect(() => {
        if (data) {
            dispatch(fetchGroupProfileTimeTable({
                group_id: data?.id
            }))
        }
    }, [data])

    useEffect(() => {
        if (branchId && data && timeTable && systemId === 1) {
            const res = {
                time_tables: timeTable.map(item => ({
                    week: item.week.id,
                    room: item.room.id,
                    end_time: item.end_time,
                    start_time: item.start_time
                })),
                ignore_students: data?.students.map(item => item.id),
                ignore_teacher: data?.teacher.map(item => item.id)[0]
            }
            dispatch(fetchFilteredStudentsAndTeachers({
                branch_id: branchId,
                subject_id: data?.subject?.id,
                res
            }))
        }

    }, [branchId, data, timeTable, systemId])

    const searched = useMemo(() => {
        const filteredSlice = students?.slice()

        return filteredSlice?.filter(item =>
            item?.user?.name?.toLowerCase().includes(searchValue?.toLowerCase()) ||
            item?.user?.surname?.toLowerCase().includes(searchValue?.toLowerCase())
        )
    }, [students, searchValue])

    const renderStudentsData = () => {
        return searched?.map(item =>
            <tr>
                <td>
                    <img src={defaultUserImg} alt=""/>
                </td>
                <td>{item?.user?.name}</td>
                <td>{item?.user?.surname}</td>
                <td>
                    {/*{*/}
                    {/*    item?.subject?.map(i =>*/}
                    {/*        <div className={cls.addModal__subject}>*/}
                    {/*            {i?.name?.slice(0, 16)}*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*}*/}
                    {
                        item?.subject.length ?
                            <div className={cls.addModal__subject}>{item?.subject[0]?.name}</div> : null
                    }

                </td>
                <td>
                    <div className={cls.check}>
                        <Input
                            extraClassName={cls.check__input}
                            type={"checkbox"}
                            onChange={() => setSelectedId(prev => {
                                if (prev.filter(i => i === item.id)[0]) {
                                    return prev.filter(i => i !== item.id)
                                } else return [...prev, item.id]
                            })}
                        />
                        <div className={classNames(cls.status, {
                            [cls.active]: item?.extra_info?.status
                        })}>
                            <div className={classNames(cls.status__inner, {
                                [cls.active]: item?.extra_info?.status
                            })}/>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }

    const renderStudent = renderStudentsData()

    return (
        <>
            <Modal
                setActive={setActive}
                active={active}
            >
                <Form
                    typeSubmit={""}
                    extraClassname={cls.addModal}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h2>Add Group</h2>
                    <Select
                        options={groupData}
                        title={"Groups"}
                        register={register}
                        name={"group"}
                    />
                    <Button>Tekshirmoq</Button>
                </Form>
            </Modal>
            <Modal
                active={activeModal}
                setActive={setActiveModal}
                extraClass={cls.addModal}
            >
                <Input
                    placeholder={"Search"}
                    onChange={(e) => setSearchValue(e.target.value)}
                    defaultValue={searchValue}
                />
                {
                    loading ? <MiniLoader/>
                        :
                        <div className={cls.addModal__container}>
                            <Table>
                                <thead>
                                <tr>
                                    <th/>
                                    <th>Ism</th>
                                    <th>Familya</th>
                                    <th>Fanlar</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {renderStudent}
                                </tbody>
                            </Table>
                        </div>
                }

                <Button
                    extraClass={cls.addModal__btn}
                    onClick={onSubmitAddStudents}
                >
                    Add
                </Button>
            </Modal>
        </>
    )
})

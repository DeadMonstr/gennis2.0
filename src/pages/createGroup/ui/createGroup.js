import cls from "./createGroup.module.sass"
import {Button} from "shared/ui/button";
import {Table} from "shared/ui/table";
import {Input} from "../../../shared/ui/input";
import React, {useEffect, useMemo, useState} from "react";
import {get} from "react-hook-form";
import {logDOM} from "@testing-library/react";
import {Pagination} from "../../../features/pagination";
import {Modal} from "shared/ui/modal";
import {Select} from "shared/ui/select";

const createGroupData = [
    {name: 'saras' , surname: "sa" , age: 12 , reg_date: "2122212" , comment: "qweq", subject: "das" , reason: "dsa" , status: "" , id:1 , checked: false},
    {name: 'saras' , surname: "sa" , age: 12 , reg_date: "2122212" , comment: "qweq", subject: "das" , reason: "dsa" , status: "" , id:2 , checked: false},

]

export const CreateGroup = () => {
    const [active , setActive] = useState(false)
    let PageSize = useMemo(() => 50, [])
    const [ currentTableData,setCurrentTableData] =useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [search , setSearch] = useState('')

    const [getData , setGetData]= useState([])

    useEffect(() =>{
        setGetData(createGroupData)
    } , [])

    const searchedUsers = useMemo(() => {
        const filteredHeroes = createGroupData.slice()
        setCurrentPage(1)
        return filteredHeroes.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.surname.toLowerCase().includes(search.toLowerCase()) ||
            item.username.toLowerCase().includes(search.toLowerCase())
        )
    }, [createGroupData, search])

    const getUser = (id) =>{
        console.log(id)
    }
    const renderDate = () =>{
        return currentTableData.map((item , i) =>(
            <tr>
                <td>{i +1}</td>
                <td>{item.name} {item.surname}</td>
                <td>{item.age} </td>
                <td>{item.reg_date} </td>
                <td>{item.comment} </td>
                <td>{item.subject} </td>
                <td>{item.reason} </td>
                <td><Input onChange={() => getUser(item.id)} extraClassName={cls.createGroupInput} type={'checkbox'}/>
                    <div className={cls.createGroupStatus}><div></div></div>
                </td>
            </tr>
        ))
    }
    return (
        <div className={cls.createGroup}>
            <div className={cls.createGroupHeaderBtns}>
                <Button onClick={() => setActive(true)}>
                    create grooup
                </Button>
                <Button type={"simple__add"}>
                    create grooup
                </Button>
            </div>
            <div className={cls.createGroupHeader}>
                <div className={cls.createGroupFilter}>
                    <Button type={"filter"}>
                        Filter
                    </Button>
                </div>
                <div className={cls.createGroupHeaderBtn}>

                    <Button type={"login"} status={"timeTable"}>Time Table</Button>
                </div>
            </div>

            <div className={cls.createGroupTable}>
                <Table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Full name</th>
                        <th>Yosh</th>
                        <th>Registratsiya sana</th>
                        <th>Izoh</th>
                        <th>Fanlar</th>
                        <th>Sabab</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderDate()}
                    </tbody>
                </Table>
            </div>
            <Pagination
                setCurrentTableData={setCurrentTableData}
                users={createGroupData}
                search={search}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageSize={PageSize}
                onPageChange={page => {
                    setCurrentPage(page)
                }}
            />
            <Modal setActive={setActive} active={active}>
                <div className={cls.createGroupModal}>
                    <div className={cls.createGroupModalTitle}>
                        <h1>Gruppa ochish</h1>
                    </div>
                    <div className={cls.createGroupModalBox}>
                        <Select options={createGroupData.map(item => item.subject)}/>
                        <div className={cls.createGroupModalInput} style={{display: "flex"}}>
                            <Input placeholder={"boshlanish vaqti"}/>
                            <Input placeholder={"tugash vaqti"}/>
                        </div>
                        <div className={cls.createGroupModalTeacherBox}>

                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};



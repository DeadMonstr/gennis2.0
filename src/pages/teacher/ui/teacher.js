import React, {useMemo, useState} from 'react';
import cls  from "./teacher.module.sass"
import {Button} from "shared/ui/button";
import {Select} from "shared/ui/select";
import {Table} from "shared/ui/table";
import {Pagination} from "features/pagination";
import {TeacherFilter} from "features/filters/teacherFilter";


const branches =[
    {name: "chirchiq"},
    {name: "chirchiq1"},
    {name: "chirchiq2"},
]

const teachersData = [
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},
    {name : "sardor" , surname: "ikromov" , username: "ikromovvv" , number: 123123 , age: 17 , subject: "none" , deleteData: "22.22.2222"},

]
export const Teacher = () => {
    let PageSize = useMemo(() => 50, [])
    const [currentTableData ,setCurrentTableData]= useState([])
    const [search , setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const [selected , setSelected] = useState([])
    const [active ,setActive] = useState(false)

    const searchedUsers = useMemo(() => {
        const filteredHeroes = teachersData.slice()
        setCurrentPage(1)
        return filteredHeroes.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.surname.toLowerCase().includes(search.toLowerCase()) ||
            item.username.toLowerCase().includes(search.toLowerCase())
        )
    }, [teachersData, search])

    const renderTeacher = () =>{
        return teachersData.map((item , i) =>(
            <tr>
                <td>{i + 1}</td>
                <td>{item.name} {item.surname}</td>
                <td>{item.age}</td>
                <td>{item.number}</td>
                <td>{item.age}</td>
                <td>{item.subject}</td>
                <td>{item.deleteData}</td>
            </tr>
        ))
    }
    return (
        <div className={cls.teacher}>
            <div className={cls.teacher__header}>
                <div className={cls.header__btn}>
                    <Button>
                        Create Group
                    </Button>
                    <Button type={"simple-add"}>
                        Add Group
                    </Button>
                </div>
                <div className={cls.header__select}>
                    <Select options={branches} onChangeOption={() => setSelected} defaultValue={branches[0].name}/>
                </div>
            </div>
            <div className={cls.teacher__filter}>
                <Button type={"filter"}
                        extraClass={cls.extraCutClassFilter}
                        onClick={() => setActive(true)}
                >
                    Filter
                </Button>
                <Button type={"login"} status={"timeTable"}>
                    time table
                </Button>
            </div>
            <div className={cls.table}>
                <Table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Full name</th>
                            <th>Username</th>
                            <th>Tel</th>
                            <th>Yosh</th>
                            <th>Fan</th>
                            <th>O'chirilgan sana</th>
                        </tr>
                    </thead>
                    <tbody>
                    {renderTeacher()}
                    </tbody>
                </Table>
            </div>
            <Pagination
                setCurrentTableData={setCurrentTableData}
                users={teachersData}
                search={search}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageSize={PageSize}
                onPageChange={page => {
                    setCurrentPage(page)
                }}
            />
            <TeacherFilter setActive={setActive} active={active}/>
        </div>
    );
};


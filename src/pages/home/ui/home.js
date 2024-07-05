import React, {useMemo, useState} from 'react';

import {Alert} from "shared/ui/alert/alert";
import {Modal} from "shared/ui/modal";
import {Select} from "shared/ui/select";
import {Pagination} from "shared/ui/pagination";
import {MainSwitch} from "shared/ui/mainSwitch";
import {SearchPlatrofmInput} from "features/searchInput/ui/searchPlatrofmInput";
// import {Table} from "shared/ui/table";
const activeRows = {
    name: true,
    surname: true,
    username: true,
    phone: false,
    reason: false,
    job: false,
    age: false,
    reg_date: false,
    deleted_date: false,
    deletedDate: false
}



const list = [
    {
        id: 1,
        name: "fruit",
        value: "apple",
        label: "appleLabel"
    },
    {
        id: 2,
        name: "veg",
        value: "potato",
        label: "potatoLabel"
    },
    {
        id: 3,
        name: "job",
        value: "programmer",
        label: "programmerLabel"
    },
    {
        id: 4,
        name: "place",
        value: "yard",
        label: "yardLabel"
    }
]

const users = [
    {
        username: "NoN",
        name: "John",
        surname: "Smith"
    },
    {
        username: "noname",
        name: "Alex",
        surname: "Smith"
    },
    {
        username: "killer",
        name: "Stive",
        surname: "Smith"
    },
    {
        username: "god",
        name: "Notch",
        surname: "Smith"
    }
]
export const Home = () => {
    const [active, setActive] = useState(true)

    const onChange = (value) => {
        console.log(value, "value")


    }
    let PageSize = useMemo(() => 1, [])

    const [currentPage, setCurrentPage] = useState(1);

    const [search, setSearch] = useState("")


    const searchedUsers = useMemo(() => {
        const filteredHeroes = users.slice()
        setCurrentPage(1)
        return filteredHeroes.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.surname.toLowerCase().includes(search.toLowerCase()) ||
            item.username.toLowerCase().includes(search.toLowerCase())
        )
    }, [users, search])

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return searchedUsers.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, currentPage, searchedUsers]);
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            padding: "5rem 3rem"
        }}>

            <button onClick={() => setActive(!active)}>Enter</button>


            <div style={{width: "500px"}}>

                <Select
                    status={"error"}
                    title={"select"}
                    options={list}
                    onChangeOption={onChange}
                    // keyValue={"label"}
                    defaultValue={"potato"}
                />
            </div>

            <Select
                status={"disabled"}
                title={"select"}
                options={list}
                onChangeOption={onChange}
                // keyValue={"label"}
                defaultValue={"potato"}
            />

            <Select
                // status={"error"}
                title={"select"}
                options={list}
                onChangeOption={onChange}
                // keyValue={"label"}
                defaultValue={"potato"}
            />
            <Alert/>
            <button onClick={() => setActive(!active)}>Enter</button>


            <div style={{width: "500px"}}>

                <Select
                    status={"error"}
                    title={"select"}
                    options={list}
                    onChangeOption={onChange}
                    // keyValue={"label"}
                    defaultValue={"potato"}
                />
            </div>

            <Select
                status={"disabled"}
                title={"select"}
                options={list}
                onChangeOption={onChange}
                // keyValue={"label"}
                defaultValue={"potato"}
            />

            <Select
                // status={"error"}
                title={"select"}
                options={list}
                onChangeOption={onChange}
                // keyValue={"label"}
                defaultValue={"potato"}
            />
            <Alert/>
            <button onClick={() => setActive(!active)}>Enter</button>


            <div style={{width: "500px"}}>

                <Select
                    status={"error"}
                    title={"select"}
                    options={list}
                    onChangeOption={onChange}
                    // keyValue={"label"}
                    defaultValue={"potato"}
                />
            </div>

            <Select
                status={"disabled"}
                title={"select"}
                options={list}
                onChangeOption={onChange}
                // keyValue={"label"}
                defaultValue={"potato"}
            />

            <Select
                // status={"error"}
                title={"select"}
                options={list}
                onChangeOption={onChange}
                // keyValue={"label"}
                defaultValue={"potato"}
            />
            <Alert/>

            <Modal
                active={active}
                setActive={setActive}
            >
                <h1>Hello Sarik</h1>
                <h1>Hello World</h1>
            </Modal>


            <div>
                {
                    currentTableData.map((item, i) => {
                        return (
                            <div key={i}>
                                <div>{item.username}</div>
                                <p>{item.name} {item.surname}</p>
                            </div>
                        )
                    })
                }
                <Pagination
                    currentPage={currentPage}
                    totalCount={searchedUsers.length}
                    pageSize={PageSize}
                    onPageChange={page => {
                        setCurrentPage(page)
                    }}
                />
                <MainSwitch/>
            </div>

            {/*<Table*/}
            {/*    users={users}*/}
            {/*    activeRowsInTable={activeRows}*/}
            {/*/>*/}

        </div>
    );

};
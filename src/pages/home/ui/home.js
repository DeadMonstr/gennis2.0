import React, {useMemo, useState} from "react";


import {Modal} from "shared/ui/modal";
import {Select} from "shared/ui/select";
import {Pagination} from "shared/ui/pagination";
import {Table} from "shared/ui/table";
import {Form} from "shared/ui/form";

import Dropdown from "shared/ui/dropdawn/dropdown";
import Button from "shared/ui/button/button";
import {Alert} from "shared/ui/alert/alert";
import Radio from "shared/ui/radio/radio";

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
        id: 1,
        username: "NoN",
        name: "John",
        surname: "Smith",
        age: 13,
        subjects: ["matem"],
        reg_date: "2024-07-03",
        comment: "dsfgsdfdsfg"
    },
    {
        id: 2,
        username: "noname",
        name: "Alex",
        surname: "Smith",
        age: 10,
        subjects: ["Tarix", "matem"],
        reg_date: "2024-07-03",
        comment: "dsfdsfaer thyjgfjn g "
    },
    {
        id: 3,
        username: "killer",
        name: "Stive",
        surname: "Smith",
        age: 15,
        subjects: ["Ingliz tili"],
        reg_date: "2024-07-03",
        comment: "sdfsd"
    },
    {
        id: 4,
        username: "god",
        name: "Notch",
        surname: "Smith",
        age: 11,
        subjects: ["Biologiya"],
        reg_date: "2024-07-03",
        comment: "24f34fwe312f"
    },
    {
        id: 5,
        username: "god",
        name: "Notch",
        surname: "Smith",
        age: 15,
        subjects: ["Biologiya"],
        reg_date: "2024-07-03",
        comment: "24f34fwe312f"
    },
    {
        id: 6,
        username: "god",
        name: "Notch",
        surname: "Smith",
        age: 16,
        subjects: ["Biologiya"],
        reg_date: "2024-07-03",
        comment: "24f34fwe312f"
    },
    {
        id: 7,
        username: "god",
        name: "Notch",
        surname: "Smith",
        age: 17,
        subjects: ["Biologiya"],
        reg_date: "2024-07-03",
        comment: "24f34fwe312f"
    },
    {
        id: 8,
        username: "god",
        name: "Notch",
        surname: "Smith",
        age: 18,
        subjects: ["Biologiya"],
        reg_date: "2024-07-03",
        comment: "24f34fwe312f"
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

    const [selected, setSelected] = useState()


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


    const renderStudents = () => {
        return users.map((item, index) => {
            return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td>{item.username}</td>
                    {/*{checkTrueFalse(item.dates)}*/}
                </tr>
            )
        })
    }


    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem"
            }}
        >


            <button onClick={() => setActive(!active)}>Enter</button>


            <Select
                status={"error"}
                title={"select"}
                options={list}
                onChangeOption={onChange}
                // keyValue={"label"}
                defaultValue={"potato"}
            />

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
            </div>

            <div style={{width: "100%", padding: "3rem 5rem"}}>
                <Table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Ism</th>
                        <th>Familya</th>
                        <th>Username</th>

                    </tr>
                    </thead>
                    <tbody>
                    {renderStudents()}
                    </tbody>
                </Table>
            </div>


            <Form>

            </Form>

            <div>
                <h1>Hello</h1>
                <Button type={"simple"}>
                    click
                </Button>
                <Button type={"danger"}>
                    click
                </Button>
                <Button type={"success"}>
                    click
                </Button>
                <Button type={"warning"}>
                    click
                </Button>
                <Button type={"disabled"}>
                    click
                </Button>
                <Button type={"danger"} status={"checked"}>
                    click
                </Button>
                <Button type={"warning"} status={"false"}>
                    click
                </Button>
                <Button type={"star"}/>
                <Radio onChange={() => setSelected} checked={selected}>
                    dsa
                </Radio>
                <Dropdown title={"dadsad1"}>
                    hello
                    <Button>
                        push
                    </Button>
                </Dropdown>
                <Alert/>
            </div>
        </div>
    )
};
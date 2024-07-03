import React, {useState} from 'react';

import Button from "shared/ui/button/button";
import Radio from "../../../shared/ui/radio/radio";
import Dropdown from "../../../shared/ui/dropdawn/dropdown";

import Input from "shared/ui/input/input";
import Switch from "shared/ui/switch/switch";
import SearchInput from "shared/ui/searchInput/search";
import Textarea from "shared/ui/textArea/textArea";
import {Alert} from "shared/ui/alert/alert";


export const Home = () => {
    const [selected, setSelected] = useState(false)

    return (
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
            <Dropdown title={"dadsad1"} >
                hello
                <Button>
                    push
                </Button>
            </Dropdown>
        </div>
)}


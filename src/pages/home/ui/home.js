import React, {useState} from 'react';
import Button from "shared/ui/button/button";
import Radio from "../../../shared/ui/radio/radio";
import Dropdawn from "../../../shared/ui/dropdawn/dropdown";

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
            <Dropdawn title={"dadsad1"} >
                hello
                <Button>
                    push
                </Button>
            </Dropdawn>
        </div>
    );
};


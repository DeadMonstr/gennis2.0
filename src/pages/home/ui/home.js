import React, {useState} from 'react';
import Input from "shared/ui/input/input";
import Switch from "shared/ui/switch/switch";
import SearchInput from "shared/ui/searchInput/search";
import Textarea from "shared/ui/textArea/textArea";
import {Alert} from "shared/ui/alert/alert";

export const Home = () => {
    const [input, setInput] = useState("")

    return (
        <div>

                <Input title={"Label"} onChange={setInput} type={"password"}/>

            <Switch
                // disabled={"disabled"}
            />

            <SearchInput/>
            <Textarea title={"Gennis"}  onChange={setInput}/>
            <Alert/>
        </div>
    );
};


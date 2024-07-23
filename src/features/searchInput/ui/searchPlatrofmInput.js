import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {SearchInput} from 'shared/ui/searchInput';
import {getSearchStr} from "../model/searchSlice";

export const SearchPlatformInput = ({onSearch}) => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('');

    const handleSearch = (searchValue) => {
        setSearch(searchValue);
        dispatch(getSearchStr(searchValue))
        if (onSearch) {
            onSearch(searchValue);
        }
    };

    return (
        <SearchInput
            search={search}
            setSearch={handleSearch}
        />
    );
};


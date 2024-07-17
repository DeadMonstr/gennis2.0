import React, {useState} from 'react';
import {SearchInput} from 'shared/ui/searchInput';

export const SearchPlatformInput = ({onSearch}) => {
    const [search, setSearch] = useState('');

    const handleSearch = (searchValue) => {
        setSearch(searchValue);
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


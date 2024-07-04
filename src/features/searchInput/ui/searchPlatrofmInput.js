import React, {useState} from 'react';

import SearchInput from "shared/ui/searchInput/search";

export const SearchPlatformInput = () => {
    const [search, setSearch] = useState('');

    const handleSearch = (searchValue) => {
        setSearch(searchValue);
    };

    return (
        <SearchInput
            search={search}
            setSearch={handleSearch}
        />
    );
};

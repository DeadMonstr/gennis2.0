import React, {useState} from 'react';
import SearchInput from "shared/ui/searchInput/search";
export const SearchPlatrofmInput = () => {
    const [search, setSearch] = useState('');

    const handleSearch = (searchValue) => {
        setSearch(searchValue);
        console.log("Search value: ", searchValue);
    };

    return (
        <div>
            <SearchInput search={search} setSearch={handleSearch} />
        </div>
    );
};

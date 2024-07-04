import React, { memo } from 'react';
import cls from "./search.module.sass"
import '@fortawesome/fontawesome-free/css/all.min.css';

const SearchInput = memo(({ search, setSearch}) => {
    return (
        <label id={cls.search} className={cls.search}>
            <span><i className="fas fa-search" /></span>
            <input
                value={search}
                placeholder={"Qidiruv "}
                id="search"
                type="text"
                onInput={e => {
                    setSearch(e.target.value)
                }}
            />
        </label>
    );
});

export default SearchInput
import React, { memo, useState } from 'react';
import cls from "./search.module.sass"
import '@fortawesome/fontawesome-free/css/all.min.css';

const SearchInput = memo(({ search}) => {

    return (
        <label id={cls.search} className={cls.search}>
            <input
                value={search}
                placeholder={"Qidiruv "}
                id="search"
                type="text"
            />
            <span><i className="fas fa-search" /></span>
        </label>
    );
});

export default SearchInput
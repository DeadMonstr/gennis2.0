import React, { memo, useState } from 'react';
import cls from "./search.module.sass"
import '@fortawesome/fontawesome-free/css/all.min.css';

const SearchInput = memo(({ search}) => {

    return (
        <label id={cls.search} className={cls.search}>
            <span><i className="fas fa-search" /></span>
            <input
                value={search}
                placeholder={"Qidiruv "}
                id="search"
                type="text"
            />
        </label>
    );
});

export default SearchInput
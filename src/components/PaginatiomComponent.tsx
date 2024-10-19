import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {apiService} from "../services/api.service";

const PaginatiomComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'})


    const onclickPrevHandler = () => {
        const page = query.get('page');
        if (page && +page > 0) {
            let currentPage = +page;
            currentPage--;
            setQuery({page: currentPage.toString()});
        }

    };

    const onclickNextHandler = () => {
        const page = query.get('page');
        if (page) {
            let currentPage = +page;
            currentPage++;
            setQuery({page: currentPage.toString()});
        }

    };


    return (
        <div>
            <button onClick={onclickPrevHandler}>Prev</button>
            <button onClick={onclickNextHandler}>Next</button>
        </div>
    );
};

export default PaginatiomComponent;
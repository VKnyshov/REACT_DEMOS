import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {

    const[query, setQuery ] = useSearchParams()
    useEffect(() => {
        setQuery({page:'allUsers'})
    }, []);


    return (
        <div>
            <button onClick={() => {
                const page = query.get('page');
                if (page) {
                    let currentPage = +page;
                    currentPage++;
                    setQuery({page: currentPage.toString()})
                }
            }
            }>All information
            </button>
        </div>
    );
};

export default PaginationComponent;








import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css"

const HeaderComponent = () => {
    return (
        <div className='UpTime'>
            <ul className='Menu'>

                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'posts'}>Posts</Link></li>
                <li><Link to={'comments'}>Comments</Link></li>
                <li><Link to={'postsComments'}>Post and Comments</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;
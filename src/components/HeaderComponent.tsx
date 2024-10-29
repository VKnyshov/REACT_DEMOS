import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'
const HeaderComponent = () => {
    return (
        <div>
        <ul className='Menu'>
           <li><Link to={'/'}>Home</Link></li>
           <li><Link to={'posts'}>Posts</Link></li>
           <li><Link to={'Comments'}>Comments</Link></li>
           <li><Link to={'postComments'}>Posts & Comments</Link></li>
        </ul>
        <hr/>
        </div>
    );
};

export default HeaderComponent;
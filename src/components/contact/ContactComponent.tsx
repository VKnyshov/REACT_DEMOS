import React, {FC} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

const ContactComponent: FC<any> = ({contact}) => {

    const navigate = useNavigate();
    const onClickNavigation = () => {
        navigate (contact.id.toString(), {state:{contact}});
    };

    return (
        <div>
            Users ID - {contact.id} --
            {/*<NavLink to={contact.id.toString()} state={{contact}}>details</NavLink> <br/>*/}
            <button onClick={onClickNavigation}
            >details by button
            </button>
        </div>
    );
};

export default ContactComponent;
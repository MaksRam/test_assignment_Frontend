import React from 'react';
import s from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.userlist}>
                <h4>User List</h4>
            </div>
            <div className={s.searchbox}>
                <input placeholder='    Search...'/>
            </div>
            <div className={s.userpic}>
            </div>
        </header>

    )
}

export default Header;
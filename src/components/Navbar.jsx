import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faContactBook, faPlaneArrival, faWifi } from '@fortawesome/free-solid-svg-icons'
import Login from './Login';



const Navbar = () => {
  
  const [localStorageStatus, setLocalStorageStatus] = useState(null)

  console.log(localStorageStatus)
    return (
        <nav className={s.nav}>
          <div className={s.logo}>      <a href="#"><img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"
          alt="" width="80" height="77"/></a></div>
            <div className={s.dashboard}>
        <div className={s.item}>
          <NavLink to='/login' element={<Login />} className={(navData) => navData.isActive ? s.activeLink : ''}><p className={s.d1}><FontAwesomeIcon icon={faHouse} className={s.icon} /> &nbsp;Login</p></NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/registration' className={(navData) => navData.isActive ? s.activeLink : ''}><p  className={s.d2}><FontAwesomeIcon icon={faUser} className={s.icon} /> &nbsp;Registration</p></NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/userlist' className={(navData) => navData.isActive ? s.activeLink : ''}><p  className={s.d3}><FontAwesomeIcon icon={faWifi} className={s.icon} /> &nbsp;User List</p></NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/music'
         className={(navData) => navData.isActive ? s.activeLink : ''}><p  className={s.d4}><FontAwesomeIcon icon={faPlaneArrival} className={s.icon} /> &nbsp;Dashboard</p></NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' className={(navData) => navData.isActive ? s.activeLink : ''}><p  className={s.d5}><FontAwesomeIcon icon={faContactBook} className={s.icon} /> &nbsp;Dashboard</p></NavLink>
        </div>
        </div>
      </nav>
    )
}

export default Navbar;
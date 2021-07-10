import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Context } from '../context'
import axios from 'axios'
import { toast } from 'react-toastify'
import AppsIcon from '@material-ui/icons/Apps'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import PersonIcon from '@material-ui/icons/Person'
import LocalCafeIcon from '@material-ui/icons/LocalCafe'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const TopNav = () => {
  const router = useRouter();

  const [active, setActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  const { state, dispatch } = useContext(Context);
  const { user } = state;

  useEffect(() => {
    process.browser && setDropdownActive(!(!!window.location.pathname));
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    setDropdownActive(true);
    dispatch({ type: 'LOGOUT' });
    window.localStorage.removeItem('user');
    const { data } = await axios.get('/api/logout');
    toast.success(data.message);

    setDropdownActive(false)
    router.push('/login');
  }

  return (
    <nav className="nav">
     <div className="container">
      <div className="nav-flex__1">
          <div className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">
              <div className="nav-item">
                <AppsIcon />
                <a className="nav-item__link" >E-Learning</a>
              </div>
            </Link>
          </div>

          { user === null && (
            <>
              <div className={router.pathname == "/login" ? "active" : ""}>
                <Link href="/login">
                  <div className="nav-item">
                    <LockOpenIcon />
                    <a className="nav-item__link">Login</a>
                  </div>
                </Link>
              </div>
              
              <div className={router.pathname == "/register" ? "active" : ""}>
                <Link href="/register">
                  <div className="nav-item">
                    <PersonIcon />
                    <a className="nav-item__link">Signup</a>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
        
        <div className="nav-flex__2">
          { user !== null && (
            <div className="dropdown">
              <div className={router.pathname == "/" ? "active" : ""}>
              <Link href="/">
                  <div className="nav-item">
                    <LocalCafeIcon />
                    <a className="nav-item__link">{user && user.name.split(' ')[0]}</a>
                    <ExpandMoreIcon />
                  </div>
              </Link>
              </div>
              <div className="dropdown__content">
                <div onClick={logout} className={dropdownActive ? '.dropdown__nav-item--active' : ''}>
                    <div className="dropdown__nav-item">
                      <ExitToAppIcon />
                      <a className="dropdown__link">Logout</a>
                    </div>
                </div>
                <div className={dropdownActive ? '.dropdown__nav-item--active' : ''}>
                    <div className="dropdown__nav-item">
                      <LocalCafeIcon />
                      <a className="dropdown__link">Link 2</a>
                    </div>
                </div>
                <div className={dropdownActive ? '.dropdown__nav-item--active' : ''}>
                    <div className="dropdown__nav-item">
                      <LocalCafeIcon />
                      <a className="dropdown__link">Link 3</a>
                    </div>
                </div>
              </div>
            </div>
          )}
      </div>
     </div>
    </nav>
  )
}

export default TopNav;
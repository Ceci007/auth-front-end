import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Context } from '../context'
import axios from 'axios'
import { toast } from 'react-toastify'
import AppsIcon from '@material-ui/icons/Apps'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonIcon from '@material-ui/icons/Person'

const TopNav = () => {
  const router = useRouter();

  const [active, setActive] = useState(false);

  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    process.browser && setActive(!(!!window.location.pathname));
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    setActive(true);
    dispatch({ type: 'LOGOUT' });
    window.localStorage.removeItem('user');
    const { data } = await axios.get('/api/logout');
    toast.success(data.message);

    setTimeout(() => {
      setActive(false);
    }, 1000);
    router.push('/login');
  }

  return (
    <nav className="nav">
      <div className={router.pathname == "/" ? "active" : ""}>
        <Link href="/">
          <div className="nav-item">
            <AppsIcon />
            <a className="nav-item__link" >E-Learning</a>
          </div>
        </Link>
      </div>
  
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

      <div onClick={logout} className={active ? "active" : ""}>
          <div className="nav-item">
            <ExitToAppIcon />
            <a className="nav-item__link">Logout</a>
          </div>
      </div>
    </nav>
  )
}

export default TopNav;
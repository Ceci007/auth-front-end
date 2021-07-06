import { useRouter } from 'next/router'
import Link from 'next/link'
import AppsIcon from '@material-ui/icons/Apps'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PersonIcon from '@material-ui/icons/Person'

const TopNav = () => {
  const router = useRouter();

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
            <ExitToAppIcon />
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
    </nav>
  )
}

export default TopNav;
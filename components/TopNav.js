import Link from 'next/link'
import AppsIcon from '@material-ui/icons/Apps'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew'

const TopNav = () => {
  return (
    <nav className="nav">
      <Link href="/">
        <div className="nav-item">
          <AppsIcon />
          <a className="nav-item__link">E-Learning</a>
        </div>
      </Link>
      <Link href="/login">
        <div className="nav-item">
          <ExitToAppIcon />
          <a className="nav-item__link">Login</a>
        </div>
      </Link>
      <Link href="/register">
        <div className="nav-item">
          <AccessibilityNewIcon />
          <a className="nav-item__link">Signup</a>
        </div>
      </Link>
    </nav>
  )
}

export default TopNav;
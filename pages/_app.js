import TopNav from '../components/TopNav'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../public/css/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopNav />
      <ToastContainer position="top-center" style={{ fontFamily: 'Raleway', fontSize: '1.6rem', lineHeight: 1.8 }} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
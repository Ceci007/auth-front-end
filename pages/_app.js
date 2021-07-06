import TopNav from '../components/TopNav'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../public/css/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopNav />
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
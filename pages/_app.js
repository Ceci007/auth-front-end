import TopNav from '../components/TopNav'
import { ToastContainer } from 'react-toastify'
import { Provider } from '../context'
import 'react-toastify/dist/ReactToastify.css'
import '../public/css/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <TopNav />
      <ToastContainer position="top-center" style={{ fontFamily: 'Raleway', fontSize: '1.6rem', lineHeight: 1.8 }} />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;
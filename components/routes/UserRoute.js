import { useState, useEffect } from "react"
import axios from 'axios'
import { useRouter } from 'next/router'
import CircularProgress from '@material-ui/core/CircularProgress'

const UserRoute = ({ children }) => {
  const [ok, setOk] = useState(false);

  const router = useRouter();

  const fetchUser = async () => {
    try {
      const { data } = await axios.get('/api/current-user');
      if(data.ok) setOk(true);
    } catch(err) {
      console.log(err);
      setOk(false);
      router.push('/login');
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
    { !ok ? (
      <div className="container-spin">
        <CircularProgress style={{color: '#9a9a9a', width: '60px', height: '60px'}} />
      </div>) : (
        <>
          { children }
        </>
      )
    }
    </>
  );
}

export default UserRoute;
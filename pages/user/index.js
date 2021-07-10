import { useState, useEffect, useContext } from "react"
import { Context } from '../../context'
import axios from 'axios'

const UserIndex = () => {
  const [hidden, setHidden] = useState(true);

  const { state } = useContext(Context);
  const { user } = state;

  const fetchUser = async () => {
    try {
      const { data } = await axios.get('/api/current-user');
      setHidden(false);
      console.log(data);
    } catch(err) {
      console.log(err);
      setHidden(true);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
    { !hidden && (
      <div className="header">
        <h1>User profile</h1>
        <p>{JSON.stringify(user)}</p>
      </div>)
    }
    </>
  );
}

export default UserIndex;
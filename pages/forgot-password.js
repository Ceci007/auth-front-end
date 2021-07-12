import { useState, useEffect, useContext } from "react"
import Link from 'next/link'
import { Context } from "../context"
import { useRouter } from "next/router"
import axios from 'axios'
import { toast } from 'react-toastify'
import CircularProgress from '@material-ui/core/CircularProgress'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { state } = useContext(Context);
  const { user } = state;

  const router = useRouter();

  useEffect(() => {
    if(user !== null) router.push('/')
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post('/api/forgot-password', { email });
      setSuccess(true);
      toast('Check the secret code we just sent to your email')
    } catch(err) {
      setLoading(false);
      toast.error(err.response.data);
    }
  };

  return (
    <div>
       <form className="form-control" onSubmit={handleSubmit}>
        <input 
          type="email" 
          className="form-control__input" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          placeholder="Enter email"
          required
        />
        <button 
          type="submit" 
          className="btn btn--primary"
          disabled={!email || loading}
        >
          { loading ? 
            <CircularProgress style={{color: '#fff', width: '15px', height: '15px'}} /> : 
            'Send Password' }
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
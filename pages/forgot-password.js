import { useState, useEffect, useContext } from "react"
import Link from 'next/link'
import { Context } from "../context"
import { useRouter } from "next/router"
import axios from 'axios'
import { toast } from 'react-toastify'
import CircularProgress from '@material-ui/core/CircularProgress'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
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
    setLoading(true);

    try {
      const { data } = await axios.post('/api/forgot-password', { email });
      setSuccess(true);
      setEmail('');
      toast('Check the secret code we just sent to your email');
      setLoading(false);
    } catch(err) {
      setEmail('');
      setLoading(false);
      toast.error(err.response.data);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post('/api/reset-password', {
        email,
        code,
        newPassword
      });

      setLoading(false);
      setEmail('');
      setCode('');
      setNewPassword('');

      toast.success('We updated the new password, you can try to login');
    } catch(err) {
      setEmail('');
      setCode('');
      setNewPassword('');
      setLoading(false);
      toast.error(err.response.data);
    }
  }

  return (
    <div>
       <form className="form-control" onSubmit={success ? handleResetPassword : handleSubmit}>
        <input 
          type="email" 
          className="form-control__input" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          placeholder="Enter email"
          required
        />
        { success && (
          <>
            <input 
              type="text" 
              className="form-control__input" 
              value={code} 
              onChange={e => setCode(e.target.value)} 
              placeholder="Enter secret code"
              required
            />
            <input 
              type="password" 
              className="form-control__input" 
              value={newPassword} 
              onChange={e => setNewPassword(e.target.value)} 
              placeholder="Enter new password"
              required
            />
          </>
        )}
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
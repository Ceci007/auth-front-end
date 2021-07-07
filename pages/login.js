import { useState } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify';
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/login`, {
        email,
        password
      });
      
      toast.success('Login successful');
      console.log('Login data', data);

      setEmail('');
      setPassword('');
      setLoading(false);
    } catch(err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  }

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
        <input 
          type="password" 
          className="form-control__input" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          placeholder="Enter password"
          required
        />
        <button 
          type="submit" 
          className="btn btn--primary"
          disabled={!email || !password || loading}
        >
          { loading ? 
            <CircularProgress style={{color: '#fff', width: '15px', height: '15px'}} /> : 
            'Login' }
        </button>
        <p className="text-center">Don't have an account? <Link href="/register"><a className="link">Signup</a></Link></p>
      </form>
    </div>
  );
}

export default Login;
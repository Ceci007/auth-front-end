import { useState } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify';
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password
      });
      
      toast.success('Registration successful. Please login');

      setName('');
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
          type="text" 
          className="form-control__input" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          placeholder="Enter name"
          required
        />
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
          disabled={!name || !email || !password || loading}
        >
          { loading ? 
            <CircularProgress style={{color: '#fff', width: '15px', height: '15px'}} /> : 
            'Signup' }
        </button>
        <p className="text-center">Already regitered? <Link href="/login"><a className="link">Login</a></Link></p>
      </form>
    </div>
  );
}

export default Register;
import { useState } from 'react'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.table({ name, email, password });

    setName('');
    setEmail('');
    setPassword('');
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
        <button type="submit" className="btn btn--primary">Signup</button>
      </form>
    </div>
  );
}

export default Register;
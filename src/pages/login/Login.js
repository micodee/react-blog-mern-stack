import React from 'react'
import { Button, Gap, Input, Link } from '../../components/Components'
import { LoginBg } from '../../img/Img'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className='main-page'>
        <div className="left">
            <img src={LoginBg} className="bg-image" alt="login" loading='lazy'/>
        </div>
        <div className="right">
            <p className='title'>Login</p>
            <Input label="Email" placeholder="Email" />
            <Gap height={18} />
            <Input label="Password" placeholder="Password" />
            <Gap height={20} />
            <Button title="Login" onClick={() => navigate('/')} />
            <Gap height={100} />
            <Link title="Belum punya akun, silahkan daftar" onClick={() => navigate("/register")} />
        </div>
    </div>
  )
}

export default Login
import React from 'react'
import { Button, Gap, Input, Link } from '../../components/Components'
import { RegisterBg } from '../../img/Img'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  return (
    <div className='main-page'>
        <div className="left">
            <img src={RegisterBg} className="bg-image" alt="register" loading='lazy'/>
        </div>
        <div className="right">
            <p className='title'>Register</p>
            <Input label="Full name" placeholder="Fullname" />
            <Gap height={18} />
            <Input label="Email" placeholder="Email" />
            <Gap height={18} />
            <Input label="Password" placeholder="Password" />
            <Gap height={20} />
            <Button title="Register" onClick={() => navigate("/login")} />
            <Gap height={100} />
            <Link title="kembali ke login" onClick={() => navigate("/login")} />
        </div>
    </div>
  )
}

export default Register
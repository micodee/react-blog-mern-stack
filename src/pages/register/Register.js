import React from 'react'
import { Button, Gap, Input, Link } from '../../components/Components'
import { RegisterBg } from '../../img/Img'

const Register = () => {
  return (
    <div className='register'>
        <div className="left">
            <img src={RegisterBg} className="bg-register" alt="register" loading='lazy'/>
        </div>
        <div className="right">
            <p className='title'>Register</p>
            <Input label="Full name" placeholder="Fullname" />
            <Gap height={18} />
            <Input label="Email" placeholder="Email" />
            <Gap height={18} />
            <Input label="Password" placeholder="Password" />
            <Gap height={20} />
            <Button title="Register" />
            <Gap height={100} />
            <Link title="kembali ke login" />
        </div>
    </div>
  )
}

export default Register
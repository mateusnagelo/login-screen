import { useState } from 'react';
import { Link } from 'react-router-dom'
import { LayoutComponents } from "../../../components/LayoutComponents";
import jpgIMG from '../../ma.svg';


export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    return (
        <LayoutComponents>
        <form className="login-form">
            <span className="login-form-title">Criar conta</span>
            <span className="login-form-title">
              <img src={jpgIMG} alt="Jovem Programador"/>
            </span>
    
            <div className='wrap-input'>
              <input 
              className= {name !== "" ? 'has-val input' : 'input' } type='text' 
              value={name} 
              onChange={e => setName(e.target.value)} 
              />
              <span className='focus-input'data-placeholder='Nome'></span>
            </div>

            <div className='wrap-input'>
              <input 
              className= {email !== "" ? 'has-val input' : 'input' } type='email' 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              />
              <span className='focus-input'data-placeholder='E-mail'></span>
            </div>
    
            <div className='wrap-input'>
              <input 
              className='input' type='password' 
              value={password} 
              onChange={e => setPassword(e.target.value)}  
              />
              <span className='focus-input'data-placeholder='Password'></span>
            </div>
    
            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Login</button>
            </div>
    
            <div className='text-center'>
              <span className='txt1'>Já possui conta?</span>
            <Link className="txt2" to="/login"> Acessar com Email e senha.
            </Link>
            </div>
            </form> 

        </LayoutComponents>

    );
}
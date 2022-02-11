import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin, signup } from "../../reducers/actions/userActions";

const initial = { nombre: "", email: "", password: "" };

export default function Auth(){
  const [register, setRegister] = useState(false)
  const dispatch = useDispatch()
  const [form, setForm] = useState(initial)
  const navigate = useNavigate()

  const handleChange=(e)=>{
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form);
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(register){
      dispatch(signup(form, navigate))
    }else{
      dispatch(signin(form, navigate))
    }
  }
  return(
    <>
    {register ? <h2>Registrarse</h2> : <h2>Iniciar Sesion</h2>}
    <form onSubmit={handleSubmit}>
      
      {register? <input type="text" name="nombre" placeholder="nombre" onChange={handleChange} />: null}
      <input type="email" name="email"placeholder="email" onChange={handleChange} />
      <input type="password" name="password" placeholder="password"onChange={handleChange} />
      <input type="submit" value="Iniciar Sesion"/>
    </form>
    <button onClick={()=> register ? setRegister(false): setRegister(true)}>{!register ?' No tienes una cuenta, Registrate gratis': 'Inicia Sesion'}</button>
    </>

  )
}

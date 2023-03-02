import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'
import NavBar from './NavBar';
import { useForm } from "react-hook-form";


function LoginForm(props) {
  const{lstat,setlstat}=props;
    const [input,setInput] = useState("");

    const navigate = useNavigate();  

    useEffect(() => {
      window.history.pushState(null, document.title, window.location.href);
      window.addEventListener('popstate', function (event){
          window.history.pushState(null, document.title,  window.location.href);
        });
    },[])

    const { register,handleSubmit, formState: { errors } } = useForm(); 
    const onSubmit =(event)=>{
       // event.preventDefault();
       // console.log("Clicked")
        if(input.email=="geclyn@unclefluffy.com" && input.password=="123456"){
          setlstat(input);
            alert("Login Success!!")
           navigate('/mainPage');
        }else{
            alert("Login failed!!")
            navigate('/login')
        }
        //console.log(input)
    }
  return (
    <div className='main'>
     <NavBar/>    
   <div className='container'>
    <section className="vh-50 gradient-custom">
  <div className="container py-5 h-50">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-grey text-black" style={{borderradius: '1rem'}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-6 mt-md-2 pb-7">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-black-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <input type="email"  {...register("email",{ required: true })} id="typeEmailX" value={input.email} onChange={ event=>setInput({...input,email:event.target.value})}  placeholder='Username' className="form-control form-control-lg" />
                <label className="form-label" for="typeEmailX"><span className='error'>{errors.email && <i>Please fill the input</i>}</span></label>
              </div>

              <div className="form-outline form-white mb-6">
                <input type="password" {...register("password",{ required: true })}  id="typePasswordX" value={input.password} onChange={ event=>setInput({...input,password:event.target.value})}  placeholder='Password' className="form-control form-control-lg" />
                <label className="form-label" for="typePasswordX"><span className='error'>{errors.password && <i>Please fill the input</i>}</span></label>
              </div>

              <button className="btn btn-outline-dark btn-lg px-5" type="submit" onClick={handleSubmit(onSubmit)}  >Login</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
       </div>
       </div>
  )
}

export default LoginForm;
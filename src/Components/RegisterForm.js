import React,{useState} from 'react'
import NavBar from './NavBar'
import './RegisterForm.css'
import { useForm } from "react-hook-form";
import {useNavigate } from 'react-router-dom';

function RegisterForm(props) {
  const{alist,alistSet}=props;
  const navigate = useNavigate(); 
  const [input,setInput] = useState({email:'',name:'',number:'',country:'',interest:'',remark:'',status:'',remark:'',date:'02-03-2022'});
  const { register,handleSubmit, formState: { errors } } = useForm();

const onSubmit = (e)=>{
 // e.preventDefault();
//console.log(input)
let allitems= alist;
allitems.push(input);
alistSet(allitems);
console.log(alist)
alert("Added Successfully")
navigate('/mainPage')
  }

const goBack=()=>{
 navigate('/mainPage')
}

  return (
    <div className='regMain'>
      <NavBar/>
      <div className='container'>
    <section className="vh-50 gradient-custom">
  <div className="container py-2 h-50">
    <div className="row d-flex justify-content-center align-items-center h-50">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-grey text-black" style={{borderradius: '1rem'}}>
          <div className="card-body p-3 text-center">

            <div className="mb-md-6 mt-md-2 pb-5 ">

              <h2 className="fw-bold mb-2 text-uppercase">NEW LEAD</h2>
              <div className='row g-0'>
              <div className="form-outline form-white mb-6 ">
                <select class="form-select form-select-lg mb-3" value={input.status}  onChange={event=>setInput({...input,status:event.target.value})}  aria-label=".form-select-lg example">
                <option selected>Status</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Not Interested">Not Interested</option>
                </select>
              </div>

              <div className="form-outline form-white mb-6 ">
                <input type="text"  {...register("name",{ required: true,minLength: 5 })} id="typeName" value={input.name} onChange={ event=>setInput({...input,name:event.target.value})}   placeholder='Name' className="form-control form-control-lg" />
                <label className="form-label" for="typeName"> <span className='error'>{errors.name && <i> Please check the Name</i>}</span></label>
              </div>

              <div className="form-outline form-white mb-6">
                <input type="text" {...register("email",{ required: true,pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} name="email" value={input.email}  onChange={event=>setInput({...input,email:event.target.value})} id="typeEmail" placeholder='Email' className="form-control form-control-lg" />
                <label className="form-label" for="typeEmail"> <span className='error'>{errors.email && <i> Please check the email</i>}</span></label>
              </div>
              <div className="form-outline form-white mb-6">
                <input type="text" {...register("number",{ required: true,pattern:/^\d{5}$/,minLength:5,maxLength:5 })} name="number" value={input.number}  onChange={event=>setInput({...input,number:event.target.value})} id="typePhone" placeholder='Phone' className="form-control form-control-lg" />
                <label className="form-label" for="typePhone"><span className='error'>{errors.number && <i> Please check the number</i>}</span></label>
              </div>
              <div className="form-outline form-white mb-6">
                <input type="text" {...register("country",{ required: true })} value={input.country}  onChange={event=>setInput({...input,country:event.target.value})} id="typeCountry" placeholder='Country' className="form-control form-control-lg" />
                <label className="form-label" for="typeCountry"><span className='error'>{errors.country && <i> Please check the country</i>}</span></label>
              </div>
              <div className="form-outline form-white mb-6">
                <input type="text" {...register("interest",{ required: true })} value={input.interest}  onChange={event=>setInput({...input,interest:event.target.value})}   id="typeInterest" placeholder='Interest' className="form-control form-control-lg" />
                <label className="form-label" for="typeInterest"><span className='error'>{errors.interest && <i> Please check the interest</i>}</span></label>
              </div>
              <div className="form-outline form-white mb-6">
              <select class="form-select form-select-lg mb-3" value={input.source}  onChange={event=>setInput({...input,source:event.target.value})}    aria-label=".form-select-lg example">
                <option selected>Source</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="TikTok">TikTok</option>
                </select>
              </div>
              <div className="form-outline form-white mb-6">
                <input type="text" {...register("remark",{ required: true })} value={input.remark}  onChange={event=>setInput({...input,remark:event.target.value})}   id="typeRemark" placeholder='Remark' className="form-control form-control-lg" />
                <label className="form-label" for="typeRemark"><span className='error'>{errors.remark && <i>Please check the remark</i>}</span></label>
              </div>

              <button className="btn btn-outline-dark btn-lg px-5" type="submit"onClick={handleSubmit(onSubmit)}  >Add</button><br/>
              <button className="btnNew btn-outline-dark btn-lg " type="submit" onClick={()=>goBack()}  >Go Back</button>
            </div>
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

export default RegisterForm;
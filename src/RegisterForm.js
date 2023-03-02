import React from 'react'
import NavBar from './NavBar'

function RegisterForm() {
  return (
    <div className='regMain'>
      <NavBar/>
      <div className='container'>
    <section className="vh-50 gradient-custom">
  <div className="container py-2 h-50">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-grey text-black" style={{borderradius: '1rem'}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-6 mt-md-2 pb-5 ">

              <h2 className="fw-bold mb-2 text-uppercase">NEW LEAD</h2>
              <div className='row g-0'>
              <div className="form-outline form-white mb-6 ">
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected>Status</option>
                <option value="1">New</option>
                <option value="2">Contacted</option>
                <option value="3">Not Intersted</option>
                </select>
              </div>

              <div className="form-outline form-white mb-6 ">
                <input type="text" id="typeName" placeholder='Name' className="form-control form-control-lg" />
                <label className="form-label" for="typeName"></label>
              </div>

              <div className="form-outline form-white mb-6">
                <input type="text" id="typeEmail" placeholder='Email' className="form-control form-control-lg" />
                <label className="form-label" for="typeEmail"></label>
              </div>
              <div className="form-outline form-white mb-6">
                <input type="text" id="typePhone" placeholder='Phone' className="form-control form-control-lg" />
                <label className="form-label" for="typePhone"></label>
              </div>
              <div className="form-outline form-white mb-6">
                <input type="text" id="typeCountry" placeholder='Country' className="form-control form-control-lg" />
                <label className="form-label" for="typeCountry"></label>
              </div>
              <div className="form-outline form-white mb-6">
                <input type="text" id="typeInterest" placeholder='Interest' className="form-control form-control-lg" />
                <label className="form-label" for="typeInterest"></label>
              </div>
              <div className="form-outline form-white mb-6">
              <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected>Source</option>
                <option value="1">Instagram</option>
                <option value="2">Facebook</option>
                <option value="3">TikTok</option>
                </select>
              </div>
              <div className="form-outline form-white mb-6">
                <input type="text" id="typeRemark" placeholder='Remark' className="form-control form-control-lg" />
                <label className="form-label" for="typeRemark"></label>
              </div>

              <button className="btn btn-outline-dark btn-lg px-5" type="submit">Login</button>

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

export default RegisterForm
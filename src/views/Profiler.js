import React from 'React';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Profiler(){
    return(
      <div className="profile">

        <Navbar />

        <form className="profile__form my-5" onSubmit>
          
          <div className="profile__container container my-5 py-5">

            <div className="row justify-content-center">

              <div className="col-md-5">
                <div className="form-group">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    // value={inputs.first_name}
                    // onChange={handleInputChange}
                    className="form-control"
                    name="first_name"
                    id="first_name"
                  />
                </div>
              </div>

              <div className="col-md-5">
                <div className="form-group">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    // value={inputs.last_name}
                    // onChange={handleInputChange}
                    className="form-control"
                    name="last_name"
                    id="last_name"
                  />
                </div>
              </div>

              <div className="col-md-5">
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    // value={inputs.email}
                    // onChange={handleInputChange}
                    className="form-control"
                    name="email"
                    id="email"
                  />
                </div>
              </div>

              <div className="col-md-5">
                <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    // value={inputs.password}
                    // onChange={handleInputChange}
                    className="form-control"
                    name="password"
                    id="password"
                  />
                </div>
              </div>

              <div className="col-md-5">
                <div className="form-group">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    type="password"
                    // value={inputs.password_confirm}
                    // onChange={handleInputChange}
                    className="form-control"
                    name="password_confirm"
                    id="password_confirm"
                  />
                </div>
              </div>

              <div className="col-md-5">
                <div className="form-group">
                  <label htmlFor="">Birth Date (AAAA-MM-DD)</label>
                  <input
                    type="text"
                    // value={inputs.birth_date}
                    // onChange={handleInputChange}
                    className="form-control"
                    name="birth_date"
                    id="birth_date"
                  />
                </div>
              </div>

              <div className="col-md-5">
                <div className="form-group">
                  <label htmlFor="">Gender(F,M,X)</label>
                  <input
                    type="text"
                    // value={inputs.gender}
                    // onChange={handleInputChange}
                    className="form-control"
                    name="gender"
                    id="gender"
                  />
                </div>
              </div>

              <div className="col-md-12 text-center">
                <button type="submit" className="profile__button btn">
                  Edit
                </button>
              </div>

            </div>

          </div>

        </form>

        <Footer/>
        
      </div>
    )
}

export default Profiler;
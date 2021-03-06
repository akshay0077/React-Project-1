import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname:'', phone:'', email:'', msg:''
  })

  const InputEvent = (event) => {
    const {name, value} = event.target
    setData((preVal) =>{
      return {
          ...preVal,
          [name] : value
      }
    })
  }

  const frmSubmit = (e) => {
      e.preventDefault()
      alert(`${data.fullname} ${data.phone} ${data.email} ${data.msg}`)
  }


  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10  mx-auto">
            <form onSubmit={frmSubmit}>
              <div className="mb-3">
                <label for="fullname" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label for="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="mobile number"
                />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="msg" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="msg"
                  name="msg"
                  rows="3"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

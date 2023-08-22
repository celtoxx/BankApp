import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import userService from "../../service/user.service";

const AddEmp = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobNo: "",
    dob: "",
    adharNum: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const register = (e) => {
    e.preventDefault();
    // console.log(user);
    userService
      .registerEmp(user)
      .then(() => {
        sMsg("Account Created Sucessfully..");
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          mobNo: "",
          dob: "",
          adharNum: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
          username: "",
          password: "",
        });
      })
      .catch((error) => {
        if (error.response?.status === 409) {
          eMsg("Email id already exist");
        }
      });
  };

  const sMsg = (msg) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const eMsg = (msg) => {
    toast.error(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <div className="card paint-card m-3">
        <div className="card-header fs-3 text-center">Add Emp</div>
        <div className="card-body">
          <form onSubmit={(e) => register(e)}>
            <div className="row">
              <div className="col mt-3">
                <label for="inputEmail4">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  className="form-control form-control-sm"
                 
                  required
                  onChange={(e) => handleChange(e)}
                  value={user.firstName}
                />
              </div>
              <div className="col mt-3">
                <label for="inputPassword4">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  className="form-control form-control-sm"
                 
                  required
                  onChange={(e) => handleChange(e)}
                  value={user.lastName}
                />
              </div>
              <div className="col mt-3">
                <label for="inputPassword4">User Name</label>
                <input
                  name="username"
                  type="text"
                  className="form-control form-control-sm"
                 
                  required
                  onChange={(e) => handleChange(e)}
                  value={user.username}
                />
              </div>
            </div>
            <div className="row">
              <div className="col mt-3">
                <label for="inputEmail4">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control form-control-sm"
                 
                  required
                  onChange={(e) => handleChange(e)}
                  value={user.password}
                />
              </div>

              <div className="col mt-3">
                <label for="inputEmail4">Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control form-control-sm"
                 
                  required
                  onChange={(e) => handleChange(e)}
                  value={user.email}
                />
              </div>
              <div className="col mt-3">
                <label for="Phonenumber">Phone Number</label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  name="mobNo"
                  required
                  onChange={(e) => handleChange(e)}
                  value={user.mobNo}
                />
              </div>
            </div>

            <div className="row">
              <div className="col mt-3">
                <label for="inputEmail4">DOB</label>
                <input
                  name="dob"
                  type="date"
                  className="form-control form-control-sm"
                 
                  required
                  onChange={(e) => handleChange(e)}
                  value={user.dob}
                />
              </div>
              <div className="col mt-3">
                <label for="inputPassword4">Adhar Number</label>
                <input
                  name="adharNum"
                  type="number"
                  className="form-control form-control-sm"
                  placeholder=""
                  required
                  onChange={(e) => handleChange(e)}
                  value={user.adharNum}
                />
              </div>
            </div>

            <div className="form-group  mt-3">
              <label for="inputAddress">Address</label>
              <textarea
                rows="4"
                cols=""
                name="address"
                className="form-control form-control-sm"
                onChange={(e) => handleChange(e)}
                value={user.address}
              ></textarea>
            </div>

            <div className="row">
              <div className="col  mt-3">
                <label for="inputCity">City</label>
                <input
                  name="city"
                  type="text"
                  className="form-control form-control-sm"
                  required
                  onChange={(e) => handleChange(e)}
                  value={user.city}
                />
              </div>
              <div className="col  mt-3">
                <label for="inputCity">State</label>
                <input
                  name="state"
                  type="text"
                  className="form-control form-control-sm"
                  required
                  onChange={(e) => handleChange(e)}
                  value={user.state}
                />
              </div>
              <div className="col  mt-3">
                <label for="inputZip">Pincode</label>
                <input
                  type="number"
                  required
                  className="form-control form-control-sm"
                  name="pincode"
                  onChange={(e) => handleChange(e)}
                  value={user.pincode}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary  mt-3 col-md-12">
              Register
            </button>
          </form>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default AddEmp;

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import accountService from "../../service/account.service";
import userService from "../../service/user.service";

const EditUserDtls = () => {
  const [user, setUser] = useState({
    id: "",
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
    role: "",
    password: "",
    accStatus: "",
    accountNum: "",
    accBal: "",
    username: "",
  });

  const { id } = useParams();

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    accountService
      .getAccountById(id)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const navigate = useNavigate();
  const updateAccount = (e) => {
    e.preventDefault();
    accountService
      .updateAccount(user)
      .then(() => {
        sMsg("Account Update Sucessfully..");

        setTimeout(() => {
          navigate("/admin/viewAccount/" + user.id);
        }, 3000);
      })
      .catch((error) => {
        //console.log(error);
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
      <div className="card paint-card">
        <div className="card-header fs-3 text-center">Edit Account</div>
        <div className="card-body">
          <form onSubmit={(e) => updateAccount(e)}>
            <div className="row">
              <div className="col mt-3">
                <label for="inputEmail4">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="First Name"
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
                  placeholder="Last Name"
                  required
                  onChange={(e) => handleChange(e)}
                  value={user.lastName}
                />
              </div>
              <div className="col mt-3">
                <label for="inputPassword4">Username</label>
                <input
                  name="username"
                  type="text"
                  className="form-control form-control-sm"
                  required
                  onChange={(e) => handleChange(e)}
                  value={user.username}
                  readOnly
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6 mt-3">
                <label for="inputEmail4">Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control form-control-sm"
                  readOnly
                  required
                  onChange={(e) => handleChange(e)}
                  value={user.email}
                />
              </div>
              <div className="form-group col-md-6 mt-3">
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
              <div className="form-group col-md-6 mt-3">
                <label for="inputEmail4">DOB</label>
                <input
                  name="dob"
                  type="date"
                  className="form-control form-control-sm"
                  placeholder="dd-mm-yyyy"
                  required
                  onChange={(e) => handleChange(e)}
                  value={user.dob}
                />
              </div>
              <div className="form-group col-md-6 mt-3">
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
              <div className="form-group col-md-6  mt-3">
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
              <div className="form-group col-md-4  mt-3">
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
              <div className="form-group col-md-2  mt-3">
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
              Update
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

export default EditUserDtls;

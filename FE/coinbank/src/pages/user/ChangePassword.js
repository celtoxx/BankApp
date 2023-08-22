import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import userService from "../../service/user.service";

const ChangePassword = () => {
  const [change, setChange] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setChange({ ...change, [name]: value });
  };

  const passwordChange = (e) => {
    e.preventDefault();

    userService
      .changePassword(change)
      .then((res) => {
        sMsg(res.data);
        setChange({
          oldPassword: "",
          newPassword: "",
        });
      })
      .catch((error) => {
        eMsg(error.response.data);
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
    <div class="container p-5">
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
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="card">
            <div class="card-header text-center fs-4">Change Password</div>

            <div class="card-body">
              <form onSubmit={(e) => passwordChange(e)}>
                <div class="mb-3">
                  <label>Old Password</label>
                  <input
                    required
                    type="text"
                    name="oldPassword"
                    class="form-control"
                    value={change.oldPassword}
                    onChange={(e) => handleInput(e)}
                  />
                </div>

                <div class="mb-3">
                  <label>New Password</label>{" "}
                  <input
                    required
                    type="text"
                    name="newPassword"
                    class="form-control"
                    value={change.newPassword}
                    onChange={(e) => handleInput(e)}
                  />
                </div>

                <button class="btn btn-primary col-md-12">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;

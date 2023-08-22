import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import accountService from "../../service/account.service";

const ViewAccount = () => {
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
  const navigate = useNavigate();

  const editAcc = (id) => {
    const st = window.confirm("Do You want Edit Account");
    if (st) {
      navigate("/admin/editAccount/" + id);
    }
  };

  return (
    <>
      <div class="card mt-4">
        <div class="card-body">
          {user.accStatus === "Approved" && (
            <div className="text-end">
              <button
                onClick={() => editAcc(user.id)}
                className="btn btn-sm btn-primary"
              >
                Edit
              </button>
            </div>
          )}

          <div class="container d-flex justify-content-center align-items-center">
            <div className="border">
              <img
                alt=""
                src="../../img/pf.png"
                style={{ width: 100, height: 100 }}
              />
            </div>
          </div>

          <form action="">
            <div class="form-group row mt-3">
              <label
                for="colFormLabel"
                class="col-sm-2 offset-sm-1 col-form-label col-form-label"
              >
                Account
              </label>
              <div class="col-sm-3">
                <input
                  type="text"
                  class="form-control form-control"
                  readOnly
                  value={user.accountNum}
                />
              </div>
              <label
                for="colFormLabel"
                class="col-sm-2  col-form-label col-form-label"
              >
                Status
              </label>
              <div class="col-sm-3">
                <input
                  type="email"
                  class="form-control form-control"
                  value={user.accStatus}
                  readOnly
                />
              </div>
            </div>

            <div class="form-group row mt-3">
              <label
                for="colFormLabel"
                class="col-sm-2 offset-sm-1 col-form-label col-form-label"
              >
                Full Name
              </label>
              <div class="col-sm-3">
                <input
                  type="email"
                  class="form-control form-control"
                  value={user.firstName +' '+  user.lastName}
                  readOnly
                />
              </div>

              <label
                for="colFormLabel"
                class="col-sm-2  col-form-label col-form-label"
              >
                Username
              </label>
              <div class="col-sm-3">
                <input
                  type="email"
                  class="form-control form-control"
                  value={user.username}
                  readOnly
                />
              </div>
            </div>

            <div class="form-group row mt-3">
              <label
                for="colFormLabel"
                class="col-sm-2 offset-sm-1 col-form-label col-form-label"
              >
                Email
              </label>
              <div class="col-sm-3">
                <input
                  type="email"
                  class="form-control form-control"
                  value={user.email}
                  readOnly
                />
              </div>

              <label
                for="colFormLabel"
                class="col-sm-2  col-form-label col-form-label"
              >
                Phone No
              </label>
              <div class="col-sm-3">
                <input
                  type="email"
                  class="form-control form-control"
                  value={user.mobNo}
                  readOnly
                />
              </div>
            </div>

            <div class="form-group row mt-3">
              <label
                for="colFormLabel"
                class="col-sm-2 offset-sm-1 col-form-label col-form-label"
              >
                Date Of Birth
              </label>
              <div class="col-sm-3">
                <input
                  type="email"
                  class="form-control form-control"
                  value={user.dob}
                  readOnly
                />
              </div>

              <label
                for="colFormLabel"
                class="col-sm-2  col-form-label col-form-label"
              >
                Aadhar No
              </label>
              <div class="col-sm-3">
                <input
                  type="email"
                  class="form-control form-control"
                  value={user.adharNum}
                  readOnly
                />
              </div>
            </div>

            <div class="form-group row mt-3">
              <label
                for="colFormLabel"
                class="col-sm-2 offset-sm-1 col-form-label col-form-label"
              >
                Address
              </label>
              <div class="col-sm-3">
                <input
                  type="email"
                  class="form-control form-control"
                  value={user.address}
                  readOnly
                />
              </div>

              <label
                for="colFormLabel"
                class="col-sm-2  col-form-label col-form-label"
              >
                City
              </label>
              <div class="col-sm-3">
                <input
                  type="email"
                  class="form-control form-control"
                  value={user.city}
                  readOnly
                />
              </div>
            </div>

            <div class="form-group row mt-3">
              <label
                for="colFormLabel"
                class="col-sm-2 offset-sm-1 col-form-label col-form-label"
              >
                State
              </label>
              <div class="col-sm-3">
                <input
                  type="email"
                  class="form-control form-control"
                  value={user.state}
                  readOnly
                />
              </div>

              <label
                for="colFormLabel"
                class="col-sm-2  col-form-label col-form-label"
              >
                Pincode
              </label>
              <div class="col-sm-3">
                <input
                  type="email"
                  class="form-control form-control"
                  value={user.pincode}
                  readOnly
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ViewAccount;

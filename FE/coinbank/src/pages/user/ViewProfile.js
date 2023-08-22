import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const UViewProfile = () => {
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

  const loginUser = useSelector((state) => state.user);
  const [msg, setMsg] = useState(true);
  if (msg) {
    setUser(loginUser);
    setMsg(false);
  }

  return (
    <Wrapper>
      <div className="container-fluid backimg p-2">
        <div className="row">
          <div className="col-md-12 ">
            <div class="card mt-4">
              <div class="card-body">
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
                        value={user.firstName + " " + user.lastName}
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
          </div>
        </div>
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  .backimg {
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url("../img/bank.png");
    height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
export default UViewProfile;

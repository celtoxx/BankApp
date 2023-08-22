import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import accountService from "../../service/account.service";

const Balance = () => {
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
  useEffect(() => {
    accountService.getAccountById(loginUser.id).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <Wrapper>
      <div class="container-fluid backimg">
        <div class="row p-5">
          <div class="col-md-4 offset-md-4 mt-5">
            <div class="card">
              <div class="card-body">
               
                  <div className="text-center border">
                    <img
                      alt=""
                      src="../img/pf.png"
                      style={{ width: 100, height: 100 }}
                    />
                  </div>
              

                <h5 class="mt-4">Name:{user.firstName+' '+user.lastName}</h5>
                <h5>Account No: {user.accountNum}</h5>
                <h5>
                  Total Balance: <i class="fa-solid fa-indian-rupee-sign"></i> {user.accBal.totalBalance}
                </h5>
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
export default Balance;

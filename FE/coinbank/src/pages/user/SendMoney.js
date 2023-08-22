import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import userService from "../../service/user.service";

const SendMoney = () => {
  const [money, setSendMoney] = useState({
    senderAccountNo: "",
    name: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSendMoney({ ...money, [name]: value });
  };

  const doSendMoney = (e) => {
    e.preventDefault();

    userService
      .sendMoney(money)
      .then((res) => {
        sMsg(res.data);
        setSendMoney({
          senderAccountNo: "",
          name: "",
          amount: "",
        });
      })
      .catch((error) => {
        console.log(error);
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
    <Wrapper>
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
      <div class="container-fluid p-5 backimg">
        <div class="row p-2">
          <div class="col-md-6 offset-md-3">
            <div class="card paint-card">
              <div className="card-header">
                <h4 class="text-center">Send Money</h4>
              </div>
              <div class="card-body">
                <form onSubmit={(e) => doSendMoney(e)}>
                  <div class="form-group">
                    <label for="uname">Account Number:</label>
                    <input
                      type="number"
                      class="form-control"
                      name="senderAccountNo"
                      required
                      onChange={(e) => handleChange(e)}
                      value={money.senderAccountNo}
                    />
                  </div>

                  <div class="form-group mt-3">
                    <label for="uname">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      required
                      onChange={(e) => handleChange(e)}
                      value={money.name}
                    />
                  </div>

                  <div class="form-group mt-3">
                    <label for="pwd">Amount:</label>
                    <input
                      type="number"
                      class="form-control"
                      name="amount"
                      required
                      onChange={(e) => handleChange(e)}
                      value={money.amount}
                    />
                  </div>

                  <div class="text-center mt-3">
                    <button type="submit" class="btn btn-primary col-md-12">
                      Send
                    </button>
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
export default SendMoney;

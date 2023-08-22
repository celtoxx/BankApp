import React, { useEffect, useState } from "react";
import styled from "styled-components";
import userService from "../../service/user.service";

const AllTransaction = () => {
  const [trans, setTrans] = useState([]);

  useEffect(() => {
    userService
      .getAllTrans()
      .then((res) => {
        setTrans(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Wrapper>
      <div class="container-fluid p-3 backimg">
        <div class="row">
          <div class="card">
            <div className="card-header fs-4 text-center">All Transaction</div>
            <div class="card-body">
              <div class="col-md-12">
                <table class="table mt-2 table-bordered">
                  <thead class="bg-primary text-light">
                    <tr>
                      <th scope="col">Sl No</th>
                      <th scope="col">Account No</th>
                      <th scope="col">Credit / Debit</th>
                      <th scope="col">Transaction Details</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trans.map((t, num) => (
                      <tr>
                        <th scope="row">{num + 1}</th>
                        <td>{t.user.accountNum}</td>
                        <td>{t.transType}</td>
                        <td>{t.transDtls}</td>
                        <td>{t.amount}</td>
                        <td>{t.date}</td>
                        <td>{t.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

export default AllTransaction;

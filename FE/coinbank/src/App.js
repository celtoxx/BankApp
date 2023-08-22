import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPageComponent from "./Components/LoginPageComponent";
import SignupForm from "./Components/SignUpForm";
import OTPVerificationForm from "./Components/OTPVerificationForm";
import OneAccountComponent from "./Components/OneAccountComponent";
import CustomerAccountsComponent from "./Components/CustomerAccountComponent";
import Navbar from "./component/Navbar";
import Login from "./pages/Login";
import "react-toastify/dist/ReactToastify.css";
import { MainPage } from "./component/Admin-Navbar/MainPage";
import ForgotPassword from "./pages/ForgotPassword";
import NetBanking from "./pages/NetBanking";
import Signup from "./pages/Signup";
import UnAuthorized from "./pages/UnAuthorized";
import AllTransaction from "./pages/user/AllTransaction";
import Balance from "./pages/user/Balance";
import ChangePassword from "./pages/user/ChangePassword";
import SendMoney from "./pages/user/SendMoney";
import UHome from "./pages/user/UHome";
import UViewProfile from "./pages/user/ViewProfile";
import { AuthGuard } from "./guard/auth.guard";
import PaymentComponent from "./Components/PaymentComponent";
import ManageCustomersComponent from "./Components/ManagerCustomersComponent";
import UpdateCustomerComponent from "./Components/UpdateCustomerComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          {/* <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/401' element={<UnAuthorized />}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword />}></Route> */}
          <Route
            path="/"
            element={<LoginPageComponent></LoginPageComponent>}
          ></Route>
          <Route
            path="/login"
            element={<LoginPageComponent></LoginPageComponent>}
          ></Route>
          <Route
            path="/customers"
            element={<ManageCustomersComponent></ManageCustomersComponent>}
          ></Route>
          <Route
            path="/payment"
            element={<PaymentComponent></PaymentComponent>}
          ></Route>

          <Route
            path="/verifyOtp"
            element={<OTPVerificationForm></OTPVerificationForm>}
          ></Route>
          <Route path="/signup" element={<SignupForm></SignupForm>}></Route>
          <Route path="/register" element={<SignupForm></SignupForm>}></Route>
          <Route
            path="/one-account/:id"
            element={<OneAccountComponent></OneAccountComponent>}
          />

          <Route
            path="/customer-accounts/:id"
            element={<CustomerAccountsComponent></CustomerAccountsComponent>}
          />
           <Route
            path="update-customer/:id"
            element={<UpdateCustomerComponent></UpdateCustomerComponent>}
          />

          <Route path="/user/*">
            //{" "}
            <Route
              path="uhome"
              element={
                <AuthGuard roles={["USER"]}>
                  <UHome />
                </AuthGuard>
              }
            ></Route>
            {/* //           <Route path='allTransaction' element={<AuthGuard roles={['ROLE_USER']}><AllTransaction /></AuthGuard>}></Route>
//           <Route path='balance' element={<AuthGuard roles={['ROLE_USER']}><Balance /></AuthGuard>}></Route>
//           <Route path='changePassword' element={<AuthGuard roles={['ROLE_USER']}><ChangePassword /></AuthGuard>}></Route>
//           <Route path='sendMoney' element={<AuthGuard roles={['ROLE_USER']}><SendMoney /></AuthGuard>}></Route>
//           <Route path='viewProfile' element={<AuthGuard roles={['ROLE_USER']}><UViewProfile /></AuthGuard>}></Route> */}
            //{" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// <Navbar />
//       <Routes>
//         <Route path='/' element={<Index />}></Route>
//         <Route path='/login' element={<Login />}></Route>
//         <Route path='/register' element={<Signup />}></Route>
//         <Route path='/401' element={<UnAuthorized />}></Route>
//         <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
//         <Route path='/netbanking' element={<NetBanking />}></Route>
//         {/* <Route path='/user/applyJob/:id' element={<ApplyJob />}></Route> */}

//         {/* <Route path='/user/*'>
//         <Route path='applyJob/:id' element={<AuthGuard roles={['ROLE_USER']}><ApplyJob /></AuthGuard>} />
//         <Route path='appliedJob' element={<AuthGuard roles={['ROLE_USER']}><AppliedJob /></AuthGuard>} />
//       </Route> */}

//         <Route path='/admin/*' element={
//           <AuthGuard roles={['ROLE_ADMIN']}>
//             <MainPage />
//           </AuthGuard>
//         }> </Route>

//         <Route path='/emp/*' element={
//           <AuthGuard roles={['ROLE_EMP']}>
//             <MainPage />
//           </AuthGuard>
//         }></Route>

//         <Route path='/user/*' >
//           <Route path='uhome' element={<AuthGuard roles={['ROLE_USER']}><UHome /></AuthGuard>}></Route>
//           <Route path='allTransaction' element={<AuthGuard roles={['ROLE_USER']}><AllTransaction /></AuthGuard>}></Route>
//           <Route path='balance' element={<AuthGuard roles={['ROLE_USER']}><Balance /></AuthGuard>}></Route>
//           <Route path='changePassword' element={<AuthGuard roles={['ROLE_USER']}><ChangePassword /></AuthGuard>}></Route>
//           <Route path='sendMoney' element={<AuthGuard roles={['ROLE_USER']}><SendMoney /></AuthGuard>}></Route>
//           <Route path='viewProfile' element={<AuthGuard roles={['ROLE_USER']}><UViewProfile /></AuthGuard>}></Route>
//         </Route>

//       </Routes>

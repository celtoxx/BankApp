// RequestResetComponent.jsx
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../common/constant';import {apiUrl} from '../common/constant';
import axios from 'axios';



function RequestResetComponent() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [otp, setOtp] = useState('');
    const [cnfpassword, setcnfPassword] = useState('');
    const [cnf2password, setcnf2Password] = useState('');
    const [verifiedOTP,setverifiedOTP]=useState(false);
    const [chkotp, setchkOtp] = useState('');
  
    useEffect(() => {
        console.log("in use effect");
        // You can perform actions related to the verifiedOTP state here
      }, [verifiedOTP]);
    const navigate = useNavigate();
    var x=11111111;
    const handleRequestReset = async (e) => {
        e.preventDefault();
        try {
            if (!email)
                alert("Email can not be empty")
            else {
                var response = await axios.post(`${apiUrl}/verifyOtp`, { email });
                console.log(response.data);
                setchkOtp(response.data.otp);
                setMessage('OTP sent to your email.');

            }
        } catch (error) {
            setMessage('Error sending OTP.'+error);
        }
    };

    const verifyotp = () => {
        
        
            if(chkotp===otp)
            {
                setverifiedOTP(true);
                console.log(verifiedOTP);
                alert('Otp verified...');
            }
            else
            {
                alert('Invalid Otp....');
            }
            
        //    console.log(verifiedOTP);
        }
    


   const changePass= async ()=>{


        if(verifiedOTP && (cnfpassword===cnf2password))
        {
            const updatedCustomer = {
                name: 'abc',
                password: cnfpassword,
                email: email
              };
            //setCustomer(updatedCustomer)
            console.log(updatedCustomer);
         var response = await axios.post(`${apiUrl}/changepassword`,  updatedCustomer);
        navigate('/login');
        }

    }



    return (
        <div>
            <h2 align="center">Forgot Password</h2>
            <form align="center">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
                <button type="button" onClick={handleRequestReset}>Send OTP</button>
                <br></br><br></br>
                <input
                    type="text"
                    placeholder="Enter your otp"
                    value={otp}
                    onChange={(e) => {setOtp(e.target.value)}}

                />
                <button type="button" onClick={verifyotp}>Verify OTP</button>
                <br></br><br></br>
                New Password:
                <input type="password" value={cnfpassword} onChange={(e)=>{setcnfPassword(e.target.value)}}/>
                <br></br><br></br>
                Confirm Password:
                <input type="password" value={cnf2password} onChange={(e)=>{setcnf2Password(e.target.value)}} />
                <br></br><br></br>
                <button type="button" onClick={changePass}>Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default RequestResetComponent;

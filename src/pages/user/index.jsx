import { LinearProgress } from "@material-ui/core"
import { useEffect, useState } from "react"
import { withStyles } from '@material-ui/core/styles';
import { API_BASE } from "../../config/constants";
import PhoneInput from "react-phone-input-2";
import SolarCard from '../../components/card/solar'
import YesImage from '../../assets/yes.png'
import NoImage from '../../assets/no.png'

import BillPrice1 from '../../assets/electricbill1.png'
import BillPrice2 from '../../assets/electricbill2.png'
import BillPrice3 from '../../assets/electricbill3.png'
import BillPrice4 from '../../assets/electricbill4.png'

import HomeType1 from '../../assets/hometype1.png'
import HomeType2 from '../../assets/hometype2.png'
import HomeType3 from '../../assets/hometype3.png'

import RoofType1 from '../../assets/rooftype1.png'
import RoofType2 from '../../assets/rooftype2.png'
import RoofType3 from '../../assets/rooftype3.png'
import RoofType4 from '../../assets/rooftype4.png'
import CustomerRating from '../../assets/rating.png'
import Norton from '../../assets/Norton.png'
import ExcitedThing1 from '../../assets/excitedtype1.png'
import ExcitedThing2 from '../../assets/excitedtype2.png'
import ExcitedThing3 from '../../assets/excitedtype3.png'
import ExcitedThing4 from '../../assets/excitedtype4.png'

import Solar1 from '../../assets/solar1.jpg'
import Solar2 from '../../assets/solar2.jpg'
import Solar3 from '../../assets/solar3.jpg'
import Solar4 from '../../assets/solar4.jpg'
import Solar5 from '../../assets/solar5.jpg'
import Solar6 from '../../assets/solar6.jpg'


import 'react-phone-input-2/lib/style.css';
import './style.css'
import axios from "axios";
const BorderLinearProgress = withStyles((theme) => ({
    root: {
      width: '98%',
      height: 20,
      borderRadius: 5,
      marginTop: 25
    },
    colorPrimary: {
      backgroundColor: '#f5f5f5',
    },
    bar: {
      borderRadius: 5,
      backgroundColor: 'rgb(0, 232, 106);',
      backgroundSize: '40px 40px',
      backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)'
    },
  }))(LinearProgress);
export default () => {
    const [progress, setProgress] = useState(7);
    const [ownHome, setOwnHome] = useState(false);
    const [electricBill, setElectricBill] = useState("");
    const [homeType, setHomeType] = useState("");
    const [roofShade, setRoofShade] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [address, setAddress] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [excitedType, setExcitedType] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const solarData = [
        {
            type:"Government Sponsored Solar Panels",
            image: Solar1
        },
        {
            type:"Most Affordable Solar Panels",
            image: Solar2
        },
        {
            type:"Affordable Home Solar",
            image: Solar3
        },
        {
            type:"Solar Panels For Home",
            image: Solar4
        },
        {
            type:"Discound Solar Panels",
            image: Solar5
        },
        {
            type:"Solar Panel Installation",
            image: Solar6
        }
    ]
useEffect(() => {
    if(progress === 100 && !submitted){
        setSubmitted(true);
        setWholeInfomation();

    }
}, [progress])
    const setWholeInfomation = () => {
        const requestData = {ownHome, electricBill, homeType, roofShade, zipcode, address, firstName, lastName, email, phoneNumber, excitedType};
        axios.post(API_BASE + "/client/addclient", requestData)
            .then((result) => {
                if(result.data.message){
                    alert("Successfully Submitted!!!")
                }
            })
            .catch((err) => {
                console.log(JSON.parse(err.request.response).message);
            })
    }
    return(
        <div className="flex flex-col items-center w-full">
             <BorderLinearProgress variant="determinate" value={progress >= 100 ? 100 : progress} />
             <div className="w-full flex flex-col justify-center bg-white border-solid border-[2px] rounded-[10px] border-[#DCDCDC] shadow-sm pt-[8px] pb-[16px] px-[8px] mt-[10px]">
                {
                    progress === 7 &&
                    <div className="px-[10px] py-[20px] text-center">
                        <strong className="text-center font-[700] font-[Poppins] text-[20px] md:text-[30px] ">Take This 30 Second Quiz To Find Out If You Qualify For <u>USA Made Solar Panels</u></strong>
                        <br/>
                        <strong className="text-center font-[700] font-[Poppins] text-[35px] text-[#ff0000]">Do you own your home?</strong>
                        <div className="flex justify-between w-full flex-wrap gap-[15px]">
                            <div className="text-center py-[9px] px-[16px] border-solid border-[1px] border-[#cecece] w-full md:w-[48%] rounded-[5px] cursor-pointer hover:border-[#00ae13] hover:shadow-lg hover:border-opacity-50 hover:bg-green-50" onClick={() => {
                                setOwnHome(true);
                                setProgress(14);
                            }}>
                                <img src={YesImage} alt="yesimage" className="m-auto"/>
                            </div>
                            <div className="text-center py-[9px] px-[16px] border-solid border-[1px] border-[#cecece] w-full md:w-[48%] rounded-[5px] cursor-pointer hover:border-[#00ae13] hover:shadow-lg hover:border-opacity-50 hover:bg-green-50" onClick={() => {
                                setOwnHome(false);
                                setProgress(14);
                            }}>
                                <img src={NoImage} alt="no" className="m-auto"/>
                            </div>
                        </div>
                    </div>
                }
                {
                    progress === 14 && 
                    <div className="px-[10px] py-[20px] text-center">
                        <strong className="text-center font-[700] font-[Poppins] text-[35px] ">How much is your monthly electric bill usually?</strong>
                        <div className="flex justify-between w-full px-[10px] flex-wrap gap-[15px]">
                            <div className="text-center py-[9px] px-[16px] border-solid border-[1px] border-[#cecece] w-full md:w-[23%] rounded-[5px] cursor-pointer hover:border-[#00ae13] hover:shadow-lg hover:border-opacity-50 " onClick={() => {
                                setElectricBill("$0-$75");
                                setProgress(21);
                            }}>
                                <img src={BillPrice1} alt="$0-$75" className="m-auto"/>
                            </div>
                            <div className="text-center py-[9px] px-[16px] border-solid border-[1px] border-[#cecece] w-full md:w-[23%] rounded-[5px] cursor-pointer hover:border-[#00ae13] hover:shadow-lg hover:border-opacity-50 " onClick={() => {
                                setElectricBill("$101-$250");
                                setProgress(21);
                            }}>
                                <img src={BillPrice2} alt="$101-$250" className="m-auto"/>
                            </div>
                            <div className="text-center py-[9px] px-[16px] border-solid border-[1px] border-[#cecece] w-full md:w-[23%] rounded-[5px] cursor-pointer hover:border-[#00ae13] hover:shadow-lg hover:border-opacity-50 " onClick={() => {
                                setElectricBill("$251-$400");
                                setProgress(21);
                            }}>
                                <img src={BillPrice3} alt="$251-$400" className="m-auto"/>
                            </div>
                            <div className="text-center py-[9px] px-[16px] border-solid border-[1px] border-[#cecece] w-full md:w-[23%] rounded-[5px] cursor-pointer hover:border-[#00ae13] hover:shadow-lg hover:border-opacity-50 " onClick={() => {
                                setElectricBill("$401+");
                                setProgress(21);
                            }}>
                                <img src={BillPrice4} alt="$401+" className="m-auto"/>
                            </div>
                        </div>
                    </div>
                }
                {
                    progress === 21 && 
                    <div className="px-[10px] py-[20px] text-center">
                        <strong className="text-center font-[700] font-[Poppins] text-[35px] ">What type of home do you live in?</strong>
                        <div className="flex justify-between w-full px-[10px] flex-wrap gap-[15px]">
                            <div className="text-center py-[9px] px-[16px] border-solid border-[1px] border-[#cecece] w-full md:w-[30%] rounded-[5px] cursor-pointer hover:border-[#00ae13] hover:shadow-lg hover:border-opacity-50 " onClick={() => {
                                setHomeType("singlefamily");
                                setProgress(28);
                            }}>
                                <img src={HomeType1} alt="singlefamily" className="m-auto"/>
                                <span className="text-[#2b1a3e] text-[16px] font-[Poppins]">Single Family</span>
                            </div>
                            <div className="text-center py-[9px] px-[16px] border-solid border-[1px] border-[#cecece] w-full md:w-[30%] rounded-[5px] cursor-pointer hover:border-[#00ae13] hover:shadow-lg hover:border-opacity-50 " onClick={() => {
                                setHomeType("apartment");
                                setProgress(28);
                            }}>
                                <img src={HomeType2} alt="apartment" className="m-auto"/>
                                <span className="text-[#2b1a3e] text-[16px] font-[Poppins]">Apartment</span>
                            </div>
                            <div className="text-center py-[9px] px-[16px] border-solid border-[1px] border-[#cecece] w-full md:w-[30%] rounded-[5px] cursor-pointer hover:border-[#00ae13] hover:shadow-lg hover:border-opacity-50 " onClick={() => {
                                setHomeType("other");
                                setProgress(28);
                            }}>
                                <img src={HomeType3} alt="other" className="m-auto"/>
                                <span className="text-[#2b1a3e] text-[16px] font-[Poppins]">Other</span>
                            </div>
                        </div>
                    </div>
                }
                {
                    progress === 28 && 
                    <div className="px-[10px] py-[20px] text-center">
                        <strong className="text-center font-[700] font-[Poppins] text-[35px] ">Is your roof shaded by trees?</strong>
                        <div className="flex justify-between w-full px-[10px] flex-wrap gap-[15px]">
                            <div className="text-center py-[9px] px-[16px] border-solid border-[1px] border-[#cecece] w-full md:w-[23%] rounded-[5px] cursor-pointer hover:border-[#00ae13] hover:shadow-lg hover:border-opacity-50 " onClick={() => {
                                setRoofShade("fullsun");
                                setProgress(36);
                            }}>
                                <img src={RoofType1} alt="fullsun" className="m-auto"/>
                                <span className="text-[#2b1a3e] text-[16px] font-[Poppins]">Full Sun</span>
                            </div>
                            <div className="text-center py-[9px] px-[16px] border-solid border-[1px] border-[#cecece] w-full md:w-[23%] rounded-[5px] cursor-pointer hover:border-[#00ae13] hover:shadow-lg hover:border-opacity-50 " onClick={() => {
                                setRoofShade("partialsun");
                                setProgress(36);
                            }}>
                                <img src={RoofType2} alt="partialsun" className="m-auto"/>
                                <span className="text-[#2b1a3e] text-[16px] font-[Poppins]">Partial Sun</span>
                            </div>
                            <div className="text-center py-[9px] px-[16px] border-solid border-[1px] border-[#cecece] w-full md:w-[23%] rounded-[5px] cursor-pointer hover:border-[#00ae13] hover:shadow-lg hover:border-opacity-50 " onClick={() => {
                                setRoofShade("alotofshade");
                                setProgress(36);
                            }}>
                                <img src={RoofType3} alt="alotofshade" className="m-auto"/>
                                <span className="text-[#2b1a3e] text-[16px] font-[Poppins]">A Lot Of Shade</span>
                            </div>
                            <div className="text-center py-[9px] px-[16px] border-solid border-[1px] border-[#cecece] w-full md:w-[23%] rounded-[5px] cursor-pointer hover:border-[#00ae13] hover:shadow-lg hover:border-opacity-50 " onClick={() => {
                                setRoofShade("notsure");
                                setProgress(36);
                            }}>
                                <img src={RoofType4} alt="notsure" className="m-auto"/>
                                <span className="text-[#2b1a3e] text-[16px] font-[Poppins]">Not Sure</span>
                            </div>
                        </div>
                    </div>
                }
               {
                    progress === 36 &&
                    <div className="px-[10px] py-[20px] text-center">
                        <strong className="text-center font-[700] font-[Poppins] text-[35px] ">Enter your Zip Code</strong>
                        <h4 className="font-[Arial] font-[500] text-center text-[18px]">See if you live in an approved area</h4>
                        <input
                            type="text"
                            className="font-[Poppins] form-control block w-full p-[15px] text-[16px] font-normal text-gray-700 bg-white bg-clip-padding border-solid border-[#c0b1c2] border-[2px] rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none leading-[1.3em] mt-[35px]"
                            id="zipcode"
                            value={zipcode}
                            onChange={(e)=>{setZipcode(e.target.value)}}
                            placeholder="Zip Code"
                        />
                        <div className="text-[#777] text-[10px] cursor-pointer font-[Poppins] mt-[10px] md:mt-[0px]">Examples: 90210</div>
                        <button className={"mt-[20px] bg-[#00AC2C] font-[800] text-[16px] text-[#FFFFFF] py-[10px] px-[30px] rounded-[10px] shadow-[4px_5px_0px_rgb(0,0,0,0.16)] hover:border-solid hover:border-[1px] hover:border-[#FF0000] "+ ((zipcode.length === 5 && parseInt(zipcode) == zipcode) ? 'cursor-pointer' : 'cursor-not-allowed opacity-50')}  disabled={!(zipcode.length ===5 && parseInt(zipcode) == zipcode)} onClick={()=>{setProgress(57);}}>NEXT</button>
                    </div>
               }
                {
                    progress === 57 &&
                    <div className="px-[10px] py-[20px] text-center">
                        <strong className="text-center font-[700] font-[Poppins] text-[35px] ">Enter Your Street Address</strong>
                        <h4 className="font-[Arial] font-[500] text-center text-[16px] md:ext-[18px]">We will use satellite imagery to assess your roof's sunlight and if you're a potential candidate for the program</h4>
                        <input
                            type="text"
                            className="font-[Poppins] form-control block w-full p-[15px] text-[16px] font-normal text-gray-700 bg-white bg-clip-padding border-solid border-[#c0b1c2] border-[2px] rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none leading-[1.3em] mt-[15px]"
                            id="address"
                            value={address}
                            onChange={(e)=>{setAddress(e.target.value)}}
                            placeholder="Your Address"
                        />
                        <button className={"mt-[20px] bg-[#00AC2C] font-[800] text-[16px] text-[#FFFFFF] py-[10px] px-[30px] rounded-[10px] shadow-[4px_5px_0px_rgb(0,0,0,0.16)] hover:border-solid hover:border-[1px] hover:border-[#FF0000] "+ (address.length ? 'cursor-pointer' : 'cursor-not-allowed opacity-50')} disabled={!address.length} onClick={()=>{setProgress(64);}}>NEXT</button>
                    </div>
               }
                {
                    progress === 64 &&
                    <div className="px-[10px] py-[20px] text-center">
                        <strong className="text-center font-[700] font-[Poppins] text-[35px] ">Enter Your Name</strong>
                        <input
                            type="text"
                            className="font-[Poppins] form-control block w-full p-[15px] text-[16px] font-normal text-gray-700 bg-white bg-clip-padding border-solid border-[#c0b1c2] border-[2px] rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none leading-[1.3em] mt-[15px]"
                            id="firtname"
                            value={firstName}
                            onChange={(e)=>{setFirstName(e.target.value)}}
                            placeholder="First Name"
                        />
                       <input
                            type="text"
                            className="font-[Poppins] form-control block w-full p-[15px] text-[16px] font-normal text-gray-700 bg-white bg-clip-padding border-solid border-[#c0b1c2] border-[2px] rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none leading-[1.3em] mt-[15px]"
                            id="lastname"
                            value={lastName}
                            onChange={(e)=>{setLastName(e.target.value)}}
                            placeholder="Last Name"
                        />
                        <button className={"mt-[20px] bg-[#00AC2C] font-[800] text-[16px] text-[#FFFFFF] py-[10px] px-[30px] rounded-[10px] shadow-[4px_5px_0px_rgb(0,0,0,0.16)] hover:border-solid hover:border-[1px] hover:border-[#FF0000] "+ ((firstName && lastName) ? 'cursor-pointer' : 'cursor-not-allowed opacity-50 ')} disabled={!(firstName && lastName)} onClick={()=>{setProgress(71);}}>NEXT</button>
                        <img src={Norton} alt="norton" className="w-[100px] h-[54px] m-auto mt-[15px]"></img>
                    </div>
               }
                {
                    progress === 71 &&
                    <div className="px-[10px] py-[20px] text-center">
                        <strong className="text-center font-[700] font-[Poppins] text-[35px] ">Enter Your Email ?</strong>
                        <h4 className="font-[Arial] font-[500] text-center text-[16px] md:text-[18px]">We take privacy seriously. No spam!</h4>
                        <input
                            type="text"
                            className="font-[Poppins] form-control block w-full p-[15px] text-[16px] font-normal text-gray-700 bg-white bg-clip-padding border-solid border-[#c0b1c2] border-[2px] rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none leading-[1.3em] mt-[15px]"
                            id="email"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            placeholder="Enter Email Address"
                        />
                        <button className={"mt-[20px] bg-[#00AC2C] font-[800] text-[16px] text-[#FFFFFF] py-[10px] px-[30px] rounded-[10px] shadow-[4px_5px_0px_rgb(0,0,0,0.16)] hover:border-solid hover:border-[1px] hover:border-[#FF0000] "+ (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'cursor-pointer' : 'cursor-not-allowed opacity-50')} disabled={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)} onClick={()=>{setProgress(79);}}>NEXT</button>
                    </div>
               }
               {
                    progress === 79 &&
                    <div className="px-[10px] py-[20px] text-center">
                        <strong className="text-center font-[700] font-[Poppins] text-[35px] ">Verify Your Phone</strong>
                        <h4 className="font-[Arial] font-[500] text-center text-[18px]">Great, this is the last step in finding out if you qualify!</h4>
                        <PhoneInput 
                        country={'us'}
                        value={phoneNumber}
                        className="border-solid border-[2px] border-[#c0b1b2] rounded-[15px] h-[54px] w-full font-[Poppins] text-[16px] "
                        inputStyle={
                            {
                                 border: 'none',
                                 width: '95%',
                                 height: '100%'
                            }
                        }
                        onChange={(e)=>{setPhoneNumber(e)}}
                        placeholder="Phone Number"
                        />
                        <button className={"mt-[20px] bg-[#00AC2C] font-[800] text-[16px] text-[#FFFFFF] py-[10px] px-[30px] rounded-[10px] shadow-[4px_5px_0px_rgb(0,0,0,0.16)] hover:border-solid hover:border-[1px] hover:border-[#FF0000] "+ (/^\+?\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phoneNumber) ? 'cursor-pointer' : 'cursor-not-allowed opacity-50')} disabled={!/^\+?\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phoneNumber) } onClick={()=>{setProgress(93);}}>SUBMIT</button>
                        <div className="mt-[50px]">
                            <em className="text-[#999999] text-[12px]">
                                <span>By clicking the “SUBMIT” button, you authorize US Solar Savings and up to
                                </span>
                                <strong>
                                    <span>&nbsp;4 &nbsp;
                                    </span>
                                    <a href="http://news.magreno.com/partners">
                                        <span>
                                            <u>Home Services</u>
                                            &nbsp;/&nbsp;
                                            <u>Solar Partners</u>
                                        </span>
                                    </a>
                                </strong>
                                <span>
                                    &nbsp;to call you and send you pre-recorded messages and text message at the number
                                    you entered above, using an autodialer, with offers about their products or
                                    services, even if your phone number is on any national or state “Do Not Call”
                                    list. Message and data rates may apply. Your consent here is not based on a
                                    condition of purchase.
                                </span>
                                <strong>
                                    <a href="http://news.magreno.com/terms-of-service">
                                        <span>
                                            <u>Terms &amp; Conditions</u>
                                        </span>
                                    </a>
                                    <span>
                                    &nbsp;&amp;&nbsp;
                                    </span>
                                    <u>
                                        <a href="https://news.magreno.com/privacy-policy">
                                            <span>Privacy</span>
                                        </a>
                                    </u>
                                </strong>
                            </em>
                        </div>
                      
                        <img src={CustomerRating} alt="customer review rating" className="w-[240px] h-[144px] m-auto mt-[15px]"></img>
                    </div>
               }
                {
                    progress === 93 && 
                    <div className="px-[10px] py-[20px] text-center">
                        <strong className="text-center font-[700] font-[Poppins] text-[35px] ">What are you most excited for?</strong>
                        <div className="flex justify-between w-full px-[10px] flex-wrap gap-[15px]">
                            <div className="text-center py-[9px] px-[16px] border-solid border-[1px] border-[#cecece] w-full md:w-[23%] rounded-[5px] cursor-pointer hover:border-[#00ae13] hover:shadow-lg hover:border-opacity-50 " onClick={() => {
                                setExcitedType("reducing monthly bills");
                                setProgress(100);
                            }}>
                                <img src={ExcitedThing1} alt="reducing monthly bills" className="m-auto"/>
                                <span className="text-[#2b1a3e] text-[16px] font-[Poppins]">Reducing Monthly Bills</span>
                            </div>
                            <div className="text-center py-[9px] px-[16px] border-solid border-[1px] border-[#cecece] w-full md:w-[23%] rounded-[5px] cursor-pointer hover:border-[#00ae13] hover:shadow-lg hover:border-opacity-50 " onClick={() => {
                                setExcitedType("saving the environment");
                                setProgress(100);
                            }}>
                                <img src={ExcitedThing2} alt="saving the environment" className="m-auto"/>
                                <span className="text-[#2b1a3e] text-[16px] font-[Poppins]">Saving The Environment</span>
                            </div>
                            <div className="text-center py-[9px] px-[16px] border-solid border-[1px] border-[#cecece] w-full md:w-[23%] rounded-[5px] cursor-pointer hover:border-[#00ae13] hover:shadow-lg hover:border-opacity-50 " onClick={() => {
                                setExcitedType("helping the us economy");
                                setProgress(100);
                            }}>
                                <img src={ExcitedThing3} alt="helping the us economy" className="m-auto"/>
                                <span className="text-[#2b1a3e] text-[16px] font-[Poppins]">Helping the US Economy</span>
                            </div>
                            <div className="text-center py-[9px] px-[16px] border-solid border-[1px] border-[#cecece] w-full md:w-[23%] rounded-[5px] cursor-pointer hover:border-[#00ae13] hover:shadow-lg hover:border-opacity-50 " onClick={() => {
                                setExcitedType("increasing your homes value");
                                setProgress(100);
                            }}>
                                <img src={ExcitedThing4} alt="increasing your homes value" className="m-auto"/>
                                <span className="text-[#2b1a3e] text-[16px] font-[Poppins]">Increasing Your Homes Value</span>
                            </div>
                        </div>
                    </div>
                }
                {
                    progress === 100 && 
                    <div className="px-[10px] py-[20px] text-center">
                        <strong className="text-center font-[700] font-[Poppins] text-[25px] sm:text-[35px]  leading-[30px]">YOUR REQUEST FOR <span className="text-[#e74c3c]">MONTLY SAVINGS</span> WITH <span className="text-[#e74c3c]">SOLAR PANELS</span> HAS BEEN SUCCESSFULLY RECEIVED!</strong>
                        <div className=" text-left mt-[50px] font-[Arial]">
                            <div className="font-[700] text-black text-[18px] md:text-[24px]">1. Congratulations!</div>
                                <div className="text-[12px] text-[#0c050d]">
                                    You are one step closer to saving on your monthly bills. One of our courteous experts will confirm your information and review your eligibility very shortly with a quick 30 second call.
                                </div>
                        </div>
                        <div className=" text-left  mt-[20px] font-[Arial]">
                            <div className="font-[700] text-black text-[18px] md:text-[24px]">2. Answer Your Phone!</div>
                                <div className="text-[12px] text-[#0c050d]">
                                We do not make high-pressure sales calls - our main goal is to help you lower your electric bill. We've matched you with local experts to learn about your situation, so get ready.
                                </div>
                        </div>
                        <div className=" text-left  mt-[20px] font-[Arial]">
                            <div className="font-[700] text-black text-[18px] md:text-[24px]">3. Grab A Pen!</div>
                                <div className="text-[12px] text-[#0c050d]">
                                You're moments away from a complete savings & cost breakdown. When our professionals call, make sure to write down their quotes so you can make sure you have all the answers.
                                </div>
                        </div>
                    </div>
                }
                {
                    progress === 200 && 
                    <div className="px-[10px] py-[20px] text-center">
                        <strong className="text-center font-[700] font-[Poppins] text-[24px] ">You're one step closer to saving every month!</strong>
                        <div className="font-[Poppins] text-[12px] text-left mt-[50px] mb-[10px]">Related Topics (Ads)</div>
                        <div className="flex justify-between w-full px-[10px] flex-wrap gap-[15px]">
                            {
                                solarData.map((item, index) => {
                                    return(
                                        <SolarCard index={index} item={item}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
             </div>
        </div>
    )
}
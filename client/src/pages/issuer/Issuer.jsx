import { useState, useEffect } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useModal } from "../../utils/ModalContext";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import Layout from "../../common/layout";
import Header from "../../components/section/header/v1";
import WalletModal from "../../common/modal/walletModal/WalletModal";
import MetamaskModal from "../../common/modal/metamaskModal/MetamaskModal";
import ConnectWallet from "../../common/modal/metamask/ConnectWallet";
import Axios from "axios";
import { CountryDropdown} from 'react-country-region-selector';

import StyleWrapper from "./StyleWrapper";
import { computeSegDraggable } from "@fullcalendar/react";
// import { isPromise } from "util/types";

const Issuer = () => {
    const [isCollapse, setCollapse] = useState(true);
    const {
        walletModalvisibility,
        metamaskModalVisibility,
        connectWalletModal,
    } = useModal();

    const handleCollapse = () => {
        setCollapse(!isCollapse);
    };

    useEffect(() => {
        const listItems = document.querySelectorAll(".slick-dots li");
        for (let i = 0; i <= listItems.length - 1; i++) {
            listItems[i].addEventListener("click", (e) => {
                setCollapse(!isCollapse);
            });
        }
    }, [isCollapse]);

    const [country, setCountry] = useState("")
    
    const [dob, setDOB] = useState('')
    const [gender, setGender] = useState('')
    const [id_passport, setID_Passport] = useState('')
    const [physicaladress, setPhysicaladress] = useState('')
    const [vaccine_id, setVaccineID] = useState('')
    const [firstname, setFirstname] = useState('')
    const [surname, setSurname] = useState('')
    const [cellphone, setCellphone] = useState('')
    const [email, setEmail] = useState('')

    const setFirstnameAsText = ()  =>{
        document.getElementById("firstname").innerHTML=firstname;
    }
    const [data,setData] =useState([])
    const newEntry = async()=>{
        console.log("Gender: "+gender)
        console.log("Gender: "+physicaladress)
        console.log("Gender: "+dob)
        console.log("New Entry engaged...")
        Axios.post("http://localhost:3001/api/new_entry",{
        id_passport:id_passport,
        gender:gender,
        dob:dob,
        country:country,
        physicaladress:physicaladress,
        vaccine_id:vaccine_id
        }).then((resp)=>{
        alert(resp.data)
        })
    }
    const findByIDPassport = ()=>{
        console.log("Find IDPassport engaged..." +id_passport)
        Axios.post("http://localhost:3001/api/list_specific_user",{
        id_passport:id_passport,
        }).then((response)=>{
            if(response.status !== 204){
                setData(response.data[0])
                setFirstname(data.firstname)
                setSurname(data.surname)
                setCellphone(data.cellphone)
                setEmail(data.email)

                console.log(firstname)
                console.log(surname)
                console.log(cellphone)
                console.log(email)
            }
            else{
                throw new Error(response.data.errorMessage)
            }
        })
     

    }

    return (
        <>
            <Layout>
            <GlobalStyles />
            {walletModalvisibility && <WalletModal />}
            {metamaskModalVisibility && <MetamaskModal/> }
            {connectWalletModal && <ConnectWallet/> }
            <Header />
            <StyleWrapper>
                <div className="content-body">
                    <div className="container-fluid">
                        <div
                            className="form-head d-flex align-items-center justify-content-center pt-3 pb-3 mb-sm-4 mb-3 bg-primary">
                            <h2 className="text-white font-w600 text-center">{"Issuer - Vaccination Management Subsystem"}</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="row">
                                    <div
                                        className="col-xl-12 d-flex flex-column justify-content-between align-content-center">
                                        <button type="button" className="btn btn-primary full-width mb-4">New Entry
                                        </button>
                                        <button type="button" className="btn btn-primary full-width mb-4">Administer
                                            Vaccine
                                        </button>
                                        <button type="button" className="btn btn-primary full-width mb-4">Issuer
                                            Credentials
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="card appointment-schedule">
                                            <div className="card-header pb-0 border-0">
                                                <h3 className="fs-20 text-black mb-0">Check Vaccination Status</h3>
                                            </div>

                                            <div className="card-body">
                                                <div className="basic-form">
                                                    <form>
                                                        <div className="form-group row">
                                                            <label
                                                                className="col-sm-3 col-form-label">ID/Passport</label>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control"
                                                                       placeholder="Enter you ID or passport number"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            {/*Button trigger modal*/}
                                                            <button type="button"
                                                                    className="btn btn-primary full-width mb-4"
                                                                    data-toggle="modal" data-target="#confirmInfo">Run
                                                                Check
                                                            </button>
                                                            {/*Modal*/}
                                                            <div className="modal fade" id="confirmInfo">
                                                                <div className="modal-dialog modal-dialog-centered"
                                                                     role="document">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <h5 className="modal-title">Confirm
                                                                                Information</h5>
                                                                            <button type="button" className="close"
                                                                                    data-dismiss="modal">
                                                                                <span>&times;</span>
                                                                            </button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <p>Confirm if this is you</p>
                                                                            <p>Firstname:</p>
                                                                            <p>Surnname:</p>
                                                                        </div>
                                                                        <div className="modal-footer">
                                                                            <button type="button"
                                                                                    className="btn btn-danger light"
                                                                                    data-dismiss="modal">Close
                                                                            </button>
                                                                            <button type="button"
                                                                                    className="btn btn-primary">Confirm
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="modal fade none-border" id="event-modal"> */}
                                        <div className="none" id="event-modal">
                                            <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                <h4 className="modal-title"><strong>New Entry</strong></h4>
                                                </div>
                                                {/*<div className="modal-body"></div>*/}

                                                <div className="card mb-0">
                                                <div className="card-body">
                                                    <div className="basic-form">
                                                    <form>
                                                        <div className="form-group row">
                                                            <label className="col-sm-3 col-form-label">ID/Passport</label>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control" 
                                                                placeholder="Enter the ID or passport number" 
                                                                name="id_passport"
                                                                required
                                                                onChange={(e)=>{setID_Passport(e.target.value)}}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-3 col-form-label">First Name</label>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control" 
                                                                name="firstname"
                                                                id={firstname}
                                                                readOnly={true}
                                                                defaultValue={firstname}
                                                            />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-3 col-form-label">Surname</label>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control" 
                                                                name="surname"
                                                                id="surname"
                                                                readOnly={true}
                                                                defaultValue={surname}
                                                            />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-3 col-form-label">Gender</label>
                                                            <div className="col-sm-9">
                                                                <select onChange={(e) =>{setGender(e.target.value)}}>
                                                                    {/* <option label="Select Gender" defaultValue={"Select Gender"}/> */}
                                                                    <option label="Male" value={"M"}/>
                                                                    <option label="Female" value={"F"}/>
                                                                    
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-3 col-form-label">Date of Birth</label>
                                                            <div className="col-sm-9">
                                                                <input type="date" className="form-control" 
                                                                    placeholder="Enter your phone number" 
                                                                    name="dob"
                                                                    value={dob}
                                                                    onChange={(e)=>{setDOB(e.target.value)}}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-3 col-form-label">Country of Birth</label>
                                                            <div className="col-sm-9">
                                                               <CountryDropdown
                                                                    value={country}
                                                                    onChange={(e)=>{setCountry(e)}}
                                                                    label={country}
                                                               />
                                                               
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="form-group row">
                                                            <label className="col-sm-3 col-form-label">Cellphone</label>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control" 
                                                                name="cellphone"
                                                                readOnly={true}
                                                                defaultValue={cellphone}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-3 col-form-label">Email</label>
                                                            <div className="col-sm-9">
                                                                <input type="email" className="form-control" 
                                                                name="email"
                                                                readOnly={true}
                                                                defaultValue={email}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-3 col-form-label">Physical Address</label>
                                                            <div className="col-sm-9">
                                                                <input type="email" className="form-control" 
                                                                placeholder="Enter your physical address" 
                                                                name="physicalAddress"
                                                                onChange={(e)=>{setPhysicaladress(e.target.value)}}
                                                                // value={physicaladress}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-3 col-form-label">Select Vaccine</label>
                                                            <div className="col-sm-9">
                                                                <select>
                                                                    {/* <option label="Select a vaccine" defaultValue={"Select a vaccine"}/> */}
                                                                    <option label="Pfizer" value={"VC00001"}
                                                                        onChange={(e) =>{setVaccineID(e.target.value)}}
                                                                    />
                                                                    
                                                                    
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    </div>
                                                </div>
                                                </div>

                                                <div className="modal-footer">
                                                <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                                                <button type="button" 
                                                    className="btn bg-success find-event waves-effect waves-light text-white" 
                                                    data-dismiss="modal"
                                                    onClick={(e)=>{
                                                        if(id_passport !== ""){
                                                            findByIDPassport();
                                                        }
                                                        
                                                    }}
                                                >
                                                    Find & Populate</button>
                                                <button type="button" 
                                                    className="btn bg-primary save-event waves-effect waves-light text-white"
                                                    onClick={newEntry}
                                                >Save</button>

                                                <button type="button" className="btn btn-danger delete-event waves-effect waves-light" data-dismiss="modal">Delete</button>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collapse_icon">
                <span onClick={() => handleCollapse()}>
                  {isCollapse ? <BsChevronUp /> : <BsChevronDown />}
                </span>
                </div>
            </StyleWrapper>
            </Layout>
        </>
    );
};

export default Issuer;

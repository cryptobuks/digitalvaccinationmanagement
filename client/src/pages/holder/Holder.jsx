import { useState, useEffect } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useModal } from "../../utils/ModalContext";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import Layout from "../../common/layout";
import Header from "../../components/section/header/v1";
import WalletModal from "../../common/modal/walletModal/WalletModal";
import MetamaskModal from "../../common/modal/metamaskModal/MetamaskModal";
import ConnectWallet from "../../common/modal/metamask/ConnectWallet";
import StyleWrapper from "./StyleWrapper";
import Calendar from "../../components/section/calendar";

const Holder = () => {
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
                <div className="form-head d-flex align-items-center justify-content-center pt-3 pb-3 mb-sm-4 mb-3 bg-primary">
                  <h2 className="text-white font-w600 text-center">{"Holder - Vaccination Management Subsystem"}</h2>
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="card">
                          <div className="card-header d-sm-flex d-block pb-0 border-0">
                            <div className="mr-auto pr-3">
                              <h4 className="text-black fs-20 mb-0">Vaccination Percentage</h4>
                            </div>
                            <div className="card-action card-tabs mt-3 mt-sm-0 mt-3 mb-sm-0 mb-3 mt-sm-0">
                              <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                  <a className="nav-link active" data-toggle="tab" href="#Daily" role="tab">
                                    Daily
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" data-toggle="tab" href="#Weekly" role="tab">
                                    Weekly
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" data-toggle="tab" href="#Monthly" role="tab">
                                    Monthly
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="tab-content">
                              <div className="tab-pane fade show active" id="Daily" role="tabpanel">
                                <div className="d-flex flex-wrap align-items-center px-4 bg-light">
                                  <div className="mr-auto d-flex align-items-center py-3">
                                                                  <span className="heart-ai bg-primary mr-3">
                                                                      <i className="fa fa-heart-o" aria-hidden="true"/>
                                                                  </span>
                                    <div>
                                      <p className="fs-18 mb-2">Total Vaccinations</p>
                                      <span className="fs-26 text-primary font-w600">562,084</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="row align-items-center">
                                  <div className="col-xl-6 col-xxl-12 col-md-6">
                                    <div id="radialBar"/>
                                  </div>
                                  <div className="col-xl-6 col-xxl-12 col-md-6">
                                    <div className="d-flex mb-4 align-items-center">
                                              <span className="mr-auto pr-3 font-w500 fs-30 text-black">
                                                  <svg className="mr-3" width="8" height="30" viewBox="0 0 8 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <rect width="7.65957" height="30" fill="#BDA25C"/>
                                                  </svg>
                                                  64%
                                              </span>
                                      <span>Registered</span>
                                    </div>
                                    <div className="d-flex  mb-4 align-items-center">
                                                                      <span className="mr-auto pr-3 font-w500 fs-30 text-black">
                                                                          <svg className="mr-3" width="8" height="30" viewBox="0 0 8 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                              <rect width="7.65957" height="30" fill="#209F84"/>
                                                                          </svg>
                                                                          73%
                                                                      </span>
                                      <span>Issued</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                                                      <span className="mr-auto pr-3 font-w500 fs-30 text-black">
                                                                          <svg className="mr-3" width="8" height="30" viewBox="0 0 8 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                              <rect width="7.65957" height="30" fill="#323232"/>
                                                                          </svg>
                                                                          48%
                                                                      </span>
                                      <span>Pending</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="Weekly" role="tabpanel">
                                <div className="d-flex flex-wrap align-items-center px-4  bg-light">
                                  <div className="mr-auto py-3 d-flex align-items-center">
                                                                  <span className="heart-ai bg-primary mr-3">
                                                                      <i className="fa fa-heart-o" aria-hidden="true"/>
                                                                  </span>
                                    <div>
                                      <p className="fs-18 mb-2">Total Vaccinations</p>
                                      <span className="fs-26 text-primary font-w600">786,360</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="row align-items-center">
                                  <div className="col-xl-6 col-xxl-12 col-md-6">
                                    <div id="radialBar2"/>
                                  </div>
                                  <div className="col-xl-6 col-xxl-12 col-md-6">
                                    <div className="d-flex mb-4 align-items-center">
                                                                      <span className="mr-auto pr-3 font-w500 fs-30 text-black">
                                                                          <svg className="mr-3" width="8" height="30" viewBox="0 0 8 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                              <rect width="7.65957" height="30" fill="#BDA25C"/>
                                                                          </svg>
                                                                          40%
                                                                      </span>
                                      <span>Registered</span>
                                    </div>
                                    <div className="d-flex  mb-4 align-items-center">
                                                                      <span className="mr-auto pr-3 font-w500 fs-30 text-black">
                                                                          <svg className="mr-3" width="8" height="30" viewBox="0 0 8 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                              <rect width="7.65957" height="30" fill="#209F84"/>
                                                                          </svg>
                                                                          81%
                                                                      </span>
                                      <span>Issued</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                                                      <span className="mr-auto pr-3 font-w500 fs-30 text-black">
                                                                          <svg className="mr-3" width="8" height="30" viewBox="0 0 8 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                              <rect width="7.65957" height="30" fill="#323232"/>
                                                                          </svg>
                                                                          50%
                                                                      </span>
                                      <span>Pending</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="Monthly" role="tabpanel">
                                <div className="d-flex flex-wrap align-items-center px-4  bg-light">
                                  <div className="mr-auto py-3 d-flex align-items-center">
                                                                  <span className="heart-ai bg-primary mr-3">
                                                                      <i className="fa fa-heart-o" aria-hidden="true"/>
                                                                  </span>
                                    <div>
                                      <p className="fs-18 mb-2">Total Vaccinations</p>
                                      <span className="fs-26 text-primary font-w600">356,730</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="row align-items-center">
                                  <div className="col-xl-6 col-xxl-12 col-md-6">
                                    <div id="radialBar3"/>
                                  </div>
                                  <div className="col-xl-6 col-xxl-12 col-md-6">
                                    <div className="d-flex mb-4 align-items-center">
                                                                      <span className="mr-auto pr-3 font-w500 fs-30 text-black">
                                                                          <svg className="mr-3" width="8" height="30" viewBox="0 0 8 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                              <rect width="7.65957" height="30" fill="#BDA25C"/>
                                                                          </svg>
                                                                          90%
                                                                      </span>
                                      <span>Registered</span>
                                    </div>
                                    <div className="d-flex  mb-4 align-items-center">
                                                                      <span className="mr-auto pr-3 font-w500 fs-30 text-black">
                                                                          <svg className="mr-3" width="8" height="30" viewBox="0 0 8 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                              <rect width="7.65957" height="30" fill="#209F84"/>
                                                                          </svg>
                                                                          75%
                                                                      </span>
                                      <span>Issued</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                                                      <span className="mr-auto pr-3 font-w500 fs-30 text-black">
                                                                          <svg className="mr-3" width="8" height="30" viewBox="0 0 8 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                              <rect width="7.65957" height="30" fill="#323232"/>
                                                                          </svg>
                                                                          30%
                                                                      </span>
                                      <span>Pending</span>
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
                  <div className="col-xl-6">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="card appointment-schedule">
                          <div className="card-header pb-0 border-0">
                            <h3 className="fs-20 text-black mb-0">Registration</h3>
                            <p className="mb-0">Select date by clicking in the calendar to make an appointment</p>
                          </div>
                          <div className="card-body">
                            <div id="calendar" className="app-fullcalendar">
                              <Calendar/>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*BEGIN MODAL*/}
                      <div className="modal fade none-border" id="event-modal">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h4 className="modal-title"><strong>Make Appointment</strong></h4>
                            </div>
                            {/*<div className="modal-body"></div>*/}

                            <div className="card mb-0">
                              <div className="card-body">
                                <div className="basic-form">
                                  <form>
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">First Name</label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" placeholder="Enter your first name"/>
                                      </div>
                                    </div>
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">Surname</label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" placeholder="Enter your surname" />
                                      </div>
                                    </div>
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">ID/Passport</label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" placeholder="Enter you ID or passport number" />
                                      </div>
                                    </div>
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">Cellphone</label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" placeholder="Enter your phone number" />
                                      </div>
                                    </div>
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">Email</label>
                                      <div className="col-sm-9">
                                        <input type="email" className="form-control" placeholder="Enter your email address" />
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>

                            <div className="modal-footer">
                              <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                              <button type="button" className="btn bg-primary save-event waves-effect waves-light text-white">Save</button>

                              <button type="button" className="btn btn-danger delete-event waves-effect waves-light" data-dismiss="modal">Delete</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <button type="button" className="btn btn-primary full-width">Issuer Portal</button>
                  </div>
                  <div className="col-xl-6">
                    <button type="button" className="btn btn-primary full-width">Make Appointment</button>
                  </div>
                </div>
                {/*<div className="divider"></div>-*/}
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

export default Holder;
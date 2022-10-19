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

const Verifier = () => {
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
              <div
                  className="form-head d-flex align-items-center justify-content-center pt-3 pb-3 mb-sm-4 mb-3 bg-primary">
                <h2 className="text-white font-w600 text-center">{"Verifier - Event Control System"}</h2>
              </div>

              <div className="row">
                <div className="col-xl-12 col-xxl-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Check Registration</h4>
                    </div>
                    <div className="card-body">
                      <div id="smartwizard" className="form-wizard order-create">
                        <ul className="nav nav-wizard">
                          <li><a className="nav-link" href="#wizard_1">
                            <span>1</span>
                          </a></li>
                          <li><a className="nav-link" href="#wizard_2">
                            <span>2</span>
                          </a></li>
                        </ul>
                        <div className="tab-content">
                          <div id="wizard_1" className="tab-pane" role="tabpanel">
                            <div className="row">
                              <div className="col-xl-12">
                                <div className="card appointment-schedule">
                                  <div className="card-body">
                                    <div className="basic-form">
                                      <form>
                                        <div className="form-group row">
                                          <label className="col-sm-3 col-form-label">Registration Number</label>
                                          <div className="col-sm-9 mt-4 mb-4">
                                            <input type="text" className="form-control"
                                                   placeholder="Enter your registration number"/>
                                          </div>
                                        </div>
                                        <div className="form-group row align-items-center justify-content-center">
                                          {/*Button trigger modal*/}
                                          <button type="button" className="btn btn-primary width__70 mb-4"
                                                  data-toggle="modal" data-target="#confirmInfo">Run Check
                                          </button>
                                          {/*Modal*/}
                                          <div className="modal fade" id="confirmInfo">
                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                              <div className="modal-content">
                                                <div className="modal-header">
                                                  <h5 className="modal-title">Confirm Information</h5>
                                                  <button type="button" className="close" data-dismiss="modal">
                                                    <span>&times;</span>
                                                  </button>
                                                </div>
                                                <div className="modal-body">
                                                  <p>Confirm if this is you</p>
                                                  <p>Firstname:</p>
                                                  <p>Surnname:</p>
                                                </div>
                                                <div className="modal-footer">
                                                  <button type="button" className="btn btn-danger light"
                                                          data-dismiss="modal">Close
                                                  </button>
                                                  <button type="button" className="btn btn-primary">Confirm</button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="wizard_2" className="tab-pane" role="tabpanel">
                            <div className="row">
                              <div
                                  className="col-xl-12 d-flex flex-column justify-content-between align-content-center">
                                <button type="button" className="btn btn-primary full-width mb-4">Verifier Vaccination
                                  Status
                                </button>
                                <button type="button" className="btn btn-primary full-width mb-4">Credentials</button>
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

export default Verifier;
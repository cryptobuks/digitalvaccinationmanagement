import CTA from "../../cta/v1";

import { footerLinksV1 } from "../../../../assets/data/insiteLinks";
import footerLogo from "../../../../assets/images/logo.png";
import backToTopIcon from "../../../../assets/images/icon/back_to_top.svg";

import characterShape from "../../../../assets/images/nft/3_chr_img.png";
import footerShapesLeft from "../../../../assets/images/icon/footer_shapes_left.png";
import footerShapesRight from "../../../../assets/images/icon/footer_shapes_right.png";

import FooterStyleWrapper from "./Footer.style";
const Footer = () => {
  return (
    <FooterStyleWrapper>
               {/*Footer start*/}
      <div className="footer">
        <div className="copyright">
          <p>Copyright © Powered by <a href="http://shapeit.solutions" target="_blank">Shape It Solutions</a> 2022</p>
        </div>
      </div>
          {/*Footer end*/}
    </FooterStyleWrapper>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import CountryDropdown from "../CountryDropdown";
import Button from "@mui/material/Button";
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-strip">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the <b>ONLINE BUSINESS</b>, orders may be processed with a
              slight delay
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center part2">
                <CountryDropdown />

                {/* Header Search */}
                <div className="headerSearch ml-3 mr-3">
                  <input type="text" placeholder="Search products..." />
                  <Button>
                    <IoIosSearch />
                  </Button>
                </div>

                {/* Account and Cart Tab */}
                <div className="part3 d-flex align-items-center ml-auto">
                  <Button className="circleUser mr-3">
                    <FiUser />
                  </Button>
                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">$2.99</span>
                    <div className="position-relative ml-2">
                      <Button className="circleUser">
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;

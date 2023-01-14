import React from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import { Link } from "react-router-dom";
import logo from "../imgs/Nour Aviation-logos_black.png";
const data = ["STRATEGIC PLANNING", "BUDGET ANAYSIS"];

// const NavbarDropDown = (props) => {
//   return (
//     <div
//       className="p-4"
//       style={{
//         position: "absolute",
//         backgroundColor: "black",
//         top: "30px",
//       }}
//     >
//       <div className="row">
//         {props.data.map((data, i) => {
//           return (
//             <div key={i} className="col-12">
//               <Link key={i} to="/">
//                 {data}
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

const Nav = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="container">
        <div className="row justify-content-center justify-content-md-between align-items-center p-2">
          <div className="col-2 col-md-2" style={{ transform: "1s" }}>
            <Link to="/">
              <img width="85%" src={logo} />
            </Link>
          </div>
          <div className="col-12 col-md-6">
            <ul className="row nav justify-content-end p-2">
              <li className="col-4 col-md-3 col-lg-2">
                <Link to="/services">SERVICES</Link>
              </li>
              <li className="col-4 col-md-3 col-lg-2">
                <Link to="/">TUTORIALS</Link>
              </li>
              <li className="col-4 col-md-3 col-lg-2">
                <Link to="/">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

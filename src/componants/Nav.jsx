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
    <div style={{ backgroundColor: "black" ,color:'white'}}>
      <div className="container py-2">
        <div className="row justify-content-center justify-content-md-between align-items-center p-2 ">
          <div className="col-2 col-md-2" style={{ transform: "1s" }}>
            <Link to="/">
              <img width="85%" src={logo} />
            </Link>
          </div>
          <div className="col-12 col-md-6">
            <ul className="row nav justify-content-end p-2 text-white" >
            <li className="col-auto col-md-auto col-lg-auto">
                <Link to="/services" style={{color:'white'}}>HOME</Link>
              </li>
              <li className="col-auto col-md-auto col-lg-auto">
                <Link to="/services" style={{color:'white'}}>SERVICES</Link>
              </li>
              <li className="col-auto col-md-auto col-lg-auto">
                <a href="/#contact" style={{color:'white'}}>CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

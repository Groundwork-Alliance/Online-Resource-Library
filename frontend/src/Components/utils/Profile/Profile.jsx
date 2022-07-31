import React from "react";
import { Helmet } from "react-helmet";
import HeaderBwlowNavbar from "../Navbar/HeaderBwlowNavbar";
export default function Profile() {
  const [disabled,setDisabled] = React.useState(true)
  return (
    <div>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <HeaderBwlowNavbar page={"Profile"} quote={"All the user related information."} />
      <div className="w-75 mt-5 container rounded border p-2" style={{backgroundColor:"#F4F7FA"}}>
        <form action="">
          <label htmlFor="" className="form-label">Name:</label>
          <input type="text" value={"Suyog kulkarni"} disabled={disabled} className="form-control" />
          <label htmlFor="" className="form-label mt-2">Email:</label>
          <input type="email" value={"kulkarnisuyog3@gmail.com"} disabled={disabled} className="form-control" />
          <button className="btn btn-primary mt-2" style={{marginLeft:"71%"}}>Update information</button>
          <button className="btn btn-primary mt-2 ms-1">Change Password</button>
        </form>
      </div>
    </div>
  );
}

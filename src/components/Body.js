import { Link, Outlet } from "react-router-dom";
import Header from "./common/Header";


const Body = () => {
 return (
  <>
   <Header />
   <h6><Link to="/react-coding">React Coding Questions</Link></h6>
   <Outlet />
  </>
 )
}

export default Body;
import { Link, Outlet } from "react-router-dom";
import Header from "./common/Header";


const Body = () => {
 return (
  <>
   <Header />
   <h1><Link to="/tag-input-field">React Coding Questions</Link></h1>
   <Outlet />
  </>
 )
}

export default Body;
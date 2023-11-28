import { useState } from "react";
import JSCode from "../common/JSCode";

const ShowHidePassword = () => {

 const [shown, setShown] = useState(false);
 const code = `import { useState } from "react"

  const ShowHidePassword = () => {
  const [shown, setShown] = useState(false);
  return (
    <>
      <input type={shown ? 'text' : 'password'} />
      <button onClick={() => setShown(!shown)}>Show/Hide</button>
    </>
  );
};

export default ShowHidePassword;`
 return (
  <>
   <div className="container py-3">
    <div className="row justify-content-center align-items-center">
     <h1>Show/Hide Password</h1>
     <div className="col-lg-4 my-4">
      <div className="d-flex">
       <input type={shown ? 'text' : 'password'} className="form-control mr-2" />
       <button onClick={() => setShown(!shown)} className="btn btn-primary"> Click </button>
      </div>
      </div>
      <div className="col-lg-9 justify-content-center align-items-center mt-2">
      <div>
      <JSCode code={code} />
      </div>
     </div>
    </div>
   </div>
  </>
 )



}

export default ShowHidePassword;
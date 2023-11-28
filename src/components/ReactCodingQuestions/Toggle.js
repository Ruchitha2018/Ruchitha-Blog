import { useState } from "react";
import JSCode from "../common/JSCode";

const Toggle = () => {

const [isToggleOn, setIsToggleOn] = useState(false);

const code = `const Toggle = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <label className={isToggleOn ? 'toggle on' : 'toggle off'}>
      <input
        type="checkbox"
        checked={isToggleOn}
        onChange={() => setIsToggleOn(!isToggleOn)}
      />
      {isToggleOn ? 'ON' : 'OFF'}
    </label>
  );
};
export default Toggle;
`
 return (
  <>
   <div className="container py-3">
    <div className="row justify-content-center align-items-center">
     <h1>Toggle</h1>
     <div className="col-lg-4 my-4">
     <label className={`toggle ${isToggleOn ? 'on' : 'off'}`}>
      <input type="checkbox"  checked={isToggleOn} onChange={() => setIsToggleOn(!isToggleOn)}/>
      {isToggleOn ? 'ON': 'OFF'}
     </label>
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

export default Toggle;
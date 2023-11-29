import { Link } from "react-router-dom"

const ReactCoding = () => {
 return (
  <>
   <div className="container py-3">
    <div className="row">
     <div className="col-lg-12">
      <h1>React Coding Questions</h1>
      <ul className="pt-3 list-group">
       {/* <li className="list-group-item"><Link to="/tag-input-field">Tag Input Field</Link></li>
       <li className="list-group-item"><Link to="/show-hide-password">Show/hide password</Link></li>
       <li className="list-group-item"><Link to="/toggle">Toggle</Link></li> */}
       <li className="list-group-item d-flex align-items-center">
        <div className="number-circle">1</div>
        <Link to="/tag-input-field">
         <div>Tag Input Field</div>
        </Link></li>
      </ul>
     </div>
    </div>
   </div>
  </>
 )
}

export default ReactCoding
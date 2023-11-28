import { useState } from "react";
import JSCode from "../common/JSCode";

const TagInputField = () => {

  const [tagData, setTagData] = useState([]);

  const addTagData = (event) => {
    setTagData([...tagData, event.target.value])
  }

  return (
    <>
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-12">
            <h1>Tag Input Field</h1>
            <div>
              <input type="text" className="form-control" onKeyUp={(event) => (event.key === 'Enter' ? addTagData(event) : null)} />
              <ul>
                {tagData && tagData.map((data, index) => (
                  <li>
                    <span className="pr-2">{data}</span>
                    <span>Remove</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TagInputField;
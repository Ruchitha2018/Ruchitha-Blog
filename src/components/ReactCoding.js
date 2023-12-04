import { Link } from "react-router-dom"

const ReactCoding = () => {

  const routesData = [
    {
      name: 'Infinite Scrolling',
      url: '/infinite-scrolling'
    },
    {
      name: 'Pagination',
      url: '/pagination'
    }
  ]
  return (
    <>
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-12">
            <h1>React Coding Questions</h1>
            <ul className="pt-3 list-group">
              {
                routesData.map((data, index) => (
                  <li className="list-group-item d-flex align-items-center">
                    <div className="number-circle">{index+1}</div>
                    <Link to={data.url}>
                      <div>{data.name}</div>
                    </Link></li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReactCoding
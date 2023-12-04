import { useEffect, useState } from "react";

const InfiniteScrolling = () => {

 const [card, setCard] = useState([]);
 const [page, setPage] = useState(1);
 const [loading, setLoading] = useState(false);

 const getCardData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`)
  const data = await res.json();
  setCard((prev) => [...prev, ...data]);
  setLoading(false);
 }
 useEffect(() => {
  getCardData()
 }, [page])


 useEffect(() => {
  window.addEventListener('scroll', handleInfiniteScroll);
  return () => window.removeEventListener('scroll', handleInfiniteScroll);
 }, [])

 const handleInfiniteScroll = async () => {
  // console.log('Scroll Height:' ,document.documentElement.scrollHeight);
  // console.log('Inner Height:' + window.innerHeight);
  // console.log('Top:' + document.documentElement.scrollTop);
  try {
   if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
    setLoading(true);
    setPage((prev) => prev + 1)
   }
  }
  catch (err) {
   console.log(err);
  } finally {
   console.log('Finally')
   // setLoading(false);
  }

 }

 return (
  <>
   <div className="container">
    <div className="row">
     <div className="col-lg-12">
      <h1 className="py-4">Infinite Scrolling</h1>
      <div>
       {card && card.map((data, index) => {
        return (
         <>
          <div className="card mb-3 p-3">
           <h2>{index + 1}</h2>
           <p className="mb-0">{data.title}</p>
           <p className="mb-0">{data.body}</p>
          </div>
         </>
        )
       })}
      </div>
      {loading && <h2 className="text-center">Loading...</h2>}
     </div>
    </div>
   </div>
  </>
 )
}

export default InfiniteScrolling;
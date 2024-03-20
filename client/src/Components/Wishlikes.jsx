
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Cookies from "universal-cookie"
import Navbar from "./navbar/Navbar";
import { ArrowUpRight, StarFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";


  export default function Wishlikes(){
  const cookies = new Cookies();
  const fav=cookies.get('favorites')
  const user_details =cookies.get('userDetails')

    const [favorites, setFavorites] = useState([]);
    const [gigs, setGigs] = useState([]);

    const [searchTerm, setSearchTerm] = useState(null);
    const [searchCat, setSearchCat] = useState(null);
    const [searchTimezone, setSearchTimezone] = useState(null);
  
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [runUseEffect,setrunUseEffect]=useState(0)

  useEffect(() => {
    fetchGigs();
  }, []);

  const fetchGigs = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("http://localhost:8800/api/gigs/", {
        search: searchTerm, // Send search term if any
      }).then((response)=>{
        console.log(fav);
        setFavorites(fav)
        setGigs(response.data);
        console.log(favorites);

      });
      
    } catch (err) {
      console.error(err);
      setError("Error fetching gigs. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

     //GET All Staduims
    // useEffect(()=>{
    //     axios
    //     .get(`http://localhost:8800/api/gigs/getAllFav/${user_details.user}`)

    //     .then((res)=>{
    //       console.log(res);
    //     })
    // },[runUseEffect])

    const toggleFavorite = async (servise_Id) => {
        
      try {
          const response = await axios.post(`http://localhost:8800/api/gigs/${
            favorites.includes(servise_Id) ? 'removeFromFavorites' : 'addToFavorites'
          }`, {
            userId:user_details.user,
            servise_Id:servise_Id
          });
  
          console.log(user_details.user)
          setFavorites(response.data.favorites);
          console.log(response.data.favorites);
  
        } catch (error) {
          console.error('Error toggling favorite:', error);
        }
      };

      const matchingServices = gigs.filter(gig => favorites.includes(gig._id));

    
        return (
          <>
      <div className="homee">
        <Navbar />
      </div>
      {matchingServices.length > 0 ? (
              <div className=" row ">
                {matchingServices.map((gig) => (
                  <div className="col-lg-4 col-md-6 py-3 col-sm-6 col-12 ">
                    <div className="card p-3 h-100">
                      <p key={gig.id} className="freelancer-item"></p>
                      <img src={gig.images[0]} alt="" />
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service11-600x450.jpg"
                        className="  m-auto img-thumbnail"
                      />
                      <div className="ico  d-flex justify-content-center align-items-center">
                      <div style={{ cursor: 'pointer' }} onClick={() => toggleFavorite(gig._id)}>
            {
            favorites.includes(gig._id) ? (
              <span style={{ color: 'red' }}>❤</span> // Filled heart
            ) : (
              <span>🤍</span> // Outline heart
            )}
          </div>
                        {" "}
                        {/* <Heart /> */}
                      </div>

                      <h6 className="mt-3 mb-1 text-center">{gig.title}</h6>
                      <p className="text-muted text-center small">{gig.desc}</p>

                      <span className="text-center">
                        <StarFill className="star  " /> {gig.totalStars}{" "}
                        <span className="text-muted review ms-2 ">
                          (Review)
                        </span>
                      </span>

                      <br></br>
                      <button className="me-3 btn1 mt-3 border-0 rounded-5 ">
                        {gig.cat}
                      </button>
                      <button className="me-3 btn1 mt-3  border-0 rounded-5">
                        {gig.shortTitle}
                      </button>
                      <div className="card-footer m-auto  mt-4">
                        <p>
                          <span className="fw-bold">Desception:</span>{" "}
                          {gig.shortDesc}
                        </p>
                        <p>
                          <span className="fw-bold">Price: $</span> {gig.price}
                        </p>
                        <p>
                          <span className="fw-bold">Delivery Time:</span>{" "}
                          {gig.deliveryTime} days
                        </p>
                        <p>
                          <span className="fw-bold">Seller's Time Zone:</span>{" "}
                          {gig.timeZone}
                        </p>
                      </div>
                      <Link
                        to={`/gig/${gig._id}`}
                        className="w-100 m-auto text-success text-decoration-none text-center view rounded-5 p-2 "
                      >
                        View details <ArrowUpRight className="ms-2 fs-5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted">
                {searchTerm || searchCat || searchTimezone
                  ? "No gigs found matching your search."
                  : "Search for gigs by entering a term above."}
              </p>
            )}
          </>
          )
      }


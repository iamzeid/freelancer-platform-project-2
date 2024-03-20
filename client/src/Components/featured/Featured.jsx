import React, { useState } from "react";
import "./Featured.css";
import { useNavigate } from "react-router-dom";



function Featured() {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <>

    <section className='home text-start py-5 '>
 
    
    <div className=' container py-5 '>
    <div className='row '>
     <div className='col-md-6 home-content'>
     <div className=' '>
     <h1 className="mb-4">
     Hire the best <span>freelancers</span> for <br></br> any job, online.
          </h1>
    <p className='w-75 mb-4'>Work with talented people at the most affordable price to get the most out of your time and cost</p>
    <div className="search   ">
            <div className="searchInput w-100 me-3">
              <img src="./img/search.png" alt="" />
              <input
                className=" "
                type="text"
                placeholder='search ...'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button  onClick={handleSubmit}>Search</button>
          </div>
          {/* <div className="popular  mt-3">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div> */}
      </div>
    </div>    
    

     <div className='col-md-6 col-sm-11 p-3 container '>
     


<img src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/09/h4.png" className="w-100 animated-image" alt=""/>

</div> 


    </div>
    </div>
    

  </section>

   
    </>
  );
}

export default Featured;
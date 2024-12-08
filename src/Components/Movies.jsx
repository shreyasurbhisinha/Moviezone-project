import React, { useState } from 'react'
import { movies } from './Data.js'

 export const Movies = () => {
    const [movieList,setmovieList] = useState(movies);
    const filterbycategory=(cat)=>{
        setmovieList(movies.filter((data)=>data.category==cat))
    }
    
  return (
    <>
    <div > 
    <div className='my-3 mx-auto text-center' style={{width:'1000px',margin:'auto'}}>
    <button onClick={()=>setmovieList(movies)}type="button" class="btn btn-outline-primary mx-3">All</button>
<button onClick={()=>filterbycategory("Action")} type="button" class="btn btn-outline-primary mx-3">Action</button>
<button onClick={()=>filterbycategory("Thriller")} type="button" class="btn btn-outline-success mx-3">Thriller</button>
<button onClick={()=>filterbycategory("Animation")} type="button" class="btn btn-outline-danger mx-3">Animation</button>
<button onClick={()=>filterbycategory("Horror")} type="button" class="btn btn-outline-warning mx-3">Horror</button>
<button onClick={()=>filterbycategory("Drama")} type="button" class="btn btn-outline-info mx-3">Drama</button>
<button onClick={()=>filterbycategory("Sci-Fi")} type="button" class="btn btn-outline-light mx-3">Sci-fi</button>

    </div>
    <div style={{
        display:'flex',
        flexWrap:'wrap',
       
        textAlign:'center',
        justifycontent:'center',
        alignitems:'center',
        width:'1300px',
        
        margin:'auto',
        marginTop:'1.5rem'
    }}>
        {movieList.map((data)=>(
            <div key={data.id} style={{maxWidth:'280px',
                textAlign:'center'
            }} >
            <div style={{padding:'10px'} } className='hover-effect'>
                <img src={data.poster_path} alt=" " style={{width:'200px',
                    borderRadius:'10px',
                    height:'280px',
                    border:'1px solid yellow',
                }}></img>
            </div>
            <h5>{data.title}</h5>
            <p>{data.release_date}</p>
            </div>
            
            ))}

      
    </div>
    </div>
    </>
  );
};



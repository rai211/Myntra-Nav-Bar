import style from "./myntra.module.css"
 import picture from "./myntra.webp"
 
 import { Link } from "react-router-dom";

const Myntra=()=>{
    
    
    return(
       <section id={style.nav}>
        <article>
            <div className={style.logo}>
                 <img src={picture} alt="" height="100%" width="100%"/> 

            </div>
             <div className={style.menu}>
                <ol>
                    <li><a href="">MEN</a></li>
                    <li><a href="">WOMEN</a></li>
                    <li><a href="">KIDS</a></li>
                    <li><a href="">HOME & LIVING</a></li>
                    <li><a href="">BEAUTY</a></li>
                    <li><a href="">STUDIO <sup style={{color:"red"}}>New</sup></a></li>
                </ol>

            </div>
            <div className={style.searchBar}>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text"  placeholder="search for prodcuts,brands and more"  /> 
             </div>
             <div className={style.profile}>
                 <div>
                 <i class="fa-regular fa-user"></i>
                 <p>Profile</p>
                 </div>

                       <div>
                       <i class="fa-regular fa-heart"></i>
                       <p>Wishlist</p>
                       </div>
                              <div>
                              <i class="fa-sharp fa-solid fa-bag-shopping"></i>
                             <p>Bags</p>
                             </div>

                             </div>
          
        </article>
       
      </section>
    )
}
export default Myntra
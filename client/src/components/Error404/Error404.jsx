import React, { useState } from "react";
import { Link } from "react-router-dom";


function Error404 (){


    return (
        <div>
            <h2>Error 404</h2>
            <Link to={'/Api'}>Volver</Link>
            <img src='https://i0.wp.com/noticieros.televisa.com/wp-content/uploads/2021/03/cheems-1.jpg?w=1080&ssl=1'/>

        </div>
    )

}



export default Error404
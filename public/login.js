import React, { Component } from "react";

export default class HomePage extends Component {
       render() {
         return (
           <div className="container mx-auto text-center pt-5">
             <form id="reg-form">
                <input type="text" id="username" placeholder="Username" />
                <input type="password" id="password" placeholder="Passwoed" />
            </form>
           </div>
         );
         
       }
     }

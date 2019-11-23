import React from "react";
import './community.css';
import Img from './img.jsx'

//This component is every community item in Community List
export default class Community extends React.Component {
    render(){
        
        const { name, image, group, avg } = this.props;

        return(
            <div className = "community">
                {/* <img src = {image} alt="" /> */}
                <div className = "image"><Img url = {image}/></div>
                <div className = "info">
                    <h2> Community:<span className = "data"> {name} </span> </h2>
                    <div className = "group">Group: <span className = "data"> {group} </span> </div>
                    <div className = "price">Average price: <span className = "data"> {avg} </span> </div>

                </div>

            </div>
        )

    }


}
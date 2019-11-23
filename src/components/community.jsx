import React from "react";
import './community.css'

export default class Community extends React.Component {
    render(){
        const name = this.props.name;
        const image = this.props.image;
        const group = this.props.group;
        const avg = this.props.avg;

        return(
            <div className = "community">
                <img src={image} alt="" />
                <div className = "info">
                    <h2> Community:<span className = "data"> {name} </span> </h2>
                    <div className = "group">Group: <span className = "data"> {group} </span> </div>
                    <div className = "price">Average price: <span className = "data"> {avg} </span> </div>

                </div>

            </div>
        )

    }


}
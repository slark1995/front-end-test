import React from "react";
import errorImg from '../not_found.png'

export default class Img extends React.Component {

  constructor(props) {
    super(props);
    this.state = { imageUrl: null };
  }


  handleImageErrored() {
    this.setState({imageUrl: errorImg})
  }

  componentDidMount(){
    let url = this.props.url;
    this.setState({imageUrl: url})
  }

  render() {

    try {
        return (
            <div>
              <img src={this.state.imageUrl} alt="" onError={this.handleImageErrored.bind(this)}/>
            </div>
          );
      } catch (error) {
        return (
            <div>
              <img src= {errorImg} alt=""/>
            </div>
          );
      }

  }



}

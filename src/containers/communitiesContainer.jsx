import React from "react";
import Community from "../components/community";
import { fetchCommunities, fetchHomes } from "../lib/api.js";
import "./communitiesContainer.css";

export default class CommunitiesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      communities: [],
      homes: []
    };
  }

  compare = function(prop) {
    return function(obj1, obj2) {
      var val1 = obj1[prop];
      var val2 = obj2[prop];
      if (val1 < val2) {
        return -1;
      } else if (val1 > val2) {
        return 1;
      } else {
        return 0;
      }
    };
  };

  fetchData() {
    fetchCommunities().then(data => {
      const sortData = data.sort(this.compare("name"));
      this.setState({ communities: sortData });
    });

    fetchHomes().then(data => {
      this.setState({ homes: data });
    });
  }

  averagePrice() {
    this.state.communities.forEach(i => {
      let price = 0;
      let count = 0;
      let average = 0;
      this.state.homes.forEach(j => {
        if (i.id === j.communityId) {
          price = price + j.price;
          count = count + 1;
        }
      });
      count !== 0
        ? (average = (price / count).toFixed(2))
        : (average = "unknown");
      i["avg"] = average;
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  
  render() {
    this.averagePrice();
    const communityList = this.state.communities
      .sort()
      .map(i => (
        <Community
          key={i.id}
          id={i.id}
          name={i.name}
          image={i.imgUrl}
          group={i.group}
          avg={i.avg}
        />
      ));
    return (
      <div className="comPage">
        <h1>Community List</h1>
        {communityList ? communityList : null}
      </div>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";

class Display extends Component {
  state = { players: [] };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => this.setState({ players: res.data }))
      .catch(err => console.error(err));
  }

  renderPlayers() {
    return this.state.players.map(player => {
      return (
        <>
          <p>Name: {player.name}</p>
          <p>Country: {player.country}</p>
          <p>Searches: {player.searches}</p>
          <hr />
        </>
      );
    });
  }

  renderCountry() {
    let total = 0;
    const countryArr = this.state.players
      .sort((a, b) => a.country - b.country)
      .map((player, index, arr, curr) => {
        if (arr.indexOf(player.country) === arr[index].country) {
          total = 0;
          return {
            [`${player.country}`]: total + player.searches
          };
        } else {
          return {
            [`${player.country}`]: total + player.searches
          };
        }
      });

    console.log(countryArr);

    return null;
  }

  render() {
    return (
      <div>
        {this.props.filter === "Player"
          ? this.renderPlayers()
          : this.renderCountry()}
      </div>
    );
  }
}

export default Display;

import React, { Component } from "react";
import api from "../../services/api";

import logo from "../../assets/marvel.png";

import { Container, Form } from "./styles";
import ListaHeroi from "../../components/ListaHeroi";

export default class Main extends Component {
  state = {
    loading: false,
    nomeHeroiErro: false,
    nomeHeroiInput: "",
    herois: []
  };

  addHeroi = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const response = await api.get(
        `characters?name=${
          this.state.nomeHeroiInput
        }&ts=1&apikey=a18f65af7ae8e2d26499eb5aea051f01&hash=9da1dc48dee321f0a26ca108fa5469ea`
      );
      this.setState({
        nomeHeroiInput: "",
        herois: [...this.state.herois, response.data],
        nomeHeroiErro: false
      });
    } catch (err) {
      this.setState({ nomeHeroiErro: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Marvel" />

        <Form heroiErro={this.state.nomeHeroiErro} onSubmit={this.addHeroi}>
          <input
            type="text"
            placeholder="nome do herói"
            value={this.state.nomeHeroiInput}
            onChange={e => this.setState({ nomeHeroiInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              "Buscar"
            )}
          </button>
        </Form>
        <ListaHeroi herois={this.state.herois} />
      </Container>
    );
  }
}

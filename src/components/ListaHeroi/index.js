import React from "react";

import { Container, Repository } from "./styles";

const ListaHeroi = ({ herois }) => (
  <Container>
    {herois.map(
      percorreheroi =>
        percorreheroi.data.results[0] && (
          <Repository key={percorreheroi.data.results[0].id}>
            <h1>{percorreheroi.data.results[0].name}</h1>
            <div>
              <img
                src={percorreheroi.data.results[0].thumbnail.path + ".jpg"}
                alt=""
              />
            </div>
            <p>{percorreheroi.data.results[0].description}</p>
          </Repository>
        )
    )}
  </Container>
);

export default ListaHeroi;

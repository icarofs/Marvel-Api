import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;

  div {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    padding-top: 15px;
    color: #f5f5f5;
    text-align: center;
  }

  p {
    padding-top: 10px;
    color: #f5f5f5;
    text-align: justify;
    font-size: 16px;
    padding-bottom: 40px;
  }
`;

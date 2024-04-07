import styled from "styled-components";

export const Div = styled.div`
  font-family: sans-serif;
  max-width: 464px;
  padding: 14px 6px;

  .title {
    font-size: 1.5rem;
    text-align: center;
  }

  input {
    border: 1px solid #ccc;
    margin: 10px 0 44px;
    padding: 8px 14px;
    width: 100%;
  }

  span {
    align-items: center;
    border: 1px solid #ddd;
    color: white;
    display: flex;
    font-size: 1.2rem;
    height: 50px;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    width: 50px;

    &.active {
      background-color: cornflowerblue;
      border: 1px solid transparent;
    }

    &.at-max {
      background-color: crimson;
    }
  }
`;

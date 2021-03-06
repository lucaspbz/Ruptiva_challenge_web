import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  div:first-child {
    width: 100%;
    margin: 32px auto 0;
    max-width: 700px;
    display:flex;

  }

  div svg {
      margin-left: auto;
      color: #fff;
      cursor: pointer;
    }

  div h1 {
    max-width: 400px;
    font-weight: bold;
    color: #fff;
  }
`

export const Form = styled.form`
  background-color: #fff;
  max-width: 700px;
  display: flex;
  border-radius: 5px;
  width: 100%;
  margin: 32px auto;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`

export const Repositories = styled.div`
  margin: 80px auto;
  max-width: 700px;

  button {
    background: #fff;
    border:0;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;
    cursor:default;


    & + button {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: 8px;
      color: #1F99EA;
    }
  }
`

export const Error = styled.span`
  color: #fff;
  font-weight:bold;
  width: 100%;
  max-width: 700px;

  margin: 0 auto;
  align-self:flex-start;
`;



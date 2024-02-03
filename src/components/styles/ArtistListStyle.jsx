import styled, { css } from "styled-components";

const ArtistsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 600px;
  margin: 20px 0;
  padding: 10px;
  background-color: whitesmoke;
  border: 1px solid black;
  border-radius: 5px;
`;

const MaleArtist = styled.li`
  width: 160px;
  margin: 10px;
  padding: 10px;

  ${(props) => {
    if (props.$activeArtist === props.children) {
      return css`
        background-color: aliceblue;
      `;
    }
    return css`
      background-color: white;
    `;
  }}

  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  font-weight: 700;
  color: dodgerblue;
  cursor: pointer;

  &:hover {
    background-color: aliceblue;
    transform: scale(1.05);
  }
`;

const FemaleArtist = styled.li`
  width: 160px;
  margin: 10px;
  padding: 10px;

  ${(props) => {
    if (props.$activeArtist === props.children) {
      return css`
        background-color: lavenderblush;
      `;
    }
    return css`
      background-color: white;
    `;
  }}

  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  font-weight: 700;
  color: hotpink;
  cursor: pointer;

  &:hover {
    background-color: lavenderblush;
    transform: scale(1.05);
  }
`;

export { ArtistsContainer, MaleArtist, FemaleArtist };

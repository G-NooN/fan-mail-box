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

const Artist = styled.li`
  width: 160px;
  margin: 10px;
  padding: 10px;

  ${(props) => {
    if (props.$activeArtist === props.children) {
      switch (props.children) {
        case "장미":
        case "장윤서":
        case "박가현":
          return css`
            background-color: lavenderblush;
          `;
        default:
          return css`
            background-color: aliceblue;
          `;
      }
    }
    return css`
      background-color: white;
    `;
  }}

  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  font-weight: 700;

  ${(props) => {
    switch (props.children) {
      case "장미":
      case "장윤서":
      case "박가현":
        return css`
          color: hotpink;
        `;
      default:
        return css`
          color: dodgerblue;
        `;
    }
  }}
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    ${(props) => {
      switch (props.children) {
        case "장미":
        case "장윤서":
        case "박가현":
          return css`
            background-color: lavenderblush;
          `;
        default:
          return css`
            background-color: aliceblue;
          `;
      }
    }}

    transform: scale(1.05);
  }
`;

export { ArtistsContainer, Artist };

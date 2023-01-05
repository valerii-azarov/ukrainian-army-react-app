import styled from "styled-components";

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.backgroundColor};;
`;

export const Wrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 40% 60%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1170px) {
    padding: 0 24px;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 100%;
  }
`;

export const Info = styled.div`
  button {
    margin-bottom: 12em;
  }

  @media screen and (max-width: 720px) {
    text-align: center;
    margin: 0 auto;

    button {
      margin-bottom: 5em;
    }
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 1.08em;
  margin-top: 2em;
  color: #000000;

  @media screen and (max-width: 720px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5em;
  margin: 1.5em 0 2.5em;
  max-width: 444px;
  color: #161212;

  @media screen and (max-width: 720px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  max-height: 500px;
  width: 100%;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

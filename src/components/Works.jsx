import React, { useState } from "react";
import styled from "styled-components";
import Development from "./Development";
import Illustration from "./Illustration";
import ProductDesign from "./ProductDesign";
import WebDesign from "./WebDesign";
import SocialMedia from "./SocialMedia";

const data = [
  "Веб Дизайн",
  "Разработка",
  "Иллюстрации",
  "Дизайн Продукта",
  "Социальные Сети",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 70px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  white-space: nowrap;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: rebeccapurple;
    width: 0px;
    overflow: hidden;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [work, setWork] = useState("Веб Дизайн");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem onClick={() => setWork(item)} key={item} text={item}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Веб Дизайн" ? (
            <WebDesign />
          ) : work === "Иллюстрации" ? (
            <Illustration />
          ) : work === "Разработка" ? (
            <Development />
          ) : work === "Дизайн Продукта" ? (
            <ProductDesign />
          ) : (
            <SocialMedia />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;

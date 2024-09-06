import React from "react";
import styled from "@emotion/styled";

const Container = styled.div(({ theme }) => ({
  color: theme.color.black,
}));

const Home = () => {
  return <Container>Home</Container>;
};

export default Home;

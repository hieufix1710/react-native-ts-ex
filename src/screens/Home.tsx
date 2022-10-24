import React from "react";
import { StyleSheet, Text } from "react-native";
import MainLayout from "../layouts/Main";

type HomeProps = {};

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <MainLayout>
      <Text>Home page</Text>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    // paddingHorizontal: 10,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default Home;

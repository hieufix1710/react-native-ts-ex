import React from "react";
import { SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from '../components/Header'

const MainLayout = ({ children }) => {
  return (
    <SafeAreaView>
      <ScrollView>
      <Header />

        <View>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default MainLayout;

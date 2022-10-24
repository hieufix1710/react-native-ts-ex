import React from "react";
import { StyleSheet, View } from "react-native";
import { Badge } from "@rneui/themed";
import IoIcon from 'react-native-vector-icons/Ionicons';
import { Icon } from "@rneui/base";


type HeaderComponentProps = {
  title?: string;
  view?: string;
};

const index: React.FunctionComponent<HeaderComponentProps> = (props) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.rightContainer}>
        <View style={styles.boxIcon}>
          <Badge
            status="error"
            containerStyle={{ position: "absolute", top: 5, right: 5, zIndex: 10 }}
          />
          <IoIcon name="ios-notifications" size={22} color="#4F8EF7" />
          
        </View>
        <View style={styles.boxIcon}>
          <Badge
            status="success"
            containerStyle={{ position: "absolute", top: 5, right: 3, zIndex: 10 }}
          />
          <Icon name="message" color="gray" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    bottom: 0,
    height: 40,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
    shadowColor: "black",
  },
  rightContainer: {
    width: "25%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  boxIcon: {
    padding: 5,
    fontSize: 10,
  },
});

export default index;

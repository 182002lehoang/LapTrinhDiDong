import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import Header from "./../components/2a/header";
import Body from "./../components/2a/body";
import { useNavigation } from "@react-navigation/native";

const A = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <View style={styles.btn}>
        <Pressable
          onPress={() => {
            navigation.navigate("checkbox");
          }}
        >
          <Image
            source={require("./../../assets/IMG/Group.png")}
            style={styles.imgG}
          ></Image>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBCB00",
  },
  btn:{
    alignItems:'flex-end',
    margin:50,
  },
  imgG: {
    width: 50,
    height: 50,
  },
});

export default A;

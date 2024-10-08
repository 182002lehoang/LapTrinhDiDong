import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const CakePopup = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [count, setCount] = useState(1);
  var item = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image source={item.img} style={styles.img}></Image>
      </View>

      <View style={styles.view1}>
        <Text style={styles.text}>{item.name}</Text>

        <View style={styles.view2}>
          <Text style={styles.text1}>{item.shop}</Text>
          <Text style={styles.text}>{item.price}</Text>
        </View>
      </View>

      <View style={styles.view3}>
        <View style={styles.view3_1}>
          <View style={styles.view3_2}>
            <Image
              source={require("../../assets/images/Vector.png")}
              style={styles.imgVector}
            />
            <Text style={styles.text2}>Delivery in</Text>
          </View>
          <Text style={styles.text}>30 min</Text>
        </View>

        <View style={styles.view4}>
          <Pressable
            onPress={() => {
              const tru = (lis) => {
                if (count > 0) {
                  return (lis = count - 1);
                } else {
                  return (lis = count);
                }
              };
              setCount(tru);
            }}
          >
            <Image
              source={require("../../assets/images/Group 16.png")}
              style={styles.imgCount}
            ></Image>
          </Pressable>

          <Text style={styles.textCount}>{count}</Text>

          <Pressable
            onPress={() => {
              const sum = count + 1;
              setCount(sum);
            }}
          >
            <Image
              source={require("../../assets/images/Group 15.png")}
              style={styles.imgCount}
            ></Image>
          </Pressable>
        </View>
      </View>

      <View style={styles.view5}>
        <Text style={styles.text}>Restaurants info</Text>
        <Text style={styles.textInfor}>
          Order a Large Pizza but the size is the equivalent of a medium/small
          from other places at the same price range.
        </Text>
      </View>

      <View style={styles.view6}>
        <Pressable style={styles.Pre}>
          <Text style={styles.textPre}>ADD TO CARD</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  view: {
    alignItems: "center",
  },
  view1: {
    marginTop: 20,
  },
  view2: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  view3: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  view3_1: {
    flexDirection: "column",
    alignItems: "center",
  },
  view3_2: {
    flexDirection: "row",
  },
  view4: {
    flexDirection: "row",
    alignItems: "center",
  },
  view5: {
    marginTop: 30,
  },
  view6: {
    alignItems: "center",
    marginTop: 60,
  },
  img: {
    width: 272,
    height: 272,
    resizeMode: "contain",
  },
  imgVector: {
    width: 20,
    height: 20,
  },
  imgCount: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 700,
  },
  text1: {
    fontSize: 15,
    fontWeight: 700,
    color: "#0000008A",
  },
  text2: {
    fontSize: 16,
    fontWeight: 700,
    color: "#0000008A",
    marginLeft: 10,
  },
  textCount: {
    fontSize: 20,
    fontWeight: 700,
    margin: 15,
  },
  textInfor: {
    fontSize: 15,
    fontWeight: 700,
    color: "#000000AB",
    width: 360,
    marginTop: 10,
  },
  textPre: {
    textAlign: "center",
    color: "#FFFDFD",
    fontSize: 25,
    fontWeight: 700,
  },
  Pre: {
    width: 316,
    height: 58,
    borderRadius: 5,
    backgroundColor: "#F1B000",
    justifyContent: "center",
  },
});

export default CakePopup;

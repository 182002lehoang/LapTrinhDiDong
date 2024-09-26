import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  TextInput,
  FlatList,
} from "react-native";
import seachList from "../../../dataSeach";

const Header = () => {
  const navigation = useNavigation();
  const [searchName, setSearchName] = useState("");
  const [filteredData, setFilteredData] = useState(seachList); // Khởi tạo với toàn bộ danh sách

  const handleSearch = () => {
    const filtered = seachList.filter((item) =>
      item.name.toLowerCase().includes(searchName.toLowerCase()) // Không phân biệt hoa/thường
    );
    setFilteredData(filtered);
    console.log(`Tìm kiếm sản phẩm: ${searchName}`);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../../../assets/IMG/outlined.png")}
            style={styles.img}
          ></Image>
        </Pressable>

        {/* <Image
          source={require("../../../assets/IMG/Chat/whh_magnifier.png")}
          style={styles.img2}
        ></Image> */}
        <TextInput
          style={styles.textIn}
          placeholder="Search by product name"
          placeholderTextColor="#999"
          value={searchName}
          onChangeText={setSearchName} // Cập nhật với tên sản phẩm
        />
        <Pressable onPress={handleSearch}>
          <Image
            source={require("../../../assets/IMG/Chat/whh_magnifier.png")}
            style={styles.img}
          />
        </Pressable>

        <Pressable>
          <Image
            source={require("../../../assets/IMG/Chat/Group 2.png")}
            style={styles.img1}
          ></Image>
        </Pressable>
      </View>

      {/* Kiểm tra nếu không có dữ liệu */}
      {filteredData.length === 0 ? (
        <Text style={styles.noDataText}>Không tìm thấy sản phẩm nào</Text>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.img} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <Text style={styles.itemSale}>{item.sale}</Text>
                <Text style={styles.itemComments}>{item.comment} comments</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 60,
    backgroundColor: "#1BA9FF",
    position: "sticky",
    top: 0,
    zIndex: 1,
    elevation: 5, // Shadow cho Android
    shadowColor: "#000", // Shadow cho iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  img: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  img1: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginLeft: 10,
  },
  img2: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 15,
    top: 15,
    zIndex: 2,
  },
  textIn: {
    height: 40,
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 10,
    paddingLeft: 40, // Để tránh bị che bởi icon search
    borderRadius: 20,
    marginHorizontal: 15,
    fontSize: 16,
    color: "#333",
    shadowColor: "#000", // Shadow cho TextInput
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // Shadow cho Android
  },
  item: {
    flexDirection: "row",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
    justifyContent: "center",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  itemPrice: {
    fontSize: 14,
    color: "#1BA9FF",
    fontWeight: "bold",
    marginTop: 4,
  },
  itemSale: {
    fontSize: 12,
    color: "#d9534f",
    marginTop: 2,
  },
  itemComments: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
  },
  noDataText: {
    textAlign: "center",
    fontSize: 18,
    color: "#999",
    marginTop: 20,
  },
});

export default Header;

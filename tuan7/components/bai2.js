import { StyleSheet, Text, View, Image, TextInput , FlatList, Pressable} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
const bai2 = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  // useEffect((search) => {
  //   fetch('https://6556cd42bd4bcef8b611a10d.mockapi.io/bai1')
  //     .then(response => response.json())
  //     .then(json => setData(json))
  //     .catch(error => console.error(error));
  // }, []);
  const fetchData = (query = '') => {
    const url = query 
      ? `https://6556cd42bd4bcef8b611a10d.mockapi.io/bai1?name=${query}` 
      : 'https://6556cd42bd4bcef8b611a10d.mockapi.io/bai1';

    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  };

  
  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    fetchData(text);
  };

  

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );
  return (
    <View style={styles.view}>
      <View style={styles.view1}>
        <Image style={styles.img} source={require('.././assets/images/back1.png')}></Image>
        <Image style={styles.img1} source={require('.././assets/images/user.png')}></Image>
        <View style={styles.view2}>
          <Text style={styles.text}>Hi Twinkle</Text>
          <Text style={styles.text1}>Have agrate day a head</Text>
        </View>
      </View>
      <View style={styles.view3}>
        <Image style={styles.img2} source={require('../assets/images/search.png')}></Image>
        <TextInput style={styles.ip} placeholder="search"
          value={search}
          onChangeText={handleSearch}
        ></TextInput>
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    <Pressable style={styles.pre}>
      <Image style={styles.img3} source={require('../assets/images/add.png')}></Image>
    </Pressable>
    </View>
  )
}

export default bai2

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20
  },
  img: {
    width: 30,
    height: 30
  },
  img1: {
    width: 50,
    height: 50,
    left: 120,
    borderRadius: 25,
    backgroundColor: 'purple'

  },
  view2: {
    flexDirection: 'column',
    left: 150
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  text1: {
    fontSize: 15
  },
  view3: {
    flexDirection: 'row',
    top: 20,
    alignItems: "center"
  },
  img2: {
    width: 30,
    height: 30,
    left: 40
  },
  ip: {
    width: 350,
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 20
  },
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems:'center'
   
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
  img3:{
    width:50,
    height:50
  },
  pre:{
    alignItems:'center'
  }
})
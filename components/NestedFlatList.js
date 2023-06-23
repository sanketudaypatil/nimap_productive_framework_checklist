import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

const NestedFlatList = () => {
  const [products, setProducts] = useState([
    {
      data: [1, 1, 1, 1, 1],
    },
    {
      data: [1, 1, 1, 1, 1],
    },
    {
        data: [1, 1, 1, 1, 1],
      },
  ]);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, textAlign: 'center', color: 'red'}}>
        Nested List
      </Text>
      <View >
        <FlatList
          data={products}
          renderItem={({item, index}) => {
            return (
              <View style={styles.itemView}>
                <Text style={{fontSize:20, color:"blue", fontWeight:"700", textAlign:"center"}}>{`item ` + (index + 1)}</Text>
                <FlatList
                  data={item.data}
                  renderItem={({item, index}) => {
                    return (
                      <View style={{margin:5}}>
                        <Text style={{fontSize:18, color:"orange"}}>{'sub item ' + (index + 1)}</Text>
                      </View>
                    );
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"red"
  },
  itemView: {
    width: '90%',
 
    backgroundColor: '#fff',
    marginBottom: 10,

    marginLeft: 10,
    padding:20,

    flex: 1,
    elevation: 5,
    borderRadius: 10,

    padding: 10,
  },
  card: {
    flex: 1,
  },
  productImage: {
    height: 100,
    width: 100,
    // resizeMode:"contain",
    padding: 10,
    alignSelf: 'center',
  },
  nameView: {
    paddingLeft: 20,
    paddingRight: 10,
    width: '100%',
  },
  price: {
    fontSize: 20,
    fontWeight: 600,
    color: 'green',
    marginTop: 10,
  },
});

export default NestedFlatList;

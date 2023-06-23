import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const MultiViewFlagList = () => {
  const [products, setProducts] = useState([
    {title: 'Post 1', isBlocked: false},
    {title: 'Post 2', isBlocked: true},
    {title: 'Post 3', isBlocked: false},
    {title: 'Post 4', isBlocked: false},
  ]);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, textAlign: 'center', color: 'red'}}>
        MultiView Flag List
      </Text>
      <View>
        <FlatList
          data={products}
          renderItem={({item, index}) => {
            return (
              <View style={{width:"100%"}}>
                {item.isBlocked ?(<View style={{
                    width:"90%",
                    height:200,
                    justifyContent:"center",
                    backgroundColor:"grey"
                  }}>
                    <Text style={{color:"red"}}>*Blocked</Text>
                  </View>): (
                  <View>
                    <Text style={styles.itemView}>I Am Not Blocked</Text>
                  </View>
                )}
                
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
    marginTop:20,
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft: 10,
    padding: 20,
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

export default MultiViewFlagList;

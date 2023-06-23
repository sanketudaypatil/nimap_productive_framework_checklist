import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    RefreshControl,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  
  const LoadMore = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading]= useState(false)

    useEffect(() => {
      getData();
    }, []);
  
    const getData = () => {
        setLoading(true)
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
          setProducts(json);
          setLoading(false)
        });
    };
  
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25, textAlign: 'center', color: 'red'}}>
          MultiView Flag List
        </Text>
        <RefreshControl 
        refreshing={loading}
        onRefresh={()=>{
            getData()
        }}>
        <View
          style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <FlatList
            numColumns={2}
            data={products}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '50%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 230,
                    marginTop: 20,
                    marginBottom: 20,
                  }}>
                  <View style={styles.itemView}>
                    <Image
                      source={{uri: item.image}}
                      style={styles.productImage}
                    />
                    <View style={{marginLeft:10, width:"100%"}}>
                      <Text>
                        {item.title.length > 30
                          ? item.title.substring(0, 20) + '...'
                          : item.title}
                      </Text>
                      <Text>
                        {item.description.length > 30
                          ? item.description.substring(0, 20) + '...'
                          : item.description}
                      </Text>
                      <Text style={styles.price}>$ {item.price}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
        </RefreshControl>
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
      marginTop: 20,
      backgroundColor: '#fff',
      marginBottom: 10,
  
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
      resizeMode: 'contain',
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
  
  export default LoadMore;
  
import { View, Text, StyleSheet , FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const HorizontalList = () => {
    const [products, setProducts] = useState([])
  


    useEffect (()=>{
        getData()

    }, [])

    const getData = ()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => {
            setProducts(json)
           
        })
    }
    console.log(products)
  return (
    <View style={styles.container}> 
      <Text style={{fontSize:25, textAlign:"center", color:"red"}}>Horizontal List</Text>
      <View style={{margin:10}}>
     <FlatList data={products}
     horizontal
     showsHorizontalScrollIndicator={false}
     renderItem={({item, index})=>{
        return(
        <View style={styles.itemView}>
            <Image source={{uri:item.image}} style={styles.productImage} />
            <View style={styles.nameView}>
            <Text>{item.title.length>30?item.title.substring(0,20)+"...": item.title}</Text>
                <Text>{item.description.length>30?item.description.substring(0,20)+"...": item.description}</Text>
                <Text style={styles.price}>$ {item.price}</Text>
            </View>
        </View>
        )
     }}/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:"red"
    },
    itemView:{
        width:200
        , height:230,
        backgroundColor:"#fff",
        marginBottom:10,
       
        marginLeft:10,
     
        flex:1,
        elevation:5,
        borderRadius:10,
       
        padding:10
    }
    ,card:{
        flex:1
        

    }
    , productImage:{
        height:100,
        width:100,
        // resizeMode:"contain",
        padding:10
        , alignSelf:"center"
        
    }
    , nameView:{
        paddingLeft:20,
        paddingRight:10,
        width:"100%"
    }
    , price:{
        fontSize:20,
        fontWeight:600, 
        color:"green",
        marginTop:10
    
    }
})

export default HorizontalList;


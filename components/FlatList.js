import { View, Text, StyleSheet , FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const Productlist = () => {
    const [products, setProducts] = useState([])
  


    useEffect (()=>{
        getData()

    }, [])

    const getData = ()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => {
            setProducts(json)
            console.log(json)
           
        })
    }
   
  return (
    <View style={styles.container}> 
      <Text>FlatList</Text>
   
     <FlatList data={products}
     renderItem={({item, index})=>{
        return(
        <View style={styles.itemView}>
            <Image source={{uri:item.image}} style={styles.productImage} />
            <View style={styles.nameView}>
            <Text>{item.title.length>30?item.title.substring(0,20)+"...": item.title}</Text>
                <Text>{item.description.length>30?item.description.substring(0,20)+"...": item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </View>
        )
     }}/>
     </View>
   
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:"red"
    },
    itemView:{
        width:"90%"
        , height:100,
        backgroundColor:"#fff",
        alignSelf:"center",
        marginTop:10,
        flexDirection:'row',
        flex:1,
        borderWidth:1,
        borderColor:"grey"
        , padding:10
    }
    ,card:{
        flex:1
        

    }
    , productImage:{
        width:100,
        resizeMode:"contain",
        padding:10
        
    }
    , nameView:{
        paddingLeft:20,
        paddingRight:10
    }
    , price:{
        fontSize:20,
        fontWeight:600, 
        color:"green",
        marginTop:10
    
    }
})

export default Productlist;


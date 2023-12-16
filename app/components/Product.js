import { View, Text ,Image} from 'react-native'
import React from 'react'

const Product = ({item}) => {
  return (
    <View style={{width:320,height:500,padding:10,borderColor:"lightgrey",borderWidth:1,margin:10,
    borderRadius:8,alignItems:"center"}}>
      <Text>{item.title}</Text>
      <Image
        style={{width:300,height:300}}
        source={{
          uri: item.thumbnail,
        }}
      />
      <Text style={{color:"grey",margin:5}}>{item.description}</Text>
      <Text style={{color:"black",margin:5}}>${item.price}</Text>
    </View>
  )
}

export default Product
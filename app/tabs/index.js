import { useEffect, useState } from 'react';
import { View,Text,StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Product from '../components/Product';

const index = () => {

  const [products,setProducts] =useState([]);
  const fetchProducts=()=>{

    fetch("https://dummyjson.com/products?limit=100")
    .then((res)=>res.json())
    .then((response)=>{
        const prod =[...response.products]
        setProducts(prod);
        // setFiltered(prod);

        // const cat = [...new Set([...prod.map((item)=>item.category)])];

        // setCategories([...cat])
    }
    )
        
}
useEffect(()=>fetchProducts(),[])
  return (
    <><StatusBar
    animated={true}
    backgroundColor="#61dafb"
    barStyle={"default"}
    showHideTransition={"slide"}
    hidden={true}
  />
  <View style={{display:"flex", width:"100%",height:"100%",borderColor:"black",borderTopWidth:8,borderBottomWidth:8,justifyContent:"center",alignItems:"center"}}>
    <ScrollView style={{display:"flex", width:"100%",height:"100%",borderColor:"grey",borderWidth:1,backgroundColor:"white",borderRadius:8,
      margin:20}} horizontal={true}>
      {
        products.map((item,idx)=><Product item={item} key={idx}/>)
      }
    </ScrollView>
  </View>
  </>
  )
}

export default index
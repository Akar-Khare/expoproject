import { Text, View,StyleSheet,TouchableOpacity,Button } from 'react-native'
import React, { Component, useState } from 'react'
import { WebView } from 'react-native-webview';


const BrandsList = ({setURL}) => {



    const brandNames = [["H&M","https://www2.hm.com/en_in/index.html"],
    ["Puma","https://in.puma.com/in/en"]
    ,["Nike","https://www.nike.com/in/"]
    ,["Marks & Spencer","https://www.marksandspencer.in/"],
     ["GAP","https://www.gap.com/"],
     ["Levi's","https://levi.in/"],
     ["Adidas","https://www.adidas.co.in/"],
     ["UNIQLO","https://www.uniqlo.com/in/en/"]];
    const colors=["lightgreen","lightblue","lightpink","cyan","yellow","salmon","dodgerblue","lightgrey"];
    return (
      <View style={{display:"flex",width:"100%",
      height:"auto",justifyContent:"space-evenly",flexWrap:"wrap",flexDirection:"row",paddingTop:40} }>
      {
      brandNames.map((item,index)=> <View style={{backgroundColor:colors[index],...brand}}  key={index}>
        <TouchableOpacity onPress={()=>setURL(item[1])}><Text>{item[0]}</Text></TouchableOpacity>
       </View>)
  }
      </View>
    )
  }
  const brands=()=>{
    
    const [url,setURL] = useState("")
    return (
      <View style={{flex:1,}}>
        {
          url=="" ?
          <BrandsList setURL={setURL}/>
          :
          < >
            <View style={{alignItems:"center",width:"100%",margin:2}}>
            <TouchableOpacity style={{padding:10,backgroundColor:"lightgrey",borderRadius:10}} onPress={()=>setURL("")}><Text>X</Text></TouchableOpacity>
            </View>
        <WebView
        style={{borderWidth:2,borderColor:"lightgrey"}}
        source={{ uri: url }}
      />
      </>
        }
      </View>
    )
  }

const brand = StyleSheet.create({
    display:"flex",width:"40%",
    height:100,borderWidth:2,
    borderColor:"black",justifyContent:"center",
    alignItems:"center",
    marginBottom:10,
    borderRadius:5
})

export default brands
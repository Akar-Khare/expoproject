import { View,Text,StatusBar,Pressable, TextInput,TouchableOpacity } from 'react-native';
import { useRouter,useFocusEffect } from "expo-router"
import { ActivityIndicator } from 'react-native';
import { useState } from 'react';


const Login = ({setName,setPass,setshowName,setshowPass,showName,showPass}) => {

   

    

  return (
    <View style={{display:"flex", alignItems:"center",paddingTop:40}}>
      <View style={{alignItems:"flex-start",width:"100%"}}>

      <Text  style={{color:"grey"}}>Username</Text>
      </View>
      <TextInput style={{height:50,width:300,borderWidth:1,marginTop:10,borderRadius:5
}}  onChangeText={newText => {
  setshowName(false)
  setName(newText)}}/>
    

      {showName && <Text style={{color:"orange"}}>Username required</Text>}
      <View style={{alignItems:"flex-start",width:"100%"}}>
      <Text style={{color:"grey"}}>Password</Text>
      </View>
      <TextInput style={{height:50,width:300,borderWidth:1,marginTop:10,borderRadius:5
}} onChangeText={newText =>{ 
  setshowPass(false)
  setPass(newText)}}/>
   {showPass&& <Text style={{color:"orange"}}>Password required</Text>}

  
    </View>
  )
}

export default function Page() {



  const router = useRouter();
  
  const [name,setName]= useState("");
  const [pass,setPass]= useState("");
  const [showName,setshowName]= useState(false);
  const [showPass,setshowPass]= useState(false);


 
  
  const validate=()=>{

  
    if(name == "")
      setshowName(true);

    if(pass == "")
      setshowPass(true);

    (name!="" && pass!="") &&  router.replace('/tabs');
    
  }

  return <>
  <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={"default"}
        showHideTransition={"slide"}
        hidden={true}
      />
  {/* {imgLoaded ?  */}
  <View style={{display:"flex",justifyContent:"center",alignItems:"center",flex:1}}>

    <View style={{margin:50}}>
    <Login setName={setName} setPass={setPass} showName={showName} setshowPass={setshowPass}
    setshowName={setshowName} showPass={showPass}/>
    </View>

 
  <Pressable onPress={validate}
  style={{backgroundColor:"green",paddingVertical:15,paddingHorizontal:45,borderRadius:10,marginBottom:40,opacity:0.9}}>
        <Text style={{color:"white",fontSize:25}} >Welcome</Text>
      </Pressable>


  {/* :  */}
  </View>
   {/* <ActivityIndicator color="red"/> */}
  
 </>

 

}
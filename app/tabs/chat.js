import { Text, View, TextInput,TouchableOpacity, Platform,  KeyboardAvoidingView, } from 'react-native'
import React, {  useEffect, useState } from 'react'


const chat = () => {

  const [texts,setTexts]= useState([]);
  const [currText, setCurrText] = useState("");
  
  
      

  const socket = new WebSocket('ws://192.168.29.111:3000');
  
  useEffect(()=>{
    
    
    
    
    socket.addEventListener('open', function (event) {
      console.log('Connected to WS Server')
    });
    
    // Listen for messages
    socket.addEventListener('message', function (event) {
      console.log('Message from server ', event);

      setNewText(event.data)
     
    });
    
    
  },[]);

   const setNewText =(data)=>{
    let newTexts = texts;
    newTexts.push({"me":false,"message": data});
    
    
    setTexts([...newTexts]);
   }

   const sendMessage = () => {
    socket.send(currText);
    setCurrText("");
}

    return(
      <View style={{flex:1,justifyContent:"flex-end",alignItems:"center"}}>

        {texts.map((text,index)=> <View style={[text.me ?{ alignItems:"flex-start"} : { alignItems:"flex-end"},{width:"100%",paddingHorizontal:20,paddingVertical:10}]} key={index}>
        <Text style={{borderWidth:1,borderColor:"lightgrey",paddingHorizontal:15,paddingVertical:5,borderRadius:15}}>{text.message}</Text>
        </View>)}


        <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      ><View style={{width:"90%",alignItems:"center",gap:2,flexDirection:"row",justifyContent:"center",marginBottom:40}}>

        <TextInput style={{width:"80%",borderWidth:1,borderColor:"lightgrey",paddingHorizontal:15,paddingVertical:5,borderRadius:15
        }}
        onChangeText={newText => setCurrText(newText) } value={currText}/>
        <TouchableOpacity 
        style={{borderWidth:1,borderRadius:15,backgroundColor:"lightblue",borderColor:"grey",paddingHorizontal:10,paddingVertical:5,justifyContent:"center"}}  
        onPress={() => {
          let newTexts = texts;
           newTexts.push({"me":true,"message": currText});

           
          setTexts([...newTexts]);  
          sendMessage();}}>
          <Text style={{color:"white"}}>Send</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </View>
    )
  }


export default chat
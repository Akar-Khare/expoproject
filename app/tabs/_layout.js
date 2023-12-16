import { Tabs } from 'expo-router/tabs';
import { AntDesign,MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function AppLayout() {
  return (
    <Tabs>
     <Tabs.Screen
       
        name="index"
        options={{
         
          title:"Home",
          tabBarActiveBackgroundColor:"orange",
          tabBarActiveTintColor:"black",
          tabBarIcon:({ focused, horizontal, tintColor }) => {
            return <AntDesign name="home" size={24} color="black" />
          },

          headerTitle:"Home",
          headerLeft:()=>(<Link href={"/"}>{`<`}</Link>),
          headerLeftContainerStyle:{
            paddingLeft:20,
            fontWeight:"bold",
            outline:"none"
          }
        }}
      />
      <Tabs.Screen
       
        name="hotTrends"
        options={{
          
          headerTitle:"Trends",
          tabBarActiveTintColor:"black", 
          tabBarActiveBackgroundColor:"orange",
          tabBarIcon:({ focused, horizontal, tintColor }) => {
            return <MaterialIcons name="info-outline" size={24} color="black" />
          },
          title:"Hot Trends",
         
        }}
      />
        <Tabs.Screen
       
       name="chat"
       options={{
         
         headerTitle:"Chat",
         tabBarActiveTintColor:"black", 
         tabBarActiveBackgroundColor:"orange",
         tabBarIcon:({ focused, horizontal, tintColor }) => {
           return <MaterialIcons name="info-outline" size={24} color="black" />
         },
         title:"Chat",
        
       }}
     />
       <Tabs.Screen
       
       name="brands"
       options={{
         
         headerTitle:"Brands",
         tabBarActiveTintColor:"black", 
         tabBarActiveBackgroundColor:"orange",
         tabBarIcon:({ focused, horizontal, tintColor }) => {
           return <MaterialIcons name="info-outline" size={24} color="black" />
         },
         title:"Brands",
        
       }}
     />
      <Tabs.Screen
        
        name="exit"
        options={{
          
          headerTitle:"Exit",
          tabBarActiveTintColor:"black", 
          tabBarActiveBackgroundColor:"lightblue",
          tabBarIcon:({ focused, horizontal, tintColor }) => {
            return <MaterialIcons name="exit-to-app" size={24} color="black" />
          },
          title:"LogOut"
        
        }}
      />
    </Tabs>
  )
}
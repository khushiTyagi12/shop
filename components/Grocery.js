import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect, Fragment} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image,TextInput,Dimensions,ScrollView,FlatList,ActivityIndicator } from 'react-native';
import List from "../components/List";
import SearchBar from "../components/SearchBar";
const { width, height } = Dimensions.get("window");


const Item = ({ title,Address,image}) => (
   <View style={{marginLeft:25,marginRight:25,marginTop:40,borderRadius:15,borderWidth:1,flexDirection:'row',paddingBottom:10,paddingTop:10,backgroundColor:'white'}}>
                         <View style={{width:width * 0.4,justifyContent:'center',alignItems:'center'}}>
                           <Text style={{fontSize:14,fontWeight:'bold'}}>{title}</Text>
                           <Text style={{fontSize:10,color:'gray',marginLeft:10,textAlign:'center',marginTop:8}}>{Address}</Text>
                       
                         </View>
                        <View style={{width:width * 0.6}}>
                          <TouchableOpacity >
                            <Image source={image} style={{height:90,width:130,borderRadius:10,marginLeft:20}}></Image> 
                          </TouchableOpacity>
                            
                        </View>
      </View>
                    
);
const data = [
  {
    id: '1',
    title: 'Yogesh Shop',
    Address:'Hisar,Haryana',
    image:require('./../assets/images/ashop.jpg')
  },
  {
    id: '2',
    title: 'Lalit shop',
    Address:'Ghaziabad,UP',
    image:require('./../assets/images/xshop.jpg')
  },
  {
    id: '3',
    title: 'Khushi shop',
    Address:'Merrut,UP',
    image:require('./../assets/images/ashop.jpg')
  },
  {
    id: '4',
    title: 'Avinash shop',
    Address:'Mohabbatpur,Bihar',
    image:require('./../assets/images/xshop.jpg')
  },
  {
    id: '5',
    title: 'Niharika shop',
    Address:'somewhere in Bihar',
    image:require('./../assets/images/ashop.jpg')
  }
];

export default  class Grocery  extends React.Component {
   render(){
        const { navigation } = this.props
        const renderItem = ({ item }) => (
          <Item title={item.title}
          Address={item.Address}
          image={item.image} />
          );
     return (
      
       
                         <FlatList 
                         
                           data={data}
                          renderItem={renderItem}
                          keyExtractor={item => item.id}
                          //renderItem={item}
                          //keyExtractor={(item,index) => index.toString()}
                          /> 
                          
                       
                   
           
      
                
    
    );
  }}


 const styles = StyleSheet.create({
 
 
  
  
     
        container: {
          flex: 1,
          backgroundColor: '#2f4f4f',
          
        },
      
    });
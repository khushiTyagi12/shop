import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image,TextInput,Dimensions,ScrollView } from 'react-native';
const { width, height } = Dimensions.get("window");
export default class Grocery extends React.Component {
    render(){
        const { navigation } = this.props
        return (
                 <View style={styles.container}><StatusBar style="light" />
                       <ScrollView>
                    <View style={{marginLeft:25,marginRight:25,marginTop:40,borderRadius:15,borderWidth:1,flexDirection:'row',paddingBottom:10,paddingTop:10,backgroundColor:'white'}}>
                        <View style={{width:width * 0.4,justifyContent:'center',alignItems:'center'}}>
                          <Text style={{fontSize:14,fontWeight:'bold'}}>ABC SHOP</Text>
                          <Text style={{fontSize:10,color:'gray',marginLeft:10,textAlign:'center',marginTop:8}}>Address for shop-1</Text>
                          
                        </View>
                        <View style={{width:width * 0.6}}>
                          <TouchableOpacity >
                            <Image source={require('./../assets/images/ashop.jpg')} style={{height:90,width:130,borderRadius:10,marginLeft:20}}></Image> 
                          </TouchableOpacity>
                            
                        </View>
                    </View>
                    <View style={{marginLeft:25,marginRight:25,marginTop:30,borderRadius:15,borderWidth:1,flexDirection:'row',paddingBottom:10,paddingTop:10,backgroundColor:'white'}}>
                        <View style={{width:width * 0.4,justifyContent:'center',alignItems:'center'}}>
                          <Text style={{fontSize:14,fontWeight:'bold'}}>XYZ SHOP</Text>
                          <Text style={{fontSize:10,color:'gray',marginLeft:10,textAlign:'center',marginTop:8}}>Address for shop-2</Text>
                        </View>
                        <View style={{width:width * 0.6}}>
                          <TouchableOpacity>
                            <Image source={require('./../assets/images/xshop.jpg')} style={{height:90,width:130,borderRadius:10,marginLeft:20}}></Image> 
                          </TouchableOpacity>
                            
                        </View>
                    </View>
                    <View style={{marginLeft:25,marginRight:25,marginTop:30,borderRadius:15,borderWidth:1,flexDirection:'row',paddingBottom:10,paddingTop:10,backgroundColor:'white'}}>
                        <View style={{width:width * 0.4,justifyContent:'center',alignItems:'center'}}>
                          <Text style={{fontSize:14,fontWeight:'bold'}}>LAY SHOP</Text>
                          <Text style={{fontSize:10,color:'gray',marginLeft:10,textAlign:'center',marginTop:8}}>Address for shop-3</Text>
                        </View>
                        <View style={{width:width * 0.6}}>
                          <TouchableOpacity>
                            <Image source={require('./../assets/images/genshop.jpg')} style={{height:90,width:130,borderRadius:10,marginLeft:20}}></Image> 
                          </TouchableOpacity>
                            
                        </View>
                    </View>
                   
                   </ScrollView>
           
                 </View>
        );
      }
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#2f4f4f',
        },
      
      });
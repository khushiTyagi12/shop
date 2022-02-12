import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image,TextInput,Dimensions, ScrollView } from 'react-native';
const { width, height } = Dimensions.get("window");
export default class Home extends React.Component {
    render(){
        const { navigation } = this.props
        return (
          
                 <View style={styles.container}><StatusBar style="light" />
                   <View style={{backgroundColor:'black',width:width,height:110,flexDirection:'row'}}>
                      <View style={{width:width}}>
                           <TextInput  style={{
                                                        
                                                        height: 50,marginTop:40,
                                                        marginLeft:25,
                                                        fontSize:18,
                                                        marginRight:25,
                                                        borderColor: 'white',
                                                        backgroundColor:'white',
                                                        borderRadius: 6,
                                                        padding: 5,
                                                        borderWidth: 1
                                                    }} 
                                                placeholder="Search">
                                   </TextInput> 
                      </View>
                      
                    
                   </View>
                   <ScrollView>
                    <View style={{marginLeft:25,marginRight:25,marginTop:40,borderRadius:15,borderWidth:1,flexDirection:'row',paddingBottom:10,paddingTop:10,backgroundColor:'white'}}>
                        <View style={{width:width * 0.4,justifyContent:'center',alignItems:'center'}}>
                          <Text style={{fontSize:14,fontWeight:'bold'}}>GROCERIES</Text>
                        </View>
                        <View style={{width:width * 0.6}}>
                          <TouchableOpacity onPress={() => navigation.navigate('Grocery')} >
                            <Image source={require('./../assets/images/grocery.jpg')} style={{height:90,width:130,borderRadius:10,marginLeft:20}}></Image> 
                          </TouchableOpacity>
                            
                        </View>
                    </View>
                    <View style={{marginLeft:25,marginRight:25,marginTop:30,borderRadius:15,borderWidth:1,flexDirection:'row',paddingBottom:10,paddingTop:10,backgroundColor:'white'}}>
                        <View style={{width:width * 0.4,justifyContent:'center',alignItems:'center'}}>
                          <Text style={{fontSize:14,fontWeight:'bold'}}>DAIRY PRODUCT</Text>
                        </View>
                        <View style={{width:width * 0.6}}>
                          <TouchableOpacity>
                            <Image source={require('./../assets/images/dairy.jpeg')} style={{height:90,width:130,borderRadius:10,marginLeft:20}}></Image> 
                          </TouchableOpacity>
                            
                        </View>
                    </View>
                    <View style={{marginLeft:25,marginRight:25,marginTop:30,borderRadius:15,borderWidth:1,flexDirection:'row',paddingBottom:10,paddingTop:10,backgroundColor:'white'}}>
                        <View style={{width:width * 0.4,justifyContent:'center',alignItems:'center'}}>
                          <Text style={{fontSize:14,fontWeight:'bold'}}>DAIRY PRODUCT</Text>
                        </View>
                        <View style={{width:width * 0.6}}>
                          <TouchableOpacity>
                            <Image source={require('./../assets/images/dairy.jpeg')} style={{height:90,width:130,borderRadius:10,marginLeft:20}}></Image> 
                          </TouchableOpacity>
                            
                        </View>
                    </View>
                    <View style={{marginLeft:25,marginRight:25,marginTop:30,borderRadius:15,borderWidth:1,flexDirection:'row',paddingBottom:10,paddingTop:10,backgroundColor:'white'}}>
                        <View style={{width:width * 0.4,justifyContent:'center',alignItems:'center'}}>
                          <Text style={{fontSize:14,fontWeight:'bold'}}>DAIRY PRODUCT</Text>
                        </View>
                        <View style={{width:width * 0.6}}>
                          <TouchableOpacity>
                            <Image source={require('./../assets/images/dairy.jpeg')} style={{height:90,width:130,borderRadius:10,marginLeft:20}}></Image> 
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
          paddingBottom:100
        },
      
      });
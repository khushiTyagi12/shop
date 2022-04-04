import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image,TextInput,Dimensions,ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
const { width, height } = Dimensions.get("window");
export default class MyProduct extends React.Component {
    render(){
        const { navigation } = this.props
        return (
            
                <View style={styles.container}><StatusBar style="light" />
                    <TouchableOpacity  onPress={() => navigation.navigate('Firstshop')}>
                        <View style={{backgroundColor:'#6495ed',flexDirection:'row',alignItems:'center',alignSelf:'center',justifyContent:'center',width:width, height:35}}>
                            <Text style={{alignSelf:'center', color:'white'}}>
                              View your shop as Customer
                            </Text>
                            <Image source={require('./../assets/images/view.png')} style={{height:22,width:22,marginLeft:4}}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:15,marginTop:35}}>
                        <Text style={{fontWeight:'bold',fontSize:20}}>All Categories</Text>
                    </View>
                    <View style={{backgroundColor:'white',flexDirection:'row', marginLeft:15,marginRight:15,borderBottomWidth:2,borderBottomColor:'gray',borderTopLeftRadius:10,borderTopRightRadius:10, height:45,marginTop:10}}>
                        <TouchableOpacity>
                            <Image source={require('./../assets/images/edit.png')} style={{marginLeft:5,marginTop:5,height:20, width:20}}/>
                        </TouchableOpacity>
                       <Text style={{marginLeft:5, marginTop:5, fontWeight:'bold',color:'gray'}}>Shop Name</Text>
                       
                    </View>
                    <View style={{backgroundColor:'white', marginLeft:15,marginRight:15, height:height*0.14,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                       <View style={{flexDirection:'row'}}>
                           <Image source={require('./../assets/images/rice.jpg')} style={{height:65,width:65, marginLeft:5, marginTop:10, borderRadius:10}}/>
                           <Text style={{marginTop:10, marginLeft:25}}>Rice</Text>
                        </View>
                        
                        <Text style={{marginLeft:7,marginTop:5, fontSize:10, color:'#6495ed'}}>Rs. 60/kg.</Text>
                        
                    </View>
                    <View style={{backgroundColor:'white',flexDirection:'row', marginLeft:15,marginRight:15,borderBottomWidth:2,borderBottomColor:'gray',borderTopLeftRadius:10,borderTopRightRadius:10, height:45,marginTop:10}}>
                        <TouchableOpacity>
                            <Image source={require('./../assets/images/edit.png')} style={{marginLeft:5,marginTop:5,height:20, width:20}}/>
                        </TouchableOpacity>
                       <Text style={{marginLeft:5, marginTop:5, fontWeight:'bold',color:'gray'}}>Shop Name</Text>
                       
                    </View>
                    <View style={{backgroundColor:'white', marginLeft:15,marginRight:15, height:height*0.14,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                       <View style={{flexDirection:'row'}}>
                           <Image source={require('./../assets/images/pulse_img.jpg')} style={{height:65,width:65, marginLeft:5, marginTop:10, borderRadius:10}}/>
                           <Text style={{marginTop:10, marginLeft:25}}>Pulse</Text>
                        </View>
                        
                        <Text style={{marginLeft:7,marginTop:5, fontSize:10, color:'#6495ed'}}>Rs. 70/kg.</Text>
                        
                    </View>
                    
                    
                    

                </View>
        );
      }
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#f5f5f5',
          
        },
      
      });
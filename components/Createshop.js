import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button, TextInput,TouchableOpacity,SafeAreaView,Dimensions} from 'react-native'; 
const { width, height } = Dimensions.get("window");
export default class Createshop extends React.Component {
  render(){
    const { navigation } = this.props
    return (
       <View style={styles.container}>
               <StatusBar style="light" />
                     <View style={{width:width,marginTop:height*0.2}}>
                          <TextInput placeholder="Shop Name"
                             style={{
                                      height: 60,
                                      //width:300,
                                      marginLeft:35,marginRight:35,
                                      borderColor: 'hsla(200, 80%, 20%,1)',
                                      borderRadius: 8,
                                      padding: 10,
                                      borderWidth: 2,fontSize:15
                                    }}
                            />
                      </View>
                      <View style={{width:width,marginTop:30}}>
                          <TextInput placeholder="Address"
                             style={{
                                      height: 60,
                                      //width:300,
                                      marginLeft:35,marginRight:35,
                                      borderColor: 'hsla(200, 80%, 20%,1)',
                                      borderRadius: 8,
                                      padding: 10,
                                      borderWidth: 2,fontSize:15
                                    }}
                            />
                      </View>
                      <View style={{width:width,marginTop:60}}>
                          <TouchableOpacity onPress={() => navigation.navigate('Additems')}
                             style={{
                                      height: 60,
                                      //width:300,
                                      marginLeft:35,marginRight:35,
                                      borderColor: 'hsla(200, 80%, 20%,1)',
                                      borderRadius: 8,
                                      padding: 10,
                                      borderWidth: 2,
                                      backgroundColor:'black'
                                    }}
                                  >
                                <Text style={{color:'white',fontWeight:'bold',fontSize:20,alignSelf:'center'}}>Create Shop</Text>
                          </TouchableOpacity>  
                            
                      </View>
                      
        </View>
         );
        }
      }
       const styles = StyleSheet.create({
         container: {
         flex: 1,
         backgroundColor: '#fff',
         alignItems: 'center',
       },
       
 }

);    
  
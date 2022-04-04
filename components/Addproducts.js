import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button, TextInput,TouchableOpacity,SafeAreaView,Dimensions,Image, ScrollView} from 'react-native'; 

const { width, height } = Dimensions.get("window");
export default class Addproducts extends React.Component {
  render(){
    const { navigation } = this.props
    return (

       <View style={styles.container}>
               <StatusBar style="light" />
            
               <View style={{width:width-15,borderRadius:10,marginLeft:15,marginRight:15,height:height*0.2, backgroundColor:'black',marginTop:10,alignSelf:'center', justifyContent:'center'}}>
                    <TouchableOpacity>
                        <Image source={require('./../assets/images/upload8.png')} style={{height:55,width:55,alignSelf:'center'}}/>
                    </TouchableOpacity>
                        <Text style={{alignSelf:'center' ,fontWeight:'bold',fontSize:20,color:'white'}}>Upload Photo</Text>
                    
               </View>
            <ScrollView style={{marginTop:20}}>
             <View style={{marginTop:10}} >
                 
               <View style={{width:width-30,marginTop:20,backgroundColor:'white',padding:10,borderRadius:10}}>
                          <TextInput placeholder="Product Name"
                             style={{ 
                                      height: 60,
                                    
                                      marginLeft:15,marginRight:15,
                                      //borderColor: 'hsla(200, 80%, 20%,1)',
                                      borderColor: 'black',
                                      borderRadius: 8,
                                      padding: 10,
                                      borderWidth: 2,fontSize:15,
                                      backgroundColor:'white'
                                    }}
                            />
                </View>
             
                <View style={{width:width-30,marginTop:20,backgroundColor:'white',padding:10,borderRadius:10}}>
                          <TextInput placeholder="Price (Rs.)"
                             style={{ 
                                      height: 60,
                                    
                                      marginLeft:15,marginRight:15,
                                      borderColor: 'black',
                                      borderRadius: 8,
                                      padding: 10,
                                      borderWidth: 2,fontSize:15,
                                      backgroundColor:'white'
                                    }}
                            />
                </View>
                <View style={{width:width-30,marginTop:20,backgroundColor:'white',padding:10,borderRadius:10}}>
                          <TextInput placeholder="Description"
                             style={{ 
                                      height: 60,
                                    
                                      marginLeft:15,marginRight:15,
                                      //borderColor: 'hsla(200, 80%, 20%,1)',
                                      borderColor: 'black',
                                      borderRadius: 8,
                                      padding: 10,
                                      borderWidth: 2,fontSize:15,
                                      backgroundColor:'white'
                                    }}
                            />
                </View>
              <View style={{width:width-30,marginTop:20,backgroundColor:'white',padding:10,borderRadius:10}}>
                          <TextInput placeholder="Enter Category(Optional)"
                             style={{ 
                                      height: 60,
                                    
                                      marginLeft:15,marginRight:15,
                                      borderColor: 'black',
                                      borderRadius: 8,
                                      padding: 10,
                                      borderWidth: 2,fontSize:15,
                                      backgroundColor:'white'
                                    }}
                            />
              </View>
              
           </View>
        </ScrollView>
            
              <View style={{alignItem:"center",justifyContent:'flex-end',height:65,backgroundColor:'black',width:width-20,borderRadius:12,flex:1,marginBottom:10}}>
                  <TouchableOpacity onPress={() => navigation.navigate('MyProduct')}>
                      <Text style={{fontSize:18, fontWeight:'bold', marginBottom:13,color:"white",alignSelf:'center',justifyContent:'center',textAlign:'center',alignContent:'center'
                    }}>Add Item</Text>
                  </TouchableOpacity>
            

              </View>

                   
       </View>

       
         );
        }
      }
       const styles = StyleSheet.create({
         container: {
         flex: 1,
         backgroundColor: '#f5f5f5',
         alignItems: 'center',
       },
       bottomCenter: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30
    }
      
 }

);    
  
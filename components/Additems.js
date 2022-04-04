import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button, TextInput,TouchableOpacity,SafeAreaView,Dimensions,Image} from 'react-native'; 
const { width, height } = Dimensions.get("window");
export default class Additems extends React.Component {
  render(){
    const { navigation } = this.props
    return (
       <View style={styles.container}>
               <StatusBar style="light" />
               <Image source={require('./../assets/images/rack.jpg')} style={{height:height*0.4,width:width,opacity:0.5}}></Image>
               <View style={{width:width,marginTop:30}}>
                          <TouchableOpacity onPress={() => navigation.navigate('Addproducts')}
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
                                <Text style={{color:'white',fontWeight:'bold',fontSize:20,alignSelf:'center'}}>Add Items</Text>
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
  
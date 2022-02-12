import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image,TextInput,Dimensions,ScrollView } from 'react-native';
const { width, height } = Dimensions.get("window");
export default class Notification extends React.Component {
    render(){
        const { navigation } = this.props
        return (
                 <View style={styles.container}><StatusBar style="light" />
                    <View style={{width:width,backgroundColor:'black',height:100}}> 
                       <Text style={{fontSize:20,textAlign:'center',color:'white',marginTop:50}}>NOTIFICATIONS</Text>
                    </View> 
                    <ScrollView>
                      <Image source={require('./../assets/images/notifications.png')} style={{height:150,width:150,marginTop:height/4}} />
                      <Text style={{fontSize:20,color:'black',marginTop:10}}>NO NOTIFICATIONS</Text>
                    </ScrollView>
              
                 </View>
        );
      }
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#2f4f4f',
          alignItems: 'center',
          justifyContent: 'center',
        },
      
      });
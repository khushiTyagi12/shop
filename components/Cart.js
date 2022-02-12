import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image,TextInput,Dimensions, ScrollView } from 'react-native';
const { width, height } = Dimensions.get("window");
export default class Cart extends React.Component {
    render(){
        const { navigation } = this.props
        return (
                 <View style={styles.container}><StatusBar style="light" />
                   <ScrollView>
                   <Text style={{fontSize:20,textAlign:'center',marginTop:300,color:'white'}}>This is Cart screen</Text>
                   <Text style={{fontSize:20,textAlign:'center',marginTop:300,color:'white'}}>This is cart screen</Text>
                   <Text style={{fontSize:20,textAlign:'center',marginTop:300,color:'white'}}>This is cart screen</Text>
                   
                   </ScrollView>
                   
           
                 </View>
        );
      }
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'gray',
        },
      
      });
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image,TextInput,Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
export default class Nearby extends React.Component {
    render(){
        const { navigation } = this.props
        return (
                 <View style={styles.container}><StatusBar style="light" />
              <Text style={{fontSize:20,textAlign:'center',marginTop:300,color:'white'}}>This is Nearby Screen</Text>
           
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
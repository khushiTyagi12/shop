import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image,TextInput,Dimensions,ScrollView } from 'react-native';
const { width, height } = Dimensions.get("window");
export default class Notification extends React.Component {
    render(){
        const { navigation } = this.props
        return (
                 <View style={styles.container}><StatusBar style="light" />
                 <Text> Notification</Text>
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
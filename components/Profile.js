import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image,TextInput,Dimensions } from 'react-native';
import { Fragment } from 'react/cjs/react.production.min';
const { width, height } = Dimensions.get("window");
export default class Profile extends React.Component {
    render(){
        const { navigation } = this.props
        return (
          <Fragment>
                 
                       
                      
                     
                      
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

                <Text style={styles.name}>ABC </Text>
                <Text style={styles.userInfo}>+919027551815 </Text>
                <Text style={styles.userInfo}> </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/cottage.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Home</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/administrator-male.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Settings</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/filled-like.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Previous Order</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/facebook-like.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Shop</Text>
              </View>
            </View>

          </View>
      </View>
    



                                            

                                 
          </Fragment>
        );
        }
        }
    const styles = StyleSheet.create({
      
        header:{
          backgroundColor: "#DCDCDC",
        },
        headerContent:{
          padding:30,
          alignItems: 'center',
        },
        avatar: {
          width: 130,
          height: 130,
          borderRadius: 63,
          borderWidth: 4,
          borderColor: "white",
          marginBottom:10,
        },
        name:{
          fontSize:22,
          color:"#000000",
          fontWeight:'600',
        },
        userInfo:{
          fontSize:16,
          color:"#778899",
          fontWeight:'600',
        },
        body:{
          backgroundColor: "#778899",
          height:500,
          alignItems:'center',
        },
        item:{
          flexDirection : 'row',
        },
        infoContent:{
          flex:1,
          alignItems:'flex-start',
          paddingLeft:5
        },
        iconContent:{
          flex:1,
          alignItems:'flex-end',
          paddingRight:5,
          justifyContent:'center',
          alignContent:'center',
          
        },
        icon:{
          width:30,
          height:30,
          marginTop:20,
        },
        info:{
          fontSize:18,
          marginTop:20,
          color: "#FFFFFF",
        },
      
        container: {
          flex: 1,
          backgroundColor: 'white',
          marginTop:50
        },
      
      });
    
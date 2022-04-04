import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image,TextInput,Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Welcome from './Welcome';
import Notification from './Notification'
import Profile from './Profile';
import Cart from './Cart';
import Nearby from './Nearby';
const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");
const CustomTabBarButton = ({children, onPress}) =>(
    <TouchableOpacity 
    style={{
      top: -30,
      justifyContent:'center',
      alignItems:'center',
      ...styles.shadow
    }}
    onPress={onPress}>
      <View 
      style={{
        width:70,height:70,
        borderRadius:35,
        backgroundColor:'hsla(200, 80%, 20%,1)',
      }}>
        {children}
      </View>
    </TouchableOpacity>
);
export default class Bottomtab extends React.Component {
    render(){
        const { navigation } = this.props
        return (
            <Tab.Navigator
                      initialRouteName="Home"
                      
                      tabBarOptions={{ showLabel:false,
                          style:{
                              position:'absolute',
                              bottom:20,left:10,right:10,
                              elevation:0,
                              backgroundColor:'white',
                              borderRadius:15,
                              height:80,
                              ...styles.shadow
                          }
                      }}
                      
            >
                      <Tab.Screen
                        name="Home"
                        component={Home}            
                        options={{
                          tabBarIcon: ({focused}) =>(
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                              <Image source={require('./../assets/images/home.png')}
                                resizeMode='contain'
                                style={{ width:30,height:30,
                                tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                              />
                              <Text style={{color: focused ? '#e32f45' : '#748c94',fontSize:12}}>HOME</Text>
                            </View>
                          ),
                        }}
                      />
                      <Tab.Screen
                        name="Cart"
                        component={Cart}            
                        options={{
                          tabBarIcon: ({focused}) =>(
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                              <Image source={require('./../assets/images/mycart.png')}
                                resizeMode='contain'
                                style={{ width:30,height:30,
                                tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                              />
                              <Text style={{color: focused ? '#e32f45' : '#748c94',fontSize:12}}>CART</Text>
                            </View>
                          ),
                        }}
                      />
                       <Tab.Screen
                        name="Nearby"
                        component={Nearby}            
                        options={{
                          tabBarIcon: ({focused}) =>(
                            <Image source={require('./../assets/images/nearby.jpg')}
                                resizeMode='contain'
                                style={{ width:30,height:30,
                                tintColor:'#fff'
                                }}
                              
                              />
                               ),
                            tabBarButton:(props)=> (
                              <CustomTabBarButton {...props}/>
                            )
                        }}
                      />
                       <Tab.Screen
                        name="Notification"
                        component={Notification}            
                        options={{
                          tabBarIcon: ({focused}) =>(
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                              <Image source={require('./../assets/images/noti.png')}
                                resizeMode='contain'
                                style={{ width:30,height:30,
                                tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                              />
                              <Text style={{color: focused ? '#e32f45' : '#748c94',fontSize:12}}>NOTIFY</Text>
                            </View>
                          ),
                        }}
                      />
                       <Tab.Screen
                        name="Profile"
                        component={Profile}            
                        options={{
                          tabBarIcon: ({focused}) =>(
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                              <Image source={require('./../assets/images/pro.png')}
                                resizeMode='contain'
                                style={{ width:30,height:30,
                                tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                              />
                              <Text style={{color: focused ? '#e32f45' : '#748c94',fontSize:12}}>PROFILE</Text>
                            </View>
                          ),
                        }}
                      />
                      
          </Tab.Navigator>
        );
    }
}
const styles = StyleSheet.create({
  shadow:{
    shadowColor:'#7F5DF0',
    shadowOffset:{
      height:10,width:0
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5,
  }

});
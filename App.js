import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image,TextInput,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './components/Welcome';
import Splash from './components/Splash';
import Login from './components/Login';
import Intro from './components/Intro';
import Register from './components/Register';
import Otp from './components/Otp';
import Home from './components/Home';
import Bottomtab from './components/Bottomtab';
import Notification from './components/Notification';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Nearby from './components/Nearby';
import Grocery from './components/Grocery';
const { width, height } = Dimensions.get("window");
const Stack = createStackNavigator();
export default class App extends React.Component {
    render(){
      const { navigation } = this.props
      return (
         <NavigationContainer> 
             <Stack.Navigator initialRouteName="Splash">  
               <Stack.Screen name="Welcome" component={Welcome} 
                    options={{
                                  headerShown: false
                                }}
               />
               <Stack.Screen name="Splash" component={Splash} 
                    options={{
                              headerShown: false
                             }}     
              />  
              <Stack.Screen name="Login" component={Login} 
                    options={{
                            title: 'LOGIN',
                            headerTitleAlign:'center',
                            headerTintColor: 'white',
                            headerStyle: {
                            backgroundColor: 'black',
                          },
                            headerTitleStyle: {
                            fontWeight: 'bold',
                            color: 'white'          
                            },
                         }}
               />
               <Stack.Screen name="Register" component={Register} 
                    options={{
                            title: 'REGISTER',
                            headerTitleAlign:'center',
                            headerTintColor: 'white',
                            headerStyle: {
                            backgroundColor: 'black',
                          },
                            headerTitleStyle: {
                            fontWeight: 'bold',
                            color: 'white'          
                            },
                         }}
               />
                <Stack.Screen name="Otp" component={Otp} 
                    options={{
                            title: 'OTP',
                            headerTitleAlign:'center',
                            headerTintColor: 'white',
                            headerStyle: {
                            backgroundColor: 'black',
                          },
                            headerTitleStyle: {
                            fontWeight: 'bold',
                            color: 'white'          
                            },
                         }}
               />
               <Stack.Screen name="Intro" component={Intro} 
                    options={{
                              headerShown: false
                            }}
              />
               <Stack.Screen name="Home" component={Home} 
                    options={{
                              headerShown: false
                            }}
              />
              <Stack.Screen name="Notification" component={Notification} 
                    options={{
                              headerShown: false
                            }}
              />
              <Stack.Screen name="Bottomtab" component={Bottomtab} 
                   options={{
                       headerShown:false
                      }}
              />
              <Stack.Screen name="Cart" component={Cart} 
                    options={{
                        headerShown:false
                        }}
              /> 
              <Stack.Screen name="Profile" component={Profile} 
                    options={{
                        headerShown:false
                        }}
              />    
              <Stack.Screen name="Nearby" component={Nearby} 
                    options={{
                        headerShown:false
                        }}
              /> 
              <Stack.Screen name="Grocery" component={Grocery} 
                    options={{
                            title: '',
                  headerRight:()=>(
                                   <TextInput  style={{
                                                        width:width * 0.7,
                                                        height: 50,
                                                        marginRight:50,
                                                        fontSize:18,
                                                        borderColor: 'white',
                                                        backgroundColor:'white',
                                                        borderRadius: 6,
                                                        padding: 10,
                                                        borderWidth: 1,
                                                        
                                                    }} 
                                                placeholder="Search Grocery">
                                   </TextInput> 
                                  ),                          
                            headerTitleAlign:'center',
                            headerTintColor: 'white',
                            headerStyle: {
                                          backgroundColor: 'black',
                                          height:120
                                          },
                            headerTitleStyle:{
                                              fontWeight: 'bold',
                                              color: 'white'     
                                             },
                        }}
               />    
        </Stack.Navigator>
      </NavigationContainer>
     );
    } 
  }        
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

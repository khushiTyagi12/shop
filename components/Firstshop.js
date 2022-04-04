import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image,TextInput,Dimensions, ScrollView,FlatList, ImageBackground } from 'react-native';
//import { FlatList } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get("window");
const Item = ({ title,Address,image}) => (
  <View style={{width:width * 0.25,marginTop:30,flexDirection:'column',paddingTop:10,paddingBottom:10,marginLeft:10}}>
                        <View style={{}}>
                         <TouchableOpacity  >
                           <Image source={image} style={{height:80,width:80,borderRadius:40,alignItems:'center',alignSelf:'center'}}></Image> 
                         </TouchableOpacity>
                           
                       </View>
                        <View style={{justifyContent:'center',alignItems:'center',marginTop:5}}>
                          <Text style={{fontSize:12,fontWeight:'bold'}}>{title}</Text>
  
                        </View>
                       
                   </View>
                   
);
const data = [
 {
   id: '1',
   title: 'Rice',
   image:require('./../assets/images/rice.jpg')
 },
 {
   id: '2',
   title: 'Cookies',
   image:require('./../assets/images/cookies.jpg')
 },
 {
   id: '3',
   title: 'Pulse',
   
   image:require('./../assets/images/pulse_img.jpg')
 },
 {
   id: '4',
   title: 'Frozen Food',
   
   image:require('./../assets/images/frozen_food.jpg')
 },
 {
   id: '5',
   title: 'Chocolates',
   
   image:require('./../assets/images/chocolate.jpg')
 }
];

const renderItem = ({ item }) => (
  <Item title={item.title}
  Address={item.Address}
  image={item.image} />
  

);


  

export default class Firstshop extends React.Component {
  
  
    render(){
        const { navigation } = this.props
        return (
          <Fragment>
          
            <View style={styles.container}><StatusBar style="light" />
                <FlatList horizontal={true}
                      onPress={() => navigation.navigate('Rice')}
                      data={data}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                      showsHorizontalScrollIndicator={false}
                      
                      
            /> 
            {/* <View style={{backgroundColor:'black',width:width,height:30,alignContent:'center',alignItems:'center'}}>
              <Text style={{fontWeight:'bold',color:'white',alignSelf:'center'}}>New Arrivals</Text>
            </View> */}
            </View>
            <ScrollView>
      <View>
           <View style={styles.mainContainer}>
             <TouchableOpacity onPress={() => navigation.navigate('Rice')}>
                <Image source={require('./../assets/images/chocolate.jpg')} style={{height:110,alignSelf:'center',width:'100%',height:'100%',borderTopLeftRadius:10,borderTopRightRadius:10}} /> 
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                <View style={{width:width*0.5,backgroundColor:'white'}}>
                    <Text style={{fontWeight:'bold',fontSize:16,marginTop:8,marginLeft:5}}>Cadbury Chocolates</Text>
                </View>
                <View style={{width:width*0.445,backgroundColor:'white', alignItems:'flex-end'}}>
                    <Text style={{fontWeight:'bold',fontSize:16,marginTop:8,marginRight:30}}>Rs.150</Text>
                </View>
            </View>
               <View style={{backgroundColor:'white' ,borderBottomEndRadius:10,borderBottomLeftRadius:10, borderTopWidth:0.5, marginTop:2}}>
                  <Text style={{color:'black',marginTop:10,alignSelf:'center',fontWeight:'bold'}}>
                    Add To Cart
                  </Text>
            </View>
            </View>
        </View>

        

        <View style={{marginTop:38}}>
           <View style={styles.mainContainer}>
                <Image source={require('./../assets/images/juice.jpg')} style={{height:110,alignSelf:'center',width:'100%',height:'100%',borderTopLeftRadius:10,borderTopRightRadius:10}} /> 
                <View style={{flexDirection:'row'}}>
                <View style={{width:width*0.5,backgroundColor:'white'}}>
                    <Text style={{fontWeight:'bold',fontSize:16,marginTop:8,marginLeft:5}}>Tropicana Juice</Text>
                </View>
                <View style={{width:width*0.445,backgroundColor:'white', alignItems:'flex-end'}}>
                    <Text style={{fontWeight:'bold',fontSize:16,marginTop:8,marginRight:30}}>Rs.150</Text>
                </View>
            </View>
               <View style={{backgroundColor:'white' ,borderBottomEndRadius:10,borderBottomLeftRadius:10, borderTopWidth:0.5, marginTop:2}}>
                  <Text style={{color:'black',marginTop:10,alignSelf:'center',fontWeight:'bold'}}>
                    Add To Cart
                  </Text>
            </View>
            </View>
        </View>

           

           <View style={{marginTop:38}}>
           <View style={styles.mainContainer}>
                <Image source={require('./../assets/images/surf_excel.jpg')} style={{height:110,alignSelf:'center',width:'100%',height:'100%',borderTopLeftRadius:10,borderTopRightRadius:10}} /> 
                <View style={{flexDirection:'row'}}>
                <View style={{width:width*0.5,backgroundColor:'white'}}>
                    <Text style={{fontWeight:'bold',fontSize:16,marginTop:8,marginLeft:5}}>Detergents</Text>
                </View>
                <View style={{width:width*0.445,backgroundColor:'white', alignItems:'flex-end'}}>
                    <Text style={{fontWeight:'bold',fontSize:16,marginTop:8,marginRight:30}}>Rs.150</Text>
                </View>
            </View>
               <View style={{backgroundColor:'white' ,borderBottomEndRadius:10,borderBottomLeftRadius:10, borderTopWidth:0.5, marginTop:2}}>
                  <Text style={{color:'black',marginTop:10,alignSelf:'center',fontWeight:'bold'}}>
                    Add To Cart
                  </Text>
            </View>
            </View>
        </View>

        
           </ScrollView>
           </Fragment>
            
            
            );
      }
    }
const styles = StyleSheet.create({
                container: {
                  //flex: 1,
                //  backgroundColor: '#2f4f4f',
                  //paddingBottom:100
                },
                mainContainer:{
                  marginTop:45,
                 // backgroundColor:'white',
                  height:height*0.2,
                  marginRight:10,
                  marginLeft:10,
                  justifyContent:'center',
                  //borderRadius:10,
                  borderTopLeftRadius:10,
                  borderTopRightRadius:10,
                  
                  
                  //borderWidth:1
                }
              
              });
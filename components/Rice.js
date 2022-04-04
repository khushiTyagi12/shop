import { StatusBar } from 'expo-status-bar';
import React, { Fragment,useState} from 'react';
import { StyleSheet, Text,Button,onPress,View,TouchableOpacity,TouchableHighlight,SafeAreaView,Image,TextInput,Dimensions,ScrollView,FlatList } from 'react-native';
const { width, height } = Dimensions.get("window");
const Item1 = ({ title,price,image}) => (
    <View style={{marginLeft:25,marginRight:25,marginTop:40,borderRadius:15,borderWidth:1,flexDirection:'row',paddingBottom:10,paddingTop:10,backgroundColor:'white'}}>
                          <View style={{width:width * 0.4,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:14,fontWeight:'bold'}}>{title}</Text>
                            <Text style={{fontSize:10,color:'gray',marginLeft:10,textAlign:'center',marginTop:8}}>{price}</Text>
                       
                          </View>
                         <View style={{width:width * 0.6}}>
                           <TouchableOpacity  >
                             <Image source={image} style={{height:120,width:130,borderRadius:10,marginLeft:20}}></Image> 
                           </TouchableOpacity>
                           
                             
                         </View>
                     </View>
);
const data1 = [
    {
      id: '1',
      title: 'DAWAAT Rice',
      price: 'Rs. 318/kg',
      image:require('./../assets/images/rice1.jpg')
    },
    {
      id: '2',
      title: 'India Gate Rice',
      price: 'Rs. 318/kg',
      image:require('./../assets/images/rice2.jpg')
    },
    {
      id: '3',
      title: 'Fortune Rice',
      price: 'Rs. 318/kg',
      image:require('./../assets/images/rice3.jpg')
    },
    {
      id: '4',
      title: 'Patanjali Rice',
      price: 'Rs. 318/kg',
      image:require('./../assets/images/rice4.jpg')
    },
    {
      id: '5',
      title: 'Lal Qila Rice',
      price: 'Rs. 318/kg',
      image:require('./../assets/images/rice1.jpg')
    }

   ];

    
 
export default class Rice extends React.Component {
    
    render(){
        // const { navigation } = this.props
        // const TouchableHighlightExample = () => {
        //     const [count, setCount] = useState(0);
        //    const onPress = () => setCount( count + 1);
        //   }
        const renderItem = ({ item }) => (
            <Item1 title={item.title}
            price={item.price}
            image={item.image} />
            );
        return (
            <Fragment>
            {/* <View style={styles.container}>
            
            <TouchableHighlight>
                  onPress={onPress}
                  renderItem={TouchableHighlightExample}
              <View style={styles.button}>
                <Text>Touch Here</Text>
              </View>
              </TouchableHighlight>
              <View style={styles.countContainer}>
              <Text style={styles.countText}>
                {count || null}
              </Text>
            </View>
          </View>  */}

           
            <FlatList 
            data={data1}
            renderItem={renderItem}
            keyExtractor={item => item.id}
           //renderItem={item}
           //keyExtractor={(item,index) => index.toString()}
           //https://reactnative.dev/docs/touchablehighlight
           /> 
          
        </Fragment>
           

        );
      }
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          //backgroundColor: '#2f4f4f',
          alignItems: 'center',
          justifyContent: 'center',
        },
       
    
      });
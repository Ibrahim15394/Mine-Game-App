import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Intro = ({navigation}) => {
    
  const onPress = () => {
    navigation.navigate('HomeScreen');
  }
    return (
      <View style={styles.body}>
        <View style={styles.view1}>
          <View style={styles.view1}>
            <Icon 
            style={styles.icon}
              name='tripadvisor'
            />
            <Text style={styles.text}>Dayzer</Text>
          </View>
          <View>
            <Icon style={{ ...styles?.icon, color: '#fff' }}
              name='leaf'
            />
          </View>
        </View>
        <View >
            <Text style={styles.text1}>To simplify{'\n'}the way you {'\n'}work </Text>
        </View>
          <View  style = {styles.viewImage}>
        <Image style = {styles.image} 
          source={require('../assets/images/hacker.jpg')}
          />
          </View>
          <View >
            <Text style={styles.text2}>Controling deliveries in {'\n'} reliable and no-hassle way</Text>
        </View>
        <View >
        <Pressable
         style={styles.button} 
         onPress = {onPress}
         >
          <Text style={styles.textButton}>Get free trial</Text>
        </Pressable>
        </View>
      </View>
      )
  
  };

  export default Intro;
  
  const styles = StyleSheet.create({
    body: {
      flexDirection: 'column',
      backgroundColor: '#D1EDBF',
      flex: 1,
      width: "100%",
      paddingTop: 35,
      paddingBottom: 35,
      paddingLeft:16,
      paddingRight: 16,
    },
    view1: {
      flexDirection: 'row',
      paddingBottom: 20,
      justifyContent: 'space-between',
    },
    icon: {
      fontSize: 30,
      color: '#30251d',
      paddingRight: 10,
    },
    text: {
      fontSize: 20,
      color: '#30251d',
      fontWeight: '800',
    },
    text1: {
      fontSize: 40,
      color: '#30251d',
      fontWeight: '900',
      justifyContent: 'center',
      textAlign: 'center',
      paddingBottom: 20,
    },
    image: {
      height: 250,
      width: 250,
    },
    viewImage: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 20,
    },
    text2: {
      fontSize: 25,
      color: '#30251d',
      fontWeight: '400',
      justifyContent: 'center',
      textAlign: 'center',
      paddingBottom: 40,
    },
    button: {
      backgroundColor: '#24282c',
      height: 65,
      width: '100%',
      borderRadius: 7,
    },
    textButton: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 20,
      margin: 15
    },
  });
  

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';

const ViewScreen = () => {

  const DATA = [
    {
      id: 1,
      image: require('../assets/images/hacker.jpg')
    },
    {
      id: 2,
      image: require('../assets/images/hacker.jpg')
    },
    {
      id: 3,
      image: require('../assets/images/hacker.jpg')
    },
    {
      id: 4,
      image: require('../assets/images/hacker.jpg')
    },
    {
      id: 5,
      image: require('../assets/images/hacker.jpg')
    },
    {
      id: 5,
      image: require('../assets/images/hacker.jpg')
    },
    {
      id: 5,
      image: require('../assets/images/hacker.jpg')
    }

  ]

  ItemSeparatorHorizontal = () => {
    return <View style={{ paddingHorizontal: 8}} />
  }
  return (
    <View style={{ backgroundColor: '#D1EDBF' }}>
      <ScrollView>
      <View style={styles.body}>
        <Icon style={{ fontSize: 35, color: '#411530' }}
          name='close' />
        <Icon style={{ fontSize: 35, color: '#411530' }}
          name='dots-horizontal' />
      </View>
      <View style={{ width: 80, borderWidth: 2, marginLeft: '41%', marginBottom: 10, borderColor: '#b6d7a3', borderRadius: 20 }}></View>
      <View style={styles.container}>
        <Text style={styles.text}>Messaging ID</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, }}>
          <Text style={{ ...styles.text, fontSize: 20, fontWeight: 'bold' }}>Your daily plan</Text>
          <Text style={{ color: '#000', fontWeight: 'bold' }}>70%</Text>
        </View>
        <Slider
          style={{ width: '100%', height: 10, marginBottom: 10}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#24282c"
          maximumTrackTintColor="#24282c"
          
        />
        <Text>4 of completed</Text>
        <View style = {{flexDirection: 'row', justifyContent: 'space-between',paddingTop: 20}}>
          <View style = {styles.finishTask}>
            <Text style = {{fontSize: 30, fontWeight: 'bold',color: '#000000'}}>17</Text>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
              <Icon  style = {{fontSize: 17 , paddingRight: 5}}
              name='balloon'
              />
            <Text   style = {{fontSize: 17}}>Task finished</Text>
            </View>
          </View>
          <View style = {styles.trackHour}>
            <Text style = {{fontSize: 30, fontWeight: 'bold',color: '#000000'}}>3.2</Text>
           <View  style = {{flexDirection: 'row', alignItems: 'center'}}>
           <Icon  style = {{fontSize: 17,  paddingRight: 5}}
           name='clock'
           />
           <Text  style = {{fontSize: 17}}>Tracked hours</Text>
           </View>
          </View>
        </View>
        <Text style={{fontSize:22, fontWeight: '500', color: '#000000', paddingTop: 20, paddingBottom: 10}}>Overview</Text>
        <Text style={{fontSize: 17,}}>
          Messaging ID framework development for the marketing branch and tje  pupblicity bureau and implemented a draft on the framework.
        </Text>
        <Text style={{fontSize:22, fontWeight: '500', color: '#000000', paddingTop: 20, paddingBottom: 15}}>Members connected</Text>
        
        <FlatList
        horizontal
        ItemSeparatorComponent={ItemSeparatorHorizontal}
        data={DATA}
        renderItem={
          ({ item }) => ( 
            <View style={{ paddingBottom: 20,  }}>
              <Image style={{ borderRadius: 40, height: 70, width: 70, }}
                source={item.image} />
            </View>
          )}
      />

      </View>
      </ScrollView>
    </View>
  );
};

export default ViewScreen;

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 16,
    paddingVertical: 40,
    // flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: '#D1EDBF',
    flexDirection: 'row',

  },
  container: {
    backgroundColor: '#FFFF',
    height: '90%',
    width: '100%',
    // flex:2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 40,

  },
  text: {
    fontSize: 33,
    fontWeight: 'bold',
    color: '#000'
  },
  finishTask: {
    backgroundColor: '#FFE7AB',
    width: '48%',
  
    borderRadius: 10,
    padding: 15,
    
  },
  trackHour: {
    backgroundColor: '#FFE7AB',
    width: '48%',

    borderRadius: 10,
    padding: 15,
  },

});
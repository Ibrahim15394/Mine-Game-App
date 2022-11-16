import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {

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

  const ALLDATA = [
    {
      key: '1',
      text: 'numero',
      hour: '4h',
      title: 'Blog and social posts',
      deadline: 'deadline is today',
    },
    {
      key: '2',
      text: 'numero',
      hour: '4h',
      title: 'Blog and social posts',
      deadline: 'deadline is today',
    },
    {
      key: '3',
      text: 'numero',
      hour: '4h',
      title: 'Blog and social posts',
      deadline: 'deadline is today',
    },
    {
      key: '4',
      text: 'numero',
      hour: '4h',
      title: 'Blog and social posts',
      deadline: 'deadline is today',
    },
    {
      key: '5',
      text: 'numero',
      hour: '4h',
      title: 'Blog and social posts',
      deadline: 'deadline is today',
    },
    {
      key: '6',
      text: 'numero',
      hour: '4h',
      title: 'Blog and social posts',
      deadline: 'deadline is today',
    },
  ]
  ItemSeparatorHorizontal = () => {
    return <View style={{ paddingHorizontal: 8 }} />
  }
  ItemSeparatorVertical = () => {
    return <View style={{ paddingVertical: 5 }} />
  }

  return (
    <View style={styles.body}>

      <View style={styles.view1}>
        <View style={styles.view1}>
          <Image style={styles.image}
            source={require('../assets/images/hacker.jpg')}
          />
          <Text>Hi,Kira! </Text>
        </View>
        <View style={styles.betweenView}>
          <Icon style={styles.icon}
            name='bell'
          />
        </View>
      </View>
      <Text style={styles.text}>Tasks for today:</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 20 }}>
        <Icon style={{ fontSize: 22, color: '#09e80d' }}
          name='star'
        />
        <Text style={styles.text1}>5 available </Text>
      </View>

      <View style={styles.viewSearch}>

        <TextInput style={styles.textInput}
          placeholder='Search'
          placeholderTextColor='#C0C0C0'
        />
        <Icon style={{ fontSize: 22, color: '#C0C0C0' }}
          name='account-search-outline'
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20, }}>
        <Text style={{ ...styles.text, fontSize: 20, fontWeight: '500' }}>Last connections</Text>
        <Text style={{ color: '#C0C0C0' }}>See all</Text>
      </View>

      <FlatList
        horizontal
        ItemSeparatorComponent={ItemSeparatorHorizontal}
        keyExtractor={(item)=>item.key}
        data={DATA}
        renderItem={
          ({ item, index }) => (
            <View
              key={`child-${index}`}
              style={{ paddingBottom: 20, }}>
              <Image style={{ borderRadius: 40, height: 70, width: 70, }}
                source={item.image} />
            </View>
          )}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 30 }}>
        <Text style={{ ...styles.text, fontSize: 20, fontWeight: '500' }}>ِActive Project</Text>
        <Text style={{ color: '#C0C0C0' }}>See all</Text>
      </View>
      <View style={{ height: Dimensions.get('window').height / 3 }}>
        <FlatList
          contentContainerStyle={{
            paddingBottom: 80
          }}
          keyExtractor={(item)=>item.key}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparatorVertical}
          data={ALLDATA}
          renderItem={
            ({ item, index
            }) => {
              return (
                <View
                key={`v-${index}`}
                style={styles.viewContainer}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>{item.text}</Text>
                    <Text>{item.hour}</Text>
                  </View>
                  <Text style={{ ...styles.text, fontSize: 20, fontWeight: '500', paddingBottom: 15 }}>{item.title}</Text>
                  <View style={{ flexDirection: 'row', }}>
                    <Icon name='exclamation' size={20} />
                    <Text >{item.deadline} </Text>
                  </View>
                </View>
              )

            }
          }
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 16,
    paddingVertical: 40,
    backgroundColor: '#FFFF'
  },
  betweenView: {

  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15,

  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 40,
    marginRight: 10,
  },
  icon: {
    color: '#000',
    fontSize: 23,
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    fontWeight: '700',
    color: '#000'
  },
  text1: {
    paddingLeft: 8,
    fontSize: 20,
    color: '#30251d',
  },
  textInput: {
    height: 45,
    width: '87%',
    marginLeft: 10,
  },
  viewSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
  },
  viewContainer: {
    borderWidth: 1,

    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 17,
    borderColor: '#C0C0C0'

  },
});





import React from 'react';
import { View, FlatList,StyleSheet,Image,TouchableOpacity, Linking } from "react-native"

import AlbumDetail from "../components/albumdetails";
import albumData from "../json/post.json";
import headerData from "../json/chat.json";

const HomeScreen = ({ navigation }) => {
    return (
  <View style={{flex:1,backgroundColor:"#FFFFFF"}}>
              <View style={styles.headerbar}>
              <Image source={{url: headerData.HomePage.HeaderLeftUrl}} style={styles.headerLeft}/>
              <Image source={{url: headerData.HomePage.HeaderMid}} style={styles.headermid}/>
                  <TouchableOpacity
                      onPress={() => navigation.push('messagecreen')}>
                      <Image source={{url: headerData.HomePage.HeaderRightUrl}} style={styles.headerRight}/>
                  </TouchableOpacity>
              </View>
              <FlatList 
              data={albumData.albumList} 
              renderItem={({item}) => <AlbumDetail album={item} navigation={navigation} 
              keyExtractor={item=>item.title} />}
              />
              <View style={styles.bottombar}> 
                  <Image  source={{uri: headerData.HomePage.home}} style={styles.home}/>
                  <Image  source={{uri: headerData.HomePage.search}} style={styles.search}/>
                  <Image  source={{uri: headerData.HomePage.addarticle}} style={styles.addarticle}/>
                  <Image  source={{uri: headerData.HomePage.heart}} style={styles.heart}/>
                  <Image  source={{uri: headerData.HomePage.userpic}} style={styles.userpic}/>
              </View>
          </View>
        );
    };
      const styles = StyleSheet.create({
        headerbar:{
            flexDirection:"row",
            justifyContent:"flex-start",
            justifyContent:"space-between",
            width:360,
            height:40,
            backgroundColor:'#EEEEEE',
            // marginTop:30,
            // elevation:4
        },
        
        headerLeft:{
          marginTop:12,
          marginLeft:11,
          width: 19.5,
          height: 16,
        },

        headermid:{
          marginTop:12,
          width: 75,
          height: 22,
        },

        headerRight:{
          marginTop:10,
          marginRight:11,
          marginBottom:10,
          width: 20,
          height: 20,
        },

        home:{
            width:20,
            height: 20,
            marginTop:10,
            marginLeft:26,
        },

        search:{
            width: 20,
            height: 20,
            marginTop:10,
            marginLeft:52,
        },

        addarticle:{
            width: 20,
            height: 20,
            marginTop:10,
            marginLeft:52,
        },

        heart:{
            width: 20,
            height: 17,
            marginTop:10,
            marginLeft:52,
        },

        userpic:{
            width: 18,
            height: 18,
            marginTop:11,
        },

        bottombar:{
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"row",
          justifyContent:"flex-start",
          justifyContent:"space-between",
          height:40,
          backgroundColor:'#EEEEEE',
        }

    });
  export default HomeScreen;
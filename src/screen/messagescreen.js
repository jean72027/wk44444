import React, { Component } from 'react'
import {Text,View,Image,Dimensions,ImageBackground, FlatList,StyleSheet,ScrollView} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')
const image = { uri: "https://raw.githubusercontent.com/jean72027/wk44444/master/src/screen/icon/knowHEAD.png" };

import albumData from "../json/post.json";
import AlbumDetail from "../components/albumdetails";


//export default class SwiperDemo2 extends Component 
const knowledgepage = ({ album,navigation }) => {
 //   render () {
        return (
          <ScrollView style={{backgroundColor:"#F2E6D8"}}>

          <ImageBackground source={image} style={styles.headerimage}>
            <View style={styles.headertext}>
              <Text style={styles.headertitle}>古埃及百科</Text>
              <Text style={styles.headertitle2}>KNOWLEDGE </Text>
              <Text style={styles.headertitle2}>ABOUT</Text>
              <Text style={styles.headertitle2}>ANCIENT EYGEPT</Text>
            </View>
            <View style={styles.headerbuttom}>
              <View  style={styles.buttom}>
                <Image style={styles.buttompic} source={require('./icon/ennead.png')}/>
                <Text style={styles.buttomtext}>九柱神</Text>
              </View>
              <View  style={styles.buttom}>
                <Image style={styles.buttompic2} source={require('./icon/jar.png')}/>
                <Text style={styles.buttomtext}>卡諾皮克罐</Text>
              </View>
              <View  style={styles.buttom}>
                <Image style={styles.buttompic3} source={require('./icon/mummy.png')}/>
                <Text style={styles.buttomtext}>木乃伊製作</Text>
              </View>
            </View>

          </ImageBackground>
            <Text style={styles.cardtitle}>九柱神</Text>
            <View style={styles.swipcontainer}>
                <Swiper style={styles.wrapper} height={200} horizontal={true} autoplay={ false }>
                  <View resizeMode='stretch'>
                    <FlatList 
                      
                      data={albumData.Ennead} 
                      renderItem={({item}) => <AlbumDetail album={item} navigation={navigation} 
                      keyExtractor={item=>item.title} />}
                    />
                  </View>
                </Swiper>
            </View>
            <View style={styles.swipcontainer}>
                <Swiper style={styles.wrapper} height={200} horizontal={true} autoplay={ false }>
                    <View style={styles.slide1}>
                        <Image resizeMode='stretch' style={styles.image} source={require('./icon/c1.png')} />
                    </View>
                    <View style={styles.slide2}>
                        <Image resizeMode='stretch' style={styles.image} source={require('./icon/c2.png')} />
                    </View>
                    <View style={styles.slide3}>
                        <Image resizeMode='stretch' style={styles.image} source={require('./icon/c3.png')} />
                    </View>
                </Swiper>
                
            </View>
            <View style={styles.swipcontainer}>
                <Swiper style={styles.wrapper} height={200} horizontal={true} autoplay={ false }>
                    <View style={styles.slide1}>
                        <Image resizeMode='stretch' style={styles.image} source={require('./icon/c1.png')} />
                    </View>
                    <View style={styles.slide2}>
                        <Image resizeMode='stretch' style={styles.image} source={require('./icon/c2.png')} />
                    </View>
                    <View style={styles.slide3}>
                        <Image resizeMode='stretch' style={styles.image} source={require('./icon/c3.png')} />
                    </View>
                </Swiper>
                
            </View>

</ScrollView>

        )
};

const styles = StyleSheet.create({
  
  headerimage: {
    width,
    height:259,
  },
  headertext:{
    marginTop:26,
    marginLeft:33,
  },

  headertitle:{
    fontSize:25,
    color:'#4E5C69',
  },

  headertitle2:{
    fontSize:20,
    color:'#4E5C69',
  },
  headerbuttom:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:33,
  },

  buttom:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },

  buttompic:{
    width:47,
    height:47,
  },
  buttompic2:{
    width:50,
    height:47,
  },
  buttompic3:{
    width:49,
    height:47,
  },

  buttomtext:{
    fontSize:16,
    color:'#CBA72F',
    backgroundColor:'#000000',
    marginTop:5,
    paddingTop:5,
    paddingLeft:10,
    paddingBottom:3,
    paddingRight:10,
    borderRadius:8,
  },

  cardtitle:{
    fontSize:18,
  },

  swipcontainer: {
      height:200,
      marginBottom:20,
  },

  wrapper: {
  },

  slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent'
  },

  slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
  },

  slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
  },

  slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
  },

  text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
  },

  image: {
      width:200,
      height:200

  },
});

export default knowledgepage;
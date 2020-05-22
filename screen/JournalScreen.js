import React from "react";
import {ScrollView,Text,StyleSheet,View,Image,TouchableOpacity,ImageBackground,SafeAreaView} from 'react-native';
import Start from "./StartScreen";


const image1 = { uri: "https://raw.githubusercontent.com/anny881104/horus/master/assets/catGbg.png" };
const image2 = { uri: "https://raw.githubusercontent.com/anny881104/horus/master/assets/catWbg.png" };


// Make a component
const JouralScreen = ({ navigation }) => {

  return (
    
    <SafeAreaView>
      
    <Start></Start>

     <ScrollView style={{backgroundColor:"black"}}>

    

        <Image style={{ width:null,height:294 }}
              source={require('../assets/journyheadnew.png')}
        />
       <View style={styles.box}>
        
            <TouchableOpacity  onPress={() => navigation.navigate('CHAPTER 01')}> 
              <ImageBackground source={image1} style={styles.cat}>
                <View style={styles.storybox}>
                
                    <Image style={{ width:113,height:113}}
                        source={require('../assets/c1.png')}
                    />
                    <Text style={styles.ystorytext}>CHAPTER 01</Text> 
                    
                </View>
              </ImageBackground>
            </TouchableOpacity> 

          <View style={styles.line}></View>
       
        <TouchableOpacity onPress = {() =>alert('章節尚未開啟!')}> 
          <ImageBackground source={image2} style={styles.cat}>
            <View style={styles.storybox}>
            <Text style={styles.storytext2}>CHAPTER 02</Text>
              <Image style={{ width:113,height:113 }}
                    source={require('../assets/c2.png')}
              />
            </View>
          </ImageBackground>
        </TouchableOpacity> 

        <View style={styles.line}></View>

        <TouchableOpacity onPress = {() =>alert('章節尚未開啟!')}> 
          <ImageBackground source={image2} style={styles.cat}>
            <View style={styles.storybox}>
              <Image style={{ width:113,height:113 }}
                    source={require('../assets/c3.png')}
              />
              <Text style={styles.storytext}>CHAPTER 03</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity> 

        <View style={styles.line}></View>

        <TouchableOpacity onPress = {() =>alert('章節尚未開啟!')}> 
          <ImageBackground source={image2} style={styles.cat}>
            <View style={styles.storybox}>
            <Text style={styles.storytext2}>CHAPTER 04</Text>
              <Image style={{ width:113,height:113 }}
                    source={require('../assets/c4.png')}
              />
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <View style={styles.line}></View>

       </View>

       <TouchableOpacity onPress = {() =>alert('coming soon!')}> 
        <View style={styles.paybox}>
            <Image style={{ width:264,height:187 }}
                  source={require('../assets/pay.png')}
            />
            <Text style={styles.storytext3}>付費以解鎖更多內容</Text>
          </View>
        </TouchableOpacity>
      
      
    </ScrollView>
    </SafeAreaView>

    


  );
}

const styles = StyleSheet.create({
  box:{
    alignItems:"center",
  },
  storybox:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:60,
    marginBottom:60,
    width:null,
    height:null
  },
  paybox:{
    alignItems:"center",
    marginTop:60,
    marginBottom:30,
  },
  ystorytext:{
    color:"#CBA72F",
    marginLeft:50,
    fontSize:20,
  },
  storytext:{
    color:"#F2E6D8",
    marginLeft:50,
    fontSize:20
  },
  storytext2:{
    color:"#F2E6D8",
    marginRight:50,
    fontSize:20
  },
  storytext3:{
    color:"#CBA72F",
    marginTop:15,
    fontSize:15
  },
  line:{
    width:350,
    height:.3,
    backgroundColor:"#F2E6D8",
    alignItems:"center",
  },
  cat:{
    height:null,
    width:null,
  },

});

export default JouralScreen;
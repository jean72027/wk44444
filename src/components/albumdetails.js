import React from 'react';
import { View, FlatList,StyleSheet,Image,TouchableOpacity, Linking ,Text} from "react-native"



const AlbumDetail = ({ album, navigation }) => {
    return (
 
    
        <View style={styles.card}>
            
                <Image style={styles.cardpic} source={{uri: album.image}}/>
                <View style={styles.cardtext}>
                    <Text style={styles.texttitle}>{album.title}</Text>
                    <Text style={styles.article}>{album.w1}</Text>
                    <Text style={styles.article}>{album.w2}</Text>
                    <Text style={styles.article}>{album.w3}</Text>
                    <Text style={styles.article}>{album.w4}</Text>
                    <Text style={styles.article}>{album.w5}</Text>
                </View>
         
        </View>

    )

};
const styles = StyleSheet.create({
    card:{
        width:356,
        height:217,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:12,
        paddingBottom:12,
        paddingLeft:22,
        backgroundColor:"#F3EFEB",
        marginLeft:29,
    },

    cardpic:{
        width:149,
        height:193,
    },

    cardtext:{
        marginLeft:10,
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"flex-start",
    },

    texttitle:{
        fontSize:16,
        fontWeight:'bold',
        //fontFamily:'Arial',
    },

    article:{
        fontSize:13,
        fontWeight:'normal',
    },

});


export default AlbumDetail;
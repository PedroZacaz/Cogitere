import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
} from 'react-native';
import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../global/themes";
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import * as Linking from 'expo-linking';




export default function Home(){

    const openWebsite = () => {
        const url = 'https://www.youtube.com/watch?v=DOxfbI7rSMI';
        Linking.canOpenURL(url)
          .then((supported) => {
            if (supported) {
              Linking.openURL(url);
            } else {
              Alert.alert('Erro', 'Não foi possível abrir o link.'); 
            }
          })
          .catch((err) => console.error('Erro ao abrir URL:', err));
      };

      
    return(
        <View style={styles.conteiner}>

            <View  style={styles.top}>
                    <TouchableOpacity style={styles.sair} onPress={() => router.navigate("/home")}>
                        <Ionicons name='arrow-back' size={20} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.web}  onPress={openWebsite}>
                                <Ionicons
                                        name= 'play'
                                        size={20}
                                        color="#fff"
                                            />

                                    <Text style={styles.txtweb}> 
                                    VIDEO EXPLICATIVO SOBRE O ASSUNTO
                                    </Text>

                                </TouchableOpacity>
                </View>

            <View style={styles.boxTop}>   

            

            <Image
                source={require('../../assets/privada.png')}
                style={styles.img}
            />               
                    <View style={styles.txtbox}>
                        <Text  style={styles.Txt2}>
                        DESCARTAR MEDICAMENTOS DE MANEIRA INCORRETA PODE TRAZER VÁRIOS RISCOS.
                        </Text>
                    </View>
            </View>


            <View style={styles.boxMid}>

                    <Text  style={styles.Txt3}>
                    Um dos principais riscos do descarte incorreto de medicamentos é a contaminação de lagos, rios e outros recursos hídricos. Os componentes químicos presentes nos medicamentos podem infiltrar-se no solo e chegar até fontes de água, prejudicando a qualidade da água potável e afetando os ecossistemas aquáticos. Isso pode resultar na morte de organismos vivos, alteração de cadeias alimentares e impactos diretos na saúde humana. Para evitar esses problemas, é essencial descartar os medicamentos em locais apropriados, como pontos de coleta oficiais ou farmácias que realizam a destinação adequada.
                     </Text>

                        <Image
                            source={require('../../assets/lago.png')}
                            style={styles.lago}
                        />     

                <       Text  style={styles.Txt4}>
                       Para não acontecer isso, é necessário que o descarte seja feito de maneira correta
                        </Text>

            </View>

                    
                 

                <View style={styles.boxLow}>
               

                        <TouchableOpacity style={styles.butao} onPress={() => router.navigate('/(noveseguimentos)')}>

                               
                                <Text  style={styles.Txt}>
                                VAMOS APRENDER A DESCARTAR CORRETAMENTE ?
                                </Text>
                        </TouchableOpacity>

                 </View>

        </View>
    )
}




export const styles= StyleSheet.create({

// ESTA PARTE É RESERVADA PARA AS DIVISÕES DA TELA //

    conteiner:{
        flex:1,
        backgroundColor:'#fff',
    },

    top:{
        width:500,
        height:50,
     //   backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    
    boxTop:{ //CAIXA DE CIMA
        height:Dimensions.get('window').height/3, //MUDAR O TAMANHAO
        width:'100%',
     // backgroundColor:'#1e212a',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },

    boxMid:{ //CAIXA DO MEIO
        height:Dimensions.get('window').height/3, //MUDAR O TAMANHAO
        width:'100%',
     //   backgroundColor:'#000',
        paddingHorizontal:37,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'column',
        
    },

    boxLow:{ //CAIXA DE BAIXO
        height:Dimensions.get('window').height/3, //MUDAR O TAMANHAO
        width:'100%',
      //  backgroundColor:'#b2ebff',
        alignItems:'center',
        justifyContent:'center',
    },

// ESTA PARTE É RESERVADA PARA AS DIVISÕES DA TELA //

// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//
    Txt:{
        fontWeight: 'bold',
        fontSize:15,
        color:"#fff",
    },

    Txt2:{
        fontWeight: 'bold',
        fontSize:15,
        color:"#4fc0e8",
        textAlign:'justify',

    },

    Txt3:{
        fontWeight: 'bold',
        fontSize:12,
        color:"#0",
        bottom:50,
        lineHeight: 16,
        textAlign:'justify',
    },

    Txt4:{
        fontWeight: 'bold',
        fontSize:17,
        color:"#0",
        bottom:10,
        zIndex:10,
        textAlign:'center',
    },

    txtinput:{
        marginLeft:5,
        marginTop:20,
        color:themes.colors.gray,
    },

    Txtlow:{
        fontSize:16,
        color: '#fff',
        fontWeight: 'bold',
    },
    TxtlowCreate:{
        fontSize:16,
        color: 'blue',
    },

    txtbox:{
        width:150,
        height:170,
        backgroundColor:'#fff',
    },

// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//


    butao:{
        width:450,
        height:60,
        alignItems:'center',
        justifyContent:'center',
       backgroundColor:'#4fc0e8',
      //:'#fff',
        borderRadius:20,
        elevation:7,
        shadowColor:'#4fc0e9',
        
    },

   


// PARTE DAS CAIXAS INTERAGIVEIS// PARTE DAS CAIXAS INTERAGIVEIS// PARTE DAS CAIXAS INTERAGIVEIS


    ass:{
        width: '100%',
        height: '100%',
        backgroundColor:themes.colors.fundo2,
       marginBottom:100,
        marginTop: 70,
        elevation:1,
        shadowColor: '#000',
        alignItems:'center',
        justifyContent:'center',
        fontWeight:'bold',

    },

    img:{
        width:280,
        height:170,
    },

    lago:{
        width:480,
        height:140,
        bottom:50,

    },

    infbox:{
        width: 200,
        height: 50,
        borderRadius:45,
        backgroundColor: 'yellow',
        zIndex: 1,
        marginTop: 20,
        marginLeft: 15,
        position: 'absolute',
    },

    infbox2:{
        width: 200,
        height: 50,
        borderRadius:45,
        backgroundColor: 'yellow',
        zIndex: 1,
        marginTop: 20,
        marginLeft: 15,
        position: 'absolute',
    },



    fundo:{
          // Coloca a imagem em uma posição absoluta
        width: '100%',
        height: '100%',
        zIndex: -1,
        position: 'absolute',
    },

    imgtop:{
        width: '100%',
        height: '100%',
    },

    linha2:{
        width:400,
        height:3,
        borderRadius:20,
        backgroundColor:'#f1f1f1',
        marginLeft:50,
        marginBottom:20,
    },

    txt:{
        fontSize:16,
        fontWeight: 'bold',
        margin:40,
        marginLeft:30,
        marginRight:30,
    },

    
    sair: {
        width: 100,
        height: 50,
        top: 20,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor:'#4fc0e8',
    },

    degrade:{
     width: 500,
        height: 200,
        bottom:50,
    },

    web:{
        width:350,
        height:50,
        top: 20,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:40,
        flexDirection:'row',
        zIndex:10,
        elevation:2,
        backgroundColor:'#4fc0e8',
    },

    txtweb:{
        fontSize:14,
        color:'#fff',
        left:5,
    },

})


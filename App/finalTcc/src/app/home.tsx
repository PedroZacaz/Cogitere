import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../global/themes";
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"



export default function Home(){

    return(
        <View style={styles.conteiner}>

            
            <View style={styles.boxTop}> 

                    <View style={styles.btnperfil}>

                            <TouchableOpacity style={styles.btnperfil}  onPress={() => router.navigate("/(auth)")}>
                               <Image  source={require('../../assets/caragato.png')}  style={styles.box3img}/>
                            </TouchableOpacity>

                        
                    </View>



                    <TouchableOpacity style={styles.boxinput}  onPress={() => router.navigate("/pesquisar")}>
                        <Ionicons
                            name= 'search'
                            size={24}
                            color="fff"/>
                    </TouchableOpacity>
                    
            </View>

            <View style={styles.linha2}></View>

            <View style={styles.boxMid}>

           

                            <View style={styles.box3}>
                              
                                <TouchableOpacity style={styles.boxAzul}  onPress={() => router.navigate("/descarte")}>
                                    <Image
                                        source={require('../../assets/box1.png')}
                                        style={styles.box1img}
                                    />
                                </TouchableOpacity> 
                                                      
                            </View>



                            <View style={styles.box3}>

                                
                               <TouchableOpacity style={styles.boxAmarelo}  onPress={() => router.navigate("/scanner")}>
                                <Image
                                        source={require('../../assets/box2.png')}
                                        style={styles.box2img}
                                    />
                                </TouchableOpacity>
                            </View>



                            <View style={styles.box3}>
                           
                               <TouchableOpacity style={styles.box}  onPress={() => router.navigate('/home')}>
                                <Image
                                            source={require('../../assets/box3.png')}
                                            style={styles.box3img}
                                        />
                                </TouchableOpacity>             

                            </View>


            </View>

            <View style={styles.linha2}></View>

             <View style={styles.boxLow}>
                         <TouchableOpacity style={styles.btnInfo}  onPress={() => router.navigate("/inf&dicas")}>
                              
                                <Text style={styles.Txtlow}>INFORMAÇÕES   &   DICAS</Text>

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
    
    boxTop:{ //CAIXA DE CIMA
        height:Dimensions.get('window').height/8, //MUDAR O TAMANHAO
        width:'100%',
      //backgroundColor:'#1e212a',
        alignItems:'center',
        justifyContent:'space-around',
        
        flexDirection:'row',
    },

    boxMid:{ //CAIXA DO MEIO
        height:Dimensions.get('window').height/1.4, //MUDAR O TAMANHAO
        width:'100%',
    //   backgroundColor:'#1e212a',
        paddingHorizontal:37,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'column',
        
    },

    boxLow:{ //CAIXA DE BAIXO
        height:Dimensions.get('window').height/6, //MUDAR O TAMANHAO
        width:'100%',
     //   backgroundColor:'#1e212a',
        alignItems:'center',
       // justifyContent:'center',
    },

// ESTA PARTE É RESERVADA PARA AS DIVISÕES DA TELA //

// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//
    Txt:{
        fontWeight: 'bold',
        marginTop:40,
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

// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//

//PARTE DO IMPUT////PARTE DO IMPUT////PARTE DO IMPUT////PARTE DO IMPUT////PARTE DO IMPUT////PARTE DO IMPUT////PARTE DO IMPUT////PARTE DO IMPUT////PARTE DO IMPUT////PARTE DO IMPUT//
    boxinput:{
        width:'60%',
        height:40,
        borderWidth:2 ,
        borderRadius:40,
        flexDirection:'row',
        marginTop:10,
        alignItems:'center',
        paddingHorizontal:10,
        borderColor:'#f1f1f1',
        backgroundColor:'#f1f1f1',
        marginRight:85,
    },

    input:{
        height:'100%',
        width:'90%',
        borderRadius:40,
       // backgroundColor:'red'
    },

    //PARTE DO IMPUT////PARTE DO IMPUT////PARTE DO IMPUT////PARTE DO IMPUT////PARTE DO IMPUT////PARTE DO IMPUT////PARTE DO IMPUT////PARTE DO IMPUT////PARTE DO IMPUT////PARTE DO IMPUT//
   
    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//
    butao:{
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ff9f93',
        borderRadius:80,
        elevation: 2,
    },

    txtbutao:{
        fontSize:16,
        color:'#ffff',
        fontWeight:'bold',
    },

    btnperfil:{
        width:80,
        height:80,  
        borderRadius:80,
        backgroundColor: '#000',
        alignItems:'center',
        justifyContent:'center',
    },

    btnInfo:{
        width:350,
        height:50,
        borderRadius:80,
        backgroundColor: '#000',
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
    },
 //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//    //PARTE DOS BOTÕES//

// PARTE DAS CAIXAS INTERAGIVEIS// PARTE DAS CAIXAS INTERAGIVEIS// PARTE DAS CAIXAS INTERAGIVEIS

   

    box3:{
        width: "100%",
        height: '29.1%',
        backgroundColor: '#3a322b',
        borderRadius:1000,
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
        marginBottom:10,
    },

    box:{
        width: "100%",
        height: '100%',
        backgroundColor: '#d83535',
        borderRadius:1000,
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
        marginBottom:20,
    },

    boxAzul:{
        width: "100%",
        height: '100%',
        backgroundColor: '#0571d3',
        borderRadius:1000,
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
        marginBottom:20,
    },


    boxAmarelo:{
        width: "100%",
        height: '100%',
        backgroundColor: '#ffed00',
        borderRadius:1000,
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
        marginBottom:20,
    },

    box1img:{
        width:'90%',
        height:'80%',
        borderRadius:100,
        marginLeft:10,
    },

    box2img:{
        width:'93%',
        height:'80%',
        borderRadius:100,
        marginLeft:10,
    },

    box3img:{
        width:'95%',
        height:'80%',
        borderRadius:1000,
    },

    perfilImg:{
        width:'75%',
        height:'75%',
        borderRadius:1000,
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
        width: '100%',
        height: '100%',
        borderRadius:435,
        position: 'absolute',
        zIndex: 10,
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

    
})


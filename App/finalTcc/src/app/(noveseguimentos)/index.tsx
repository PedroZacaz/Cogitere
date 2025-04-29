import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView ,
} from 'react-native';
import { Dimensions, StyleSheet } from "react-native";
import { themes } from '../../global/themes'
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"




export default function Home(){

    return(
        <View style={styles.conteiner}>

               <TouchableOpacity style={styles.sair} onPress={() => router.navigate("/home")}>
                <Ionicons name='arrow-back' size={20} color="#fff" />
            </TouchableOpacity>

            <View style={styles.boxTop}>   
      
                    <View style={styles.txtbox}>

                        <Text  style={styles.Txt2}>
                        ANTES DE PROSSEGUIR, TEMOS QUE DESCOBRIR QUAL O TIPO DE MEDICAMENTO QUE DESEJA FAZER O DESCARTE 
                        </Text>
                        <Ionicons name='alert-circle'size={60} color="#fff" />

                
                        

                    </View>
            </View>




            <View style={styles.boxMid}>


                    <TouchableOpacity style={styles.infbnt} onPress={() => router.navigate("/(noveseguimentos)/um")}>
                        <Text  style={styles.Txt}>
                        1. Medicamentos sólidos (comprimidos, cápsulas e drágeas)
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.infbnt} onPress={() => router.navigate("/(noveseguimentos)/dois")}>
                        <Text  style={styles.Txt}>
                        2. Medicamentos líquidos (xaropes, gotas, soluções)                        
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.infbnt} onPress={() => router.navigate("/(noveseguimentos)/tres")}>
                        <Text  style={styles.Txt}>
                             3. Pomadas, cremes e géis                        
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.infbnt} onPress={() => router.navigate("/(noveseguimentos)/quatro")}>
                        <Text  style={styles.Txt}>
                              4. Medicamentos <Text  style={styles.Txtver}>hormonais</Text>, <Text  style={styles.Txtver}>antibióticos </Text> e <Text  style={styles.Txtver}>quimioterápicos</Text>
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.infbnt} onPress={() => router.navigate("/(noveseguimentos)/cinco")}>
                        <Text  style={styles.Txt}>
                        5. Injetáveis (ampolas, frascos e seringas)
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.infbnt} onPress={() => router.navigate("/(noveseguimentos)/seis")}>
                        <Text  style={styles.Txt}>
                        6. Fitoterápicos e homeopáticos
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.infbnt} onPress={() => router.navigate("/(noveseguimentos)/sete")}>
                        <Text  style={styles.Txt}>
                        7. Medicamentos vencidos ou sobras em geral     <Text  style={styles.Txtver}>(LOCALIZAR PONTO DE COLETA)</Text>
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
    
    boxTop:{ //CAIXA DE CIMA
        height:Dimensions.get('window').height/4.3, //MUDAR O TAMANHAO
        width:'100%',
     // backgroundColor:'#1e212a',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },

    boxMid:{ //CAIXA DO MEIO
        height:Dimensions.get('window').height/1, //MUDAR O TAMANHAO
        width:'100%',
  //     backgroundColor:'#000',
        paddingHorizontal:37,
        alignItems:'center',
        flexDirection:'column',
        
    },

    boxLow:{ //CAIXA DE BAIXO
        height:Dimensions.get('window').height/3, //MUDAR O TAMANHAO
        width:'100%',
        backgroundColor:'#b2ebff',
        alignItems:'center',
        justifyContent:'center',
    },

// ESTA PARTE É RESERVADA PARA AS DIVISÕES DA TELA //

// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//
    Txt:{
        fontWeight: 'bold',
        fontSize:15,
        color:"#fff",
        textAlign:'left',

    },

    Txtver:{
        fontWeight: 'bold',
        fontSize:15,
        color:"#000",
        textAlign:'left',

    },
    Txt9:{
        fontWeight: 'bold',
        fontSize:15,
        color:'#f1f1f1',
        textAlign:'left',

    },

    Txt2:{
        fontWeight: 'bold',
        fontSize:15,
        color:"#fff",
        marginLeft:15,
        marginRight:15,
        lineHeight: 20,
        textAlign:'center',
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
        width:'80%',
        height:170,
        backgroundColor:themes.colors.cor2,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        elevation:4,
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
        bottom:120,
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
        left: 30,
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

    Scroll:{
        backgroundColor:'red',
        width: 500,
        flexDirection:'column',
    },

    infbnt:{
        width: '100%',
        height: 70,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor:'#4fc0e8',
        marginTop:15,
    },



})


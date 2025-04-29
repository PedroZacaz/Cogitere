import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView} from "react-native"
import { useAuth, useUser } from "@clerk/clerk-expo"
import { router } from "expo-router"
import { themes } from "../../global/themes";
import { Ionicons } from "@expo/vector-icons"


export default function Home() {
    const { user } = useUser()
    const { signOut} = useAuth()

    return(
      

         <View style={styles.container}>
                
                        
                                <TouchableOpacity style={styles.butao2}  onPress={() => router.navigate("/home")}>
                       <Ionicons
                            name= 'home-outline'
                            size={20}
                            color="#fff"
                            />
                    </TouchableOpacity>

                    
                    <View style={styles.boxTop}> 



                            <TouchableOpacity    style={styles.perfil}  onPress={() => router.navigate("/(public)")} >
                             <Image source={{ uri: user?.imageUrl}} style={styles.imgPerfil}/>
                     

                             </TouchableOpacity>

                    
                                <Text style={styles.text}>{user?.fullName}</Text>

<View style={styles.linha2}></View>

                                <Text  style={styles.Txtlow}>Sair</Text>

                                    <TouchableOpacity style={styles.butao} onPress={() => signOut()}>
                    
                                         <Ionicons name="exit" style={styles.icon}/>
                                         <Text style={styles.txxt}>Sair</Text>
                                    </TouchableOpacity>
                                    <View style={styles.linha2}></View>
                    </View>


            
                    <View style={styles.boxMid}>

                    

                      <TouchableOpacity style={styles.btnInfo}  onPress={() => router.navigate("/inf&dicas")}>
                              
                              <Text style={styles.Txtlow}>Mais informações sobre o nosso app</Text>

                      </TouchableOpacity>     
     
                      <TouchableOpacity style={styles.btnInfo}  onPress={() => router.navigate("/inf&dicas")}>
                              
                              <Text style={styles.Txtlow}>INFORMAÇÕES   &   DICAS</Text>

                      </TouchableOpacity>     

                      <TouchableOpacity style={styles.btnInfo}  onPress={() => router.navigate("/inf&dicas")}>
                              
                              <Text style={styles.Txtlow}>Termos de uso - Leis de uso</Text>

                      </TouchableOpacity>  

                      <TouchableOpacity style={styles.btnInfo}  onPress={() => router.navigate("/inf&dicas")}>
                              
                              <Text style={styles.Txtlow}>Leis sobre (bulas e medicamento)</Text>

                      </TouchableOpacity>    
                        
                    </View>


                    <View style={styles.boxLow}>
                    </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    
    boxTop:{ //CAIXA DE CIMA
        height:Dimensions.get('window').height/2.5, //MUDAR O TAMANHAO
        width:'100%',
  //    backgroundColor:'#1e212a',
        alignItems:'center',
  //    justifyContent:'space-around',
        flexDirection:'column',
    },

    boxMid:{ //CAIXA DO MEIO
        height:Dimensions.get('window').height/3, //MUDAR O TAMANHAO
        width:'100%',
    //  backgroundColor:'#1e212a',
        paddingHorizontal:37,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'column',
        
    },

    boxLow:{ //CAIXA DE BAIXO
        height:Dimensions.get('window').height/6, //MUDAR O TAMANHAO
        width:'100%',
     // backgroundColor:'#1e212a',
        alignItems:'center',
     // justifyContent:'center',
    },

// ESTA PARTE É RESERVADA PARA AS DIVISÕES DA TELA //

// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//// PARTE DOS TEXTOS//
    text:{
        fontSize:18,
        fontWeight:"bold"
    },

    txtinput:{
        marginLeft:5,
        marginTop:20,
        color:themes.colors.gray,
    },

    Txtlow:{
        fontSize:16,
        color: '#FFF',
        fontWeight: 'bold',
    },

    Txt2:{
        fontSize:16,
        color: '#000',
        fontWeight: 'bold',
    },

    TxtlowCreate:{
        fontSize:16,
        color: 'blue',
    },

    txt:{
        fontSize:16,
        fontWeight: 'bold',
        marginTop:40,
    },

    txxt:{
        fontSize:16,
        fontWeight: 'bold',
        color: '#FFF',
        left:10,
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
        backgroundColor: '#000',
        borderRadius:80,
        elevation: 2,
        flexDirection:'row',
    },
    
    butao2:{
        width:80,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#000',
        borderRadius:80,
        elevation: 2,
        marginLeft:10,
        marginTop:10,
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

    btnInfo2:{
        width:350,
        height:50,
        borderRadius:80,
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
        width:200,
        height:3,
        borderRadius:20,
        backgroundColor:'#f1f1f1',
        marginTop:40,
    },

    imgPerfil:{
        width:150,
        height:150,
        borderRadius:100,
        zIndex:3,
    },

    icon:{
            color: '#fff',
            fontSize:20,
    },

    icon2:{
        color: '#fff',
        fontSize:100,
        top:120,
        borderRadius:500,
        left:20,
        bottom:100,
    },

    Scroll:{
        width:400,
        height:10,
        marginTop:20,
    },

    perfil:{
        width:160,
        height:160,
        borderRadius:100,
        backgroundColor:'#f1f1f1',   
        alignItems:'center',
        justifyContent:'center',
    },

 
})
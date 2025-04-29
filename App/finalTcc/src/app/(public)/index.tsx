
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image} from "react-native"
import * as WebBrowser from "expo-web-browser"
import * as Liking from "expo-linking"
import { useEffect, useState } from "react"
import { Button } from '../../components/index'
import { themes } from "../../global/themes"


import { useOAuth } from "@clerk/clerk-expo"
import { router } from "expo-router"

WebBrowser.maybeCompleteAuthSession()

export default function SignIn(){
    const [isLoading, setIsLoading] = useState(false)
    const googleOAuth = useOAuth({ strategy:'oauth_google'})

    async function onGoogleSignIn(){
        try {
            setIsLoading(true)

            const redirectUrl = Liking.createURL("/")
            const oAuthFLow = await googleOAuth.startOAuthFlow({redirectUrl })

            if(oAuthFLow.authSessionResult?.type === "success"){
                if(oAuthFLow.setActive){
                    await oAuthFLow.setActive({ session: oAuthFLow.createdSessionId})
                }
            }else   { 
                setIsLoading(false)
            }

        } catch (error) {

            console.log(error)
            setIsLoading(false)
        }
    }
   
   
    useEffect(() => {   

        WebBrowser.warmUpAsync()

        return () => {
            WebBrowser.coolDownAsync()
        }
    },[])

    return(

        <View style={styles.conteiner}>

            
        <View style={styles.boxTop}> 
                <Image
                source={require('../../../assets/gatocaixa.png')}
                style={styles.image}
            />
        </View>

                
                    <View style={styles.boxMid}>

                                  <View style={styles.ViewTxt}>
                                        
                                        <Text style={styles.Txtbtn3}>Bem-vindo(a)! </Text>
                                        <Text style={styles.Txtbtn}> Cadastre-se agora ou explore sem precisar se cadastrar</Text>
                                        <View style={styles.linha2}></View>
                                  </View>

                                  <Button 
                                    icon="logo-google"
                                    title="Entrar com Google"
                                    onPress={onGoogleSignIn}
                                    isLoading={isLoading}
                                    />

<View style={styles.linha2}></View>

                                  <TouchableOpacity 
                                    style={styles.entrarSEMcadastrar}
                                    onPress={() => router.navigate("/home")}
                                  >

                               <Text style={styles.Txtbtn2}>Entrar sem Cadastro</Text>
                               </TouchableOpacity>


                    </View>

        
         <View style={styles.boxLow}>
            
            <Text style={styles.Txtbtn}>© 2024 Cogitare. Todos os direitos reservados.</Text>
            <View style={styles.linha2}></View>
         </View>

    </View>

    )
}


export const VIDEO_HEIGHT = 180;

export const styles = StyleSheet.create({

// ESTA PARTE É RESERVADA PARA AS DIVISÕES DA TELA //

    conteiner:{
        flex:1,
        backgroundColor: '#fff',
    },
    
    boxTop:{ //CAIXA DE CIMA
        height:Dimensions.get('window').height/2.8, //MUDAR O TAMANHAO
        width:'100%',
      // backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',

    },

    boxMid:{ //CAIXA DO MEIO
        height:Dimensions.get('window').height/2.5, //MUDAR O TAMANHAO
        width:'100%',
        backgroundColor:'#fff',
        paddingHorizontal:37,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        
    },

    boxLow:{ //CAIXA DE BAIXO
        height:Dimensions.get('window').height/3, //MUDAR O TAMANHAO
        width:'100%',
     //  backgroundColor:'#000',
        alignItems:'center',
       justifyContent:'center',
    },

// ESTA PARTE É RESERVADA PARA AS DIVISÕES DA TELA //

    Txt:{
        fontWeight: 'bold',
        marginTop:40,
    },

    entrarSEMcadastrar:{
        backgroundColor:'#fff',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:7,
        padding:22,
        borderRadius:218,
        elevation:2,

    },

   

    linha:{
        fontSize:30,
        color:themes.colors.cor3,
        marginBottom:10,
    },

    entrar:{
        width:190,
        height:40,
        alignItems:'center',
        justifyContent:'center',
  //    backgroundColor:'white',
      borderRadius:20,
    },

    cadastrar:{
        width:190,
        height:40,
        alignItems:'center',
        justifyContent:'center',
      //  backgroundColor:'black',
        borderRadius:20,
    },

  Txtbtn:{
        fontWeight: 'bold',
        color: themes.colors.cor3,
    },

    Txtbtn2:{
        fontWeight: 'bold',
        color: '#000',
        fontSize:16,
    },

    Txtbtn3:{
        fontWeight: 'bold',
        color:themes.colors.cor3,
        fontSize:20,
        marginBottom:10,
    },

    ViewTxt:{
        alignItems:'center',
        marginBottom:60,
    },

    image:{
        width:190,
        height:190,
    },

    linha2:{
        width:350,
        height:2,
        borderRadius:20,
        backgroundColor:'#f1f1f1',
        marginBottom:25,
        marginTop:25,
    }
})

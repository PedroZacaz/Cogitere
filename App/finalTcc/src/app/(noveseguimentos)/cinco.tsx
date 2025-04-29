import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView} from "react-native"
import { useAuth, useUser } from "@clerk/clerk-expo"
import { router } from "expo-router"
import { themes } from "../../global/themes";
import { Ionicons } from "@expo/vector-icons"


export default function Info() {
    const { user } = useUser()
    const { signOut} = useAuth()

    return(
      

         <View style={styles.container}>
                
                <TouchableOpacity style={styles.sair} onPress={() => router.navigate("/(noveseguimentos)")}>
                <Ionicons name='arrow-back' size={20} color="#fff" />
            </TouchableOpacity>
                     
                        <ScrollView style={styles.Scroll}>         
                          
                        <Text style={styles.titulo}>         Modo de descarte</Text>

                             <Text style={styles.txt}>
                             Injetáveis (ampolas, frascos e seringas)
                              </Text>
                             <Text style={styles.txt}>
                          1 - Inutilize a seringa ou agulha.
                          Coloque as agulhas usadas em recipientes resistentes (como garrafas PET ou caixas de leite vazias).
                             </Text>
                             <Text style={styles.txt}>
                          2 -  Lacre bem o recipiente.
                          Evite que a agulha perfure o recipiente. Descarte no lixo comum.
                             </Text>

                             <Text style={styles.txt}>
                           3 -   Descartar ampolas e frascos.
Coloque-os em recipientes que impeçam acidentes (como caixas de papelão).
                             </Text>
                        </ScrollView>
                   
                        <TouchableOpacity style={styles.maps} onPress={() => router.navigate("/(noveseguimentos)/sete")}>
                            <Ionicons name='navigate' size={20} color="#fff" right={10} />
                            
                            <Text style={styles.txtTXT}>
                                IR PARA O MAPS
                             </Text>
                        </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    
    txt:{
        fontSize:16,
        fontWeight: 'bold',
        margin:40,
        marginLeft:30,
        marginRight:30,
    },

    titulo:{
        fontSize:26,
        fontWeight: 'bold',
        margin:40,
        right:60,
  
    },

    Scroll:{
        width:500,
        height:10,
        marginTop:20,
    },

    sair:{
        width:100,
        height:50,
        left:30,
        top:20,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:40,
        backgroundColor:'#4fc0e8',
    },

    maps:{
        width:200,
        height:50,
        left:270,
        bottom:20,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:40,
        backgroundColor:'#4fc0e8',
        flexDirection:'row'
    },

    txtTXT:{
        fontSize:16,
        fontWeight: 'bold',
        color:'#fff',
    },
    
})
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
                        Medicamentos sólidos (comprimidos, cápsulas e drágeas)
                              </Text>

                             <Text style={styles.txt}>
                          1 -   Retire os medicamentos das embalagens.
Coloque os comprimidos ou cápsulas em um recipiente resistente (como garrafas PET) com tampa.
                              </Text>
                             <Text style={styles.txt}>
                          2 -   Misture com materiais que dificultem o uso.
Adicione borra de café, areia, terra, ou restos de comida ao recipiente para tornar os medicamentos inapropriados para consumo.
                             </Text>
                             <Text style={styles.txt}>
                          3 -  Lacre bem o recipiente.
                             Após fechar, coloque o recipiente no lixo comum (não reciclável).  
                             </Text>

                             <Text style={styles.txt}>
                             Cuidados adicionais:
                             Não jogue comprimidos ou cápsulas diretamente no lixo ou vaso sanitário, pois podem contaminar o solo e a água.
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
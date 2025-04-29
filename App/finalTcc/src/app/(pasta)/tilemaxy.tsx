import React from 'react';
import { View, Button, StyleSheet, Alert, ScrollView, TouchableOpacity, Text} from 'react-native';
import * as Linking from 'expo-linking';
import { router } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

const App = () => {
  // Função para abrir o site
  const openWebsite = () => {
    const url = 'https://natulab.com.br/wp-content/uploads/2023/11/Bula_Paciente_Tilemaxy-200mg.pdf';
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

  return (
    <View style={styles.container}>
        <View style={styles.top}>
                    <TouchableOpacity style={styles.sair}  onPress={() => router.navigate("/home")}>
                        <Ionicons
                                name= 'home-outline'
                                size={20}
                                color="#fff"
                                />
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.web}  onPress={openWebsite}>
                        <Ionicons
                                name= 'download-outline'
                                size={20}
                                color="#fff"
                                />

                        <Text style={styles.txt}> 
                            - BAIXE EM (PDF)
                        </Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.descarte}  onPress={() => router.navigate("/(noveseguimentos)/dois")}>
                        <Ionicons
                                name= 'trash'
                                size={20}
                                color="#fff"
                                />
                        </TouchableOpacity>
                    </View>


      <ScrollView style={styles.Scroll}>         
                          
                          <Text style={styles.titulo}> Informações sobre o medicamento</Text>
  
                            
                        <Text style={styles.titulo}>      Tilemaxy (paracetamol)
                        Indicações: Indicado como analgésico e antitérmico. Uso oral. Uso adulto e pediátrico. Sabor Tutti-Frutti. 

Contraindicações: Não deve ser administrado para pacientes com conhecida hipersensibilidade ao paracetamol ou à qualquer outro componente da fórmula. Contraindicado para portadores de hepatopatia. Contraindicado também para pacientes que utilizem bebidas alcoólicas crônica e excessivamente. 

Reações adversas: Pode ocorrer reações de hipersensibilidade, erupções cutâneas, urticária, eritema pigmentar fixo, angioedema, choque anafilático, lesões eritematosas na pele, necrose tubular renal, coma hipoglicêmico e asma brônquica. 

Precauções: Deve-se medicar com cuidado nos casos de pacientes alcoolistas crônicos e nos tratados com indutores enzimáticos ou fármacos consumidores de glutationa (doxorrubicina), pois pode causar hepatotoxicidade grave. Em pacientes alérgicos ao ácido acetilsalicílico, o paracetamol pode provocar reações alérgicas do tipo broncoespasmo. Em crianças com idade abaixo de 2 (dois) anos, a administração deve ser feita somente sob prescrição médica. Não use outro medicamento que contenha paracetamol. Pacientes alérgicos ao ácido acetilsalicílico devem ter cuidado ao usar paracetamol.

Código do produto: 803713
EAN: 7899470808338
Registro MS: 1384100030012
Princípio Ativo: paracetamol
                              </Text>     
  
                          </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    
    txt:{
        fontSize:14,
        fontWeight: 'bold',
        color:'#fff',
        left:5,
    },

    titulo:{
        fontSize:15,
        fontWeight: 'bold',
        margin:40,
        marginLeft:30,
        marginRight:30,
        lineHeight: 24,
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
        backgroundColor:'black',
    },

    descarte:{
        width:100,
        height:50,
        left:30,
        top:20,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:40,
        backgroundColor:'#64dc32',
    },

    web:{
        width:200,
        height:50,
        left:30,
        top:20,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:40,
        backgroundColor:'lightblue',
        flexDirection:'row',
    },

    top:{
        width:'90%',
    //  backgroundColor:"red",
        alignItems:'center',
        flexDirection:'row',
        justifyContent:"space-between"
    },

});

export default App;
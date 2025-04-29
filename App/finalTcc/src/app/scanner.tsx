import React, { useState, useRef, useEffect } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Modal,
    Alert,
} from 'react-native';
import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../global/themes";
import { router } from "expo-router";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { produtos, Produto } from '../app/produtos'; // Importando os produtos

export default function Ler() {
 

    // Estados
    const [id, setId] = useState('');
    const [produto, setProduto] = useState<Produto | null>(null);
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [permission, requestPermission] = useCameraPermissions();
    const [qrCodeData, setQrCodeData] = useState("");
    const qrCodeLock = useRef(false);

    // Atualiza o produto sempre que o id mudar
    useEffect(() => {
        if (id) {
            const produtoEncontrado = produtos[id];
            if (produtoEncontrado) {
                setProduto(produtoEncontrado);
            } else {
                setProduto(null); // Limpa o produto se o código não for encontrado
            }
        }
    }, [id]);

    // Função para abrir a câmera e ler o QR code
    async function handleOpenCamera() {
        try {
            const { granted } = await requestPermission();
            if (!granted) {
                return Alert.alert("Você precisa habilitar a câmera");
            }
            setModalIsVisible(true);
            qrCodeLock.current = false;
        } catch (error) {
            console.log(error);
        }
    }

    // Função para lidar com o QR Code lido
    function handleQRCodeRead(data: string) {
        setModalIsVisible(false);
        setQrCodeData(data); // Armazena o valor lido
        setId(data); // Atualiza o id com o valor lido do QR code
    }

    return (
        <View style={styles.conteiner}>
            <TouchableOpacity style={styles.sair} onPress={() => router.navigate("/home")}>
                <Ionicons name='arrow-back' size={20} color="#000" />
            </TouchableOpacity>

            <View style={styles.boxTop}></View>

            <View style={styles.boxMid}>
                
                <View style={styles.resultados}>
                    

                             <Text style={styles.titulo}>{produto ? `${produto.nome}` : "Produto não encontrado."}</Text>

                              {/* Exibe o ID do produto se lido */}
                             <TextInput
                                style={styles.input}
                                placeholder="Código do Produto"
                                value={id}
                                editable={false} // O campo é somente leitura
                            />


                                <Text style={styles.txt}>{produto ? ` ${produto.descricao}` : "Produto não encontrado."}</Text>
                        
                        
                                <View style={styles.linha2}></View>

                               

                                    {/* Exibe os botões se um produto foi encontrado */}
                                    <View style={styles.div}></View>         
                                    {produto && (
                                <View style={styles.buttonsContainer}>



                                            {produto.nome === 'Dipirona monoidratada' && (
                                                <TouchableOpacity style={styles.button} onPress={() => router.navigate('/(pasta)/dipirona')}>
                                                    <Ionicons
                                                        name= 'add-outline'
                                                        size={20}
                                                        color="#fff"
                                                        />
                                                    <Text style={styles.buttonText}>MAIS INFORMAÇÕES</Text>
                                                </TouchableOpacity>
                                            )}
                                            {produto.nome === 'Dipirona monoidratada' && (
                                                <TouchableOpacity style={styles.buttonDescarte} onPress={() => router.navigate("/(noveseguimentos)/um")}>
                                                     <Ionicons
                                                        name= 'trash-outline'
                                                        size={20}
                                                        color="#fff"
                                                        />
                                                    <Text style={styles.buttonText}>DESCARTAR</Text>
                                                </TouchableOpacity>
                                            )}






                                            {produto.nome === 'Tilemaxy' && (
                                                <TouchableOpacity style={styles.button} onPress={() => router.navigate('/(pasta)/tilemaxy')}>
                                                    <Ionicons
                                                        name= 'add-outline'
                                                        size={20}
                                                        color="#fff"
                                                        />
                                                    <Text style={styles.buttonText}>MAIS INFORMAÇÕES</Text>
                                                </TouchableOpacity>
                                            )}
                                            {produto.nome === 'Tilemaxy' && (
                                                <TouchableOpacity style={styles.buttonDescarte} onPress={() => router.navigate("/(noveseguimentos)/dois")}>
                                                     <Ionicons
                                                        name= 'trash-outline'
                                                        size={20}
                                                        color="#fff"
                                                        />
                                                    <Text style={styles.buttonText}>DESCARTAR</Text>
                                                </TouchableOpacity>
                                            )}





                                            {produto.nome === 'Nistatina' && (
                                                <TouchableOpacity style={styles.button} onPress={() => router.navigate('/(pasta)/dipirona')}>
                                                    <Ionicons
                                                        name= 'add-outline'
                                                        size={20}
                                                        color="#fff"
                                                        />
                                                    <Text style={styles.buttonText}>MAIS INFORMAÇÕES</Text>
                                                </TouchableOpacity>
                                            )}
                                            {produto.nome === 'Nistatina' && (
                                                <TouchableOpacity style={styles.buttonDescarte} onPress={() => router.navigate("/(noveseguimentos)/um")}>
                                                     <Ionicons
                                                        name= 'trash-outline'
                                                        size={20}
                                                        color="#fff"
                                                        />
                                                    <Text style={styles.buttonText}>DESCARTAR</Text>
                                                </TouchableOpacity>
                                            )}





                                            {produto.nome === 'Ciclo 21' && (
                                                <TouchableOpacity style={styles.button} onPress={() => router.navigate('/(pasta)/ciclo21')}>
                                                    <Ionicons
                                                        name= 'add-outline'
                                                        size={20}
                                                        color="#fff"
                                                        />
                                                    <Text style={styles.buttonText}>MAIS INFORMAÇÕES</Text>
                                                </TouchableOpacity>
                                            )}
                                            {produto.nome === 'Ciclo 21' && (
                                                <TouchableOpacity style={styles.buttonDescarte} onPress={() => router.navigate("/(noveseguimentos)/quatro")}>
                                                     <Ionicons
                                                        name= 'trash-outline'
                                                        size={20}
                                                        color="#fff"
                                                        />
                                                    <Text style={styles.buttonText}>DESCARTAR</Text>
                                                </TouchableOpacity>
                                            )}



                                            {produto.nome === 'Lidocaína' && (
                                                <TouchableOpacity style={styles.button} onPress={() => router.navigate('/(pasta)/lidocaina')}>
                                                    <Ionicons
                                                        name= 'add-outline'
                                                        size={20}
                                                        color="#fff"
                                                        />
                                                    <Text style={styles.buttonText}>MAIS INFORMAÇÕES</Text>
                                                </TouchableOpacity>
                                            )}
                                            {produto.nome === 'Lidocaína' && (
                                                <TouchableOpacity style={styles.buttonDescarte} onPress={() => router.navigate("/(noveseguimentos)/tres")}>
                                                     <Ionicons
                                                        name= 'trash-outline'
                                                        size={20}
                                                        color="#fff"
                                                        />
                                                    <Text style={styles.buttonText}>DESCARTAR</Text>
                                                </TouchableOpacity>
                                            )}

                                    
                                 </View>
                            
                            )}
                
                </View>
            </View>






                            {/* PARTE DA CAMERA*/}

            <View style={styles.boxLow}>
                <TouchableOpacity onPress={handleOpenCamera}>
                    <Ionicons name="barcode-outline" size={200} color="#000" />
                </TouchableOpacity>


                <Modal visible={modalIsVisible} style={{ flex: 1 }}>
                    <CameraView
                        style={{ flex: 1 }}
                        facing="back"
                        onBarcodeScanned={({ data }) => {
                            if (data && !qrCodeLock.current) {
                                qrCodeLock.current = true;
                                setTimeout(() => handleQRCodeRead(data), 500);
                            }
                        }}
                    />
                    <View style={styles.footer}>
                        <Ionicons name='scan-outline' size={300} color="#fff" style={styles.icon} />
                    </View>

                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.Cancelar} onPress={() => setModalIsVisible(false)}>
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#fff',
    },

    boxTop: {
        height: Dimensions.get('window').height / 8,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },

    boxMid: {
        height: Dimensions.get('window').height / 1.8,
        width: '100%',
        paddingHorizontal: 37,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
    },

    boxLow: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
    },

    footer: {
        position: "absolute",
        bottom: 100,
        left: 150,
        justifyContent: "center",
        alignItems: "center",
    },

    sair: {
        width: 100,
        height: 50,
        left: 30,
        top: 20,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor: themes.colors.cor4,
    },

    Cancelar: {
        width: 200,
        height: 60,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor: themes.colors.cor3,
    },

    icon: {
        right: 45,
        bottom: 300,
    },

    resultados: {
        width: '100%',
        height: '100%',
        backgroundColor: themes.colors.cor4,
        alignItems: 'center',
        justifyContent:'flex-start',
        borderRadius: 60,
        elevation: 5,
    },

    input: {
        height: 40,
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 50,
        width: '80%',
        paddingLeft: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent:'center',
    },

    buttonsContainer: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },

    button: {
        backgroundColor: '#000',
        paddingVertical: 13,
        paddingHorizontal: 13,
        borderRadius: 12,
        marginTop: 10,
        right:5,
        flexDirection:'row',
    },

    buttonDescarte: {
         backgroundColor:'#64dc32',
        paddingVertical: 13,
        paddingHorizontal: 13,
        borderRadius: 12,
        marginTop: 10,
        left:5,
        flexDirection:'row',
    },

    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        left:5,
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
        marginLeft:30,
        marginRight:30,
    },

    
    linha2:{
        width:'100%',
        height:20,
        backgroundColor:'#fff',
    },

    div:{
        width:'100%',
        height:100,
        backgroundColor:'red',
    }

});

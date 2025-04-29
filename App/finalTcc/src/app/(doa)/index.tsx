import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from "react-native";
import { router } from "expo-router"
import { themes } from "../../global/themes";
import { Ionicons } from "@expo/vector-icons"
import { produtos } from '../../app/data' // Importando os produtos

export default function Doação() {
    // Estados
    const [searchText, setSearchText] = useState("");
    const [filteredProdutos, setFilteredProdutos] = useState(produtos);

    // Função para filtrar produtos com base no texto da barra de pesquisa
    const handleSearch = (text: string) => {
        setSearchText(text);

        const resultadosFiltrados = produtos.filter((produto) => {
            const textoDigitado = text.toLowerCase();
            const nomeProduto = produto.nome.toLowerCase();
            const codigoProduto = produto.codigo.toLowerCase();

            return (
                nomeProduto.includes(textoDigitado) || 
                codigoProduto.includes(textoDigitado)
            );
        });

        setFilteredProdutos(resultadosFiltrados);
    };

    return (
        <View style={styles.container}>

                                <TouchableOpacity 
                                            style={styles.butao2}  
                                            onPress={() => router.navigate("/home")}
                                            >              
                                    <Ionicons name='home-outline' style={styles.icon}/>
                                </TouchableOpacity>


            {/* Barra de Pesquisa */}
            <TextInput
                style={styles.searchBar}
                placeholder="Digite o nome ou código do produto"
                value={searchText}
                onChangeText={handleSearch} // Atualiza a pesquisa ao digitar
            />

            {/* Lista de Resultados */}
            <FlatList
                data={filteredProdutos}
                keyExtractor={(item) => item.codigo}
                renderItem={({ item }) => (
                    <View style={styles.resultContainer}>
                        <Text style={styles.productName}>{item.nome}</Text>
                        <Text style={styles.productDescription}>
                            {item.descricao}
                        </Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Mais informações</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.noResults}>Nenhum produto encontrado.</Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    searchBar: {
        height: 50,
        borderWidth: 1.5,
        borderColor: "#000",
        borderRadius: 100,
        paddingHorizontal: 15,
        top:15,
        marginBottom: 50,
        fontSize: 16,
    },
    resultContainer: {
        backgroundColor: "#f4f4f4",
        padding: 15,
        borderRadius: 30,
        marginBottom: 10,
     
    },
    productName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    productDescription: {
        fontSize: 14,
        marginVertical: 10,
        color: "#555",
    },
    button: {
        backgroundColor: "#000",
        paddingVertical: 13,
        borderRadius: 17,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    noResults: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 16,
        color: "#888",
    },
    butao2:{
      width:80,
      height:50,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: themes.colors.cor2,
      borderRadius:80,
      elevation: 2,
      bottom:10,

    },
    icon:{
      color: '#fff',
      fontSize:20,
    },  
});
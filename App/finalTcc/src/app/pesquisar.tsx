import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Modal,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { produtos } from "../app/data"; // Importando os produtos

// Definindo o tipo do produto
type Produto = {
    codigo: string;
    nome: string;
    descricao: string;
    maisinf: string;
};

export default function Pesquisa() {
    const router = useRouter();

    // Estados
    const [searchText, setSearchText] = useState("");
    const [filteredProdutos, setFilteredProdutos] = useState<Produto[]>(produtos);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Produto | null>(null);

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

    // Função para abrir o modal com as informações do produto selecionado
    const openModal = (produto: Produto) => {
        setSelectedProduct(produto);
        setIsModalVisible(true);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedProduct(null);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.butao2}
                onPress={() => router.push("/home")}
            >
                <Ionicons name="home-outline" style={styles.icon} />
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
                        <Text style={styles.productDescription}>{item.descricao}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => openModal(item)} // Abre o modal ao clicar
                        >
                            <Text style={styles.buttonText}>Mais informações</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.noResults}>Nenhum produto encontrado.</Text>
                )}
            />

            {/* Modal de Mais Informações */}
            <Modal
    visible={isModalVisible}
    transparent={true}
    animationType="slide"
    onRequestClose={closeModal}
>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
                {selectedProduct && (
                    <>
                        <Text style={styles.modalTitle}>
                            {selectedProduct.nome}
                        </Text>
                        {/* Exibe mais informações caso existam */}
                        <Text style={styles.modalDescription}>
                            {selectedProduct.maisinf }
                        </Text>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={closeModal}
                        >
                            <Text style={styles.closeButtonText}>
                             X
                            </Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </View>
    </TouchableWithoutFeedback>
</Modal>
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
        top: 15,
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
    butao2: {
        width: 80,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        borderRadius: 80,
        elevation: 2,
        bottom: 10,
    },
    icon: {
        color: "#fff",
        fontSize: 20,
    },

    // Estilos para a modal
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo semitransparente
    },
    modalContainer: {
        width: "80%",
        height: "50%",
        backgroundColor: "#f1f1f1",
        borderRadius: 20,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        bottom: 80,
    },
    modalDescription: {
        fontSize: 16,
        marginBottom: 20,
        color: "#555",
    },
    modalMoreInfo: {
        fontSize: 14,
        color: "#777",
        marginBottom: 20,
    },
    closeButton: {
        top:80,
        backgroundColor: "#000",
        height:50,
        width:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 120,
    },
    closeButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
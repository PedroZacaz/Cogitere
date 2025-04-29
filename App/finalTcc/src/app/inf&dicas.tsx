import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView} from "react-native"
import { Button } from '../components/index'
import { useAuth, useUser } from "@clerk/clerk-expo"
import { router } from "expo-router"
import { themes } from "../global/themes";
import { Ionicons } from "@expo/vector-icons"


export default function Info() {
    const { user } = useUser()
    const { signOut} = useAuth()

    return(
      

         <View style={styles.container}>
                
                <TouchableOpacity style={styles.sair}  onPress={() => router.navigate("/home")}>
                       <Ionicons
                            name= 'home-outline'
                            size={20}
                            color="#fff"
                            />
                    </TouchableOpacity>
                     
                        <ScrollView style={styles.Scroll}>         
                          
                        <Text style={styles.titulo}> Termos e Condições de Uso</Text>

                            <Text style={styles.txt}>
                             - 1. Aceitação dos Termos Ao usar o aplicativo, você concorda com os Termos e Condições aqui descritos. Caso não concorde com qualquer parte destes termos, pedimos que não use nosso aplicativo.
                             </Text>
                             
                             <Text style={styles.txt}>
                             - 2. Coleta de Dados Nosso aplicativo pode coletar e processar dados pessoais de acordo com nossa Política de Privacidade. As informações coletadas serão usadas para aprimorar a experiência do usuário e melhorar nossos serviços. Você pode revisar nossa Política de Privacidade para entender como seus dados são gerenciados.
                             </Text>
                             <Text style={styles.txt}>
                             - 3. Uso do Serviço Você concorda em usar o aplicativo apenas para fins legais e em conformidade com todas as leis aplicáveis. É proibido o uso de nosso aplicativo para qualquer atividade ilícita ou que possa comprometer a segurança e integridade dos sistemas.
                             </Text>
                             <Text style={styles.txt}>
                             - 4. Propriedade Intelectual Todo o conteúdo disponibilizado no aplicativo, incluindo textos, imagens, design e funcionalidades, é protegido por direitos autorais e pertence ao desenvolvedor do aplicativo. É proibida a reprodução, distribuição ou modificação do conteúdo sem autorização expressa.
                             </Text>
                             <Text style={styles.txt}>
                             - 5. Limitação de Responsabilidade Não somos responsáveis por qualquer dano direto, indireto, incidental ou consequente que possa surgir do uso ou incapacidade de uso do aplicativo. O uso do aplicativo é por sua conta e risco.
                             </Text>
                             <Text style={styles.txt}>
                             - 6. Alterações dos Termos Reservamo-nos o direito de modificar estes Termos e Condições a qualquer momento. Qualquer alteração será informada previamente no aplicativo, e o uso contínuo do serviço após essa notificação implica aceitação dos novos termos.
                             </Text>
                             <Text style={styles.txt}>
                             - 7. Rescisão de Conta Podemos suspender ou encerrar o seu acesso ao aplicativo a qualquer momento, sem aviso prévio, se considerarmos que você violou qualquer um dos termos aqui estabelecidos.
                             </Text>
                             <Text style={styles.txt}>
                             - 8. Contato Se tiver dúvidas sobre estes Termos e Condições, entre em contato conosco através da seção de contato disponível no aplicativo.

                             -    Data de Vigência: [22/11/2024]

                             </Text>
                                                       
                             <Text style={styles.txt}>
                                Os aplicativos voltados para a doação e descarte correto de medicamentos são aliados na preservação do meio ambiente e na promoção da saúde. Veja como utilizá-los:
                             </Text>                     


                             <Text style={styles.txt}>                           
                                 1. Cadastro e Acesso
                                 Comece criando uma conta no aplicativo, preenchendo dados básicos como nome, e-mail e endereço. Isso garante uma experiência personalizada e facilita o processo de doação ou descarte.
                             </Text>
                             <Text style={styles.txt}>   
                                 2. Escaneamento de Medicamentos
                                 Use a câmera do celular para escanear o código de barras dos remédios. Assim, o aplicativo identifica informações importantes, como validade e composição.
                              </Text>
                            <Text style={styles.txt}>   
                                3. Doação de Medicamentos
                                 Para doar, verifique no app os medicamentos que podem ser aceitos. Certifique-se de que estão dentro do prazo de validade e em boas condições. O app indica pontos de coleta ou pessoas que podem recebê-los.
                             </Text>
                            <Text style={styles.txt}>   
                                4. Descarte Correto
                                    Medicamentos vencidos ou inutilizáveis devem ser descartados de forma segura. Use o app para localizar postos de descarte mais próximos, como farmácias e pontos de coleta autorizados. Nunca jogue medicamentos no lixo comum ou na pia, pois isso pode contaminar o meio ambiente.
                            </Text>
                            <Text style={styles.txt}>   
                                5. Acompanhe as Atualizações
                                Mantenha o aplicativo atualizado para aproveitar novas funcionalidades, como campanhas de doação e notificações sobre descarte responsável.
                             </Text>
                            <Text style={styles.txt}>   
                                Ao seguir essas dicas, você contribui para um planeta mais sustentável e para o acesso à saúde de quem precisa. 💊🌱
                            </Text>     

                        </ScrollView>
                   

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
        marginLeft:30,
        marginRight:30,
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

    
})
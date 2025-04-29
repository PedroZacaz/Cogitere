import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, Alert} from "react-native"
import { useAuth, useUser } from "@clerk/clerk-expo"
import { router } from "expo-router"
import { themes } from "../../global/themes";
import { Ionicons } from "@expo/vector-icons"
import * as Linking from 'expo-linking';




const Info = () => {
  // Função para abrir o site
  const openWebsite = () => {
    const url = 'https://www.ems.com.br/arquivos/produtos/bulas/bula_dipirona_sodica_10583_1226.pdf';
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


  return(
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

                        <TouchableOpacity style={styles.descarte}  onPress={() => router.navigate("/home")}>
                        <Ionicons
                                name= 'trash'
                                size={20}
                                color="#fff"
                                />
                        </TouchableOpacity>
                    </View>


                        <ScrollView style={styles.Scroll}>         
                          
                        <Text style={styles.titulo}> Informações sobre o medicamento</Text>

                          
                      <Text style={styles.titulo}>      Dipirona Monoidratada (Solução oral 50 mg/mL)
LEGRAND PHARMA INDÚSTRIA FARMACÊUTICA LTDA
Atualizado em 20/03/2020
IDENTIFICAÇÃO DO MEDICAMENTO
dipirona monoidratada
Solução oral 50 mg/mL
Medicamento genérico Lei n° 9.787 de 1999

FORMA FARMACÊUTICA E APRESENTAÇÃO:
Solução oral
Frascos com 100 mL, 120 mL e 150 mL + copo medida

USO ORAL
USO ADULTO E PEDIÁTRICO ACIMA DE 3 MESES

COMPOSIÇÃO:
Cada mL da solução oral contém:

dipirona monoidratada (equivalente a 50 mg de dipirona)	52,703 mg
veículo q.s.p.	1 mL
Veículo: hietelose, metabissulfito de sódio, sorbato de potássio, benzoato de sódio, ácido cítrico, corante vermelho eritrosina dissódica, essência de framboesa, sorbitol, sacarina sódica, ciclamato de sódio e água purificada.

INFORMAÇÕES AO PACIENTE
PARA QUE ESTE MEDICAMENTO É INDICADO?
Este medicamento é indicado como antitérmico (para febre) e analgésico (para dor).

COMO ESTE MEDICAMENTO FUNCIONA?
A dipirona é um medicamento utilizado no tratamento da dor e febre.

Os efeitos analgésico e antitérmico podem ser esperados em 30 a 60 minutos após a administração e geralmente persistem por aproximadamente 4 horas.

QUANDO NÃO DEVO USAR ESTE MEDICAMENTO?
A dipirona não deve ser utilizada caso você tenha:

alergia ou intolerância à dipirona ou a qualquer um dos componentes da formulação ou a outras pirazolonas (ex. fenazona, propifenazona) ou a pirazolidinas (ex. fenilbutazona, oxifembutazona) incluindo, por exemplo, experiência prévia de agranulocitose (diminuição acentuada na contagem dos glóbulos brancos do sangue) com uma dessas substâncias;
função da medula óssea prejudicada (ex. após tratamento citostático) ou doenças do sistema hematopoiético (responsável pela produção das células sanguíneas);
desenvolvido broncoespasmo (contração dos brônquios levando a chiado no peito) ou outras reações anafilactoides, como urticária (erupção na pele que causa coceira), rinite (irritação e inflamação da mucosa do nariz), angioedema (inchaço em região subcutânea ou em mucosas) depois do uso de medicamentos para dor tais como salicilatos, paracetamol, diclofenaco, ibuprofeno, indometacina, naproxeno;
porfiria hepática aguda intermitente (doença metabólica que se manifesta através de problemas na pele e/ou com complicações neurológicas) pelo risco de indução de crises de porfiria;
deficiência congênita da glicose-6-fosfato-desidrogenase (G6PD), pelo risco de hemólise (destruição dos glóbulos vermelhos, o que pode levar à anemia);
gravidez e amamentação (vide “4. O que devo saber antes de usar este medicamento?”)
Este medicamento é contraindicado para menores de 3 meses de idade ou pesando menos de 5 kg.

Este medicamento não deve ser utilizado por mulheres grávidas sem orientação médica ou do cirurgião-dentista. Informe imediatamente seu médico em caso de suspeita de gravidez.

O QUE DEVO SABER ANTES DE USAR ESTE MEDICAMENTO?
ADVERTÊNCIAS
Agranulocitose (diminuição do número de granulócitos, que são tipos de glóbulos brancos, em consequência de um distúrbio na medula óssea) induzida pela dipirona é uma ocorrência de origem imunoalérgica que pode durar pelo menos 1 semana. Essas reações são raras, e podem ser graves, com risco à vida e podem, em alguns casos, serem fatais.

Interrompa o uso da medicação e consulte seu médico imediatamente se alguns dos seguintes sinais ou sintomas ocorrerem: febre, calafrios, dor de garganta, lesão na boca.

Pancitopenia [diminuição global das células do sangue (glóbulos brancos, vermelhos e plaquetas)]: interrompa o tratamento imediatamente e procure o seu médico se ocorrerem alguns dos seguintes sinais ou sintomas: mal estar geral, infecção, febre persistente, equimoses (manchas roxas), sangramento, palidez.

Choque anafilático (reação alérgica grave): ocorre principalmente em pacientes sensíveis. Portanto, a dipirona deve ser usada com cautela em pacientes que apresentem alergia atópica ou asma (vide “3. Quando não devo usar este medicamento?”).

Reações cutâneas graves: foram relatadas reações cutâneas graves, com o uso de dipirona como síndrome de Stevens-Johnson (forma grave de reação alérgica caracterizada por bolhas em mucosas e em grandes áreas do corpo) e Necrólise Epidérmica Tóxica ou síndrome de Lyell (quadro grave, onde uma grande extensão de pele começa a apresentar bolhas e evolui com áreas avermelhadas semelhante a uma grande queimadura). Se você desenvolver alguns desses sinais ou sintomas erupções cutâneas muitas vezes com bolhas ou lesões da mucosa, o tratamento deve ser interrompido imediatamente e não deve ser retomado.

Reações anafiláticas/anafilactoides (reação alérgica grave e imediata que pode levar à morte)

Caso você esteja em alguma das situações abaixo, converse com seu médico, pois estas situações apresentam risco especial para possíveis reações anafiláticas graves relacionadas à dipirona (vide “3. Quando não devo usar este medicamento?”):

asma brônquica, particularmente aqueles com rinosinusite poliposa (processo inflamatório no nariz e seios da face com formação de pólipos) concomitante;
urticária crônica;
intolerância ao álcool, por exemplo, pessoas que reagem até mesmo a pequenas quantidades de bebidas alcoólicas, apresentando sintomas como espirros, lacrimejamento e vermelhidão acentuada da face;
intolerância a corantes (ex. tartrazina) ou a conservantes (ex.: benzoatos).
Se você tem alguma alergia, informe seu médico e use dipirona somente sob orientação.

Reações hipotensivas (de pressão baixa) isoladas
A administração de dipirona pode causar reações hipotensivas isoladas (vide “8. Quais os males que este medicamento pode me causar?”). Essas reações são possivelmente dose-dependentes e ocorrem com maior probabilidade após administração injetável. Caso você tenha insuficiência dos rins ou do fígado, recomenda-se que o uso de altas doses de dipirona seja evitado, uma vez que a taxa de eliminação é reduzida nestes casos.

Gravidez e amamentação
Recomenda-se não utilizar dipirona durante os primeiros 3 meses da gravidez. O uso de dipirona durante o segundo trimestre da gravidez só deve ocorrer após cuidadosa avaliação do potencial risco/benefício pelo médico. A dipirona não deve ser utilizada durante os 3 últimos meses da gravidez.

A amamentação deve ser evitada durante e por até 48 horas após a o uso de dipirona é eliminada no leite materno.

Populações especiais
Pacientes idosos: deve-se considerar a possibilidade das funções do fígado e rins estarem prejudicadas.

Crianças: menores de 3 meses de idade ou pesando menos de 5 kg não devem ser tratadas com dipirona. É recomendada supervisão médica quando se administra dipirona a crianças pequenas.

Restrições a grupos de risco: vide itens “3. Quando não devo usar este medicamento?” e “4. O que devo saber antes de usar este medicamento?”

Alterações na capacidade de dirigir veículos e operar máquinas
Para as doses recomendadas, nenhum efeito adverso na habilidade de se concentrar e reagir é conhecido.

Entretanto, pelo menos com doses elevadas, deve-se levar em consideração que as habilidades para se concentrar e reagir podem estar prejudicadas, constituindo risco em situações onde estas habilidades são de importância especial (por exemplo, operar carros ou máquinas), especialmente quando álcool foi consumido.

Sensibilidade cruzada
Pacientes que apresentam reações anafilactoides à dipirona podem apresentar um risco especial para reações semelhantes a outros analgésicos não narcóticos.

Pacientes que apresentam reações anafiláticas ou outras imunologicamente-mediadas, ou seja, reações alérgicas (ex. agranulocitose) à dipirona podem apresentar um risco especial para reações semelhantes a outras pirazolonas ou pirazolidinas.

INTERAÇÕES MEDICAMENTOSAS
Ciclosporinas: a dipirona pode causar redução dos níveis de ciclosporina no sangue, devendo, portanto, a concentração ser monitorada quando a dipirona for usada. concomitantemente.

Metotrexato: o uso concomitante de dipirona com metotrexato pode aumentar a toxicidade sanguínea do metotrexato particularmente em pacientes idosos. Portanto, esta combinação deve ser evitada.

Ácido acetilsalicílico: a dipirona pode reduzir o efeito do ácido acetilsalicílico na agregação plaquetária (união das plaquetas que atuam na coagulação), quando usados concomitantemente. Portanto, essa combinação deve ser usada com precaução em pacientes que tomam baixa dose de ácido acetilsalicílico para cardioproteção. Bupropiona: a dipirona pode causar a redução na concentração sanguínea de bupropiona. Portanto, recomenda-se cautela quando a dipirona e a bupropiona são usadas concomitantemente.

Medicamento-alimentos: não há dados disponíveis até o momento sobre a interação entre alimentos e dipirona. Medicamento-exames laboratoriais: foram reportadas interferências em testes laboratoriais que utilizam reações de Trinder (por exemplo: testes para medir níveis séricos de creatinina, triglicérides, colesterol HDL e ácido úrico) em pacientes utilizando dipirona.

Informe ao seu médico ou cirurgião-dentista se você está fazendo uso de algum outro medicamento.

ONDE, COMO E POR QUANTO TEMPO POSSO GUARDAR ESTE MEDICAMENTO?
Cuidados de conservação
Este medicamento deve ser mantido à temperatura ambiente (entre 15 e 30°C), proteger da luz e manter em lugar seco.

Número de lote e datas de fabricação e validade: vide embalagem.

Não use medicamento com o prazo de validade vencido. Guarde-o em sua embalagem original.

Características físicas e organolépticas do produto
Solução límpida, na cor rosa, com sabor e odor de framboesa, isenta de partículas e material estranho.

Antes de usar, observe o aspecto do medicamento. Caso ele esteja no prazo de validade e você observe alguma mudança no aspecto, consulte o farmacêutico para saber se poderá utilizá-lo.

TODO MEDICAMENTO DEVE SER MANTIDO FORA DO ALCANCE DAS CRIANÇAS.

COMO DEVO USAR ESTE MEDICAMENTO?
Modo de usar
Recomenda-se que, para a administração da solução oral, seja utilizado o copo medida que acompanha o frasco na embalagem. Não é necessário agitar o produto.

O copo medida foi desenvolvido exclusivamente para a administração de dipirona e não deve ser utilizado para administração de outros medicamentos.

O tratamento pode ser interrompido a qualquer instante sem provocar danos ao paciente, inerentes à retirada da medicação.

Posologia
Adultos e adolescentes acima de 15 anos: 10 a 20 mL em administração única ou até o máximo de 20 mL, 4 vezes ao dia.

As crianças devem receber dipirona conforme seu peso seguindo a orientação deste esquema:

Peso
(média de idade)

Dose

Solução oral
(em mL)*

5 a 8 kg (3 a 11 meses)

Dose única

1,25 a 2,5

Dose máxima diária

10 (4 tomadas x 2,5 mL)

9 a 15 kg (1 a 3 anos)

Dose única

2,5 a 5

Dose máxima diária

20 (4 tomadas x 5 mL)

16 a 23 kg (4 a 6 anos)

Dose única

3,75 a 7,5

Dose máxima diária

30 (4 tomadas x 7,5 mL)

24 a 30 kg (7 a 9 anos)

Dose única

5 a 10

Dose máxima diária

40 (4 tomadas x 10 mL)

31 a 45 kg (10 a 12 anos)

Dose única

7,5 a 15

Dose máxima diária

60 (4 tomadas x 15 mL)

46 a 53 kg (13 a 14 anos)

Dose única

8,75 a 17,5

Dose máxima diária

70 (4 tomadas x 17,5 mL)

* utilizar o copo medida.

Crianças menores de 3 meses de idade ou pesando menos de 5 kg não devem ser tratadas com dipirona.

Se o efeito de uma única dose for insuficiente ou após o efeito analgésico ter diminuído, a dose pode ser repetida respeitando-se o modo de usar e a dose máxima diária, conforme descrito em modo de usar.

Não há estudos dos efeitos de dipirona administrada por vias não recomendadas. Portanto, por segurança e para garantir a eficácia deste medicamento, a administração deve ser somente por via oral.

Populações especiais
Pacientes com insuficiência nos rins ou no fígado, recomenda-se que o uso de altas doses de dipirona seja evitado, uma vez que a taxa de eliminação é reduzida nestes pacientes. Entretanto, para tratamento em curto prazo não é necessária redução da dose. Não existe experiência com o uso de dipirona em longo prazo em pacientes com insuficiência dos rins ou do fígado.

Em pacientes idosos e pacientes debilitados deve-se considerar a possibilidade das funções do fígado e dos rins estarem prejudicadas.

Siga corretamente o modo de usar. Em caso de dúvidas sobre este medicamento, procure orientação do farmacêutico. Não desaparecendo os sintomas, procure orientação de seu médico ou do cirurgião-dentista.

O QUE DEVO FAZER QUANDO EU ME ESQUECER DE USAR ESTE MEDICAMENTO?
Caso se esqueça de tomar uma dose, tome-a assim que possível. No entanto, se estiver próximo do horário da próxima dose, espere por este horário, respeitando sempre o intervalo determinado pelo modo de usar. Não usar o medicamento em dobro para compensar doses esquecidas.

Em caso de dúvidas, procure orientação do farmacêutico ou de seu médico, ou cirurgião-dentista.

QUAIS OS MALES QUE ESTE MEDICAMENTO PODE ME CAUSAR?
As frequências das reações adversas estão listadas a seguir de acordo com a seguinte convenção:

Categoria	Frequência
Muito comum	≥ 10%
Comum	≥ 1% e  10%
Incomum	≥ 0,1% e  1%
Raro	≥ 0,01% e  0,1%
Muito raro	 0,01%
Desconhecida	Não pode ser estimada pelos dados disponíveis
Distúrbios cardíacos: Síndrome de Kounis (aparecimento simultâneo de eventos coronarianos agudos e reações alérgicas ou anafilactoides. Engloba conceitos como infarto alérgico e angina alérgica).

Distúrbios do sistema imunológico: A dipirona pode causar choque anafilático, reações anafiláticas/anafilactoides que podem se tornar graves com risco à vida e, em alguns casos, serem fatais. Estas reações podem ocorrer mesmo após a dipirona ter sido utilizada previamente em muitas ocasiões sem complicações.

Estas reações medicamentosas podem desenvolver-se imediatamente após a administração de dipirona ou horas mais tarde; contudo, a tendência normal é que estes eventos ocorram na primeira hora após a administração. Normalmente, reações anafiláticas/anafilactoides leves manifestam-se na forma de sintomas cutâneos ou nas mucosas (tais como: coceira, ardor, vermelhidão, urticária, inchaço), falta de ar e, menos frequentemente, doenças/queixas gastrintestinais.

Estas reações leves podem progredir para formas graves com coceira generalizada, angioedema grave (inchaço em região subcutânea ou em mucosas, geralmente de origem alérgica até mesmo envolvendo a laringe), broncoespasmo grave, arritmias cardíacas (descompasso dos batimentos do coração), queda da pressão sanguínea (algumas vezes precedida por aumento da pressão sanguínea) e choque circulatório (colapso circulatório em que existe um fluxo sanguíneo inadequado para os tecidos e células do corpo). Em pacientes com síndrome da asma analgésica, reações de intolerância aparecem tipicamente na forma de ataques asmáticos (falta de ar).

Distúrbios na pele e tecido subcutâneo: Além das manifestações da pele e mucosas, de reações anafiláticas/anafilactoides mencionadas acima, podem ocorrer ocasionalmente erupções medicamentosas fixas; raramente exantema [rash (erupções na pele)], e, em casos isolados, síndrome de Stevens-Johnson (forma grave de reação alérgica caracterizada por bolhas em mucosas e em grandes áreas do corpo) ou síndrome de Lyell (doença bolhosa grave que causa morte da camada superficial da pele e mucosas, deixando um aspecto de queimaduras de grande extensão) (vide “4. O que devo saber antes de usar este medicamento?”). Deve-se interromper imediatamente o uso de medicamentos suspeitos.

Distúrbios do sangue e sistema linfático: Anemia aplástica (doença onde a medula óssea produz em quantidade insuficiente os glóbulos vermelhos, glóbulos brancos e plaquetas), agranulocitose e pancitopenia, incluindo casos fatais, leucopenia (redução dos glóbulos brancos) e trombocitopenia (diminuição no número de plaquetas).

Estas reações podem ocorrer mesmo após a dipirona ter sido utilizada previamente em muitas ocasiões, sem complicações.

Os sinais típicos de agranulocitose incluem lesões inflamatórias na mucosa (ex. orofaríngea, anorretal, genital), inflamação na garganta, febre (mesmo inesperadamente persistente ou recorrente). Entretanto, em pacientes recebendo tratamento com antibiótico, os sinais típicos de agranulocitose podem ser mínimos. A taxa de sedimentação eritrocitária é extensivamente aumentada, enquanto que o aumento de nódulos linfáticos é tipicamente leve ou ausente.

Os sinais típicos de trombocitopenia incluem uma maior tendência para sangramento e aparecimento de pontos vermelhos na pele e membranas mucosas.

Distúrbios vasculares: Reações hipotensivas isoladas

Podem ocorrer ocasionalmente após a administração, reações hipotensivas transitórias isoladas; em casos raros, estas reações apresentam-se sob a forma de queda crítica da pressão sanguínea.

Distúrbios renais e urinários: Em casos muito raros, especialmente em pacientes com histórico de doença nos rins, pode ocorrer piora súbita ou recente da função dos rins (insuficiência renal aguda), em alguns casos com diminuição da produção de urina, redução muito acentuada da produção de urina ou perda aumentada de proteínas através da urina. Em casos isolados, pode ocorrer nefrite intersticial aguda (um tipo de inflamação nos rins).

Uma coloração avermelhada pode ser observada algumas vezes na urina.

Distúrbios gastrointestinais: Foram reportados casos de sangramento gastrointestinal.

Informe ao seu médico, cirurgião-dentista ou farmacêutico o aparecimento de reações indesejáveis pelo uso do medicamento. Informe também a empresa através do seu serviço de atendimento.

O QUE FAZER SE ALGUÉM USAR UMA QUANTIDADE MAIOR DO QUE A INDICADA DESTE MEDICAMENTO?
Sintomas: enjôo, vômito, dor abdominal, deficiência da função dos rins/insuficiência aguda dos rins (ex. devido à nefrite intersticial), mais raramente, sintomas do sistema nervoso central (tontura, sonolência, coma, convulsões) e queda da pressão sanguínea (algumas vezes progredindo para choque) bem como arritmias cardíacas (taquicardia). Após o uso de doses muito elevadas, a excreção de um metabólito inofensivo (ácido rubazônico) pode provocar coloração avermelhada na urina.

Tratamento: não existe antídoto específico conhecido para dipirona. Se a ingestão foi feita por apenas um local de administração, poderão ser realizadas medidas para diminuir a absorção sistêmica dos ingredientes ativos através de desintoxicação primária (ex.: lavagem gástrica) ou diminuir a absorção (carvão ativado). O principal metabólito da dipirona (4-N-metilaminoantipirina) pode ser eliminado por hemodiálise, hemofiltração, hemoperfusão ou filtração plasmática.

Em caso de uso de grande quantidade deste medicamento, procure rapidamente socorro médico e leve a embalagem ou bula do medicamento, se possível. Ligue para 0800 722 6001, se você precisar de mais orientações.

DIZERES LEGAIS

Siga corretamente o modo de usar, não desaparecendo os sintomas, procure orientação médica.
 

Reg. MS: nº 1.6773.0542
Farm. Resp.: Dra. Maria Betânia Pereira CRF-SP nº 37.788

Registrado por:
LEGRAND PHARMA INDÚSTRIA FARMACÊUTICA LTDA.
Rod. Jornalista F. A. Proença, km 08
Bairro Chácara Assay / Hortolândia - SP
CEP: 13.186-901- CNPJ: 05.044.984/0001-26
INDÚSTRIA BRASILEIRA

Fabricado por:
EMS S/A Hortolândia - SP


SAC 0800 500600
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

    
})
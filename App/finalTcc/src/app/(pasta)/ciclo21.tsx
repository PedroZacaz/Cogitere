import React from 'react';
import { View, Button, StyleSheet, Alert, ScrollView, TouchableOpacity, Text} from 'react-native';
import * as Linking from 'expo-linking';
import { router } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

const App = () => {
  // Função para abrir o site
  const openWebsite = () => {
    const url = 'https://img.drogasil.com.br/raiadrogasil_bula/CICLO21.pdf';
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

                        <TouchableOpacity style={styles.descarte}  onPress={() => router.navigate("/(noveseguimentos)/quatro")}>
                        <Ionicons
                                name= 'trash'
                                size={20}
                                color="#fff"
                                />
                        </TouchableOpacity>
                    </View>


      <ScrollView style={styles.Scroll}>         
                          
                          <Text style={styles.titulo}>Ciclo 21 </Text>
  
                            
                        <Text style={styles.titulo}>     
                        Ciclo 21
UNIÃO QUÍMICA FARMACÊUTICA NACIONAL S/A
Atualizado em 07/10/2019
IDENTIFICAÇÃO DO PRODUTO
Ciclo 21®
levonorgestrel + etilnilestradiol
Comprimido

APRESENTAÇÕES
Comprimido
Embalagem contendo 21 ou 63 comprimidos.

VIA ORAL
USO ADULTO

COMPOSIÇÃO:
Cada comprimido contém:

levonorgestrel	0,15 mg
etinilestradiol	0,03 mg
Excipientes: lactose, povidona, celulose microcristalina, laurilsulfato de sódio, croscarmelose sódica e macrogol

INFORMAÇÕES AO PACIENTE
PARA QUE ESTE MEDICAMENTO É INDICADO?
Ciclo 21 é indicado na prevenção da gravidez e para o controle de irregularidades menstruais. Embora os contraceptivos orais (anticoncepcionais) sejam altamente eficazes, há casos de gravidez em mulheres que os utilizam.

COMO ESTE MEDICAMENTO FUNCIONA?
Ciclo 21 é um contraceptivo oral (previne a gravidez) combinado, que concilia os componentes etinilestradiol e levonorgestrel. Os anticoncepcionais orais combinados agem por inibição do hormônio que estimula o ovário. Embora o mecanismo primário dessa ação seja a inibição da ovulação, outras alterações incluem: mudanças no muco cervical (que aumenta a dificuldade de entrada do espermatozoide no útero) e no endométrio (que reduz a probabilidade de adesão do óvulo fecundado na parede uterina).

QUANDO NÃO DEVO USAR ESTE MEDICAMENTO?
Ciclo 21 não deve ser usado por pacientes com hipersensibilidade aos componentes da fórmula ou que apresentem ou já apresentaram trombose venosa profunda (coágulos nas veias) ou tromboembolismo (rompimento de um vaso sanguíneo). Ciclo 21 também é contraindicado para mulheres que apresentam qualquer uma das seguintes condições: doença vascular cerebral (derrame cerebral) ou coronariana arterial (estreitamento dos vasos que sustentam o coração), valvulopatias trombogênicas (doença das válvulas do coração); distúrbios trombogênicos (doenças dos vasos sanguíneos); diabetes com envolvimento dos vasos sanguíneos; hipertensão (pressão alta); carcinoma da mama (câncer de mama) conhecido ou suspeito ou outra neoplasia (câncer) estrogênio-dependente conhecida ou suspeita; adenomas (tumor glandular benigno) ou carcinomas hepáticos (câncer do fígado), ou doença hepática ativa (distúrbios do fígado), desde que a função hepática não tenha retornado ao normal; gravidez confirmada ou suspeita.

Este medicamento não deve ser utilizado por mulheres grávidas ou que possam ficar grávidas durante o tratamento.

O QUE DEVO SABER ANTES DE USAR ESTE MEDICAMENTO?
Exame físico e acompanhamento: deve-se obter histórico médico completo, pessoal e familiar, e realizar exame físico, incluindo determinação da pressão arterial, antes do inicio do uso de anticoncepcionais. Esses exames devem ser repetidos periodicamente.

Efeitos sobre os carboidratos e lipídeos
Pacientes com intolerância à glicose ou diabetes mellitus devem ser acompanhadas criteriosamente enquanto estiverem recebendo Ciclo 21.

Uma pequena parcela das usuárias de anticoncepcionais pode apresentar aumento de triglicérides.
Em pacientes com nível elevado de triglicérides, o uso de hormônios pode estar associado a raras, porém grandes elevações de triglicérides no sangue que podem resultar em inflamação do pâncreas.

Relatou-se aumento dos níveis de colesterol, do tipo HDL, no sangue com o uso de estrogênios, enquanto que com progestogênios relatou-se diminuição dos níveis. Alguns progestogênios podem aumentar os níveis de colesterol do tipo LDL e tornar o controle do aumento de gorduras no sangue mais difícil. Mulheres que fazem tratamento para diminuir a concentração de gordura no sangue devem ser monitoradas caso forem utilizar Ciclo 21.

Sangramento genital
Algumas mulheres podem não menstruar durante o intervalo sem comprimidos. Se o contraceptivo oral combinado não foi utilizado de acordo com as orientações antes da ausência da primeira menstruação ou se não ocorrerem duas menstruações consecutivas, deve-se interromper o uso e utilizar um método não hormonal para a prevenção da gravidez (Ex: camisinha).

Pode ocorrer pequenos sangramentos em mulheres em tratamento com Ciclo 21, sobretudo nos primeiros três meses de uso. Se esse tipo de sangramento persistir ou recorrer, as causas devem ser investigadas com exames para excluir a possibilidade de gravidez, infecção, malignidades ou outras condições. Se essas condições forem excluídas, o uso contínuo do anticoncepcional ou a mudança para outra formulação podem resolver o problema.

Algumas mulheres podem apresentar ausência de menstruação pós-pílula ou fluxo sanguíneo pequeno, particularmente quando essas condições são preexistentes.

Depressão
Mulheres utilizando Ciclo 21 com história de depressão devem ser observadas criteriosamente e o medicamento deve ser suspenso se a depressão reaparecer em grau sério. As pacientes que ficarem significativamente deprimidas durante o tratamento com anticoncepcionais devem interromper o uso do medicamento e utilizar um método de prevenção alternativo, na tentativa de determinar se o sintoma está relacionado ao medicamento.

Outras
Este produto não protege contra infecção por HIV (AIDS) ou outras doenças sexualmente transmissíveis.

Diarreia e/ou vômitos podem reduzir a absorção do hormônio, resultando na diminuição das concentrações do medicamento no sangue.

Cigarro
Fumar cigarros aumenta o risco de efeitos colaterais cardiovasculares sérios decorrente do uso de contraceptivos orais combinados. Este risco aumenta com a idade e com o consumo intenso (fumar 15 ou mais cigarros por dia foi associado a risco significativamente maior) e é bastante acentuado em mulheres com mais de 35 anos de idade. Mulheres que tomam contraceptivos orais combinados são aconselhadas a não fumar.

Tromboembolismo e trombose venosa e arterial
O uso de contraceptivos orais combinados está associado ao aumento do risco de eventos tromboembólicos e trombóticos venosos e arteriais.

A introdução do tratamento com contraceptivos orais combinados em novas usuárias deve ser feita com formulações com menos de 50 mg de estrogênio.

– Tromboembolismo e trombose venosa
O uso de contraceptivos orais combinados aumenta o risco de eventos tromboembólicos e trombóticos venosos. Entre os eventos relatados estão trombose venosa profunda e embolia pulmonar (bloqueio de vasos sanguíneos pulmonares).

Usuárias de qualquer contraceptivo oral combinado apresentam risco aumentado de eventos tromboembólicos e trombóticos venosos em comparação a não usuárias. O aumento do risco é maior durante o primeiro ano em que uma mulher usa um contraceptivo oral combinado. Esse risco aumentado é menor do que o risco de eventos tromboembólicos e trombóticos venosos associado a gravidez, estimado em 60 casos por 100.000 mulheres-anos. O tromboembolismo venoso é fatal em 1 a 2% dos casos.

O risco de eventos tromboembólicos e trombóticos venosos é ainda maior em mulheres predispostas para tromboembolismo e trombose venosos.

A seguir, exemplos de condições que predispõem tromboembolismo e trombose venosos:

obesidade
cirurgia ou trauma com maior risco de trombose
parto recente ou aborto no segundo trimestre
imobilização prolongada
idade avançada
Outros fatores de risco, que representam contraindicações para o uso de contraceptivos orais combinados estão apresentados no item contraindicações.
Relatou-se aumento de 2 a 4 vezes do risco relativo de complicações tromboembólicas pós-operatórias com o uso de contraceptivos orais combinados. O risco relativo de trombose venosa em mulheres predispostas é 2 vezes maior do que nas que não apresentam essas condições. Se possível, os contraceptivos orais combinados devem ser descontinuados:

nas 4 semanas anteriores e nas 2 semanas posteriores a cirurgia eletiva associada a aumento do risco de trombose;
durante imobilização prolongada.
Como o pós-parto imediato está associado ao aumento do risco de tromboembolismo, o tratamento com contraceptivos orais combinados não deve começar antes do 28º dia após o parto ou aborto no segundo trimestre.

– Tromboembolismo e trombose arterial
o uso de contraceptivos orais combinados aumenta o risco de eventos tromboembólicos e trombóticos arteriais. Entre os eventos relatados estão infarto do miocárdio e acidentes vasculares cerebrais (AVC isquêmicos (falta de fluxo sanguíneo) e hemorrágicos).

A seguir, exemplos de fatores de risco para eventos tromboembólicos e trombóticos arteriais:

fumo;
algumas trombofilias hereditárias e adquiridas;
hipertensão;
hiperlipidemias (aumento de gorduras no sangue);
obesidade;
idade avançada.
O risco de acidente vascular cerebral pode ser maior em usuárias de contraceptivo oral combinado que sofrem de enxaqueca.

Lesões oculares
Houve relatos de casos de trombose retiniana vascular (formação de coágulos nos vasos sanguíneos da retina) com o uso de contraceptivos orais combinados, que podem resultar em perda total ou parcial da visão.

Se houver sinais ou sintomas de alterações visuais, como por exemplo: visão dupla, sensação de inchaço no olho, deve-se interromper o uso dos contraceptivos orais combinados e avaliar imediatamente a causa.

Pressão arterial
Relatou-se aumento da pressão arterial em mulheres em tratamento com contraceptivos orais combinados.

Em mulheres com hipertensão, histórico de hipertensão ou doenças relacionadas à hipertensão (incluindo algumas doenças renais), pode ser preferível utilizar outro método contraceptivo. Se pacientes hipertensas escolherem o tratamento com contraceptivos orais combinados, devem ser monitorizadas rigorosamente e, se ocorrer aumento significativo da pressão arterial, deve-se interromper o uso do contraceptivo oral combinado.

Na maioria das pacientes, a pressão arterial volta ao valor normal com a interrupção da administração do contraceptivo oral combinado e, aparentemente, não há diferença na ocorrência de hipertensão entre mulheres que já usaram e as que nunca tomaram contraceptivos orais combinados.

O uso de contraceptivo oral combinado é contraindicado em mulheres com hipertensão não controlada (ver item “3. Quando não devo usar este medicamento?”).

Carcinoma dos órgãos reprodutores
Alguns estudos sugerem que o uso de contraceptivo oral combinado pode estar associado ao aumento do risco de câncer de útero em algumas populações de mulheres. No entanto, ainda há controvérsia sobre o grau em que essas descobertas podem estar relacionadas a diferenças de comportamento sexual e outros fatores. Estudos relataram que o risco relativo de diagnóstico de câncer de mama é ligeiramente maior em mulheres que utilizam contraceptivos orais combinados do que nas que nunca utilizaram. O aumento do risco desaparece gradualmente no transcorrer de 10 anos após a interrupção do uso de contraceptivos orais combinados. Esses estudos não fornecem evidências de relação entre as causas da doença. O padrão observado de aumento do risco de diagnóstico de câncer de mama pode ser consequência da detecção mais precoce desse câncer em usuárias de contraceptivos orais combinados (devido à monitorização clínica mais regular), dos efeitos biológicos dos contraceptivos orais combinados ou da combinação de ambos. Como o câncer de mama é raro em mulheres com menos de 40 anos, o número excedente de diagnósticos de câncer de mama em usuárias de contraceptivos orais combinados atuais e recentes é pequeno em relação ao risco de câncer de mama ao longo da vida. O câncer de mama diagnosticado em mulheres que já utilizaram contraceptivos orais combinados tende a ser menos avançado clinicamente que o diagnosticado em mulheres que nunca os utilizaram.

Neoplasia hepática/doença hepática
Câncer no fígado, em casos raros, está associado ao uso de contraceptivo oral combinado. Aparentemente, o risco aumenta com o tempo de uso do contraceptivo oral combinado. Mulheres com história de colestase (redução de fluxo de bile) relacionada ao contraceptivo oral combinado ou as com colestase durante a gravidez são mais propensas a apresentar essa condição com o uso de contraceptivo oral combinado. Se essas pacientes receberem um contraceptivo oral combinado, devem ser rigorosamente monitorizadas e, se a condição reaparecer, o tratamento com contraceptivo oral combinado deve ser interrompido.

Cefaleia
Início ou aumento de enxaqueca ou desenvolvimento de dor de cabeça com padrão novo que seja repetitivo, persistente ou grave exige a descontinuação do contraceptivo oral combinado e a avaliação da causa.

O risco de acidente vascular cerebral pode ser maior em usuárias de contraceptivo oral combinado que sofrem de enxaqueca.

Gravidez
Este medicamento não deve ser utilizado por mulheres grávidas ou que possam ficar grávidas durante o tratamento. Estudos abrangentes não revelaram aumento do risco de defeitos de malformação em crianças de mulheres que utilizaram contraceptivos orais combinados antes da gravidez. Os estudos não sugerem efeito sobre o desenvolvimento anormal, especialmente no que diz respeito a anomalias (anormalidades) cardíacas e defeitos de redução dos membros, quando os contraceptivos orais combinados são tomados inadvertidamente durante o início da gravidez (ver item “4. O que devo saber antes de usar este medicamento?”).

Amamentação
Pequenas quantidades de contraceptivos foram identificadas no leite materno e poucos efeitos adversos foram relatados em lactentes (bebês que amamentam), incluindo icterícia e aumento das mamas. A lactação (produção do leite) pode ser influenciada pelos contraceptivos orais combinados, uma vez que podem reduzir a quantidade e alterar a composição do leite materno. Em geral, não deve ser recomendado o uso de contraceptivos orais combinados até que a lactante (mulher que amamenta) tenha deixado totalmente de amamentar a criança (ver item “3. Quando não devo usar este medicamento?”).

Pediatria
Este medicamento não é indicado para o uso em crianças.

Pacientes idosas
Ciclo 21 não é indicado para pacientes idosas.

Este medicamento causa malformação ao bebe durante a gravidez.

Interações medicamentosas
Interações entre etinilestradiol e outras substâncias pode diminuir ou aumentar as concentrações sanguíneas de etinilestradiol.

Concentrações sanguíneas mais baixas de etinilestradiol podem causar maior ocorrência de pequenos sangramentos e irregularidades menstruais e, possivelmente, podem reduzir a eficácia do contraceptivo oral combinado.

Durante o uso concomitante de produtos com etinilestradiol e substâncias que podem diminuir as concentrações sanguíneas de etinilestradiol, recomenda-se que um método anticoncepcional não hormonal (como preservativos e espermicidas) seja utilizado além da ingestão regular de Ciclo 21. No caso de uso prolongado dessas substâncias, os contraceptivos orais combinados não devem ser considerados os contraceptivos primários.

Após a descontinuação das substâncias que podem diminuir as concentrações sanguíneas de etinilestradiol, recomenda-se o uso de um método anticoncepcional não hormonal por, no mínimo, 7 dias. Aconselha-se o uso prolongado do método alternativo após a descontinuação das substâncias que resultaram na estimulação das enzimas do fígado, levando a uma diminuição das concentrações sanguíneas de etinilestradiol. Às vezes, pode levar várias semanas até a estimulação enzimática desaparecer completamente, dependendo da dose, duração do uso e taxa de eliminação da substância estimuladora.

A seguir, alguns exemplos das substâncias que podem diminuir as concentrações sanguíneas de etinilestradiol:

qualquer substância que reduza o tempo do trânsito gastrintestinal e, portanto, a absorção do etinilestradiol;
substâncias indutoras das enzimas microssomais hepáticas, como rifampicina, rifabutina, barbitúricos, primidona, fenilbutazona, fenitoína, dexametasona, griseofulvina, topiramato, alguns inibidores de protease, modafinil;
Hypericum perforatum, também conhecido como erva de São João, e ritonavir* (possivelmente por estimulação das enzimas do fígado);
alguns antibióticos (por exemplo, ampicilina e outras penicilinas, tetraciclinas), por diminuição da circulação intestino-fígado de estrogênios;
A seguir, alguns exemplos de substâncias que podem aumentar as concentrações sanguíneas de etinilestradiol:

atorvastatina;
inibidores competitivos de sulfatações na parede gastrintestinal, como o ácido ascórbico (vitamina C) e o paracetamol (acetaminofeno);
substâncias que inibem enzimas do fígado, como indinavir, fluconazol e troleandromicina**;
o etinilestradiol pode interferir no metabolismo de outras drogas por inibição das enzimas microssomais hepáticas ou indução da conjugação hepática da droga, sobretudo a glicuronização. Consequentemente, as concentrações plasmáticas e teciduais podem aumentar (por exemplo, ciclosporina, teofilina, corticosteroides) ou diminuir;
em pacientes tratados com a flunarizina, relatou-se que o uso de contraceptivos orais aumenta o risco de galactorreia (eliminação anormal de leite);
as bulas dos medicamentos concomitantes devem ser consultadas para identificar possíveis interações.
* Embora o ritonavir seja um inibidor do citocromo P450 3A4, demonstrou-se que esse tratamento diminui as concentrações sanguíneas de etinilestradiol (vide acima).
** A troleandomicina pode aumentar o risco de colestase intra-hepática durante a administração concomitante com contraceptivos orais combinados.

Interferência em exames laboratoriais
O uso de contraceptivos orais combinados pode causar algumas alterações fisiológicas as quais podem refletir nos resultados de alguns exames laboratoriais, incluindo: parâmetros bioquímicos da função hepática (do fígado) (incluindo a diminuição da bilirrubina e da fosfatase alcalina), função tireoideana (da tireoide) (aumento dos níveis totais de T3 e T4 devido ao aumento da TBG (globulina de ligação ao hormônio tireoidiano), diminuição da captação de T3 livre, função adrenal (aumento do cortisol plasmático, aumento da globulina de ligação a cortisol, diminuição do sulfato de desidroepiandrosterona (DHEAS)) e função renal (dos rins) (aumento da creatinina plasmática e depuração de creatinina); níveis plasmáticos de proteínas (carreadoras), como globulina de ligação a corticosteroide e frações lipídicas/lipoprotéicas; parâmetros do metabolismo de carboidratos; parâmetros de coagulação e fibrinólise; diminuição dos níveis séricos de folato.

Informe ao seu médico ou cirurgião-dentista se você está fazendo uso de algum outro medicamento. Não use medicamento sem o conhecimento do seu médico. Pode ser perigoso para a sua saúde.

ONDE, COMO E POR QUANTO TEMPO POSSO GUARDAR ESTE MEDICAMENTO?
Manter o produto em sua embalagem original e conservar em temperatura ambiente (entre 15° e 30°C); proteger da luz e umidade.

O prazo de validade é de 24 meses a partir da data de fabricação (vide cartucho). Número de lote e datas de fabricação e validade: vide embalagem. Não use medicamento com o prazo de validade vencido. Guarde-o em sua embalagem original.

Aspecto físico
Comprimido de cor branca, circular, de faces paralelas e liso.
Antes de usar, observe o aspecto do medicamento. Caso ele esteja no prazo de validade e você observe alguma mudança no aspecto, consulte o farmacêutico para saber se poderá utilizá-lo.

Todo medicamento deve ser mantido fora do alcance das crianças.

COMO DEVO USAR ESTE MEDICAMENTO?
Os comprimidos devem ser tomados diariamente no mesmo horário e na ordem indicada na embalagem.

Tomar um comprimido diariamente por 21 dias consecutivos. A embalagem seguinte deve ser iniciada após um intervalo de 7 dias sem a ingestão de comprimidos, ou seja, no 8º dia após o término da embalagem anterior. Após 2-3 dias do último comprimido de Ciclo 21 ter sido tomado, inicia-se, em geral, menstruação que pode não cessar antes do início da embalagem seguinte.

Como começar a tomar Ciclo 21
Sem uso anterior de contraceptivo hormonal (no mês anterior): o primeiro comprimido deve ser tomado no 1º dia do ciclo natural (ou seja, o primeiro dia de sangramento menstrual). Pode-se iniciar o tratamento entre o 2º e o 7º dia, mas recomenda-se a utilização de método contraceptivo não hormonal (como preservativo e espermicida) nos primeiros 7 dias de administração durante o primeiro ciclo.

Quando se passa a usar Ciclo 21 no lugar de outro contraceptivo oral: deve-se começar a tomar Ciclo 21 de preferência no dia seguinte ao último comprimido ativo do contraceptivo oral combinado anterior ter sido ingerido ou, no máximo, no dia seguinte ao intervalo habitual sem comprimidos ou com comprimido inerte do contraceptivo oral combinado anterior.

Quando se passa a usar Ciclo 21 no lugar de outro método com apenas progestogênio (minipílulas, injetável, implante): pode-se interromper a minipílula em qualquer dia e deve-se começar a tomar Ciclo 21 no dia seguinte. Deve-se tomar Ciclo 21 no dia da remoção do implante ou, no caso de utilização de contraceptivos injetável, deve-se esperar o dia programado para a próxima injeção. Em todas essas situações, a paciente deve ser orientada a utilizar outro método não hormonal de contracepção durante os 7 primeiros dias de administração dos comprimidos.

Após aborto no primeiro trimestre: pode-se começar a tomar Ciclo 21 imediatamente. Não são necessários outros métodos contraceptivos.

Após parto ou aborto no segundo trimestre: como o pós-parto imediato está associado a aumento do risco de tromboembolismo, o tratamento com contraceptivos orais combinados não deve começar antes do 28º dia após o parto em mães não lactantes ou após aborto no segundo trimestre. Deve-se orientar a paciente a utilizar outro método não hormonal de contracepção durante os 7 primeiros dias de administração dos comprimidos. Entretanto, se já tiver ocorrido relação sexual, a possibilidade de gravidez antes do início da utilização do contraceptivo oral combinado deve ser descartada ou deve-se esperar pelo primeiro período menstrual espontâneo (ver item “4. O que devo saber antes de usar este medicamento?”).

Orientação em caso de vômitos:
No caso de vômito no período de 4 horas após a ingestão do comprimido, a absorção pode não ser completa. Neste caso, os comprimidos seguintes devem ser ingeridos no horário habitual. Adicionalmente, um método contraceptivo não hormonal deve ser usado até o final da embalagem.

Proteção contraceptiva adicional: quando for necessária a utilização de proteção contraceptiva adicional, utilize métodos contraceptivos de barreira (por exemplo: diafragma ou preservativo masculino). Não utilize os métodos da tabelinha ou da temperatura como proteção contraceptiva adicional, pois os contraceptivos orais modificam as alterações menstruais cíclicas, tais como as variações de temperatura e do muco cervical.

Siga a orientação de seu médico, respeitando sempre os horários, as doses e a duração do tratamento. Não interrompa o tratamento sem o conhecimento do seu médico.

O QUE DEVO FAZER QUANDO EU ME ESQUECER DE USAR ESTE MEDICAMENTO?
A eficácia contraceptiva pode ser reduzida se a paciente esquecer-se de tomar algum comprimido de Ciclo 21, e particularmente, se o esquecimento aumentar o intervalo sem comprimidos. Recomenda-se consultar seu médico.

Se a paciente esquecer-se de tomar um comprimido de Ciclo 21, mas o atraso for menor que 12 horas, deve-se ingeri-lo tão logo se lembre. Os comprimidos seguintes devem ser tomados no horário habitual.

Se a paciente esquecer-se de tomar um comprimido de Ciclo 21 e o atraso for maior que 12 horas ou se tiverem sido esquecidos mais de um comprimido, a proteção contraceptiva pode ser menor. O último comprimido esquecido deve ser tomado tão logo se lembre, mesmo que isso signifique tomar 2 comprimidos num único dia. Os comprimidos seguintes devem ser ingeridos no horário habitual. Adicionalmente, um método contraceptivo não hormonal deve ser usado nos próximos 7 dias.

Se esses 7 dias ultrapassarem o último comprimido na embalagem em uso, a próxima embalagem deve ser iniciada tão logo a anterior tenha acabado; não deve haver intervalo entre as embalagens. Isto previne um intervalo prolongado entre os comprimidos ingeridos que pode aumentar o risco de ocorrer ovulação. É improvável que ocorra menstruação até o final da segunda embalagem, mas a paciente pode apresentar pequenos sangramentos nos dias em que estiver ingerindo os comprimidos. Se a paciente não menstruar no término da segunda embalagem, a possibilidade de gravidez deve ser descartada antes de iniciar a próxima embalagem.

Em caso de dúvidas, procure orientação do farmacêutico ou de seu médico ou cirurgião-dentista.

QUAIS OS MALES QUE ESTE MEDICAMENTO PODE CAUSAR?
As reações adversas estão relacionadas na tabela de acordo com a frequência:

Reação muito comum: ocorre em mais de 10% dos pacientes que utilizam este medicamento;
Reação comum: ocorre entre 1% e 10% dos pacientes que utilizam este medicamento;
Reação incomum: ocorre entre 0,1% e 1% dos pacientes que utilizam este medicamento;
Reação rara: ocorre entre 0,01% e 0,1% dos pacientes que utilizam este medicamento;
Reação muito rara: ocorre em menos de 0,01% dos pacientes que utilizam este medicamento.

Sistema corporal

Reação adversa

Infecções e infestações

Comum: vaginite (inflamações na vagina), incluindo candidíase.

Imunológico

Raro: reações anafiláticas/anafilactoides (alergias), incluindo casos muito raros de urticária (coceira acompanhada de vermelhidão), angioedema (inchaço nos vasos sanguíneos) e reações graves com sintomas respiratórios e circulatórios.

Muito raro: exacerbação do lúpus eritematoso sistêmico

Outras reações de possível origem imunológica podem estar listadas em outro sistema corporal

Metabólico/ nutricional

Incomum: alterações de apetite (aumento ou diminuição)

Raro: intolerância à glicose

Muito raro: exacerbação da porfiria

Psiquiátrico

Comum: alterações de humor, incluindo depressão; alterações de libido

 

Nervoso

Muito comum: cefaleia, incluindo enxaqueca

Comum: nervosismo, tontura

Muito raro: exacerbação da coreia (doença nervosa, com movimentos involuntários e irregulares, irritabilidade e depressão, mais própria da infância)

Ocular

Raro: intolerância a lentes de contato 

Muito raro: neurite óptica;* trombose vascular retiniana

Vascular

Muito raro: piora das veias varicosas (varizes)

Gastrintestinal

Comum: náuseas, vômitos, dor abdominal

Incomum: cólicas abdominais, distensão

Muito raro: pancreatite, adenomas hepáticos, carcinomas hepatocelulares

Hepatobiliar

Raro: icterícia colestática

Muito raro: doença biliar, incluindo cálculos biliares**

Cutâneo e subcutâneo

Comum: acne

Incomum: erupções cutâneas, cloasma (afecção da pele que se caracteriza por manchas de coloração acastanhada, especialmente na face), que pode persistir; hirsutismo (aumento de pelos); alopecia (queda de cabelo)

Raro: eritema nodoso

Muito raro: eritema multiforme

Renal e urinário

Muito raro: síndrome urêmica hemolítica

Reprodutor e mamas

Muito comum: sangramento de escape/spotting (pequenos sangramentos)

Comum: dor, sensibilidade, aumento, secreção das mamas; dismenorreia (menstruação dolorosa); alteração do fluxo menstrual, alteração da secreção e ectrópio cervical (ferida no colo do útero); amenorreia (ausência de menstruação).

Geral e local da administração

Comum: retenção hídrica/edema

Investigações

Comum: alterações de peso (ganho ou perda)

Incomum: aumento da pressão arterial; alterações nos níveis séricos (sanguíneos) de lipídeos (gorduras), incluindo hipertrigliceridemia (aumento da concentração de gordura no sangue)

Raro: diminuição dos níveis séricos de folato***

* A neurite óptica pode resultar em perda parcial ou total da visão.
** Os contraceptivos orais combinados podem piorar doenças biliares preexistentes e podem acelerar o desenvolvimento dessa doença em mulheres anteriormente assintomáticas.
*** Pode haver diminuição dos níveis séricos de folato com o tratamento com contraceptivo oral combinado. Isso pode ser clinicamente significativo se a mulher engravidar logo após descontinuar os contraceptivos orais combinados.

Informe ao seu médico, cirurgião-dentista ou farmacêutico o aparecimento de reações indesejáveis pelo uso do medicamento. Informe também à empresa através de seu serviço de autoatendimento.

O QUE FAZER SE ALGUÉM USAR UMA QUANTIDADE MAIOR DO QUE A INDICADA DESTE MEDICAMENTO?
Não foram relatados efeitos sérios após ingestão aguda de altas doses de contraceptivos orais combinados por crianças pequenas. Em mulheres, a superdosagem pode causar náuseas e hemorragias por supressão. Se necessário, a superdosagem é tratada sintomaticamente.

Em caso de uso de grande quantidade deste medicamento, procure rapidamente socorro médico e leve a embalagem ou bula do medicamento se possível. Ligue para 0800 722 6001, se você precisar de mais orientações.

DIZERES LEGAIS
 

VENDA SOB PRESCRIÇÃO MÉDICA

 

Registro MS – 1.0497.0286
Farm. Resp.: Florentino de Jesus Krencas
CRF-SP: 49136

UNIÃO QUÍMICA FARMACÊUTICA NACIONAL S/A
Rua Cel. Luiz Tenório de Brito, 90
Embu-Guaçu – SP – CEP: 06900-000
CNPJ: 60.665.981/0001-18
Indústria Brasileira

Fabricado na unidade fabril:
Av. Pref. Olavo Gomes de Oliveira, 4.550
Bairro São Cristovão – Pouso Alegre – MG
CEP: 37.550-000
CNPJ: 60.665.981/0005-41
Indústria Brasileira

 

SAC 0800 11 1559
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
import React from 'react';
import { View, Button, StyleSheet, Alert, ScrollView, TouchableOpacity, Text} from 'react-native';
import * as Linking from 'expo-linking';
import { router } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

const App = () => {
  // Função para abrir o site
  const openWebsite = () => {
    const url = 'https://www.ems.com.br/arquivos/produtos/bulas/bula_lidocaina_10819_1274.pdf';
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

                        <TouchableOpacity style={styles.descarte}  onPress={() => router.navigate("/(noveseguimentos)/tres")}>
                        <Ionicons
                                name= 'trash'
                                size={20}
                                color="#fff"
                                />
                        </TouchableOpacity>
                    </View>


      <ScrollView style={styles.Scroll}>         
                          
                          <Text style={styles.titulo}>Lidocaína </Text>
  
                            
                        <Text style={styles.titulo}>     
                        Lidocaína (Injetável 20 mg/mL)
BLAU FARMACÊUTICA S.A.
Atualizado em 30/06/2020
IDENTIFICAÇÃO DO MEDICAMENTO
cloridrato de lidocaína
Injetável 20 mg/mL
Medicamento Genérico Lei n° 9.787, de 1999.

FORMA FARMACÊUTICA E APRESENTAÇÃO:
Solução injetável
Embalagens contendo 12 frascos-ampola de 20 mL ou 1 frasco-ampola de 20 mL. Sem vasoconstritor.

VIA DE ADMINISTRAÇÃO: INFILTRAÇÃO LOCAL, PERINEURAL DE NERVOS PERIFÉRICOS E EPIDURAL
USO ADULTO E PEDIÁTRICO

COMPOSIÇÃO:
Cada mL de solução injetável contém:

cloridrato de lidocaína	20 mg
excipiente q.s.p.	1 mL
Excipientes: cloreto de sódio, hidróxido de sódio e água para injetáveis

INFORMAÇÕES AO PACIENTE
PARA QUE ESTE MEDICAMENTO É INDICADO?
O cloridrato de lidocaína injetável é indicado para produção de anestesia local ou regional por técnicas de infiltração como a injeção percutânea; por anestesia regional intravenosa; por técnicas de bloqueio de nervo periférico como o plexo braquial e intercostal; e por técnicas neurais centrais, como os bloqueios peridural lombar e caudal.

COMO ESTE MEDICAMENTO FUNCIONA?
A lidocaína estabiliza a membrana neuronal por inibição dos fluxos iônicos necessários para o início e a condução dos impulsos efetuando deste modo a ação do anestésico local.

QUANDO NÃO DEVO USAR ESTE MEDICAMENTO?
A lidocaína é contraindicada em pacientes com conhecida hipersensibilidade a anestésicos locais do tipo amida ou a qualquer um dos componentes da fórmula.

O QUE DEVO SABER ANTES DE USAR ESTE MEDICAMENTO?
O produto somente deverá ser administrado por profissionais experientes no diagnóstico e controle da toxicidade dose-dependente empregada e de outras emergências agudas que possam surgir do tipo de bloqueio utilizado, e somente depois de se assegurar a disponibilidade imediata de oxigênio e de outras drogas para ressuscitação, de equipamentos de ressuscitação cardiopulmonar e de pessoal treinado necessário para tratamento e controle das reações tóxicas e emergências relacionadas (vide também itens “8. Quais os males que este medicamento pode me causar?” e “9. O que fazer se alguém usar uma quantidade maior que a indicada deste medicamento?”).

A falta ou a demora no atendimento da toxicidade dose-relacionada da droga e da hipoventilação, seja qual for o motivo e/ou alterações na sensibilidade, poderá levar ao desenvolvimento da acidose, parada cardíaca e possível óbito.

Quando apropriado, os pacientes devem ser informados anteriormente da possibilidade de perda temporária da sensação e atividade motora na metade inferior do corpo após administração de anestesia peridural.

A segurança e a eficácia da lidocaína dependem da dose correta, técnica adequada, precauções adequadas e rapidez nas emergências.

Equipamento de ressuscitação, oxigênio e outras drogas ressuscitativas devem estar disponíveis para uso imediato.

A menor dose que resultar em anestesia efetiva deverá ser usada para evitar altos níveis plasmáticos e graves reações adversas. A aspiração da seringa deve também ser realizada antes e durante cada injeção suplementar, quando for utilizada técnica com cateter. Durante a administração da anestesia peridural, recomenda-se que uma dose teste seja administrada inicialmente e que o paciente seja monitorado para a detecção de toxicidade no sistema nervoso central e toxicidade cardiovascular, bem como para os sinais de administração intratecal não intencional, antes do prosseguimento. Quando condições clínicas permitirem, deve ser considerado o uso de soluções anestésicas locais que contenham epinefrina, para a dose teste, porque alterações circulatórias compatíveis com a epinefrina podem também servir como sinal de alerta de injeção intravascular não intencional.

É possível ainda uma injeção intravascular, mesmo que a aspiração para sangue seja negativa. As repetidas doses de lidocaína podem causar aumentos significativos no nível plasmático, com cada dose repetida, devido ao lento acúmulo da droga ou de seus metabólitos.

A tolerância a níveis sanguíneos elevados varia com o estado do paciente. Pacientes idosos, debilitados, pacientes com doenças agudas e crianças, deverão receber doses reduzidas de acordo com suas idades e condições físicas.

A lidocaína deve também ser usada com precaução em pacientes em estado de choque grave ou com bloqueio cardíaco. A anestesia peridural lombar ou caudal deve ser usada com extrema precaução em pessoas com as seguintes condições: existência de doença neurológica, deformidades espinhais, septicemia e hipertensão grave.

Cuidadoso e constante monitoramento cardiovascular e respiratório (adequada ventilação), sinais vitais e o estado de consciência do paciente devem ser acompanhados após cada injeção de anestésico local. Deverá também ser lembrado em tais momentos que agitação, ansiedade, zumbido, vertigem, visão nebulosa, tremores, depressão ou sonolência podem representar os primeiros sinais de toxicidade do sistema nervoso central. Os anestésicos locais do tipo amida são metabolizados no fígado, portanto, a lidocaína deve ser usada com cuidado em pacientes com doenças hepáticas. Os pacientes com doença hepática grave devido à sua reduzida capacidade de metabolização dos anestésicos locais, oferecem maior risco para o desenvolvimento de concentrações plasmáticas tóxicas. A lidocaína deve também ser usada com cautela em pacientes com função cardiovascular alterada, devido a uma menor capacidade de compensar as mudanças funcionais associadas ao prolongamento da condução atrioventricular provocado por essas drogas.

As soluções contendo epinefrina ou outros vasoconstritores não devem ser usadas para a anestesia regional intravenosa.

A lidocaína deve ser usada com cuidado em pessoas com conhecida sensibilidade às drogas.

Pacientes alérgicos aos derivados do ácido para-aminobenzóico (procaína, tetracaína, benzocaína, etc.) não têm apresentado sensibilidade cruzada à lidocaína.

Para evitar a injeção intravascular, deverá ser realizada aspiração antes da solução anestésica ser injetada. A agulha deve ser reposicionada até que não apareça nenhum retorno de sangue na aspiração.

Entretanto, a ausência de sangue na seringa não garante que a injeção intravascular tenha sido evitada.

USO NAS REGIÕES DA CABEÇA E PESCOÇO
Pequenas doses injetadas de anestésico local em regiões da cabeça e pescoço, incluindo bloqueio retrobulbar, dental e gânglio estrelado, podem produzir reações adversas similares à toxicidade sistêmica observada com injeções intravasculares não intencionais de grandes doses.

Confusão, convulsão, cegueira temporária, depressão respiratória e/ou parada respiratória e estimulação ou depressão cardiovascular têm sido relatados. Estas reações podem ser devido a injeção intra-arterial do anestésico local com fluxo retrógrado na circulação cerebral. Os pacientes que recebem estes bloqueios devem ter sua circulação e respiração monitoradas e serem constantemente observados. Equipamento de ressuscitação e pessoal treinado para tratamento das reações adversas devem estar imediatamente disponíveis. As doses recomendadas não devem ser excedidas.

CARCINOGENICIDADE, MUTAGENICIDADE E DIMINUIÇÃO DA FERTILIDADE
Não foram realizados estudos de lidocaína em animais para a avaliação do potencial carcinogênico e mutagênico, bem como do efeito na fertilidade.

Este medicamento não deve ser utilizado por mulheres grávidas sem orientação médica ou do cirurgião-dentista.

Efeitos teratogênicos: Os estudos de reprodução têm sido realizados em ratos com doses até 6,6 vezes maiores que a dose humana e não revelaram evidências de danos ao feto causados pela lidocaína. Entretanto, não existem estudos adequados e bem controlados em mulheres grávidas.

Os estudos em reprodução animal nem sempre são úteis para reproduzir as respostas humanas. Considerações gerais devem ser levadas em conta antes da administração da lidocaína em mulheres com potencial de gravidez, especialmente aquelas em início de gravidez quando ocorre a organogênese máxima.

TRABALHO DE PARTO E PARTO
Os anestésicos locais atravessam rapidamente a placenta e quando usados para a anestesia peridural,

paracervical, bloqueio do pudendo ou bloqueio caudal, podem causar intensidades variáveis de toxicidade materna, fetal e no recém-nascido. O potencial tóxico depende do procedimento realizado, do tipo e quantidade da droga usada e técnica da administração da droga. As reações adversas na parturiente, feto e recém-nascido envolvem alterações no tônus vascular periférico do sistema nervoso central e na função cardíaca.

A hipotensão materna é uma consequência da anestesia regional. Os anestésicos locais produzem vasodilatação por bloqueio dos nervos simpáticos.

A elevação dos membros inferiores e o decúbito lateral esquerdo da paciente ajudam a prevenir a queda na pressão sanguínea.

O ritmo cardíaco fetal também deve ser monitorado constantemente, e o monitoramento eletrônico fetal é muito aconselhável.

A anestesia peridural, espinhal, paracervical ou bloqueio dos pudendos, pode alterar as contrações durante o trabalho de parto por mudanças na contractilidade uterina ou na força de expulsão.

Em um estudo do bloqueio anestésico paracervical foi associada uma diminuição na duração média do primeiro estágio do trabalho de parto e facilidade da dilatação cervical.

Entretanto, a anestesia espinhal e peridural tem demonstrado prolongar o segundo estágio do trabalho de parto, removendo o reflexo de expulsão ou por interferência da função motora. O uso de anestésicos em obstetrícia pode aumentar a necessidade de fórceps.

Após o uso de anestésicos locais durante o trabalho de parto e parto pode ocorrer diminuição da força e tônus muscular durante o primeiro ou segundo dia de vida do recém-nascido.

É desconhecida a importância destes efeitos permanecerem por longos períodos. Pode ocorrer bradicardia fetal em 20% a 30% das pacientes que receberam anestesia por bloqueio através do nervo paracervical, com anestésicos locais do tipo amida, podendo estar associada com a acidose fetal.

O ritmo cardíaco fetal deve ser sempre monitorado durante a anestesia paracervical.

O médico deve analisar o potencial de risco-benefício no bloqueio paracervical em partos prematuros, toxemia da gestante e perigo fetal.

A observação das doses recomendadas é de máxima importância em bloqueio paracervical obstétrico. Insucessos na obtenção de analgesia adequada com a dosagem recomendada deve levar à suspeita de injeção intravascular ou intracraniana fetal.

Casos de injeção não intencional intracraniana fetal, de solução anestésica local, têm sido relatados após bloqueio paracervical ou dos pudendos ou ambos.

Os bebês assim afetados apresentam depressão neonatal inexplicável imediatamente após o nascimento, que pode estar relacionada com altos níveis séricos de anestésico local, e muitas vezes manifestam apoplexia dentro de 6 horas.

O imediato uso de medidas de suporte combinado com a excreção urinária forçada do anestésico local, têm sido usados com sucesso para o controle desta complicação.

Foram relatadas convulsões maternas e colapso cardiovascular após o uso de alguns anestésicos locais para o bloqueio paracervical em gravidez prematura (anestesia para aborto eletivo), lembrando que a absorção sistêmica nestas circunstâncias pode ser rápida. A dose máxima recomendada de cada droga não deve ser excedida.

A injeção deve ser feita lentamente e com frequente aspiração. Deve haver intervalo de 5 minutos, entre os lados.

Lactação
Da mesma forma que outros anestésicos locais, a lidocaína é excretada pelo leite materno, porém em pequenas quantidades, de tal modo que geralmente não há riscos para a criança, quando utilizada nas doses terapêuticas.

Uso pediátrico
Dosagens em crianças devem ser reduzidas, correspondentes a idade, peso corporal e condições físicas.

INTERAÇÕES MEDICAMENTOSAS
A administração simultânea de drogas vasopressoras, para o tratamento da hipotensão relacionada aos bloqueios obstétricos e de drogas ocitócicas do tipo Ergot, poderá causar hipertensão grave e persistente ou acidentes cerebrovasculares.

Alterações de exames laboratoriais
A injeção intramuscular de lidocaína pode resultar no aumento do nível de creatinina fosfoquinase. Portanto, o uso da determinação desta enzima sem separação da isoenzima, como teste de diagnóstico para a presença de infarto agudo do miocárdio, pode ficar comprometido pela injeção intramuscular de lidocaína.

Informe ao seu médico ou cirurgião-dentista se você está fazendo uso de algum outro medicamento. Não use medicamento sem o conhecimento do seu médico. Pode ser perigoso para a sua saúde.

ONDE, COMO E POR QUANTO TEMPO POSSO GUARDAR ESTE MEDICAMENTO?
Cuidados de conservação
Conservar o produto em temperatura ambiente entre 15–30°C.

Prazo de validade: 24 meses após a data de fabricação.

Após este prazo de validade o produto pode não apresentar mais efeito terapêutico. Não utilize medicamento vencido.

Os produtos parenterais deverão ser examinados visualmente quanto à presença de partículas estranhas e de alteração da cor do produto antes da administração. Não usar o produto se este contiver precipitado ou se sua coloração estiver rosada ou mais escura que levemente amarelada.

Agentes desinfetantes contendo metais pesados, que causem liberação dos respectivos íons (mercúrio, zinco, cobre, etc.) não devem ser usados na desinfecção da pele ou membranas mucosas, pois têm sido relatadas incidências de inchaço e edema.

A solução não deve ser mantida em contato com metais, porque o anestésico local promove a ionização do metal, liberando íons na solução, os quais podem ocasionar irritação tissular no local da injeção.

Número de lote e datas de fabricação e validade: vide embalagem.

Não use medicamento com o prazo de validade vencido. Guarde-o em sua embalagem original.

Características físicas e organolépticas do produto
Solução transparente, estéril e apirogênica.

Antes de usar, observe o aspecto do medicamento. Caso ele esteja no prazo de validade e você observe alguma mudança no aspecto, consulte o farmacêutico para saber se poderá utilizá-lo.

TODO MEDICAMENTO DEVE SER MANTIDO FORA DO ALCANCE DAS CRIANÇAS.

No sentido de evitar acidentes, não se recomenda utilizar frascos vazios de soluções anestésicas para armazenar quaisquer outras soluções, ainda que temporariamente.

É recomendável esvaziar e descartar frascos parcialmente utilizados.

COMO DEVO USAR ESTE MEDICAMENTO?
A Tabela de Dosagens Recomendadas, abaixo, resume os volumes e concentrações de cloridrato de lidocaína para os vários tipos de procedimentos anestésicos. As dosagens sugeridas nesta tabela são para adultos normais saudáveis e refere-se ao uso de solução sem vasoconstritor.

Quando grandes volumes são necessários, somente soluções com vasoconstritor devem ser usadas, exceto naqueles casos em que as drogas vasopressoras são contraindicadas.

Estas doses recomendadas servem somente como guia para a quantidade de anestésico necessária na maioria dos procedimentos de rotina. Os volumes e concentrações reais a serem usadas, depende de fatores tais como, o tipo e extensão do procedimento cirúrgico, intensidade da anestesia e extensão do relaxamento muscular necessário, duração necessária da anestesia e da condição física do paciente. Em todos os casos devem ser adotadas a mais baixa concentração e a menor dose que produzam os resultados desejáveis. As dosagens devem ser reduzidas para crianças, para pacientes idosos e debilitados e para pacientes com doenças cardíacas e/ou hepáticas.

O início da anestesia, a duração da anestesia e a extensão do relaxamento muscular são proporcionais ao volume e concentração (dose total) do anestésico local usado.

Portanto, o aumento de concentração e volume do injetável de cloridrato de lidocaína, diminui o tempo de início da anestesia, prolonga a duração da anestesia, promove uma grande extensão do relaxamento muscular e aumenta a expansão segmentar da anestesia.

Entretanto, aumentando o volume e concentração do cloridrato de lidocaína, pode resultar numa profunda queda de pressão sanguínea quando usado em anestesia peridural.

Embora a incidência de outros efeitos com lidocaína seja muito baixa, deve ser executado com cautela o emprego de grandes volumes e concentrações, visto que a incidência de outros efeitos é diretamente proporcional à dose total do agente anestésico local injetado.

Dosagens recomendadas da solução injetável de cloridrato de lidocaína.

Infiltração
Infiltração Percutânea: concentração: 0,5 ou 1,0 %; volume 1 a 60 mL; dose total 5 a 300 mg
Infiltração Regional Intravenosa: concentração: 0,5%; volume 10 a 60 mL; dose total 50 a 300 mg
Bloqueio Nervoso Periférico Braquial: concentração: 1,5 %; volume 15 a 20 mL; dose total 225 a 300 mg
Bloqueio Nervoso Periférico Dental: concentração: 2,0 %; volume 1 a 5 mL; dose total 20 a 100 mg
Bloqueio Nervoso Periférico Intercostal: concentração: 1,0 %; volume 3 mL; dose total 30 mg
Bloqueio Nervoso Periférico Paravertebral: concentração: 1,0 %; volume 3 a 5 mL; dose total 30 a 50 mg
Bloqueio Nervoso Periférico Pudendo (de cada lado): concentração: 1,0 %; volume 10 mL; dose total 100 mg
Paracervical
Analgesia Obstétrica (de cada lado): concentração: 1,0 %; volume 10 mL; dose total 100 mg

BLOQUEIO NEURAL SIMPÁTICO
Cervical (gânglio estrelado): concentração: 1,0 %; volume 5 mL; dose total 50mg
Lobar: concentração: 1,0 %; volume 5 a 10 mL; dose total 50 a 100 mg
Bloqueio neural central
Peridural* Torácico: concentração: 1,0 %; volume 20 a 30 mL; dose total 200 a 300 mg
Peridural* Lombar: concentração: 1,0 %; volume 25 a 30 mL; dose total 250 a 300 mg
Peridural* Analgesia: concentração: 1,5 %; volume 15 a 20 mL; dose total 225 a 300 mg
Peridural* Anestesia: concentração: 2,0 %; volume 10 a 15 mL; dose total 200 a 300 mg
Caudal Analgesia Obstétrica: concentração: 1,0 %; volume 20 a 30 mL; dose total 200 a 300 mg
Caudal Analgesia Cirúrgica: concentração: 1,5 %; volume 15 a 20 mL; dose total 225 a 300 mg
* A dose é determinada pelo número de dermátomos a serem anestesiados (2 a 3 mL/dermátomo). Observação: As concentrações e volumes sugeridos servem somente como um guia. Outros volumes e concentrações podem ser usados contanto que as doses máximas recomendadas não sejam excedidas.

Anestesia peridural
Para anestesia peridural são recomendados 10 a 15 mL da solução de cloridrato de lidocaína 2%, que corresponde a uma dose total de 200 a 300 mg (Vide item Dosagens recomendadas). Na anestesia peridural, várias dosagens com números de dermátomos são anestesiados (geralmente 2 a 3 mL da concentração indicada por dermátomo).

Bloqueio peridural caudal e lombar
Como precaução para possíveis reações adversas, observadas quando da perfuração não intencional no espaço subaracnóideo, uma dose teste de 2 a 3 mL de cloridrato de lidocaína a 1,5% deve ser administrada durante no mínimo 5 minutos antes da injeção do volume total necessário para o bloqueio peridural lombar ou caudal. A dose teste deve ser repetida em pacientes em que houve deslocamento do cateter.

Pacientes sob a ação de betabloqueadores podem não manifestar alterações no batimento cardíaco, mas a pressão sanguínea monitorada pode detectar um aumento leve da pressão sanguínea sistólica. Deve-se aguardar um tempo adequado para o início da anestesia após a administração de cada dose teste.

Dosagens máximas recomendadas
Adultos: Para adultos normais saudáveis, a dose máxima individual não deve exceder 4,5 mg/kg do peso corporal e em geral recomenda-se que a dose máxima total não exceda 300 mg.

Para anestesia peridural ou caudal contínua, a dose máxima recomendada não deve ser administrada em intervalos menores que 90 minutos.

Quando anestesia peridural lombar ou caudal contínua for usada para procedimentos não obstétricos, uma quantidade maior de droga pode ser administrada para a produção adequada de anestesia.

A dose máxima recomendada por um período de 90 minutos de cloridrato de lidocaína para bloqueio paracervical em pacientes obstétricos e não-obstétricos é de 200 mg.

Usualmente aplicam-se 50% da dose total em cada lado. Injetar lentamente esperando 5 minutos para cada lado.

Crianças: difícil a recomendação de dose máxima sobre qualquer droga para crianças, pelas variações em função da idade e peso. Para crianças com mais de 3 anos de idade que tenham uma massa corporal normal sem gordura e desenvolvimento normal do corpo, a dose máxima recomendada é determinada pela idade e o peso da criança. Por exemplo, para uma criança com 5 anos pesando cerca de 25 kg, a dose de cloridrato de lidocaína não deve exceder 75 a 100 mg (3,0 a 4,0 mg/kg).

Na prevenção contra toxicidade sistêmica, apenas pequenas concentrações e doses efetivas devem ser as usadas. Em alguns casos será necessário ter disponíveis concentrações diluídas com 0,9% de cloreto de sódio injetável para obter concentrações finais necessárias.

Siga a orientação de seu médico, respeitando sempre os horários, as doses e a duração do tratamento. Não interromper o tratamento sem o conhecimento do seu médico.

Siga corretamente o modo de usar. Em caso de dúvidas sobre este medicamento, procure orientação do farmacêutico. Não desaparecendo os sintomas, procure orientação de seu médico ou cirurgião-dentista.

O QUE DEVO FAZER QUANDO EU ME ESQUECER DE USAR ESTE MEDICAMENTO?
Uma vez que este medicamento é administrado por um profissional da saúde em ambiente hospitalar não deverá ocorrer esquecimento do seu uso.

Em caso de dúvidas, procure orientação do farmacêutico ou de seu médico, ou cirurgião-dentista.

QUAIS OS MALES QUE ESTE MEDICAMENTO PODE ME CAUSAR?
SISTÊMICOS:
As reações adversas após a administração de lidocaína são de natureza similar àquelas observadas com outros agentes anestésicos locais do tipo amida. Estas reações adversas são, em geral, dose-relacionadas, podendo resultar de altos níveis plasmáticos, causados por dosagem excessiva, rápida absorção ou injeção intravascular acidental, podendo ainda resultar da hipersensibilidade, idiossincrasia ou da tolerância diminuída por parte do paciente. As reações adversas graves são geralmente de natureza sistêmica.

Os tipos de reações adversas mais frequentemente relatados são os seguintes:

Sistema nervoso central: As manifestações do SNC são excitatórias e/ou depressoras e podem ser caracterizadas por crises de ausência, nervosismo, apreensão, euforia, confusão, vertigem, sonolência, zumbido, visão nebulosa ou dupla, vômitos, sensação de calor, frio ou entorpecimento, contrações, tremores, convulsões, inconsciência, depressão e parada respiratória. As manifestações excitatórias podem ser muito breves, ou podem não ocorrer, sendo que a primeira manifestação de toxicidade poderá ser a sonolência progredindo para inconsciência e parada respiratória.
A sonolência após a administração da lidocaína é normalmente um sinal precoce de alto nível sanguíneo da droga, podendo ocorrer como consequência de sua rápida absorção.

Sistema cardiovascular: Manifestações cardiovasculares são normalmente depressivas, caracterizadas por bradicardia, hipotensão e colapso cardiovascular, podendo resultar em parada cardíaca.

Alérgicas: As reações alérgicas são caracterizadas por lesões cutâneas, urticária, edema ou reações anafilactóides. As reações alérgicas podem ser resultantes da sensibilidade ao agente anestésico local. As reações alérgicas resultantes da sensibilidade à lidocaína são extremamente raras e quando ocorrem devem ser monitoradas por meios convencionais. A detecção da sensibilidade por testes na pele é de valor duvidoso.

Neurológicas: As incidências de reações adversas associadas ao uso de anestésicos locais podem estar relacionadas à dose total administrada e dependem também da particularidade da droga usada, a via de administração e o estado físico do paciente.

Em estudo realizado com 10.440 pacientes que receberam lidocaína para anestesia espinhal, a incidência de reações adversas relatadas foi de cerca de 3% para dor de cabeça postural, hipotensão e dor nas costas; 2% para tremores e menos que 1 % para sintomas nervosos periféricos, náusea, respiração inadequada e visão dupla. Muitas dessas observações podem estar relacionadas com a técnica anestésica usada, com ou sem a contribuição do anestésico local.

Na prática do bloqueio peridural caudal ou lombar pode ocorrer introdução não intencional no espaço subaracnóideo pelo cateter. Subsequentes reações adversas podem depender particularmente da quantidade de droga administrada no espaço subaracnóideo. Isto pode incluir bloqueio espinhal de grandeza variada (incluindo bloqueio espinhal total), hipotensão secundária ao bloqueio espinhal, perda do controle da bexiga e intestino, e perda da sensação perineal e função sexual. A persistente deficiência motora, sensorial e/ou autonômica (controle do esfíncter) de alguns segmentos espinhais inferiores, com lenta recuperação (vários meses) ou incompleta recuperação, tem sido relatada raramente, quando da realização de bloqueio peridural caudal ou lombar. Dores nas costas e cefaleia têm sido observadas na utilização destes procedimentos anestésicos.

Há relatos de casos permanentes de lesões na musculatura extraocular, necessitando de cirurgia reparatória devido à administração retrobulbar.

Informe ao seu médico, cirurgião-dentista ou farmacêutico o aparecimento de reações indesejáveis pelo uso do medicamento. Informe também à empresa através do seu serviço de atendimento.

O QUE FAZER SE ALGUÉM USAR UMA QUANTIDADE MAIOR DO QUE A INDICADA DESTE MEDICAMENTO?
As emergências decorrentes da administração de anestésicos locais estão geralmente relacionadas com altos níveis plasmáticos encontrados durante o uso terapêutico dos anestésicos locais, ou à injeção acidental subaracnóidea da solução anestésica.

CONDUTA NAS EMERGÊNCIAS PROVOCADAS POR ANESTÉSICOS LOCAIS
A primeira consideração é a prevenção, através de cuidadoso e constante monitoramento dos sinais vitais respiratórios e cardiovasculares, e do estado de consciência do paciente, após cada injeção do anestésico local.

Ao primeiro sinal de alteração, deverá ser prontamente administrado oxigênio.

O primeiro passo no controle das convulsões, como também da hipoventilação ou apneia decorrentes da injeção não intencional no espaço subaracnóideo, consiste no estabelecimento imediato de acesso para a manutenção das vias aéreas e de uma ventilação assistida e efetiva com oxigênio, com um sistema de liberação capaz de permitir uma pressão positiva e imediata das vias aéreas por meio do uso de máscara. Imediatamente após a instituição dessas medidas ventilatórias, deverá ser avaliada a adequação circulatória, mantendo sempre em mente que as drogas comumente usadas para tratar as convulsões, algumas vezes deprimem a circulação quando injetadas intravenosamente.

Caso as convulsões persistam após a instituição de suporte respiratório e se o estado circulatório assim o permitir, poderão ser administrados, por via intravenosa, pequenas quantidades de barbitúricos (como tiopentona 1-3 mg/kg) de ação ultra-curta, ou um benzodiazepínico do tipo diazepam (0,1 mg/kg). O médico deverá estar familiarizado com o uso dos anestésicos locais em conjunto com essas drogas, antes de usá-las. Se ocorrer fibrilação ventricular ou parada cardíaca, deve-se instituir tratamento de ressuscitação cardiopulmonar.

O tratamento de suporte da depressão circulatória poderá necessitar de administração de fluidos por via intravenosa, e quando apropriado, um vasopressor segundo a necessidade da situação clínica.

Se não tratadas imediatamente, tanto as convulsões como a depressão cardiovascular poderão resultar em hipoxia, acidose, bradicardia, arritmias e parada cardíaca.

Uma hipoventilação ou apneia, decorrentes da injeção subaracnóidea não intencional, pode produzir os mesmos sintomas, e também levar a uma parada cardíaca caso o suporte de ventilação não seja instituído.

A intubação endotraqueal, empregando drogas e técnicas familiares ao clínico, poderá ser indicada após administração inicial de oxigênio através de máscara, e também no caso de haver dificuldade na manutenção das vias aéreas do paciente, ou quando o suporte ventilatório prolongado, assistido ou controlado, esteja indicado.

A diálise é de pouco valor no tratamento de superdosagem aguda com lidocaína.

As emergências decorrentes da administração de anestésicos locais estão geralmente relacionadas com altos níveis plasmáticos encontrados durante o uso terapêutico dos anestésicos locais, ou à injeção acidental subaracnóidea da solução anestésica.

Em caso de uso de grande quantidade deste medicamento, procure rapidamente socorro médico e leve a embalagem ou bula do medicamento, se possível. Ligue para 0800 722 6001, se você precisar de mais orientações.

DIZERES LEGAIS

USO RESTRITO A HOSPITAIS
VENDA SOB PRESCRIÇÃO MÉDICA
 

Reg. M.S. nº 1.1637.0068
Farm. Resp.: Eliza Yukie Saito - CRF-SP 10.878

Fabricado por:
Blau Farmacêutica S.A.
CNPJ 58.430.828/0005-93
Rodovia Raposo Tavares
Km 30,5 n° 2833 - Prédio 200 CEP: 06705-030 - Cotia - SP
Indústria Brasileira

Registrado por:
Blau Farmacêutica S.A.
CNPJ 58.430.828/0001-60
Rodovia Raposo Tavares Km 30,5 n° 2833 - Prédio 100
CEP 06705-030 - Cotia – SP
Indústria Brasileira


SAC 0800 701 6399
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
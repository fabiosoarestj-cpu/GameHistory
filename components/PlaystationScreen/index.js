import { View,ScrollView,Text } from "react-native";
import Top from '../Top';
import Data from "../Data";
import styles from "./styles";
import imgPs from '../../assets/pjImg/historia/console-playstation.jpg';
import imgCpu from '../../assets/pjImg/especificacoes/cpu.png';
import imgGpu from '../../assets/pjImg/especificacoes/gpu.png';
import imgHd from '../../assets/pjImg/especificacoes/hdd.png';
import imgRam from '../../assets/pjImg/especificacoes/ram.png';
import imgRanking from '../../assets/pjImg/jogo/ranking.png'; 
import imgMoney from '../../assets/pjImg/jogo/money.png';
import imgDisc from '../../assets/pjImg/jogo/disc.png';
import imgSales from '../../assets/pjImg/jogo/sales.png';


export default function PlaystationScreen(){
    return(
       <ScrollView contentContainerStyle={styles.alingContainer} style={styles.container}>
         <View style={styles.top}>
                <Top title='História do PlayStation' 
                
                img={imgPs} 
                primeText='A Sony iniciou sua jornada no mercado dos consoles de vídeo games em 1994, com a chegada do PS1 no Japón [Japão]. A expectativa demorou e em dezembro de 1994 o aparelho chegou aos Estados Unidos, Segunda Guerra, mais outros gigantes japoneses, Sega e Nintendo, dominavam o mercado de jogos eletrônicos, e ninguém esperava que uma nova rixa pudesse resultar nisso' 
                
                secText='Quando o PS1 foi anunciado nos Estados Unidos por US$ 299, isso mesmo, com o receio de já que alguns dias antes o Sega havia anunciado o Saturn por $399, e que somado com os diversos problemas causados pelo lançamento às pressas do Saturn, consolidaram a posição do PlayStation no mercado de jogos.'
                
                text3 ='Mas tudo foi coroado com a falta do Saturn em lançado em japonês [lançado no Japão], enquanto o PS1 chegou com o projeto de um console totalmente em 3D, o que o tornava cada mais interessante, por ser um console mais poderoso e mais barato para seus concorrentes.'
                />

                
                
            </View>   

            <View style={styles.bode}>
                <Data
                    textSubTitle='Especificações Técnicas'
                    textParagrph='Confira a seguir as especificações técnicas do PlayStation, lançado em 1994:'
                    frameColor='blue'

                    pImg={imgCpu}
                    cardText1='Sony CXD8530Q'
                    cardText2='33,88 MHz'

                    sImg={imgGpu} 
                    cardText3='Sony CXD8515Q' 
                    cardText4='1MB VRAM'

                    tImg={imgHd} 
                    cardText5='2 MB EDO DRAM' 
                    cardText6='33 MHz'

                    qImg={imgRam} 
                    cardText7='Unidade de CD-ROM' 
                    cardText8='660 MB / disco'

                />
                
                
            </View>

            <View style={styles.bode}>
            <Data
                    textSubTitle='Final Fantasy VII'
                    textParagrph='Um dos jogos mais aclamados do PS1 sem dúvida é Final Fantasy VII. Desenvolvido pela Square e lançado em 1997 Final Fantasy VII foi um sucesso comercial absoluto, além de ter sido ou do bem vendido para acelerar a venda ambos essa aclamada.'
                      
                    gameDisc= 'Final Fantasy VII foi um lançamento de tu importante para a Sony, isso porque semanas antes do lançamento os consoles PlayStation estavam esgotados por todo Japão, tamanho era o interesse dos jogadores para novo título da franquia. Alcancele mesmos de fundo, como podem ser vindos a seguir:'

                    
                    frameColor='blue'

                    pImg={imgSales}
                    cardText1='2 milhões de cópias'
                    cardText2='Em 2 dias no Japão'

                    sImg={imgMoney} 
                    cardText3='US$ 115 milhões' 
                    cardText4='Em 2 dias no Japão'

                    tImg={imgRanking} 
                    cardText5='92% de aprovação' 
                    cardText6='Metacritic'

                    qImg={imgDisc} 
                    cardText7='Remake em 2020' 
                    cardText8='Para o PS4'
                />
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerSubTitle}>Conclusão</Text>
                
                <Text style={styles.paragrph}>A Sony construiu com o PlayStation algo que para muita gente era impossível. Não apenas se manteve firme e forte frente à concorrência histórica da Nintendo, mas também fez se consagrar e vender uma das classes de consoles de jogos de sua largamente na briga pela fidelidade dos consumidores.</Text>
            </View>
       </ScrollView>
    );
}
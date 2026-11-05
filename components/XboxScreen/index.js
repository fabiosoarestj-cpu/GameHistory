import { View,ScrollView,Text } from "react-native";
import Top from '../Top';
import Data from "../Data";
import styles from "./styles";
import imgXbox from '../../assets/pjImg/historia/console-xbox.png';
import imgCpu from '../../assets/pjImg/especificacoes/cpu.png';
import imgGpu from '../../assets/pjImg/especificacoes/gpu.png';
import imgHd from '../../assets/pjImg/especificacoes/hdd.png';
import imgRam from '../../assets/pjImg/especificacoes/ram.png';
import imgRanking from '../../assets/pjImg/jogo/ranking.png'; 
import imgMoney from '../../assets/pjImg/jogo/money.png';
import imgDisc from '../../assets/pjImg/jogo/disc.png';
import imgSales from '../../assets/pjImg/jogo/sales.png';



export default function XboxScreen(){
    return(
        <ScrollView contentContainerStyle={styles.alingContainer} style={styles.container}>
            <View style={styles.top}>
                <Top title='História do Xbox' 
                
                img={imgXbox} 
                primeText='A Microsoft começou sua história com público gamer em 2001, com o lançamento na epoca para concorrer com o PS2 da Sony e o Game Cube da Nintendo. O Xbox oferecia um hardware mais poderoso que o dos seus concorrentes.' 
                
                secText='E para mostrar a capacidade desse novo console super poderoso a Microsoft precisava de um jogo que usasse todo esse potencial, e foi ai que surgiu Halo, que fez um enorme sucesso atingindo uma imensa base de fãs, principalmente nos Estados Unidos.'/>
                
            </View>

            <View style={styles.bode}>
                <Data
                    textSubTitle='Especificações Técnicas'
                    textParagrph='Confira a seguir as especificações técnicas do Xbox de 2001.'
                    frameColor='green'

                    pImg={imgCpu}
                    cardText1='Inte Pentium 3'
                    cardText2='733 MHz'

                    sImg={imgGpu} 
                    cardText3='nVidia NV2A' 
                    cardText4='233 MHz'

                    tImg={imgHd} 
                    cardText5='64 MB DDR SDRAM' 
                    cardText6='200 MHz'

                    qImg={imgRam} 
                    cardText7='HD 8GB' 
                    cardText8='5400 RPM'

                />
                
                
            </View>

            <View style={styles.bode}>
            <Data
                    textSubTitle='O fenômeno Halo'
                    textParagrph='Halo: Combate Evolved foi desenvolvido Bungle e lançado para o Xbox no dia 15 de novembro de 2001. O game foi um sucesso e em dois meses ja estava presente em 50% da base de consoles de Xbox.'
                      
                    gameDisc= 'Halo é até hoje um dos jogos mais inportantes do Xbox e da indústria como um todo. Confira a seguir alguns dados sobre o primeiro título da principal franquia do Xbox.'

                    
                    frameColor='green'

                    pImg={imgSales}
                    cardText1='6,7 milhões de cópias'
                    cardText2='Até Julho de 2006'

                    sImg={imgMoney} 
                    cardText3='US$ 170 milhões' 
                    cardText4='Apenas nos EUA'

                    tImg={imgRanking} 
                    cardText5='97% de aprovação' 
                    cardText6='Metacritic'

                    qImg={imgDisc} 
                    cardText7='Remake em 2014' 
                    cardText8='Para o Xbox One'
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerSubTitle}>Conclusão</Text>
                
                <Text style={styles.paragrph}>A Microsoft conseguiu criar com o Xbox uma grande base de fãs em todo mundo que jogam suas franquias diariamente. O que começou como uma tentativa de defender o territórios dos PCs nas salas se tornou um dos produtos mais vendidos da companhia e parte de um dos setores mais lucrativos da indústria do entretenimento.</Text>
            </View>
        </ScrollView>
    );
}
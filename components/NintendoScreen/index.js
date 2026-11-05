import { View,ScrollView,Text } from "react-native";
import styles from "./styles";
import Top from '../Top';
import Data from "../Data";
import imgNintendo from '../../assets/pjImg/historia/console-nintendo.jpg';
import imgCpu from '../../assets/pjImg/especificacoes/cpu.png';
import imgGpu from '../../assets/pjImg/especificacoes/gpu.png';
import imgHd from '../../assets/pjImg/especificacoes/hdd.png';
import imgRam from '../../assets/pjImg/especificacoes/ram.png';
import imgRanking from '../../assets/pjImg/jogo/ranking.png'; 
import imgMoney from '../../assets/pjImg/jogo/money.png';
import imgDisc from '../../assets/pjImg/jogo/disc.png';
import imgSales from '../../assets/pjImg/jogo/sales.png';


export default function NintendoScreen(){
    return(
        <ScrollView contentContainerStyle={styles.alingContainer} style={styles.container}>
            <View style={styles.top}>
                <Top title='História do Nintendo Entertainment System' 
                
                img={imgNintendo} 
                primeText='Um dos consoles mais emblemáticos do mundo, até hoje foi lançado em 1983 no Japão com o nome de Famicom (Family Computer), mas só em 1985 o controle chegou aos Estados Unidos, com um visual totalmente reformulado e um novo nome, Nintendo Entertainment System (NES).' 
                
                secText='O NES ajudou a revitalizar a indústria de vídeo games após o colapso do evento devido a má adaptação do mercado com diversos consoles de baixa qualidade disponíveis. A Nintendo entrou e aceitou o desafio, trazendo o NES com um design simples e de alta usabilidade para as mãos dos consumidores.'
                
                text3 ='O Console foi lançado no dia 15 de junho de 1983 no Japão, junto mesmo com os jogos Donkey Kong, Donkey Kong Jr. e Popeye, todos feitos pela Nintendo para o console. No final de 1985, o Famicom já era o console mais vendido do país. O console chegou em New York, nos Estados Unidos, em 1985 com o lançamento e o nível nacional de atacado em fevereiro de 1986, contendo com 17 jogos disponíveis no lançamento'
                />  
            </View>

            <View style={styles.bode}>
                <Data
                    textSubTitle='Especificações Técnicas'
                    textParagrph='Confira abaixo os aspectos técnicos básicos do NES, lançado em 1983:'
                    frameColor='red'

                    pImg={imgCpu}
                    cardText1='Ricoh 2A03'
                    cardText2='Processador 8-bit'

                    sImg={imgGpu} 
                    cardText3='52 Cores' 
                    cardText4='256 x 240'

                    tImg={imgHd} 
                    cardText5='2KB RAM' 
                    cardText6='Memória'

                    qImg={imgRam} 
                    cardText7='Cartucho' 
                    cardText8='Proprietário'

                />
            </View>

          <View style={styles.bode}>
            <Data
                    textSubTitle='Super Mário Bros.'
                    textParagrph='Apesar de não estar disponível no lançamento do console, Super Mario Bros. foi o cujo maior sentido do NES e uma das franquias de jogos mais populares até os dias de hoje.'
                      
                    gameDisc= 'A franquia foi tão popular na época, que 5 jogos da série Super Mario ocupam o top 5 de jogos mais vendidos do NES, com Super Mario Bros. em primeiro, Super Mario Bros. 3 em segundo e Super Mario Bros. 2 em quarto. Confira mais informações sobre o primeiro jogo da franquia Super Mario Bros:'

                    
                    frameColor='red'

                    pImg={imgSales}
                    cardText1='40 milhões de cópias'
                    cardText2='Até 1994'

                    sImg={imgMoney} 
                    cardText3='US$ 72 milhões' 
                    cardText4='Primeiros 4 meses'

                    tImg={imgRanking} 
                    cardText5='95% de aprovação' 
                    cardText6='Revista CVG'

                    qImg={imgDisc} 
                    cardText7='Remake em 1993' 
                    cardText8='Para o SNES'
                />
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerSubTitle}>Conclusão</Text>
                <Text style={styles.paragrph}>A Nintendo é uma das empresas mais icônicas da indústria de jogos eletrônicos e até hoje atrai milhares de fãs com seus consoles e franquias como Super Mario, The Legend of Zelda, Pokémon, dentre muitas outras séries adoradas pelos fãs. A Nintendo conseguiu crescer em meio a crise dos vídeo games de 1983 e transformar o que parecia ser o fim da indústria em um recomeço extremamente lucrativo.</Text>
            </View>
        </ScrollView>
    );
}
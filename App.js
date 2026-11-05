import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import NintendoScreen from './components/NintendoScreen';
import PlaystationScreen from './components/PlaystationScreen';
import XboxScreem from './components/XboxScreen';
import imgXbox from '../gameHist/assets/pjImg/xbox.png';
import imgPs from '../gameHist/assets/pjImg/ps.png';
import imgNintendo from './assets/pjImg/nintendo.png';
const tab= createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator>
        <tab.Screen name='Xbox' component={XboxScreem} 
        options={{
          tabBarIcon:({size})=>(
            <Image source={imgXbox} 
              style={{
                width: size, // Usa o tamanho padrão da TabBar
                height: size, // Usa o tamanho padrão da TabBar                
                 
                }}
            />
          ),
        }}/>
        <tab.Screen name='PlayStation' component={PlaystationScreen}
          options={{
          tabBarIcon:({size})=>(
            <Image source={imgPs} 
              style={{
                width: size, // Usa o tamanho padrão da TabBar
                height: size, // Usa o tamanho padrão da TabBar                
                
                }}
            />
          ),
        }}
        />
        <tab.Screen name='Nintendo' component={NintendoScreen}
           options={{
          tabBarIcon:({size})=>(
            <Image source={imgNintendo} 
              style={{
                width: size, // Usa o tamanho padrão da TabBar
                height: size, // Usa o tamanho padrão da TabBar                
                
                }}
            />
          ),
        }}
        />
      </tab.Navigator>
    </NavigationContainer>
  );
}



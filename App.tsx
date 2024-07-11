import {SafeAreaView, Text, View} from 'react-native';
import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
import {CounterScreens} from './src/presentation/screens/CounterScreens';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screens } from './src/presentation/screens/CounterM3Screen';
import IonIcon from 'react-native-vector-icons/Ionicons'

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props)=> <IonIcon { ...props}/>
      }}
    >
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name={'Luis Mariano Lopez Lena'}/> */}
        {/* <CounterScreens /> */}
        <CounterM3Screens/>
      </SafeAreaView>
    </PaperProvider>
  );
};

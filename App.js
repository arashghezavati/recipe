import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GluestackUIProvider} from '@gluestack-ui/themed'
import {config} from '@gluestack-ui/config';
import Header from './src/components/layout/Header';
import {StatusBar} from 'expo-status-bar';
import RecipeContainer from './src/components/containers/RecipeContainer'

const App = () => {
  return (
   <SafeAreaProvider>
   <GluestackUIProvider config={config}>  
   <Header />  
      <StatusBar style="auto" />
      <RecipeContainer />
      </GluestackUIProvider>
      </SafeAreaProvider>
  );
}
export default App;




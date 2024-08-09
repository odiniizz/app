import { StatusBar } from 'expo-status-bar';
import { Navigation } from './src/navigation' 
import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style = "auto" />
    </>
  );
}
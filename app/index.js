import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Cal from './cal';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient 
      colors={['#3498db', 'rgba(255,255,255,0.6)']}
      style={styles.container}
    >
      <View style={styles.overlay}>
      <Cal/>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    // backgroundColor: 'rgba(255,255,255,0)',
    alignItems: "center",
    justifyContent: "center",
  }
});

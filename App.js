import { SafeAreaView, StyleSheet } from 'react-native'
import CurrentPrice from './src/screens/CurrentPrice'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CurrentPrice />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App
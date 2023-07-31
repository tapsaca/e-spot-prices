import { StyleSheet, Text, View } from 'react-native'

const CurrentPrice = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.priceText}>0.15 € / kWh</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  priceText: {
    fontSize: 42,
    fontWeight: 'bold'
  }
})

export default CurrentPrice
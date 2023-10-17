import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Chart from '../components/Chart'

const CurrentPrice = () => {
  const [date, setDate] = useState(new Date())
  const [price, setPrice] = useState([])

  useEffect(() => {
    fetch(`https://api.porssisahko.net/v1/price.json?date=${date.toISOString().split('T')[0]}&hour=${date.getHours()}`)
      .then((response) => response.json())
      .then((priceData) => setPrice(priceData['price']))
    const timer = setTimeout(() => {
      setDate(new Date())
    }, 3600000 - new Date().getTime() % 3600000)
    return () => clearTimeout(timer)
  }, [date])

  return (
    <View style={styles.container}>
      <Text style={styles.priceText}>{price} c / kWh</Text>
      <Chart />
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
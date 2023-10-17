import { View } from 'react-native'
import { VictoryBar, VictoryChart } from 'victory-native'

const Chart = ({ data }) => {
  return (
    <View>
      <VictoryChart>
        <VictoryBar
          alignment='start'
          data={data}
        />
      </VictoryChart>
    </View>
  )
}

export default Chart
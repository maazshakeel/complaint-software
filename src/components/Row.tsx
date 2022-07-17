import React, { FC } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native'
import { Text } from 'react-native-elements'
import Circle from './Circle'

// height, width
const { height, width } = Dimensions.get('screen')

// interface
interface IRowProps {
  // ticket number
  ticketNumber: string
  // that individual complaint is resloved or not
  resolved: boolean
}

const resolved = false
const ticketNumber = 33245

const Row: FC = () => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.complaintHeading}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Circle resolved={resolved} />
          <Text style={{ paddingLeft: 10 }}>
            {resolved ? <Text>Resolved</Text> : <Text>In Progress</Text>}
          </Text>
        </View>
        <Text style={{ color: '#554949' }}>Ticket no. #{ticketNumber}</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity>
          <View style={styles.complaintCard}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Image
                source={require('../assets/plumbing.png')}
                size={94}
                style={{ marginLeft: 20, marginTop: 20 }}
              />
              <View>
                <Text h4 style={{ marginTop: 13, marginLeft: 3 }}>
                  Plumbing
                </Text>
                <Text style={{ width: 200, marginLeft: 3, fontSize: 17 }} h5>
                  My null is leaking. I dont know the reason, please fix it.
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 23,
                justifyContent: 'space-between'
              }}
            >
              <TouchableOpacity
                style={{
                  width: 145,
                  height: 54,
                  marginLeft: 10,
                  borderColor: '#495DC3',
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 6
                }}
              >
                <Text style={{ fontSize: 15, color: '#495DC3' }}>Withdraw</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 145,
                  height: 54,
                  borderColor: '#495DC3',
                  borderWidth: 1,
                  alignItems: 'center',
                  marginRight: 10,
                  justifyContent: 'center',
                  borderRadius: 6
                }}
              >
                <Text style={{ fontSize: 15, color: '#495DC3' }}>Track</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Row

const styles = StyleSheet.create({
  rowContainer: {
    padding: 30
  },
  complaintHeading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  complaintCard: {
    marginTop: 10,
    width: width - 37,
    // height: height - 1399,
    height: 219,
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderWidth: 1,
    shadowColor: '#470000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    elevation: 3,
    borderRadius: 25
  }
})

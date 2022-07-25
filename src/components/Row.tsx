import { useNavigation } from '@react-navigation/native'
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
import ComplaintCardBottomButton from './ComplaintCardBottomButton'

// height, width
const { height, width } = Dimensions.get('screen')

// interface
interface IRowProps {
  // ticket number
  ticketNumber: string
  // that individual complaint is resloved or not
  resolved: boolean
  // complaint detail
  complaintDetail: string
  // complaint type
  complaintCategory: string
}

// const resolved = false
// const ticketNumber = 33245

const Row: FC<IRowProps> = props => {
  const navigation = useNavigation()
  return (
    <View style={styles.rowContainer}>
      <View style={styles.complaintHeading}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Circle isDone={props.resolved} />
          <Text style={{ paddingLeft: 10 }}>
            {props.resolved ? <Text>Resolved</Text> : <Text>In Progress</Text>}
          </Text>
        </View>
        <Text style={{ color: '#554949' }}>
          Ticket no. #{props.ticketNumber}
        </Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('View')}>
          <View style={styles.complaintCard}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Image
                source={require('../assets/plumbing.png')}
                size={94}
                style={{ marginLeft: 20, marginTop: 20 }}
              />
              <View>
                <Text h4 style={{ marginTop: 13, marginLeft: 3 }}>{props.complaintCategory}</Text>
                <Text style={{ width: 200, marginLeft: 3, fontSize: 17 }} h5>{props.complaintDetail}</Text>
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
              <ComplaintCardBottomButton resolved={props.resolved} />
              {/* {!props.resolved ? (
                <ComplaintCardBottomButton />
              ) : (
                <Text>Nothing</Text>
              )} */}
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
    padding: 15
  },
  complaintHeading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  complaintCard: {
    marginTop: 7,
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

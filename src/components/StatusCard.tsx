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
import HL from './hr'
import TrackProblem from './trackProblem'
import VR from './vr'

// height, width
const { height, width } = Dimensions.get('screen')

// interface
interface IRowProps {
  // ticket number
  ticketNumber: string
  // that individual complaint is resloved or not
  resolved: boolean
}

const StatusCard: FC<IRowProps> = props => {
  return (
    <View style={styles.rowContainer}>
      <View style={{ alignItems: 'center' }}>
        <View>
          <View style={styles.complaintCard}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: 15,
                paddingTop: 7,
                justifyContent: 'space-between'
              }}
            >
              <Text style={{ fontSize: 20, marginTop: 10, left: 13 }}>
                Complaint Resolved
              </Text>
              <Text
                style={{
                  color: '#776D6D',
                  fontSize: 16,
                  paddingRight: 3,
                  paddingTop: 10
                }}
              >
                On Mon, 19, 20
              </Text>
            </View>
            <View style={{ paddingTop: 27, paddingBottom: 13 }}>
              <HL width={1} />
            </View>
            <TrackProblem
              isDone={true}
              date="Mon, 19 Oct 20"
              inProgress={false}
            />
            <View style={{ paddingLeft: 18.5, top: -2 }}>
              <VR height={40} width={2} />
            </View>
            <View style={{ top: -12 }}>
              <TrackProblem
                isDone={true}
                date="Mon, 19 Oct 20"
                inProgress={false}
              />
            </View>
            <View style={{ paddingLeft: 18.5, top: -13.5 }}>
              <VR height={40} width={2} />
            </View>
            <View style={{ top: -24 }}>
              <TrackProblem
                isDone={false}
                date="Mon, 19 Oct 20"
                inProgress={true}
              />
            </View>
            <View style={{ paddingLeft: 18.5, top: -25.5 }}>
              <VR height={40} width={2} />
            </View>
            <View style={{ top: -35.5 }}>
              <TrackProblem
                isDone={false}
                date="Mon, 19 Oct 20"
                inProgress={false}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default StatusCard

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
    height: 350,
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

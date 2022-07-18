import {
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import React from 'react'
import ComplaintCardBottomButton from '../components/ComplaintCardBottomButton'
import StatusCard from '../components/StatusCard'
import ProfilePic from '../components/ProfilePic'

// height, width
const { height, width } = Dimensions.get('screen')

export default function WithdrawComplaint() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FAF9FE' }}>
      <View style={{ left: 4, top: 75 }}>
        <View>
          <View style={styles.complaintCard}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Image
                source={require('../assets/plumbing.png')}
                size={94}
                style={{ marginLeft: 20, marginRight: 5, marginTop: 20 }}
              />
              <View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Text
                    style={{
                      marginTop: 13,
                      marginLeft: 3,
                      marginRight: 10,
                      fontSize: 21
                    }}
                  >
                    Plumbing
                  </Text>
                  <Text
                    style={{
                      marginTop: 13,
                      marginLeft: 3,
                      fontSize: 15,
                      color: '#554949'
                    }}
                  >
                    Ticket no. #33245
                  </Text>
                </View>
                <Text
                  style={{
                    width: 200,
                    marginLeft: 3,
                    fontSize: 18,
                    color: '#554949'
                  }}
                >
                  My null is leaking. I dont know the reason, please fix it.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ bottom: 30 }}>
        <StatusCard ticketNumber="#32442" resolved={false} />
      </View>
      <View style={{ marginLeft: 17 }}>
        <Text
          style={{
            marginTop: -32,
            marginLeft: 3,
            marginRight: 10,
            color: '#776D6D',
            fontSize: 21
          }}
        >
          Attending Staff
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <ProfilePic />
          <Text
            style={{
              fontSize: 18,
              paddingLeft: 7,
              paddingBottom: 20
            }}
          >
            Kashif Javed
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            bottom: 35,
            left: 80
          }}
        >
          <Text style={{ paddingRight: 2, fontSize: 10 }}>4.6</Text>
          <Text style={{ paddingRight: 2, fontSize: 10 }}>•</Text>
          <Text style={{ paddingRight: 2, fontSize: 10 }}>127 resolutions</Text>
          <Text style={{ paddingRight: 2, fontSize: 10 }}>•</Text>
          <Text style={{ fontSize: 10 }}>27 reviews</Text>
        </View>
        <ComplaintCardBottomButton />
      </View>
    </View>
  )
}

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
    height: 219
  }
})

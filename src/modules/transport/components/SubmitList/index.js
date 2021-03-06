import React from 'react'
import { FlatList, BackHandler, View, Text } from 'react-native'
import Card from './Card'
import { WingBlank, ActivityIndicator } from 'antd-mobile'

class AcceptFlatList extends React.PureComponent {
  constructor(props) {
    super(props)
    this.passTransport = props.passTransport(props.username)
    this.denyTransport = props.denyTransport(props.username)
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    this.props.backToMain(this.props.username)
    return true
  }

  _keyExtractor = (item, index) => item._id

  _renderItem = ({ item, index }) => {
    return (
      <Card
        transport={item}
        index={index}
        passTransport={this.passTransport}
        denyTransport={this.denyTransport}
      />
    )
  }

  _getItemLayout = (data, index) => ({
    length: 300,
    offset: 300 * index,
    index
  })

  render() {
    return (
      <WingBlank>
        <ActivityIndicator
          toast
          text='载入中...'
          animating={this.props.loading}
        />
        <FlatList
          data={this.props.transports}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          getItemLayout={this._getItemLayout}
          ListFooterComponent={
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                height: 100
              }}
            >
              <Text>已经到底了！</Text>
            </View>
          }
        />
      </WingBlank>
    )
  }
}

export default AcceptFlatList

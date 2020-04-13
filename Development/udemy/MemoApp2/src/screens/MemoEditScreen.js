import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  state = {
    memo: {},
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo });
  }

render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.memoEditInput} multiline value="hi" value={this.state.memo.body} />
        <CircleButton name="check" onPress={() => { this.props.navigation.goBack(); }} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoEditScreen;

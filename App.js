import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />
      <Text style={styles.text}>
        " Esta é a minha primeira frase do biscoito! "
      </Text>
      <TouchableOpacity
        onPress={() => Alert.alert('Test')}
        style={styles.botao}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.botao, {marginTop: 10, borderColor: 'black'}]}
        onPress={() => Alert.alert('Test')}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, {color: 'black'}]}>
            Reniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: 230,
    height: 230,
  },

  text: {
    fontSize: 20,
    fontStyle: 'italic',
    color: 'orange',
    margin: 30,
    textAlign: 'center',
  },

  botao: {
    width: 230,
    height: 50,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 30,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'orange',
  },
});

export default App;

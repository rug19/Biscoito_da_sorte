import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Gente todo dia arruma os cabelos, por que não o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
  ];

  function quebrarBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase(' " ' + frases[numeroAleatorio] + ' " ');
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reniciar() {
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />
      <Text style={styles.text}>{textoFrase}</Text>
      <TouchableOpacity onPress={quebrarBiscoito} style={styles.botao}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.botao, {marginTop: 10, borderColor: 'black'}]}
        onPress={reniciar}>
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

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image, 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{uri: 'https://s3-alpha-sig.figma.com/img/4d17/f963/f6ee0953600008083c32857b2d79ab5e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J0fPo70P89EX~0F2JN54~fKaTy8S41DQBGmyfIAvgp2A2J3ainl5ugbuPwazSc8r3HyxBh9dF0~0MpKHYhZJge84BiJlw~~O2~u3a7-Y1T~PyXhIphLT-f3SK3ie5j5QAobxQLND7sysS8r4J7gYnUoZJlm-yrzCjoR13Ke~6LJiKga84SFqd6s1kY7sYJBeE-HJgfy0i8oPfS8sPtjskBrg616AcE7PuxYwsAebRJeAhBAQcrszpQDLjv3nSlteI7OZ45E4ylF5ddwef~uBRyRGxcn-K8Za0QbhZsqpBiSm2r-Y1NxjVODkesTMe0eclM5nwzq9a3QT0GEHUmTiew'}} 
      />
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>MANAGE YOUR{'\n'}TASK</Text>

      <View style={styles.inputContainer}>
        <Icon name="email-outline" size={24} color="#9B51E0" />
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#BDBDBD"
          value={name}
          onChangeText={setName}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>GET STARTED →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  tinyLogo: {
    width: 100, // Adjusted size
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#9B51E0',
    marginBottom: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '80%',
    height: 50,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#2D9CDB',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator,
  Image,
} from 'react-native';
import { Button } from 'react-native-web';

const Item = ({ name, avatar }) => (
  <View style={styles.item}>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <Text style={styles.title}>{name}</Text>
  </View>
);

const App = () => {
  
  var url ='https://670b3a92ac6860a6c2cb76d8.mockapi.io/api/v1/user';

  var user = {name : 'user' , avatar:'https://picsum.photos/id/12/367/267'}

  var fnAdd = () => {
  fetch (url,
    {
      method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                  user
                ),
    })
  }

  var fnDelete = () => {
    fetch (url,
      {
        method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(
                    user
                  ),
      })
    }
  
  

  return (
    <SafeAreaView style={styles.container}>
      <Button title='Add' onPress={fnAdd}> </Button>
      <Button title='Delete' onPress={fnDelete}> </Button>
      <Button title='Edit' onPress={fnAdd}> </Button>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
  },
});

export default App;

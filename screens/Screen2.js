import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Checkbox } from 'react-native-paper'; // Checkbox component

const TaskItem = ({ title, isChecked, onToggleCheck }) => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskLeft}>
        <Checkbox
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={onToggleCheck}
          color="#27AE60"
        />
        <Text style={styles.taskText}>{title}</Text>
      </View>
      <View style={styles.taskRight}>
        <View style={styles.redBlock} />
        <Icon name="pencil-outline" size={24} color="#FF5656" />
      </View>
    </View>
  );
};

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'To check email', isChecked: true },
    { id: 2, title: 'UI task web page', isChecked: false },
    { id: 3, title: 'Learn javascript basic', isChecked: false },
    { id: 4, title: 'Learn HTML Advance', isChecked: true },
    { id: 5, title: 'Medical App UI', isChecked: true },
    { id: 6, title: 'Learn Java', isChecked: true },
  ]);

  const toggleCheck = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/be6e/055b/b84078f59fedb0ab8eee6f0eeb77dcc2?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qWv871l0exgelG7z2N-yEDiTfxdNgR-lBLmOuKZnv-93Rm8CNeqz3D-7NK7EeqSM~xRuBayC8-gTV9aReXeT3GBUSAL~pQjzMLH9TmsVNSgl-YTudTWvVPjWXwzy9Nr-uJCW~rhhdX9~iqNei83l0dczE-8IF36~Kq1R4l6RWquJ4JLTDvvO1AsfVqE~9dlQ7Dh7rsoKF-ngMQ59O~oCx0nUBmQVze2U39BP4OiScSkHhsPSaoe1K-oOqtojf0Kw36SJJwVqi0zq96xehoWu~CTIabObXErZvuREX-Cw6brYoXNRkhV4nWTXiPPuot5FYeha~~5dHDz3e0oXIeLc5w__',
          }}
          style={styles.avatar}
        />
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hi Twinkle</Text>
          <Text style={styles.subtext}>Have a great day ahead</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="magnify" size={24} color="#333" />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor="#BDBDBD"
        />
      </View>

      {/* Task List */}
      <ScrollView contentContainerStyle={styles.taskList}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            isChecked={task.isChecked}
            onToggleCheck={() => toggleCheck(task.id)}
          />
        ))}
      </ScrollView>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Icon name="plus" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  greetingContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  subtext: {
    fontSize: 14,
    color: '#828282',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  taskList: {
    paddingBottom: 100,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  taskLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  taskRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  redBlock: {
    width: 20,
    height: 20,
    backgroundColor: '#FF5656',
    marginRight: 10,
    borderRadius: 4,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#2D9CDB',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
});

export default App;

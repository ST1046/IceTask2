import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import { RootStackParamList } from './types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen1' component={Screen1}></Stack.Screen>
        <Stack.Screen name='Screen2' component={Screen2}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

type Screen1Prop = NativeStackScreenProps<RootStackParamList, 'Screen1'>;
const Screen1: React.FC<Screen1Prop> = (props) => {
  const [studentNumber, setStudentNumber] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.text1}>Enter your details:</Text>

        <TextInput
          style={styles.input}
          placeholder='Student Number'
          value={studentNumber}
          onChangeText={setStudentNumber}
        />
        <TextInput
          style={styles.input}
          placeholder='Name'
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder='Surname'
          value={surname}
          onChangeText={setSurname}
        />

        <TouchableHighlight
          style={styles.button}
          onPress={() => props.navigation.navigate('Screen2', { studentNumber, name, surname })}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

type Screen2Prop = NativeStackScreenProps<RootStackParamList, 'Screen2'>;
const Screen2: React.FC<Screen2Prop> = (props) => {
  const { studentNumber, name, surname } = props.route.params;
  return (
    <View style={styles.container3}>
      <View style={styles.container4}>
        <Text style={styles.text2}>Welcome, {name} {surname}!</Text>
        <Text style={styles.text3}>Student Number: {studentNumber}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E8E8', // Soft blush pink
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text1: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#A67F8E', // Soft mauve
    marginBottom: 20,
  },
  text2: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5A4B81', // Deeper mauve
    marginBottom: 10,
  },
  text3: {
    textAlign: 'center',
    fontSize: 20,
    color: '#5A4B81', // Deeper mauve
  },
  container2: {
    marginTop: 100,
    width: 500,
    height: 400,
    backgroundColor: '#F3D4D4', // Soft pastel pink
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  container3: {
    flex: 1,
    backgroundColor: '#E3DFF0', // Soft lavender
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container4: {
    marginTop: 200,
    width: 500,
    height: 400,
    backgroundColor: '#D9CBEF', // Lighter lavender
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#D8A7B1', // Soft rosy pink
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    width: 400,
    height: 40,
    backgroundColor: '#D8A7B1', // Soft rosy pink 
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    color: '#3C2A3E', // Darker mauve 
    fontSize: 20,
  },
});

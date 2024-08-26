import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { data } from '@/constants/data';
import { MaterialIcons } from '@expo/vector-icons';

export default function Cal() {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    if (value === 'AC') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };
  return (
    <View style={styles.container}>
        <View style={styles.inputcontainer}>
      <TextInput
        style={styles.input}
        value={input}
        editable={false}
        placeholder="0"
      />
      <View style={styles.ClearoneText}></View>
          <TouchableOpacity onPress={handleBackspace}>
            <MaterialIcons name="backspace" size={24} color="black" />
          </TouchableOpacity>
      </View>
<View style={styles.line}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4} // Display buttons in a grid of 4 columns
      />
      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: wp('2%'),
  },
  inputcontainer:{
    borderRadius: 5,
      flexDirection:"row",
    gap:25

  },
  input: {
    borderRadius: 5,
    fontSize: wp('5%'),
    textAlign: 'right',
    padding: wp('2%'),
  },
  line:{
    width: wp('110%'),
    height:hp('60%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: wp('15%'),
    height: hp('8%'),
    alignItems: 'center',
    margin: wp('1%'),
    borderRadius: 5,
    marginBottom:10
  },
  buttonText: {
    fontSize: wp('3%'),
    color: 'black',
  },
});

import React, {useState} from 'react';
import {currencyByRupee} from './constant';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  Pressable,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import CurrencyButton from './components/CurrencyButton';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  // const [targetValue, setTargetValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  //to convert to specific rupee
  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000',
      });
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResultValue(result);
      console.log(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'Enter a valid value',
        backgroundColor: '#EA7773',
        textColor: '#000',
      });
    }
  };
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            {/* Rupee icon  */}
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              maxLength={13}
              value={inputValue}
              onChangeText={setInputValue}
              clearButtonMode="always"
              placeholder="Enter amount in rupees"
              style={styles.inputAmountField}
            />
          </View>
          {resultValue && (
            <Text selectable style={styles.resultTxt}>
              {resultValue}
            </Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item?.name && styles.selected,
                ]}
                onPress={() => buttonPressed(item)}>
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
    paddingTop: 20,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    paddingLeft: 50,
    fontSize: 24,
    color: '#f1f1f1',
    fontWeight: '800',
    width: '50%',
    marginBottom: 5,
  },
  rupee: {
    marginRight: 8,
    fontSize: 30,
    color: '#ffa',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    borderColor: '#ffffff',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;

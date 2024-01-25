/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Formik} from 'formik';
import {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as YUP from 'yup';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
const App = () => {
  const [isPasswordGenerated, setGeneratedPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [isNumber, setNumber] = useState(false);
  const [isUpperCase, setUpperCase] = useState(false);
  const [isLowerCase, setLowerCase] = useState(true);
  const [isSymbols, setSymbols] = useState(false);

  //validation schema
  const passwordLengthSchema = YUP.object().shape({
    passwordLength: YUP.number().required('Enter number').max(100,'max 99').min(3,'minimum 3'),
  });

  //generate passowrd String,
  const generatePasswordString = (passwordLength: number) => {
    let passwordString: string = '';
    const upperCaseChar = 'ASDFGHJKLQWERTYUIOPZXCVBNM';
    const lowerCaseChar = 'asdfghjjklmnbvcxzwqertyuiop';
    const symbols = '!@#$%^&*(){}?/';
    const numbers = '1234567890';
    if (isUpperCase) {
      passwordString += upperCaseChar;
    }
    if (isLowerCase) {
      passwordString += lowerCaseChar;
    }
    if (isNumber) {
      passwordString += numbers;
    }
    if (isSymbols) {
      passwordString += symbols;
    }
    setPassword(createPassword(passwordString, passwordLength));
    setGeneratedPassword(true);
  };
  //create password
  const createPassword = (
    characters: string,
    passwordLength: number,
  ): string => {
    let generatedPassword: string = '';
    for (let i = 0; i < passwordLength; i++) {
      const charIndex: number = Math.floor(Math.random() * characters.length);
      generatedPassword += characters.charAt(charIndex);
    }

    return generatedPassword;
  };
  //reset password
  const resetPassword = () => {
    setNumber(false);
    setUpperCase(false);
    setSymbols(false);
    setGeneratedPassword(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps={'always'}>
    <SafeAreaView style={styles.appContainer}>
      {/* HEading View  */}
      <View>
        <Text style={styles.mainHeading}>Password Generator</Text>
      </View>
      <Formik
        initialValues={{
          passwordLength: '',
          isUpperCase: false,
          isNumber: false,
          isSymbols: false,
        }}
        validationSchema={passwordLengthSchema}

        onSubmit={values => {
          console.log(values);
          generatePasswordString(+values.passwordLength);
        }}>
        {({
          handleChange,
          handleSubmit,
          values,
          touched,
          errors,
          isValid,
          handleReset,
        }) => (
          // Password generation input fields
          <View>
            <View style={[styles.inputWrapper]}>
              <View style={styles.inputColumn}>
                <Text>Password Length : </Text>
                {touched.passwordLength && errors.passwordLength && (
                  <Text style={styles.errorText}>{errors.passwordLength}</Text>
                )}
              </View>
              <TextInput
                style={styles.inputStyle}
                value={values.passwordLength}
                onChangeText={handleChange('passwordLength')}
                placeholder="Ex. 8"
                keyboardType="numeric"
              />
            </View>
            <View style={[styles.inputWrapper]}>
              <Text style={[styles.heading]}>Include Numbers</Text>
              <BouncyCheckbox
                disableBuiltInState
                isChecked={isNumber}
                onPress={() => setNumber(!isNumber)}
                fillColor="#Ec4b6d"
              />
            </View>
            <View style={[styles.inputWrapper]}>
              <Text style={[styles.heading]}>Include Uppercase</Text>
              <BouncyCheckbox
                disableBuiltInState
                isChecked={isUpperCase}
                onPress={() => setUpperCase(!isUpperCase)}
                fillColor="#Fd2b9a"
              />
            </View>
            <View style={[styles.inputWrapper]}>
              <Text style={[styles.heading]}>Include Lowercase</Text>
              <BouncyCheckbox
                disableBuiltInState
                isChecked={isLowerCase}
                onPress={() => setLowerCase(!isLowerCase)}
                fillColor="#B047ee"
              />
            </View>
            <View style={[styles.inputWrapper]}>
              <Text style={[styles.heading]}>Include Symbols</Text>
              <BouncyCheckbox
                disableBuiltInState
                isChecked={isSymbols}
                onPress={() => setSymbols(!isSymbols)}
                fillColor="#14aaa2"
              />
            </View>
            <View style={styles.formActions}>
              <TouchableOpacity style={styles.primaryBtn} disabled={!isValid} onPress={handleSubmit}>
                <Text style={styles.primaryBtnTxt}>Generate Password</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.secondaryBtn}
                onPress={() => {
                  handleReset();
                  resetPassword();
                }}>
                <Text style={styles.secondaryBtnTxt}>Rest Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>

      {/* Generated Password  */}
      {isPasswordGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
          </View>
        ) : null}
    </SafeAreaView>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    flexDirection:'row',
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    justifyContent: 'center',
    alignItems:'center'
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
  errorText: {
    color: "#ff1a5a"
  },
  mainHeading : {textAlign:'center',marginVertical: 10, fontSize:20,fontWeight:'bold',textDecorationLine:'underline'}
});
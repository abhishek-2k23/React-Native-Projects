import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import One from './assets/One.png';
import Two from './assets/Two.png';
import Three from './assets/Three.png';
import Four from './assets/Four.png';
import Five from './assets/Five.png';
import Six from './assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps) => {
  return (
    <View>
      <Image source={imageUrl} style={[styles.img]} />
    </View>
  );
};
function App(): React.JSX.Element {
  const [DiceProp, setDiceProp] = useState<ImageSourcePropType>(One);

  const randomDice = () => {
    let randomNumber;
    for (let i = 0; i < 6; i++) {
      randomNumber = Math.floor(Math.random() * 6) + 1;
    }

    switch (randomNumber) {
      case 1: {
        setDiceProp(One);
        break;
      }
      case 2: {
        setDiceProp(Two);
        break;
      }
      case 3: {
        setDiceProp(Three);
        break;
      }
      case 4: {
        setDiceProp(Four);
        break;
      }
      case 5: {
        setDiceProp(Five);
        break;
      }
      case 6: {
        setDiceProp(Six);
        break;
      }
      default: {
        setDiceProp(Six);
        break;
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Dice imageUrl={DiceProp} />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            randomDice();
          }}
          style={styles.button}>
          <Text style={styles.btnText}>Press to change</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#f1d1d1',
    borderWidth: 2,
    borderColor: 'pink',
    marginVertical: 5,
    borderRadius: 4,
  },
  btnText: {
    color: '#1d1d1d',
    fontSize: 14,
  },
  img: {
    width: 200,
    height: 200,
  },
});

export default App;

// Normal code
// import React, {useState} from 'react';
// import {View, Text, Button, FlatList} from 'react-native';
// import ColorCounter from './ColorCounter';

// const COLOR_INCREAMENT = 15;
// const SquareScreen = () => {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);

//   const setColor = (color, change) => {
//     switch (color) {
//       case 'red':
//         red + change > 255 || red + change < 0 ? null : setRed(red + change);
//         return;
//       case 'green':
//         green + change > 255 || green + change < 0
//           ? null
//           : setGreen(green + change);
//         return;
//       case 'blue':
//         blue + change > 255 || blue + change < 0
//           ? null
//           : setBlue(blue + change);
//         return;
//     }
//   };

//   return (
//     <View>
//       <ColorCounter
//         onIncrease={() => setColor('red', COLOR_INCREAMENT)}
//         onDecrease={() => setColor('red', -1 * COLOR_INCREAMENT)}
//         color="Red"
//       />
//       <ColorCounter
//         color="Blue"
//         onIncrease={() => setColor('blue', COLOR_INCREAMENT)}
//         onDecrease={() => setColor('blue', -1 * COLOR_INCREAMENT)}
//       />
//       <ColorCounter
//         color="Green"
//         onIncrease={() => setColor('green', COLOR_INCREAMENT)}
//         onDecrease={() => setColor('green', -1 * COLOR_INCREAMENT)}
//       />
//       <View
//         style={{
//           height: 150,
//           width: 150,
//           backgroundColor: `rgb(${red},${green},${blue})`,
//         }}></View>
//     </View>
//   );
// };

// export default SquareScreen;

//Using reducer
import React, {useReducer} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import ColorCounter from './ColorCounter';

const COLOR_INCREAMENT = 15;
const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return {...state, red: state.red + action.amount};
    case 'green':
      return {...state, green: state.green + action.amount};
    case 'blue':
      return {...state, blue: state.blue + action.amount};
    default:
      return state;
  }
};
const SquareScreen = () => {
  const [state, runMyReducer] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  const {red, green, blue} = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          runMyReducer({colorToChange: 'red', amount: COLOR_INCREAMENT})
        }
        onDecrease={() =>
          runMyReducer({colorToChange: 'red', amount: -1 * COLOR_INCREAMENT})
        }
        color="Red"
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          runMyReducer({colorToChange: 'blue', amount: COLOR_INCREAMENT})
        }
        onDecrease={() =>
          runMyReducer({colorToChange: 'blue', amount: -1 * COLOR_INCREAMENT})
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          runMyReducer({colorToChange: 'green', amount: COLOR_INCREAMENT})
        }
        onDecrease={() =>
          runMyReducer({colorToChange: 'green', amount: -1 * COLOR_INCREAMENT})
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}></View>
    </View>
  );
};

export default SquareScreen;

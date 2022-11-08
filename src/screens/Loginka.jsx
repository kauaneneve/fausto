import { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { Styles } from "../lib/styles";


export const Login = () => {
  const [Text, setText] = useState();
  const [password, setPassword] = useState();
    return (
    <View style={Styles.container}>
      <TextInput 
      label="email"
      mode="outlined"
      value={Text}
      onChangeText={(text) => setText(text)}
      />
      <TextInput 
      label="senha"
      mode="outlined"
      value={password}
      onChangeText={(valor) => setPassword(valor)}
    secureTextEntry={true}
    />
    </View>
  );
};
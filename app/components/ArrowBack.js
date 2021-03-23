import React from 'react';
import { TouchableOpacity } from "react-native";
import Icon from "react-native-ico";
import Colors from "../constants/Colors";

export default function ArrowBack ({ navigation }) {
    return (
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Icon
            name='left-arrow-key'
            color={Colors.PRIMARY}
            height='35'
            width='22'
            group='material-design'
          />
        </TouchableOpacity>
    );
}
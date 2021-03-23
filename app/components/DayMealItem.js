import React from 'react';
import {View} from 'react-native';
import { ContentText } from "./Text";

export function DayMealItem ({ color, text }){
    return(
        <View style={{flexDirection: "row", alignItems: "center"}}>
            <View style={{width: 5, height: "100%", backgroundColor: color, marginRight: 15}}></View>
            <ContentText text={text} />
        </View>
    )
}
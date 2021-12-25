import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={setValue}
                secureTextEntry={secureTextEntry}
                //placeholderTextColor={'grey'}
            />
        </View>
    )
}

export default CustomInput;
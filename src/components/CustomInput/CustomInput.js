import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import { Controller } from 'react-hook-form';

const CustomInput = ({control, name, rules = {}, placeholder, secureTextEntry}) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange, onBlur}, fieldState: {error}}) => 
                <>
                    <View style={[styles.container, {borderColor: error ? 'red' : '#E8E8E8'}]}>
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            style={[styles.input, {}]}
                            secureTextEntry={secureTextEntry}
                        />
                    </View>

                    {error && <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>}
                </>
            }
        />
    )
}

export default CustomInput;
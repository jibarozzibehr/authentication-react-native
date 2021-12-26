import React, { useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { useNavigation } from '@react-navigation/native';

import { useForm } from 'react-hook-form';

const ConfirmEmailScreen = () => {
    const { control, handleSubmit, watch } = useForm();
    
    const navigation = useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate("HomeScreen");
    };

    const onSignInPressed = () => {
        navigation.navigate("SignInScreen");
    };
    
    const onResendCodePressed = () => {
        console.warn("onResendCodePressed");
    };    

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your email</Text>

                <CustomInput
                    name="code"
                    placeholder="Enter your confirmation code"
                    control={control}
                    rules={{
                        required: 'Code is required.',
                        minLength: {
                            value: 6,
                            message: "The confirmation code is 6 characters long."
                        },
                        maxLength: {
                            value: 6,
                            message: "The confirmation code is 6 characters long."
                        }
                    }}
                />
                
                <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

                <CustomButton text="Resend code" onPress={onResendCodePressed} type="SECONDARY" />
                <CustomButton text="Back to Sign in" onPress={onSignInPressed} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}



export default ConfirmEmailScreen;

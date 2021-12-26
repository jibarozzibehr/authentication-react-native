import React, { useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { useNavigation } from '@react-navigation/native';

import { useForm } from 'react-hook-form';

const ForgotPasswordScreen = () => {
    const { control, handleSubmit, watch } = useForm();
    
    const navigation = useNavigation();

    const onSendPressed = () => {
        navigation.navigate("NewPasswordScreen");
    };

    const onSignInPressed = () => {
        navigation.navigate("SignInScreen");
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>

                <CustomInput
                name="username"
                placeholder="Username"
                control={control}
                rules={{
                    required: 'Username is required.',
                    minLength: {
                        value: 8,
                        message: "Username must be at least 8 characters long."
                    },
                    maxLength: {
                        value: 24,
                        message: "Username can't be more than 24 characters long."
                    }
                }}
                />
                
                <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

                <CustomButton text="Back to Sign in" onPress={onSignInPressed} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}



export default ForgotPasswordScreen;

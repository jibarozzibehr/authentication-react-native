import React, { useState } from 'react';
import { View, Text, ScrollView, Alert} from 'react-native';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { useNavigation } from '@react-navigation/native';

import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const NewPasswordScreen = () => {
    const { control, handleSubmit, watch } = useForm();
    
    const navigation = useNavigation();

    const onSubmitPressed = async (data) => {
        try {
            await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
            navigation.navigate("SignInScreen");
        } catch (e) {
            Alert.alert("Oops", e.message);
        }
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
                    control={control}
                    placeholder="Username"
                    rules={{
                        required: "The username is required."
                    }}
                />
                <CustomInput
                    name="code"
                    control={control}
                    placeholder="Code"
                    rules={{
                        required: "The code is required."
                    }}
                />
                <CustomInput
                    name="password"
                    control={control}
                    placeholder="Enter your new password"
                    rules={{
                        required: 'Password is required.',
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters long."
                        },
                        maxLength: {
                            value: 24,
                            message: "Password can't be more than 24 characters long."
                        }
                    }}
                    secureTextEntry
                />
                
                <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

                <CustomButton text="Back to Sign in" onPress={onSignInPressed} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}



export default NewPasswordScreen;

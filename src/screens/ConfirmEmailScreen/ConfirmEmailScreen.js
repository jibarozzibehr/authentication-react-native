import React, { useState } from 'react';
import { View, Text, ScrollView, Alert} from 'react-native';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { useNavigation, useRoute } from '@react-navigation/native';

import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const ConfirmEmailScreen = () => {
    const route = useRoute();
    const { control, handleSubmit, watch } = useForm({
        defaultValues: {
            username: route?.params?.username
        }
    });

    const username = watch("username");
    
    const navigation = useNavigation();

    const onConfirmPressed = async (data) => {
        try {
            await Auth.confirmSignUp(data.username, data.code);
            navigation.navigate("SignInScreen");
        } catch (e) {
            Alert.alert("Oops", e.message);
        }
    };

    const onSignInPressed = () => {
        navigation.navigate("SignInScreen");
    };
    
    const onResendCodePressed = async () => {
        try {
            await Auth.resendSignUp(username);
            Alert.alert("Success", "Code was resent to your email.");
        } catch (e) {
            Alert.alert("Oops", e.message);
        }
    };    

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your email</Text>

                <CustomInput
                    name="username"
                    control={control}
                    placeholder="Username"
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

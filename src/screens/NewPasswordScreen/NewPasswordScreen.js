import React, { useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { useNavigation } from '@react-navigation/native';

import { useForm } from 'react-hook-form';

const NewPasswordScreen = () => {
    const { control, handleSubmit, watch } = useForm();
    
    const navigation = useNavigation();

    const onSubmitPressed = () => {
        navigation.navigate("HomeScreen");
    };

    const onSignInPressed = () => {
        navigation.navigate("SignInScreen");
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>

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

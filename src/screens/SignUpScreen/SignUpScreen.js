import React, { useState } from 'react';
import { View, Text, ScrollView, Alert} from 'react-native';
import { useWindowDimensions } from "react-native";
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

import { useNavigation } from '@react-navigation/native';

import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignUpScreen = () => {
    const { control, handleSubmit, watch } = useForm();
    const pwd = watch("password");

    const navigation = useNavigation();

    const onRegisterPressed = async (data) => {
        const {username, password, email, name} = data;
        try {
            await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                    name,
                    preferred_username: username
                }
            });
            navigation.navigate("ConfirmEmailScreen", {username});
        } catch (e) {
            Alert.alert("Oops", e.message);
        }

    };

    const onSignInPressed = () => {
        navigation.navigate("SignInScreen");
    };
    
    const onTermsOfUsePressed = () => {
        console.warn("onTermsOfUsePressed");
    };

    const onPrivacyPolicyPressed = () => {
        console.warn("onPrivacyPolicyPressed");
    };
    

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>

                <CustomInput
                    name="name"
                    control={control}
                    placeholder="Name"
                    rules={{
                        required: 'Name is required.',
                        minLength: {
                            value: 1,
                            message: "Name must be at least 1 character long."
                        },
                        maxLength: {
                            value: 24,
                            message: "Name can't be more than 24 characters long."
                        }
                    }}
                />
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
                    name="email"
                    control={control}
                    placeholder="Email"
                    rules={{
                        required: 'Email is required.',
                        pattern: {
                            value: EMAIL_REGEX,
                            message: "Invalid email."
                        }
                    }}
                />
                <CustomInput
                    name="password"
                    control={control}
                    placeholder="Password"
                    secureTextEntry
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
                />
                <CustomInput
                    name="password-repeat"
                    control={control}
                    placeholder="Repeat password"
                    secureTextEntry
                    rules={{
                        validate: (value) =>
                            value === pwd || "Passwords don't match."
                    }}
                />
                
                <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)} />
                <Text style={styles.text}>By registering, you confirm that you accept our <Text onPress={onTermsOfUsePressed} style={styles.link}>Terms of Use</Text> and <Text onPress={onPrivacyPolicyPressed} style={styles.link}>Privacy Policy</Text>.</Text>

                <SocialSignInButtons />
                

                <CustomButton text="Have an account? Sign in" onPress={onSignInPressed} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}



export default SignUpScreen;

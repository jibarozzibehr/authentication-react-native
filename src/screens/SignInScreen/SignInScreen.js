import React, { useState } from 'react';
import { View, Image, ScrollView, TextInput, Alert } from 'react-native';
import { useWindowDimensions } from "react-native";
import Logo from '../../../assets/images/react-native.png';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

import { useNavigation } from '@react-navigation/native';

import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const SignInScreen = () => {
    /* const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); */

    const { height } = useWindowDimensions();

    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, formState: {errors} } = useForm();

    const onSignInPressed = async (data) => {
        if (loading) {
            return;
        }

        setLoading(true);

        //Validate user
        try {
            const response = await Auth.signIn(data.username, data.password);
            console.log(response);
        } catch (e) {
            Alert.alert("Oops", e.message);
        }

        setLoading(false);

        //navigation.navigate("HomeScreen");
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPasswordScreen");
    };

    const onSignUpPressed = () => {
        navigation.navigate("SignUpScreen");
    };
    

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />
                
                <CustomInput
                    name="username"
                    placeholder="Username"
                    control={control}
                    rules={{required: 'Username is required.'}}
                />
                <CustomInput
                    name="password"
                    placeholder="Password"
                    control={control}
                    rules={{
                        required: 'Password is required.',
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters long."
                        }
                    }}
                    secureTextEntry
                />


                <CustomButton text={loading ? "Loading..." : "Sign In"} onPress={handleSubmit(onSignInPressed)} />
                <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />

                <SocialSignInButtons />

                <CustomButton text="Don't have an account? Create one" onPress={onSignUpPressed} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}



export default SignInScreen;

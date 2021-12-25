import React, { useState } from 'react';
import { View, Image, ScrollView} from 'react-native';
import { useWindowDimensions } from "react-native";
import Logo from '../../../assets/images/react-native.png';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();

    const navigation = useNavigation();

    const onSignInPressed = () => {
        //Validate user

        navigation.navigate("HomeScreen");
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
                <CustomInput placeholder="Username" value={username} setValue={setUsername} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
                
                <CustomButton text="Sign In" onPress={onSignInPressed} />
                <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />

                <SocialSignInButtons />

                <CustomButton text="Don't have an account? Create one" onPress={onSignUpPressed} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}



export default SignInScreen;

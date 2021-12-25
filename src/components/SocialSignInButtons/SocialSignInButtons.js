import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../CustomButton/CustomButton';

const onSignInWithFacebook = () => {
    console.warn("Facebook");
};

const onSignInWithGoogle = () => {
    console.warn("Google");
};

const onSignInWithApple = () => {
    console.warn("Apple");
};

const SocialSignInButtons = () => {
    return (
        <>
            <CustomButton text="Sign In with Facebook" onPress={onSignInWithFacebook} bgColor="#E7EAF4" fgColor="#4765A9" />
            <CustomButton text="Sign In with Google" onPress={onSignInWithGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />
            <CustomButton text="Sign In with Apple" onPress={onSignInWithApple} bgColor="#E3E3E3" fgColor="#363636" />
        </>
    )
}

export default SocialSignInButtons;
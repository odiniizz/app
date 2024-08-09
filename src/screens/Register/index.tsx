import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Alert } from 'react-native';
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { LoginTypes } from '../../navigation/login.navigation';
import { ComponentButtonInterface } from '../../components';
export interface IRegister {
    name?: string
    email?: string
    password?: string
}
export function Register({ navigation }: LoginTypes) {
    const [data, setData] = useState<IRegister>();
    async function handleRegister() {
        if (data?.email && data.name && data.password) {
            console.log(data)
        } else {
            Alert.alert("Preencha todos os campos!!!");
        }
    }
    function handleGoBack() {
        navigation.navigate('Login')
    }
    function handleChange(item: IRegister) {
        setData({ ...data, ...item });
    }
    return (
        <View style={styles.container}>
            <View style ={styles.tudo}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Ainda não tem uma conta? Cadastre-se!</Text>
                <View style={styles.formRow}>
                    <Ionicons name="person" style={styles.icon} />
                    <TextInput
                        placeholderTextColor={colors.black}
                        style={styles.input}
                        placeholder="Nome"
                        onChangeText={(i) => handleChange({ name: i })}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                        placeholderTextColor={colors.black}
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(i) => handleChange({ email: i})}
                        />
                </View>
                <View style={styles.formRow}>
                    <Entypo name="key" style={styles.icon} />
                    <TextInput
                        placeholderTextColor={colors.black}
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        onChangeText={(i) => handleChange({ password: i })}
                    />
                </View>
                <ComponentButtonInterface title='Salvar' type='secondary' onPressI={handleRegister} />
                <ComponentButtonInterface title='Voltar' type='primary' onPressI={handleGoBack} />
            </KeyboardAvoidingView>
            </View>
</View>
    );
}
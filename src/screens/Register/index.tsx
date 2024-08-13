import React, { useState } from 'react';
import { ImageBackground, Text, View, Alert, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles"
import { LoginTypes } from "../../navigation/login.navigation";
import { TextInput } from "react-native-gesture-handler";
import { ButtonInterface } from "../../components/ButtonInterface";
import { colors } from '../../styles/colors';

import { apiUser } from '../../services/data'
import { useAuth } from '../../hook/auth'
import { AxiosError } from 'axios'

export interface IRegister {
    name ?: string
    email?: string
    password?: string
}

export function Register({ navigation }: LoginTypes) {
      const [data, setData] = useState<IRegister>();
    const { setLoading } = useAuth()
    async function handleRegister() {
        if (data?.email && data.name && data.password){
            try {
                const response = await apiUser.register(data)
                Alert.alert(`${response.data.name} cadastrado!`)
                navigation.navigate("Login")
            } catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
        } else {
            Alert.alert("Preencha todos os campos!")
        }
    }
    function handleGoBack() {
        navigation.navigate('Login')
    }
    function handleChange(item: IRegister) {
        setData({ ...data, ...item});
    }
    return (
      
            <View >
                <KeyboardAvoidingView>
                    <View>
                        <Text >Cadastre-se</Text>
                    </View>
                    <View style={styles.formRow}>
                        <TextInput
                            placeholderTextColor={colors.white}
                            style={styles.input}
                            placeholder="Nome"
                            onChangeText={(i) => handleChange({ name: i })}
                        />
                        </View>
                    <View style={styles.formRow}>
                        <TextInput
                            placeholderTextColor={colors.white}
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={(i) => handleChange({ email: i})}
                        />
                    </View>
                    <View style={styles.formRow}>
                        <TextInput
                            placeholderTextColor={colors.white}
                            style={styles.input}
                            placeholder="Senha"
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={(i) => handleChange({ password: i})}
                        />
                    </View>
                    <ButtonInterface title='Salvar' type='secondary' onPressI={handleRegister} />
                    <ButtonInterface title='Voltar' type='primary' onPressI={handleGoBack} />
                </KeyboardAvoidingView>
            </View>
      
    );
}
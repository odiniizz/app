import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { styles } from "./styles"
import { useAuth } from "../../hook/auth";
import { apiMessage } from "../../services/data";
import { IResponseMessage } from "../../services/data/Mensagem";
import { FlatList } from "react-native-gesture-handler";
import { stylesglobal, cores } from "../../styles/globalstyles"
import { MessageTypes } from "../../navigation/message.navigation";
import { colors } from "../../styles/colors";
import { AntDesign } from "@expo/vector-icons";

export function Mensagem({ navigation }: MessageTypes) {
    const [message, setMessage] = useState<IResponseMessage[]>([])
    const { setLoading } = useAuth()
    useEffect(() => {
        setLoading(true)
        async function loadMessage() {
            const response = await apiMessage.index()
            setMessage(response.data)
        }
        setLoading(false)
        navigation.addListener("focus", () => loadMessage())
    }, [])
    interface itemMessage {
        item: IResponseMessage
    }
    const renderItem = (({ item }: itemMessage) => {
        return (
            <View>
                <Text>Nome: {item.user.name}</Text>
                <Text>Título: {item.title}</Text>
                <Text>Mensagem: {item.message}</Text>
            </View>
        )
    })
    return (
            <View style={styles.container}>
                {
                    message.length > 0 && (
                        <FlatList
                            data={message}
                            renderItem={renderItem}
                            keyExtractor={item => String(item.id)}
                        />
                    )
                }
            <TouchableOpacity
                onPress={() => navigation.navigate("CadMessage")}>
                <AntDesign name="pluscircle" size={48} color={cores.white} />
            </TouchableOpacity>
            </View>
    )
}
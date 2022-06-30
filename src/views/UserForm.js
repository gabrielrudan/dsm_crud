import React, { useContext, useState } from "react";
import { Text, TextInput, View, StyleSheet, Button} from "react-native";
import UserContext from "../context/UserContext";

const styles = StyleSheet.create({
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 2,
        padding: 10,
    },
    textTopInput:{
        margin: 12,
        marginBottom: 1,
        fontSize: 17,
    }, 
    form:{
        padding:12,
    }
})

function UserForm({route, navigation}) {

    const [user, setUser] = useState(route.params ? route.params :  {})
    const {dispatch} = useContext(UserContext)

    return(
        <View
            style = {styles.form}
        >
            {/**Nome */}
            <Text
                style = {styles.textTopInput}
            >
                Nome do Usuário
            </Text>
            <TextInput 
                style={styles.input}
                onChangeText = {nome => setUser({...user, nome})}
                placeholder = 'Digite o nome do usuário'
                value={user.nome}
            />
            {/**Email */}
             <Text
                style = {styles.textTopInput}
            >
                Email do Usuário
            </Text>
            <TextInput 
                style={styles.input}
                onChangeText = {email => setUser({...user, email})}
                placeholder = 'Digite o email do usuário'
                value={user.email}
            />

            {/**Url do Avatar */}
            <Text
                style = {styles.textTopInput}
            >
                Url do Avatar do Usuário
            </Text>
            <TextInput 
                style={styles.input}
                onChangeText = {avatarUrl => setUser({...user, avatarUrl})}
                placeholder = 'Insira a url do avatar do usuário'
                value={user.avatarUrl}
            />

            <Button
                title="Salvar Usuário"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user, 
                    })
                    navigation.goBack()
                }}
            />
        </View>

        
    )
}


export default UserForm



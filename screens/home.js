import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('RestaurantsList');
    }

    return (
        <View style={styles.container}>
            <Text
                style={styles.titleText}>Flying Fish </Text>
            <Text
                style={styles.titleText}>Welcome</Text>
            <Image
                source={require('../assets/drone.png')} style={styles.imageHome} />
            <Text
                style={styles.bodyText}>Yeah, we deliver your fish and chips by drone. You bet it!</Text>
            <Button
                color="orange"
                title="Let's Start"
                onPress={pressHandler}
                style={styles.buttonStart} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 60,
        backgroundColor: 'rgb(36,42,52)',
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontFamily: 'title-font',
        fontSize: 34,
        textAlign: 'center',
        color: 'white'
    },
    bodyText: {
        fontFamily: 'body-font',
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        marginBottom: '30%'
    },
    buttonStart: {
        color: 'white',
        backgroundColor: 'white'
    },

})
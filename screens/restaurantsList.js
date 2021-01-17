import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';


export default function RestaurantLists({ navigation }) {

    const [restaurants, setRestaurants] = useState([
        { name: 'Big Fish Restaurant', image: require('../assets/restaurant-1.jpg'), key: '1' },
        { name: 'Small Fish Restaurant', image: require('../assets/restaurant-2.jpg'), key: '2' },
        { name: 'Good Fish Restaurant', image: require('../assets/restaurant-3.jpg'), key: '3' },
        { name: 'Bad Fish Restaurant', image: require('../assets/restaurant-4.jpg'), key: '4' },
        { name: 'Medium Fish Restaurant', image: require('../assets/restaurant-5.jpg'), key: '5' },
        { name: 'Great Fish Restaurant', image: require('../assets/restaurant-6.jpg'), key: '6' },
        { name: 'Jelly Fish Restaurant', image: require('../assets/restaurant-7.jpg'), key: '7' },
        { name: 'Sea Fish Restaurant', image: require('../assets/restaurant-8.jpg'), key: '8' },
        { name: 'Nice Fish Restaurant', image: require('../assets/restaurant-9.jpg'), key: '9' },
        { name: 'Crazy Fish Restaurant', image: require('../assets/restaurant-10.jpg'), key: '10' },
    ])


    return (

        <View style={styles.container}>
            <Text style={styles.textTitle}>Our Restaurants</Text>
            <FlatList
                data={restaurants}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('RestaurantDetails', item)}>
                        <View style={styles.card}>
                            <Image
                                source={item.image}
                                style={styles.restaurantImage} />
                            <Text style={styles.textName}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'rgb(36,42,52)',
        flex: 1
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 3,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#777',
        shadowOpacity: 0.7,
        marginVertical: 10,
        marginBottom: '8%'
    },
    restaurantImage: {
        width: '100%',
        height: 150,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

    },
    textName: {
        fontFamily: 'body-font',
        fontSize: 22,
        textAlign: 'center',
        color: 'black',
        marginBottom: '5%',
        paddingTop: 10
    },
    textTitle: {
        color: 'white',
        fontFamily: 'body-font',
        fontSize: 28,
        textAlign: 'center',
        color: 'white',
        marginBottom: '5%',
        marginTop: -10,
    }
})
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, Modal, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';
import RadioForm from 'react-native-simple-radio-button';


export default function RestaurantDetails({ navigation }) {
    const [fishType, setFishType] = useState();
    const [addSide, setAddSide] = useState('no');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [instructions, setInstructions] = useState('');
    const [displayOrder, setDisplayOrder] = useState(false);

    const radio_props = [
        { label: 'Yes, please!', value: 'yes' },
        { label: 'No, thanks!', value: 'no' }
    ];

    const displayOrderHandler = (displayOrder) => {
        if (name.length < 2 || address.length < 2) {
            Alert.alert('Check your name or address', 'Minimmum 2 characters', [
                { text: 'Understood!', onPress: () => console.log('alert closed') }
            ]);
        } else {
            setDisplayOrder(true)
        }

    }

    const submitHandler = () => {
        if (name.length < 2 || address.length < 2) {
            Alert.alert('Please Review Your Order First', 'Your name or address should me at least 2 characters long :(', [
                { text: 'Try again!', onPress: () => console.log('alert closed') }
            ]);
        } else {
            Alert.alert('Your order has been placed :)', 'Drone on it\'s way!', [
                { text: 'Nice!', onPress: () => navigation.navigate('Home') }
            ]);
        }

    }

    return (
        <ScrollView style={styles.container}>

            <View style={styles.image}>
                <Image
                    source={navigation.getParam('image')}
                    style={styles.imageRestaurant} />
                <Text style={styles.titleText}>{navigation.getParam('name')}</Text>
            </View>

            <View style={styles.menu}>
                <Text style={styles.bodyText}>Select your Fish:</Text>
                <Picker
                    selectedValue={fishType}
                    style={styles.picker}
                    onValueChange={itemValue =>
                        setFishType(itemValue)}
                >
                    <Picker.Item
                        label="Cod"
                        value="Cod"
                        color="white" />
                    <Picker.Item
                        label="Halibut" value="Halibut" color="white" />
                </Picker>
            </View>

            <View>
                <Text style={styles.bodyText} >Whant to add mushy peas to your order?</Text>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    labelStyle={{ fontSize: 14, color: 'white' }}
                    style={{ marginRight: 10 }}
                    buttonSize={20}
                    formHorizontal={true}
                    onPress={addSide => { setAddSide(addSide) }}
                />
            </View>

            <View style={styles.delivery}>
                <Text style={styles.bodyText}>Your Delivery Info:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Your Name Here"
                    placeholderTextColor="grey"
                    onChangeText={name => setName(name)}
                    value={name}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Your Address Here"
                    placeholderTextColor="grey"
                    onChangeText={address => setAddress(address)}
                    value={address}
                />
                <TextInput
                    multiline
                    style={styles.input}
                    placeholder="Special Delivery Instructions Here"
                    placeholderTextColor="grey"
                    onChangeText={instructions => setInstructions(instructions)}
                    value={instructions}
                />

            </View>

            <Button
                title="Review Order"
                color="orange"
                onPress={(displayOrder) => { displayOrderHandler(displayOrder) }}
            />

            <Modal
                visible={displayOrder} animationType='slide'>
                <View style={styles.modalContent} id="orderDetails">
                    <MaterialIcons
                        name='close'
                        size={24}
                        onPress={() => setDisplayOrder(false)}
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                        color="orange"
                    />
                    <Text>Your Order Details:</Text>

                    <Text style={styles.modalText}>You selected: {fishType}</Text>
                    <Text style={styles.modalText}>Add mushy peas? {addSide}</Text>
                    <Text style={styles.modalText}>Your name: {name}</Text>
                    <Text style={styles.modalText}>Your address: {address}</Text>
                    <Text style={styles.modalText}>Special delivery instructions:{instructions}</Text>
                </View>
            </Modal>

            <Button
                title="Submit Order"
                color="orange"
                onPress={() => { submitHandler() }}
            />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: 'rgb(36,42,52)'
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        color: 'white'
    },
    modalToggle: {
        marginBottom: 10,
        borderColor: 'lightgrey',
        borderRadius: 4,
        borderWidth: 1,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 50
    },
    modalContent: {
        flex: 1,
        alignSelf: 'center',
        padding: 10
    },
    modalText: {
        paddingTop: 10,
        fontFamily: 'body-font',
        fontSize: 22,
    },
    imageRestaurant: {
        width: '100%',
        height: 150,
    },
    titleText: {
        fontFamily: 'body-font',
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
    bodyText: {
        fontFamily: 'body-font',
        fontSize: 22,
        textAlign: 'left',
        color: 'white',
        marginTop: '5%'
    },
    picker: {
        marginTop: -60,
        marginBottom: -40

    },
    radio: {
        color: "white"
    }
})

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import RestaurantDetails from '../screens/restaurantDetails';
import RestaurantsList from '../screens/restaurantsList';



const Navigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Flying Fish',
            headerStyle: {
                backgroundColor: 'white',

            }
        }

    },
    RestaurantsList: {
        screen: RestaurantsList,
        navigationOptions: {
            title: 'Restaurants'
        }
    },
    RestaurantDetails: {
        screen: RestaurantDetails,
        navigationOptions: {
            title: 'Make your Order'
        }
    }

});

export default createAppContainer(Navigator);

import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Review Jobs',
            headerRight: (
                <Button 
                    title="Settings" 
                    onPress={()=> navigation.navigate('Settings')}
                    backgroundColor={Platform.OS === 'android' ? 'rgba(38, 50, 56, 1)' : "rgba(0,0,0,0)"}
                    color={Platform.OS === 'android' ? 'rgba(255, 255, 255, 1)' : "rgba(0,122,255,1)"}
                />
            ),
           // headerStyle: {
            //    backgroundColor: 'rgba(198, 40, 40, 1)'  
          //  },
           // headerTintColor: 'rgba(255, 255, 255, 1)',
        }
      };

    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        );
    }
}

export default ReviewScreen;
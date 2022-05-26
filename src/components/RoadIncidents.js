import React, { Component } from 'react'
import {StyleSheet, Text, View, ActivityIndicator, Dimensions, FlatList} from 'react-native';

export default class RoadIncidents extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            dataSource: null
        }
    }

    componentDidMount() {
        return fetch('http://datamall2.mytransport.sg/ltaodataservice/TrafficIncidents', {
            method: 'get',
            headers: new Headers({
                'AccountKey' : 'r9H5nEQ/SW2zfU/1pjWQZg=='
            })
        }).then((response) => response.json())
        .then( (responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson.value,
            })
        }).catch((error) => {
            console.log(error)
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } else {
            return (
                <View style={styles.box}>
                    <FlatList 
                        data={this.state.dataSource}
                        renderItem={
                            ({item}) => <Text style={styles.item}>
                                {item.Message}
                            </Text>
                        }
                    />
                </View>
            )
        }
    }

}

const styles = StyleSheet.create({

    box: {
        borderWidth: 1,
        borderColor: "black",
        width: Dimensions.get('window').width - 30,
        height: 300,
        marginBottom: 30
      },
    item: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#474747',
    }
})
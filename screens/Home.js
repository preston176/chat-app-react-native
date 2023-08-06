import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CustomListitem from '../components/CustomListitem'

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListitem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})
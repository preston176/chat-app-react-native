import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListItem, Avatar } from 'react-native-elements'

const CustomListitem = () => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                }}
            />
            <ListItem.Content>
              <ListItem.Title style={{ fontWeight: "800"}}  >
                Mark Zuckerburg
              </ListItem.Title>
              <ListItem.Subtitle numberOfLines={1}
              ellipsizeMode="tail">
                This is the subtitle area
              </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListitem

const styles = StyleSheet.create({})
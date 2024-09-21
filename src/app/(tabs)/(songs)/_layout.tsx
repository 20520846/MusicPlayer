import { Stack } from "expo-router"
import { Text, View } from "react-native"
import { defaultStyles } from "@/styles"

const SongsScreenLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen name="index" options={{
                    headerTitle: "Songs",
                }}/>
            </Stack>
        </View>
    )
}

export default SongsScreenLayout
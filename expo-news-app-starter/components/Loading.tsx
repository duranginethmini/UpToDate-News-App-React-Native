import {ActivityIndicator, StyleSheet, Text, View} from "react-native";
import Animated from "react-native-reanimated";


const Loading = (props: React.JSX.IntrinsicAttributes & React.JSX.IntrinsicClassAttributes<ActivityIndicator> & Readonly<ActivityIndicator>) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator {...props} />
        </View>
    )
}
export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
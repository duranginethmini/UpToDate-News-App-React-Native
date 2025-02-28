import {Props} from "expo-system-ui/plugin/build/withAndroidUserInterfaceStyle";
import {StyleSheet,View,Text} from "react-native";
import {NewsDataType} from "@/types";
import items from "ajv/lib/vocabularies/applicator/items";

type props = {
    newsList :Array<NewsDataType>
}

const NewsList = ({newsList}: Props) => {
    return (
        <View style={styles.container}>
            {newsList.map((item,index) => (
                <View key={index}>
                    <Text>{item.title}</Text>
                </View>
            ))}
        </View>
    )
}
export default NewsList

const styles = StyleSheet.create({
     container: {
         marginHorizontal: 20,
     }
    })
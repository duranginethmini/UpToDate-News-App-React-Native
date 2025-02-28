import { StyleSheet, View, Text, Image } from "react-native";
import { NewsDataType } from "@/types";
import { Colors } from "@/constants/Colors";
import Loading from "@/components/Loading";

type Props = {
    newsList: Array<NewsDataType>;
};

const NewsList = ({ newsList }: Props) => {
    if (newsList.length === 0) {
        return (
            <View style={styles.loadingContainer}>
                <Loading size="large" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {newsList.map((item, index) => {
                return (
                    <View key={item.article_id || index} style={styles.itemContainer}>
                        <Image source={{ uri: item.image_url }} style={styles.itemImg} />
                        <View style={styles.itemInfo}>
                            <Text style={styles.itemCategory}>{item.category}</Text>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <View style={styles.itemSourceInfo}>
                                <Image source={{ uri: item.source_icon }} style={styles.itemSourceImg} />
                                <Text style={styles.itemSourceName}>{item.source_name}</Text>
                            </View>
                        </View>
                    </View>
                );
            })}
        </View>
    );
};

export default NewsList;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginBottom: 50,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        flex: 1,
        gap: 10,
    },
    itemImg: {
        width: 90,
        height: 100,
        borderRadius: 20,
        marginRight: 10,
    },
    itemInfo: {
        flex: 1,
        gap: 10,
        justifyContent: "space-between",
    },
    itemCategory: {
        fontSize: 12,
        color: Colors.darkGrey,
        textTransform: "capitalize",
    },
    itemTitle: {
        fontSize: 12,
        fontWeight: "600",
        color: Colors.black,
    },
    itemSourceInfo: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
    },
    itemSourceImg: {
        width: 20,
        height: 20,
        borderRadius: 20,
    },
    itemSourceName: {
        fontSize: 10,
        fontWeight: "400",
        color: Colors.darkGrey,
    },
});

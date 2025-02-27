import { StyleSheet, Text, View } from "react-native";
import { NewsDataType } from "@/types";
import Animated, { SharedValue } from "react-native-reanimated";
import { Colors } from "@/constants/Colors";

type Props = {
    items: NewsDataType[];
    paginationIndex: number;
    scrollx: SharedValue<number>;
};

const Pagination = ({ items, paginationIndex }: Props) => {
    return (
        <View style={styles.container}>
            {items.map((_, index) => (
                <Animated.View
                    key={index}
                    style={[
                        styles.dot,
                        { backgroundColor: paginationIndex === index ? Colors.tint : Colors.darkGrey },
                    ]}
                />
            ))}
        </View>
    );
};

export default Pagination;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    dot: {
        backgroundColor: "#333",
        height: 8, // ✅ Set a proper height
        width: 8, // ✅ Set a proper width
        marginHorizontal: 4,
        borderRadius: 4,
    },
});

import { FlatList, StyleSheet, Text, View, ViewToken } from "react-native";
import { Colors } from "@/constants/Colors";
import { NewsDataType } from "@/types";
import SliderItem from "@/components/SliderItem";
import { useRef, useState } from "react";
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import Pagination from "@/components/Pagination";

type Props = {
    newsList: Array<NewsDataType>;
};

const BreakingNews = ({ newsList }: Props) => {
    const [paginationIndex, setPaginationIndex] = useState(0);
    const [data, setData] = useState(newsList);
    const scrollx = useSharedValue(0);
    const ref = useAnimatedRef<Animated.FlatList<any>>();

    const onViewableItemsChanged = ({
                                        viewableItems,
                                    }: { viewableItems: ViewToken[] }) => {
        if (
            viewableItems.length > 0 &&
            viewableItems[0].index !== undefined &&
            viewableItems[0].index !== null
        ) {
            setPaginationIndex(viewableItems[0].index % newsList.length);
        }
    };

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50, // ✅ Corrected property name
    };

    const viewabilityConfigCallbackPairs = useRef([
        { viewabilityConfig, onViewableItemsChanged },
    ]); // ✅ No need to call `.current()`

    const onScrollHandler = useAnimatedScrollHandler({
        onScroll: (e) => {
            scrollx.value = e.contentOffset.x;
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Breaking News</Text>
            <View style={styles.slideWrapper}>
                <Animated.FlatList
                    ref={ref}
                    data={data}
                    keyExtractor={(_, index) => `list_items${index}`}
                    renderItem={({ item, index }) => (
                        <SliderItem sliderItem={item} index={index} scrollx={scrollx} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={onScrollHandler}
                    scrollEventThrottle={16}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => setData([...data, ...newsList])}
                    viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current} // ✅ Use `.current`, not `.current()`
                />
                <Pagination items={newsList} scrollx={scrollx} paginationIndex={paginationIndex} />
            </View>
        </View>
    );
};

export default BreakingNews;

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: Colors.black,
        marginBottom: 10,
        marginLeft: 20,
    },
    slideWrapper: {
        justifyContent: "center",
    },
});

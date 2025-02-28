import { Animated, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";
import newsCategoryList from "@/constants/Categories";
import { useRef, useState } from "react";

type Props = {
    onCategoryChanged: (category:StyleSheet) => void;
};

const Categories = ({onCategoryChanged}: Props) => {
    const scrollRef = useRef<ScrollView | null>(null);
    const itemRef = useRef<(TouchableOpacity | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelectedCategory = (index: number) => {
        setActiveIndex(index);
        const selected = itemRef.current[index];

        selected?.measure((x) => {
            scrollRef.current?.scrollTo({ x: x - 20, y: 0, animated: true });
        });
     onCategoryChanged(newsCategoryList[index].slug);
    };

    return (
        <View>
            <Text style={styles.title}>Trending Right Now</Text>
            <ScrollView
                ref={scrollRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.itemsWrapper}
            >
                {newsCategoryList.map((item, index) => (
                    <TouchableOpacity
                        ref={(el) => {
                            if (el) itemRef.current[index] = el;
                        }}
                        key={index}
                        style={[styles.item, activeIndex === index && styles.itemActive]}
                        onPress={() => handleSelectedCategory(index)}
                    >
                        <Text style={[styles.itemText, activeIndex === index && styles.itemTextActive]}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default Categories;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: Colors.black,
        marginBottom: 10,
        marginLeft: 20,
    },
    itemsWrapper: {
        gap: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    item: {
        borderWidth: 1,
        borderColor: Colors.darkGrey,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
    },
    itemText: {
        fontSize: 14,
        color: Colors.darkGrey,
        letterSpacing: 0.5,
    },
    itemActive: {
        backgroundColor: Colors.tint, // ✅ Make sure it's different from text color
        borderColor: Colors.tint,
    },
    itemTextActive: {
        fontWeight: "600",
        color: Colors.white, // ✅ Now text will be visible
    },
});

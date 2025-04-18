import {ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import {Colors} from "@/constants/Colors";
import Animated, {FadeInDown, FadeInLeft, FadeInRight} from "react-native-reanimated";

const Page = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <StatusBar style="light"/>
        <ImageBackground source={require('@/assets/images/newspaper.jpeg')} style={{flex: 1}} resizeMode={'cover'} >
            <View style={styles.wrapper}>
                <Animated.Text style={styles.title} entering={FadeInRight.delay(300).duration(500)}>Stay Updated</Animated.Text>
                <Animated.Text style={styles.description} entering={FadeInLeft.delay(700).duration(500)}>Get the latest and personalized news with ease</Animated.Text>
                <Animated.View entering={FadeInDown.delay(1200).duration(500)}>
                    <TouchableOpacity style={styles.btn} onPress={() => router.replace("login")}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
            </ImageBackground>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    wrapper: {
      flex: 1,
        justifyContent: 'flex-end',
        paddingBottom:50,
        paddingHorizontal: 30,
        gap:10,
        backgroundColor:'rgba(0,0,0,0.0.5)',
    },
    title: {
      color : Colors.white,
        fontSize:24,
        fontWeight:'600',
        letterSpacing:1.5,
        lineHeight:36,
        textAlign:'center',

    },
    description: {
      color : Colors.white,
        fontSize:16,
        fontWeight:'500',
        letterSpacing:1.2,
        lineHeight:22,
        textAlign:'center',
    },
    btn: {
      backgroundColor:Colors.tint,
        paddingVertical:15,
        marginVertical:20,
        alignItems:'center',
        borderRadius:10,
    },
    btnText: {
      color : Colors.white,
        fontSize:16,
        fontWeight:'700',
    }
});

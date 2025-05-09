import { Pressable, ScrollView } from "react-native";

import VideoPlayer from "@/components/VideoPlayer";

export default function HomeScreen() {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable style={{ width: "100%", height: "50%" }}>
        <VideoPlayer />
      </Pressable>
    </ScrollView>
  );
}

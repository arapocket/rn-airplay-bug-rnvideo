// Load the module

import { useRef } from "react";
import { Pressable, StyleSheet } from "react-native";
import Video, { VideoRef } from "react-native-video";
// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.

export default function VideoPlayer() {
  const videoRef = useRef<VideoRef>(null);

  return (
    <Pressable
      onPress={() => {
        videoRef.current?.presentFullscreenPlayer();
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Video
        // Can be a URL or a local file.
        source={{
          uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        }}
        // Store reference
        ref={videoRef}
        style={styles.backgroundVideo}
      />
    </Pressable>
  );
}

// Later on in your styles..
const styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

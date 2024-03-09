import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import sample from '../../assets/Video/sample.mp4';
import {useState} from 'react';
const Video = () => {
  const [videoEnd, setVideoEnd] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const onProgress = data => {
    setCurrentTime(data.currentTime);
  };

  const onEnd = () => {
    setVideoEnd(true);
  };

  const onLoad = data => {
    setDuration(data.duration);
  };
  return (
    <View style={styles.container}>
      <View style={styles.videoView}>
        {/* Video  */}
        <Video
          source={sample} // Can be a URL or a local file.
          paused={false} // make it start
          style={styles.backgroundVideo} // any style you want
          repeat={false}
          onProgress={onProgress}
          onEnd={onEnd}
          onLoad={onLoad}
          resizeMode="cover"
        />
        <View style={styles.progressContainer}>
          <View
            style={{
              width: `${(currentTime / duration) * 100}%`,
              ...styles.progressBar,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
    container : {
        width: '100%',
        height: '100%',
    },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  videoView: {
    width: 300,
    height: 200,
    marginTop: 10,
  },
  progressContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 5,
    backfaceVisibility: '#CCC',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'orange',
  },
});

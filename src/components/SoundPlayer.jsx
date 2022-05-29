import { OnePointCircle, SkipNextOutline, SkipPrevOutline } from "iconoir-react";
import { createPlayingTrack } from "../redux/states/playingTrack";
import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Ui,
  Audio,
  Player,
  EndTime,
  Controls,
  CurrentTime,
  ControlGroup,
  VolumeControl,
  PlaybackControl,
  ScrubberControl,
} from "@vime/react";

function SoundPlayer() {
  const { url, trackName, artistName } = useSelector(state => state.playingTrack);
  const { theme } = useSelector(state => state.colorMode);
  const soundPlayerRef = useRef();
  const diskAnimControl = useAnimation();
  const dispatch = useDispatch();

  const handlePlay = () => {
    if (soundPlayerRef.current.playing) {
      diskAnimControl.start(
        {
          rotate: [null, 90, 180, 270, 360],
        },
        {
          repeat: Infinity,
          ease: "linear",
          duration: 2,
        }
      );
    } else {
      diskAnimControl.stop();
    }
  };

  useEffect(() => {
    dispatch(
      createPlayingTrack({
        url: "https://listen.hs.llnwd.net/g2/prvw/4/2/4/9/8/911189424.mp3",
        trackName: "Titi me preguntó",
        artistName: "Bad Bunny",
      })
    );
  }, []);

  return (
    <Player ref={soundPlayerRef} theme={theme} onVmPlayingChange={handlePlay}>
      <Audio preload="auto">
        <source data-src={url} type="audio/mp3" />
      </Audio>

      <Ui>
        <Controls fullWidth>
          <ControlGroup>
            <Flex flexFlow="row nowrap" width="100%" alignItems="center" columnGap={2}>
              <CurrentTime />
              <ScrubberControl />
              <EndTime />
            </Flex>
          </ControlGroup>

          <ControlGroup>
            <Flex
              wrap="wrap"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
              flexDir={{ base: "column-reverse", md: "row" }}
            >
              <Flex flexFlow="row nowrap" alignItems="center">
                <Button variant="ghost" borderRadius="full">
                  <Icon as={SkipPrevOutline} />
                </Button>
                <PlaybackControl />
                <Button variant="ghost" borderRadius="full">
                  <Icon as={SkipNextOutline} />
                </Button>
                <VolumeControl />
              </Flex>

              <Flex flexFlow="row wrap" alignItems="center" columnGap={1}>
                <Text>{trackName}</Text>
                <motion.div
                  style={{
                    display: "flex",
                  }}
                  animate={diskAnimControl}>
                  <Icon as={OnePointCircle} width={6} height={6} />
                </motion.div>
                <Text>{artistName}</Text>
              </Flex>
            </Flex>
          </ControlGroup>
        </Controls>
      </Ui>
    </Player>
  );
}

export { SoundPlayer };

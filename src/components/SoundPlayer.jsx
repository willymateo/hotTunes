import { OnePointCircle, SkipNextOutline, SkipPrevOutline } from "iconoir-react";
import { createPlayingTrack } from "../redux/states/PlayingTrack";
import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  Ui,
  Audio,
  Player,
  EndTime,
  Controls,
  CurrentTime,
  ControlGroup,
  VolumeControl,
  ControlSpacer,
  PlaybackControl,
  ScrubberControl,
} from "@vime/react";

function SoundPlayer() {
  const { url, trackName, artistName } = useSelector(state => state.playingTrack);
  const { theme } = useSelector(state => state.colorMode);
  const dispatch = useDispatch();

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
    <Player theme={theme}>
      <Audio preload="auto">
        <source data-src={url} type="audio/mp3" />
      </Audio>

      <Ui>
        <Controls fullWidth>
          <ControlGroup>
            <CurrentTime />
            <ScrubberControl />
            <EndTime />
          </ControlGroup>

          <ControlGroup>
            <Button variant="ghost">
              <Icon as={SkipPrevOutline} />
            </Button>
            <PlaybackControl />
            <Button variant="ghost">
              <Icon as={SkipNextOutline} />
            </Button>
            <ControlSpacer />
            <Flex flexFlow="row wrap" alignItems="center" columnGap={1}>
              <Text>{trackName}</Text>
              <Icon as={OnePointCircle} />
              <Text>{artistName}</Text>
            </Flex>
            <VolumeControl />
          </ControlGroup>
        </Controls>
      </Ui>
    </Player>
  );
}

export { SoundPlayer };

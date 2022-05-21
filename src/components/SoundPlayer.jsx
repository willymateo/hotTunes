import { OnePointCircle, SkipNextOutline, SkipPrevOutline } from "iconoir-react";
import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
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

function SoundPlayer({ playingTrackUrl, trackName, artistName }) {
  const [colorMode, setColorMode] = useState("light");

  useEffect(() => {
    const colorModeLocalStorage = localStorage.getItem("chakra-ui-color-mode");
    if (colorModeLocalStorage) {
      setColorMode(colorModeLocalStorage);
    }
  }, []);

  return (
    <Player theme={colorMode}>
      <Audio preload="auto">
        <source data-src={playingTrackUrl} type="audio/mp3" />
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

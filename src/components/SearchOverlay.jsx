import { IoSearchCircleOutline } from "react-icons/io5";
import {
  Icon,
  Flex,
  Input,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

function SearchOverlay({ isOpen, onClose }) {
  const iconSize = { base: 6, sm: 8 };

  return (
    <AlertDialog isOpen={isOpen} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent width={{ base: "sm" }}>
          <AlertDialogBody>
            <Flex flexDir="row" columnGap={2}>
              <Icon as={IoSearchCircleOutline} width={iconSize} height={iconSize} />
              <Input
                size="sm"
                variant="unstyled"
                fontSize={{ base: "xs", sm: "sm" }}
                placeholder="Search tracks, artists, albums, playlists..."
              />
            </Flex>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

SearchOverlay.propTypes = {};

export { SearchOverlay };

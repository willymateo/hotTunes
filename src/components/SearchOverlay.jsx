import { IoSearchCircleOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import {
  Icon,
  Flex,
  Input,
  AlertDialog,
  AlertDialogBody,
  AlertDialogOverlay,
  AlertDialogContent,
} from "@chakra-ui/react";

const iconSize = { base: 6, sm: 8 };

function SearchOverlay({ isOpen, onClose }) {
  const { t } = useTranslation("translation", { keyPrefix: "components.searchOverlay" });

  return (
    <AlertDialog isOpen={isOpen} onClose={onClose} autoFocus={true}>
      <AlertDialogOverlay>
        <AlertDialogContent width={{ base: "sm" }}>
          <AlertDialogBody>
            <Flex flexDir="row" columnGap={2}>
              <Icon as={IoSearchCircleOutline} width={iconSize} height={iconSize} />
              <Input
                size="sm"
                variant="unstyled"
                fontSize={{ base: "xs", sm: "sm" }}
                placeholder={t("placeholder")}
              />
            </Flex>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export { SearchOverlay };

import { Text } from "react-native";

// Components
import { Accordion, Square } from "tamagui";

// Icon
import Chevron from "@/assets/icons/Chevron";

const AccordionItem = ({ title, content }) => {
  return (
    <Accordion.Item value={title}>
      <Accordion.Trigger
        backgroundColor="transparent"
        paddingBlock={6}
        borderColor="transparent"
        flexDirection="row"
        justifyContent="space-between"
      >
        {({ open }) => (
          <>
            <Text className="text-lg font-semibold">{title}</Text>
            <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
              <Chevron />
            </Square>
          </>
        )}
      </Accordion.Trigger>
      <Accordion.HeightAnimator animation="quick" backgroundColor="transparent">
        <Accordion.Content
          backgroundColor="transparent"
          paddingBlock={0}
          exitStyle={{ opacity: 0 }}
        >
          {content}
        </Accordion.Content>
      </Accordion.HeightAnimator>
    </Accordion.Item>
  );
};

export default AccordionItem;

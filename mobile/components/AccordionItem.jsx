// Component
import { Accordion, Paragraph, Square } from "tamagui";

// Icon
import Chevron from "@/assets/icons/Chevron";

const AccordionItem = ({ title, description }) => {
  return (
    <Accordion.Item value="a1">
      <Accordion.Trigger
        backgroundColor="transparent"
        borderColor="transparent"
        flexDirection="row"
        justifyContent="space-between"
      >
        {({ open }) => (
          <>
            <Paragraph>{title}</Paragraph>
            <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
              <Chevron />
            </Square>
          </>
        )}
      </Accordion.Trigger>
      <Accordion.HeightAnimator
        animation="medium"
        backgroundColor="transparent"
      >
        <Accordion.Content
          backgroundColor="transparent"
          animation="medium"
          exitStyle={{ opacity: 0 }}
        >
          <Paragraph>{description}</Paragraph>
        </Accordion.Content>
      </Accordion.HeightAnimator>
    </Accordion.Item>
  );
};

export default AccordionItem;

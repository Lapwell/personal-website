import { Flex } from "@mantine/core";

export default function ProjectUpdates() {
  return (
    <Flex
      className="projectUpdates"
      direction="row"
      justify="center"
      align="flex-start"
      gap="xs"
    >
      <Flex
        className="latestProject"
        justify="center"
        align="flex-start"
        direction="row"
        style={{ width: "50%", height: "100%" }}
      >
        My name is Ozymandias, King of Kings; Look on my Works, ye Mighty, and despair!
      </Flex>
      <Flex
        className="previousProject"
        justify="center"
        align="flex-start"
        direction="row"
        style={{ width: "50%", height: "100%" }}
      >
        Nothing beside remains. Round the decay Of that colossal Wreck, boundless and bare The lone and level sands stretch far
        away.
      </Flex>
    </Flex>
  );
}

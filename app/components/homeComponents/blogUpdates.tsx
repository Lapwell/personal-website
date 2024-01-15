import { Flex } from "@mantine/core";

export default function BlogUpdates() {
  return (
    <Flex
      className="blogUpdates"
      direction="row"
      justify="center"
      align="flex-start"
      gap="xs"
    >
      <Flex
        className="latestBlog"
        justify="center"
        align="flex-start"
        direction="row"
        style={{ width: "50%", height: "100%" }}
      >
        My name is Ozymandias, King of Kings; Look on my Works, ye Mighty, and despair!
      </Flex>
      <Flex
        className="previousBlog"
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

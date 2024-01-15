import { Flex } from "@mantine/core";
import Image from "next/image";
import BlogUpdates from "./blogUpdates";
import ProjectUpdates from "./projectUpdates";

export default function HomeMain() {
  return (
    <Flex
      className="homeMain"
      direction="row"
      justify="center"
      align="center"
      gap="xs"
      style={{ width: "80%", height: "50%", marginTop: "2rem" }}
    >
      <ProjectUpdates />
      <Flex
        className="profile"
        direction="column"
        justify="center"
        align="flex-start"
        style={{ marginRight: "2rem", marginLeft: "2rem" }}
      >
        <Image
          src="/images/meh_tier_profile.png"
          alt="a pretty mid selfie"
          width="100"
          height="100"
        />
      </Flex>
      <BlogUpdates />
    </Flex>
  );
}

"use server";
import { Flex } from "@mantine/core";
import HomeMain from "./components/homeComponents/homeMainComponent";

export default async function Home() {
  return (
    <div className="homeParentDiv flex flex-column w-full h-full">
      <Flex
        className="homeMainComp"
        justify="center"
        style={{ height: "50%" }}
      >
        <HomeMain />
      </Flex>
      <Flex className="recentUpdates"></Flex>
    </div>
  );
}

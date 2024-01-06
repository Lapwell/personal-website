"use client";
import { Burger, Flex, NavLink, Popover } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconHome, IconStack3, IconMessage2, IconFileCv } from "@tabler/icons-react";

export default function Sidebar() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <div className="SidebarMain">
      <Popover width={148}>
        <Popover.Target>
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle Navigation"
          />
        </Popover.Target>
        <Popover.Dropdown>
          <Flex
            justify="center"
            align="center"
            direction="column"
          >
            <NavLink
              href="/"
              label="Home"
              leftSection={<IconHome size="1rem" />}
            />
            <NavLink
              href="/projects"
              label="Projects"
              leftSection={<IconStack3 size="1rem" />}
            />
            <NavLink
              href="/blog"
              label="Blog"
              leftSection={<IconMessage2 size="1rem" />}
            />
            <NavLink
              href="/cv"
              label="CV"
              leftSection={<IconFileCv size="1rem" />}
            />
          </Flex>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
}

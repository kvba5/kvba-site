"use client"

import Menu from "@/components/menu";

import AboutMe from "@/components/menu/body/aboutme";
import Projects from "@/components/menu/body/projects";
import Social from "@/components/menu/body/social";

export default function Home() {

  return <Menu
    buttons={[
      { text: "About me", body: AboutMe },
      { text: "My social media", body: Social },
      { text: "Featured projects", body: Projects }
    ]}
  />
}

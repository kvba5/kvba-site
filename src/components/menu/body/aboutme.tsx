"use client"

import Image from "next/image";
import { ModalBody } from "../modal";

const calculateAge = (birthDate: Date): number => {
    const diff = Date.now() - birthDate.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const age = calculateAge(new Date(2005, 4, 27))

export default function AboutMe() {
    return <ModalBody className="grid max-lg:w-4/5 max-md:grid-rows-[0.5fr_2fr] md:grid-cols-[1fr_2fr] gap-5">
        <Image priority className="justify-self-center" width={400} height={400} src="https://github.com/kvba5.png?size=400" alt="Avatar" />
        <div className="overflow-y-auto">
            <h2 className="mb-5">About me</h2>
            <span>Hi! I'm Kuba! I'm a {age}-year-old software developer. I am passionate in AI, analytics and automation of various kinds of things. I like to create things that can make other people's life easier or that can make me happy. In spare time, I like to experiment with other hobbies like video editing or making music. I'd be more than happy if you could show me some support by checking out my projects on GitHub! (and maybe even contribute to them! :D)</span>
        </div>
    </ModalBody>
}
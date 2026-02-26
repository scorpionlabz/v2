import React from "react";
import { ContactForm } from "./ContactForm";

export default function Contact() {
  return (
    <div id="contact" className="w-full flex flex-col h-auto justify-start gap-2 items-center p-6 sm:p-8 2xl:p-16 bg-black relative pb-12">
      <h1 className="text-white text-3xl sm:text-4xl 2xl:text-7xl font-regular text-center">
        Get in touch
      </h1>
      <ContactForm />
    </div>
  );
}

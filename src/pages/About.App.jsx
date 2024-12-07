import React from "react";

export const About = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 px-8 py-10 rounded-lg shadow-lg max-w-5xl mx-auto mt-10 my-10">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
        About Us
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Welcome to <span className="font-semibold">Robin & Dennis' Code Forge!</span>
        <br />
        <br />
        This website is a collaborative project created by <span className="font-medium">Robin Stiller</span> (aka <em>olittlefoxE</em>) and <span className="font-medium">Dennis Plischke</span> (aka <em>Minecraftletsplay</em>).
        <br />
        <br />
        <strong>(Robin)</strong> I am currently a student, passionate about learning and honing my programming skills. Im focused on Front-End-Dev.
        <br />
        <br />
        <strong>(Dennis)</strong> I am a student at a technical high school focusing on computer science, with a passion for programming - primarily in C#.
        <br />
        <br />
        Our goal is to use this website as a platform to deepen our knowledge of HTML, CSS, React, and the intricacies of web development, including how to set up, run, and maintain a website.
        <br />
        <br />
        Through this project, we aim to showcase our programming skills by presenting various projects we've developed in multiple programming languages. 
        You can hover over any programming language on our website to learn about its purpose, history, and key features. Clicking on a language will reveal projects we've created using it (if available).
        <br />
        <br />
        This is our first professional public website. Its a hobby project born from our shared interest in programming and web development. We hope you enjoy exploring it as much as we enjoyed creating it!
      </p>
    </div>
  );
};
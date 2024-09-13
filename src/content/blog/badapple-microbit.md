---
title: "Bad Apple on 4 micro:bits"
description: "4 times the fun!"
pubDate: 2024-09-13
---

You've probably heard of the video ["Bad Apple"](https://www.youtube.com/watch?v=FtutLA63Cp8). It is a greyscale video that is commonly used as a graphical and audio test for various devices. For example, the video has been played on a calculator, a smartwatch, the Task Manager in Windows, and even Google Maps!

Recently, I had an assignment at school to create a project using [BBC micro:bits](https://microbit.org/). A micro:bit has a 5x5 display, an ARM microcontroller, two buttons, Bluetooth, and more! They are commonly used to teach programming in schools. After some consideration, I decided to play the Bad Apple video on 4 micro:bits so that I could use a 10x10 screen.

## Method

Here is the final method:

1. Using FFmpeg, resize the video to 10 pixels by 10 pixels. and split the video into frames.
1. With a script, cut each frame into quadrants.
1. For each quadrant, convert it into a binary string such as `0101101010010110100100110` where each `0` and `1` corresponds to an LED on a single micro:bit.
1. For each binary string, convert it into a Base 36 string because TypeScript in MakeCode can process Base 36 numbers such as `72hpi`.
1. With these Base 36 strings, concatenate them using `;` characters and add them to a TypeScript MakeCode script which reverses the process and sets the LEDs for each frame.
1. Test! 🎉

## Execution

Unfortunately, I don't have a recording of the 4 micro:bits showing the video for my school project, but after transferring the generated code to 4 micro:bits and synchronising the start of the video playback, it worked! I learned a lot about video processing and the micro:bit from this project.

You can view the code and instructions at [https://github.com/webdev03/badapple](https://github.com/webdev03/badapple). Many ideas related to encoding video came from [https://cirnoslab.me/blog/2023/07/28/bad-apple-on-the-microbit/](https://cirnoslab.me/blog/2023/07/28/bad-apple-on-the-microbit/) - thank you!

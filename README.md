# shader-work
> A collection of GLSL shaders that I've written since December 6th, 2023.

## What
Shaders are programs that run on GPUs and render graphics either in real-time or with some preprocessing. Shaders can create graphics by themselves, or work with existing objects to add effects like shadows/realistic lighting, etc. My focus is currently on Fragment shaders, which work as standalone graphics most of the time, but I aim to be able to write complex lighting and water graphics.

## Why 
I have always wanted to do game development visuals but would likely get decimated in the industry. I'll self-study graphics development until I'm sure that I'll survive.

## How to understand and use this repo
GLSL files don't have a specific filetype, but GLSL's creators have decided on a file extension format depending on the type of shader as follows:
* `.vert - a vertex shader`
* `.tesc - a tessellation control shader`
* `.tese - a tessellation evaluation shader`
* `.geom - a geometry shader`
* `.frag - a fragment shader`
* `.comp - a compute shader`

You can see each file's render in higher resolution and framerates than the demos below by copying and pasting the GLSL file contents into a [ShaderToy environment](https://www.shadertoy.com/new) **(you can do it in your browser!)**.

## Demos
Below are video demos of the shaders that I have worked on. They are lower-quality videos, and I highly recommend that you go and compile one of these in [ShaderToy](https://www.shadertoy.com/new) if you like it. It won't even take a minute!

#### 1. Diamond Visualizer
[diamondVisualizer.webm](https://github.com/tuansydau/shader-work/assets/26176104/4bed8ed5-1b38-4ffc-85b5-a385185be589)

#### 2. Starfield
[starfield.webm](https://github.com/tuansydau/shader-work/assets/26176104/6a06ff33-9692-45a7-926a-277709bf8455)

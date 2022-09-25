<template>
  <div class="w-full bg-bg text-white flex justify-center">
    <div class="text-xl">
      <section class="section h-screen">
        <div class="min-h-screen flex flex-col relative w-full items-center">
          <Landfill class="rotate-180"/>
          <div class="sm:w-2/3">
            <Header></Header>
            <div class="text-6xl sm:text-8xl text-center" id="title">
              Imagine a <span class="text-green handwritten">World</span><span><Plant class="w-24 inline -mt-8"/></span>
              where
              <span
                  class="text-red">EVERYONE<span class="material-symbols-outlined text-7xl">emoji_people</span></span>
              can help <span class="text-[#44A7C4] handwritten">recycle</span>
            </div>
          </div>

          <div class="mt-auto relative w-full">
            <Logs class="absolute xl:w-32 w-24 xl:bottom-40 bottom-32 xl:left-60 left-20"/>
            <Bush class="absolute xl:w-32 w-24 xl:bottom-36 bottom-24 xl:left-32 right-10"/>
            <Bush class="absolute xl:w-32 w-24 xl:bottom-16 bottom-6 xl:left-72 right-14"/>
            <Tree class="absolute xl:w-44 w-16 xl:bottom-40 bottom-32 xl:right-40 left-2"/>
            <Tree class="absolute xl:w-44 w-16 xl:bottom-20 bottom-16 xl:right-20"/>
            <div
                class="bg-[#FFCE54] xl:w-32 w-24 h-32 rounded-[50%] absolute xl:bottom-24 bottom-4 left-32  xl:left-[32rem] blur-xl animate-pulse"></div>
            <Bonfire class="absolute xl:w-32 w-24 xl:bottom-20 bottom-2 left-32 xl:left-[32rem]"/>

            <div class="overflow-hidden">
              <Waves1 class="sm:w-screen w-[300%] "/>
            </div>
          </div>
        </div>
        <div class="h-[200px]"></div>
      </section>
      <section class="section h-screen relative mt-8" data-anchor="problem" id="problem">
        <div class="w-screen w-full flex justify-center flex-shrink-0">
          <div class="w-2/3">
            <h1 class="text-6xl text-center">The Problem</h1>
            <div class="flex items-center lg:flex-row flex-col" data-aos="fade-right">
              <Card class="mt-4">
                <Garbage class="absolute lg:w-64 w-32 lg:-translate-x-14 -translate-x-12 -rotate-12"/>
                <Garbage class="lg:w-64 w-32 lg:translate-x-14 translate-x-12 rotate-12"/>
              </Card>
              <div class="ml-8 max-w-sm mt-4">
                <h1 class="text-5xl text-transparent bg-clip-text bg-trashbottles ">TRASH</h1>
                <p class="lg:text-2xl text-xl text-gray">Everyday people throw away millions of tons of residual waste,
                  worldwide!</p>
              </div>
            </div>
            <div class="flex items-center lg:float-right lg:flex-row flex-col flex-col-reverse flex-shrink-0"
                 data-aos="fade-left">
              <div class="ml-8 max-w-sm mt-4">
                <h1 class="text-5xl"><span class="text-red">RECYCLING</span></h1>
                <p class="lg:text-2xl text-xl text-gray">Many countries do not have a recycling system in place!</p>
              </div>
              <Card class="mt-4">
                <div class="lg:w-64 lg:h-64 w-32 h-32 flex justify-center">
                  <img src="/public/trash.png" class="rounded">
                </div>
              </Card>
            </div>

            <div class="h-6 w-2 bg-gray absolute left-1/2 -mt-12 hidden lg:block"></div>
            <div class="h-6 w-2 bg-gray absolute left-1/2 hidden lg:block"></div>
            <div class="h-6 w-2 bg-gray absolute left-1/2 mt-12 hidden lg:block"></div>
            <div class="h-6 w-2 bg-gray absolute left-1/2 bottom-0 hidden lg:block"></div>
            <div class="h-6 w-2 bg-gray absolute left-1/2 bottom-12 hidden lg:block"></div>
            <div class="h-6 w-2 bg-gray absolute left-1/2 bottom-24 hidden lg:block"></div>
            <div class="h-6 w-2 bg-gray absolute left-1/2 bottom-36 hidden lg:block"></div>
            <div class="h-6 w-2 bg-gray absolute left-1/2 bottom-48 hidden lg:block"></div>
            <div class="h-6 w-2 bg-gray absolute left-1/2 bottom-60 hidden lg:block"></div>
          </div>
        </div>
      </section>
      <section class="section relative" data-anchor="solution" id="solution">
        <div class="h-full min-h-screen w-screen bg-white text-black flex flex-col items-center">
          <h1 class="text-5xl sm:text-7xl xl:text-9xl text-transparent bg-clip-text greenGradient text-center handwritten relative mt-16"
              data-aos="zoom-in">
            A SOLUTION
          </h1>
          <div class="w-4/6">
            <div class="flex items-center mt-32 justify-center relative flex-col sm:flex-row flex-col-reverse ">
              <img src="public/img5.jpeg" class="w-96 rounded" data-aos="fade-down">
              <h1 class="text-5xl xl:text-8xl ml-4" data-aos="fade-right">MEET<br><span
                  class="handwritten">SCRAPTER</span></h1>
            </div>


            <div class="flex items-center xl:ml-8 z-50 mt-12" data-aos="zoom-in">
              <p class="text-5xl text-white bg-bglight rounded-3xl p-4 floating">
                <span class="text-center flex flex-col">Recycling is an important step to save <span
                    class="handwritten text-transparent greenGradient text-center">Planet A</span></span>
                <span class="text-2xl flex flex-col text-center">
                  We believe that every
                  household needs to sort residual waste.<br/>
                  We're here to help with that.
                </span>
              </p>
            </div>

            <div class="mt-64 flex items-center flex-col xl:flex-row">
              <div class="relative h-fit w-fit flex" data-aos="zoom-in">
                <div class="w-full h-full absolute bg-green blur-3xl animate-pulse"></div>
                <House class="w-64 xl:w-96 z-10"/>
                <Bin class="w-32 absolute z-10 bottom-0 right-2"/>
              </div>
              <p class="ml-8 text-4xl text-center xl:text-left" data-aos="fade-right"
                 data-aos-anchor-placement="bottom-bottom">Every household should own a <span class="handwritten">SCRAPTER</span>.
                Scan your waste and let it
                automatically sort it without even thinking about it!</p>
            </div>

            <Recycletruck class="w-64 float-right -scale-x-100 hidden xl:block"/>

            <h1 class="handwritten text-gray text-6xl mt-96" data-aos="fade-right">DESIGN PROCESS</h1>


            <div class="flex child:m-2 flex-wrap justify-center child:flex-grow-0 ">
              <img src="public/img1.jpeg" class="w-96 rounded" data-aos="fade-right">
              <img src="public/img2.jpeg" class="w-96 rounded" data-aos="fade-right">
              <img src="public/img3.jpeg" class="w-96 rounded" data-aos="fade-right">
              <img src="public/img4.jpeg" class="w-96 rounded" data-aos="fade-right">
            </div>

            <div class="w-0 h-[12rem]"></div>
          </div>
        </div>
      </section>
      <section class="section min-h-screen relative w-screen overflow-hidden" data-anchor="future" id="future">
        <div class="text-6xl xl:text-9xl mt-64 flex flex-col items-center text-center">
          THE <br/>
          FUTURE <br/>
          IS <br/>
          <div class="text-yellow handwritten relative w-fit xl:text-[14rem] text-8xl ">
            BRIGHT
            <div class="w-full h-full -mt-40 blur-3xl bg-yellow absolute animate-ping"></div>
          </div>
        </div>
        <div class="w-0 h-64"></div>
        <div class="text-center text-gray text-4xl flex flex-col items-center">
          <span>Join us now and be part of a <span class="handwritten text-green">green</span> future</span>

          <div class="bg-white p-4 text-xl w-fit rounded-3xl text-black mt-8 cursor-pointer animate-bounce">
            Vote Now
          </div>
        </div>
      </section>
      <section>
        <div class="mt-8">
          <Landfill/>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/header/Header.vue";
import Plant from "./assets/plant.svg";
import Waves1 from "./assets/waves1.svg";
import Tree from "./assets/tree.svg";
import Logs from "./assets/logs.svg";
import Bush from "./assets/bush.svg";
import Bonfire from "./assets/bonfire.svg";
import Bin from "./assets/bin.svg";
import Garbage from "./assets/garbage.svg";
import Recycletruck from "./assets/Recycletruck.svg";
import Plant2 from "./assets/plant2.svg";
import House from "./assets/house.svg";
import Landfill from "./assets/landfill.svg";
import AOS from "aos";
import 'aos/dist/aos.css';

import Card from "./components/Card.vue";

AOS.init();
</script>


<style scoped>
.greenGradient {
  background: radial-gradient(circle at 10% 20%, rgb(48, 160, 102) 0%, rgb(195, 232, 147) 50.2%);
  background-clip: text;
}

.floating {
  animation: floating ease-in-out 5s infinite;
}

@keyframes floating {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

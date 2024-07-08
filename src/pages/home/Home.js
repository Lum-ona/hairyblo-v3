import "./Home.css";
import Hero from "../../sections/hero/Hero";
import About from "../../sections/about/About";
import WhatWeDo from "../../sections/whatWeDo/WhatWeDo";
import Categories from "../../sections/categories/Categories";
import Stats from "../../sections/stats/Stats";
import Contact from "../../sections/contact/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <WhatWeDo />
      <Categories />
      <Stats />
      <Contact />
    </div>
  );
}

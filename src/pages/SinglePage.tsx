import Hero from "./sections/Hero";
import Domain from "./Domain";
import Milestones from "./Milestones";
import Documents from "./Documents";
import Presentations from "./Presentations";
import About from "./About";
import Contact from "./Contact";

const SinglePage = () => (
  <>
    <section id="home"><Hero /></section>
    <section id="domain"><Domain /></section>
    <section id="milestones"><Milestones /></section>
    <section id="documents"><Documents /></section>
    <section id="presentations"><Presentations /></section>
    <section id="about"><About /></section>
    <section id="contact"><Contact /></section>
  </>
);

export default SinglePage;

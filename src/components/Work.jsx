/**
 * @copyright 2024 sanusi
 * @license Apache-2.0
 */

/**
 * components
 */
import ProjectCard from "./ProjectCard";

const Work = () => {
  const works = [
    // {
    //   imgSrc: "/images/projetcs/project-1.jpg",
    //   title: "Full stack music app",
    //   tags: ["API", "MVC", "Development"],
    //   projectLink: "/"
    // },
    // {
    //   imgSrc: "/images/projetcs/project-2.jpg",
    //   title: "Free stock photo app",
    //   tags: ["API", "SPA"],
    //   projectLink: "/"
    // },
    // {
    //   imgSrc: "/images/projetcs/project-3.jpg",
    //   title: "Recipe app",
    //   tags: ["Development", "API"],
    //   projectLink: "/"
    // },
    // {
    //   imgSrc: "/images/projetcs/project-4.jpg",
    //   title: "Real state website",
    //   tags: ["Web-design", "Development"],
    //   projectLink: "/"
    // },
    // {
    //   imgSrc: "/images/projetcs/project-5.jpg",
    //   title: "eCommerce website",
    //   tags: ["eCommerce", "Development"],
    //   projectLink: "/"
    // },
    // {
    //   imgSrc: "/images/projetcs/project-6.jpg",
    //   title: "vCard Personal portfolio",
    //   tags: ["Web-design", "Development"],
    //   projectLink: "/"
    // },
    {
      imgSrc: "/images/projetcs/project-13.jpg",
      title: "E-Commerce",
      tags: ["Fullstack", "API", "Development"],
      projectLink: "/"
    },
    {
      imgSrc: "/images/projetcs/project-11.jpg",
      title: "Recruitment System",
      tags: ["Fullstack", "MVC", "Development"],
      projectLink: "/"
    },
    {
      imgSrc: "/images/projetcs/project-7.jpg",
      title: "Rent Car Website",
      tags: ["Web-design", "Development"],
      projectLink: "/"
    },
    {
      imgSrc: "/images/projetcs/project-8.jpg",
      title: "Al-Qur'an",
      tags: ["API", "Fullstack", "Development"],
      projectLink: "/"
    },
    {
      imgSrc: "/images/projetcs/project-9.jpg",
      title: "Document Archive",
      tags: ["API", "Fullstack", "Development"],
      projectLink: "/"
    },
    {
      imgSrc: "/images/projetcs/project-10.jpg",
      title: "Contruction System",
      tags: ["Fullstack", "MVC", "Development"],
      projectLink: "/"
    },
    {
      imgSrc: "/images/projetcs/project-12.jpg",
      title: "Inventory",
      tags: ["Fullstack", "MVC", "Development"],
      projectLink: "/"
    }
  ];

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Higlight</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

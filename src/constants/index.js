import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    alcanada,
    SAICMotor,
    uw,
    liburdi,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    aws,
    azure,
    python,
    java,
    rabbitmq,
    spark,
    snowflake,
    dbt,
    mysql,
    postgres,
    airflow,
    databricks,
    //
    dadjokepipe,
    healthdataflow,
    airbnb,
    tiktokad,
  } from "../assets";
  



  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "ETL pipeline",
      icon: mobile,
    },
    {
      title: "Climber",
      icon: backend,
    },
    {
      title: "Mario Kart Player",
      icon: creator,
    },
  ];
  
  //tech stack
  /*
  - cloud vendor
  - programming language
  - computing framework
  - database and data warehouse
  - transformation tool
  - orchestration tool
  - deployment tool
  */
  const technologies = [
    // cloud vendor 我现在只用过aws和azure
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "azure",
      icon: azure,
    },
    // programming language 
    {
      name: "python",
      icon: python,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    /* computing framework和相关方便的tool
    - spark
    - databricks
    */
    {
      name: "spark",
      icon: spark,
    },
    {
      name: "databricks",
      icon: databricks,
    },
    /*
    database and data warehouse相关技术
    - postgre
    - mongodb (还没学)
    - snowflake
    - dbt (在datawarehouse里面做transformation)
    */
    {
      name: "postgre",
      icon: postgres,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "snowflake",
      icon: snowflake,
    },
    {
      name: "dbt",
      icon: dbt,
    },
    {
      name: "git",
      icon: git,
    },
    /*
    orchestration tool and deployment tool
    - airflow
    - docker
    */
    {
      name: "airflow",
      icon: airflow,
    },
    {
      name: "docker",
      icon: docker,
    },
    // 杂七杂八的tech stack, 考虑不加了，用过但不是很熟练
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
  ];
  
  const experiences = [
    {
      title: "Application Engineer (co-op)",
      company_name: "Liburdi Automation",
      icon: liburdi,
      iconBg: "#383E56",
      date: "Sep 2016 - Dec 2016 & May 2017 - Aug 2017",
      points: [
        "experience 1 place holder.",
        "experience 2 place holder",
      ],
    },
    {
      title: "Graduate Research Student",
      company_name: "University of Waterloo - Fuel Cell and Green Energy Lab",
      icon: uw,
      iconBg: "#E6DEDD",
      date: "Sep 2018 - Dec 2021",
      points: [
        "experience 1 place holder.",
        "experience 2 place holder",
      ],
    },
    {
      title: "Data Analyst",
      company_name: "Shanghai Automotive",
      icon: SAICMotor,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - Aug 2022",
      points: [
        "experience 1 place holder.",
        "experience 2 place holder",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "A & L Canada Laboratories",
      icon: alcanada,
      iconBg: "#383E56",
      date: "Mar 2023 - Present",
      points: [
        "experience 1 place holder.",
        "experience 2 place holder",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  /* 介绍我的项目经验, 用来填充work section
  主要介绍
  - adtrack
  - healthdataflow
  - dadjokepipe
  - airbnb sentiment analysis
  */

  const projects = [
    {
      name: "AdTrack",
      description:
        "End-to-end data pipeline that collects data from tiktok, facebook and instagram APIs, and \
         transforms the data into a unified format to track major competitors' ad performance and \
         social media presence.",
      tags: [
        {
          name: "aws",
          color: "blue-text-gradient",
        },
        {
          name: "airflow",
          color: "green-text-gradient",
        },
        {
          name: "pyspark",
          color: "pink-text-gradient",
        },
        {
          name: "terraform",
          color: "blue-text-gradient",
        }
      ],
      image: tiktokad,
      source_code_link: "https://github.com/",
    },
    {
      name: "HealthDataFlow",
      description:
        "HealthDataFlow is a data pipeline for extracting and processing hospital data from various sources. \
        It provides a streamlined and customizable solution for collecting and analyzing health data, \
        including patient records, clinical data, and financial data. With HealthDataFlow, you can easily track hospital performance, monitor trends, and optimize your healthcare operations for maximum efficiency and patient satisfaction.",
      tags: [
        {
          name: "aws",
          color: "blue-text-gradient",
        },
        {
          name: "pyspark",
          color: "green-text-gradient",
        },
        {
          name: "postgresql",
          color: "pink-text-gradient",
        },
        {
          name: "dbt",
          color: "blue-text-gradient",
        }
      ],
      image: healthdataflow,
      source_code_link: "https://github.com/a4lamber/aws-s3",
    },
    {
      name: "DadJokePipe",
      description:
        "DadJokePipe is a data pipeline for extracting and processing jokes from the DadJoke API and delivering them to clients using Apache Airflow. \
        It provides a streamlined solution to make my clients laugh and have fun",
      tags: [
        {
          name: "airflow",
          color: "blue-text-gradient",
        },
        {
          name: "docker",
          color: "green-text-gradient",
        }
      ],
      image: dadjokepipe,
      source_code_link: "https://github.com/a4lamber/dadjoke-airflow-db",
    },
    {
      name: "Airbnb Sentiment Analysis",
      description:
        "This project is a data pipeline to process Airbnb reviews and perform sentiment analysis on the reviews. \
        It's rumored that full moon have an effect on human mood. From airbnb sentiment analysis, we are going\
        find out if there is any correlation between full moon and airbnb reviews.",
      tags: [
        {
          name: "dbt",
          color: "blue-text-gradient",
        },
        {
          name: "snowflake",
          color: "green-text-gradient",
        }
      ],
      image: airbnb,
      source_code_link: "https://github.com/a4lamber/airbnb-fullmoon-sentiment-analysis",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
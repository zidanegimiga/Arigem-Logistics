const SERVICEDESCRIPTION =
  "We are an office products based company. We provide office stationery, I.T equipment and furniture. We extend our service offering by including expertise in graphic design, brand strategization and web development.";

const SERVICECARDS = [
  {
    color: "rgba(166, 206, 57, 0.32)",
    number: "01",
    title: "Office Stationery and I.T Equipment",
    bodyText:
      "Boards & easel, Writing instrument, Paper, File organization, Desk Accessories, Punchers, Notebooks, Clip boards & Copy holders, Card scanners, Clips, Rubber band, Rulers, Calculators,",
    image: "/stationery.png",
    width: 244,
    height: 171,
  },
  {
    color: "#EDD8D8",
    number: "02",
    title: "Office Furniture",
    bodyText:
      "Security safes, fire resistant safes, Filing cabinets, Office chairs, Trolleys, Cupboards, Deposit safes, Office chair mat, Brochure & Catalogue stand, Key boxes, key accessories, Cash box.",
    image: "/furniture.png",
    width: 244,
    height: 171,
  },
  {
    color: "#CDE2E9",
    number: "03",
    title: "Branding & Graphic Design",
    bodyText:
      "Logo Design, Web Design, Brand Strategy, Calendars, stationery, Scarves, wall clocks, sweaters, jumpers, T-shirts, Flash Disks, Banners,Billboards.",
    image: "/branding.png",
    width: 244,
    height: 171,
  },
];

const WORKPROCESSDESCRIPTION =
  "Professionalism is of utmost importance to us. It’s the lifeline of our company. Exactly why we have this three-step framework to ensure quality services are provided";

const PROCESSES = [
  {
    image: `url("./process1.svg")`,
    title: "Empathy and Strategy",
    description: "Understand business goals, needs. Organize and aggregate gatherings. Scope the project."
  },
  {
    image: `url("./process2.svg")`,
    title: "Sample",
    description: "Perfect execution of the project according to plan. Come up with alternative solutions and discuss what you can settle on with you."
  },
  {
    image: `url("./process3.svg")`,
    title: "Deliver",
    description: "A success story doesn’t finish with building. We make sure what we offer suits you perfectly. We collect feedback and refine our solution."
  },

]

export { 
  SERVICEDESCRIPTION, 
  SERVICECARDS, 
  WORKPROCESSDESCRIPTION, 
  PROCESSES 
};

const players = [{
    id: 0,
    name: "Stephane Moreau",
    email: "Stephane.Moreau@ig.com",
    title: "Front End Developer",
    interest: "High",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datesParticipated: ['29/11/2018'],
    accepted: true,
    paid: true
  },
  {
    id: 1,
    name: "Erica Perris",
    email: "Erica.Perris@ig.com",
    title: "Operational Risk Manager",
    interest: "High",
    days: ["Monday", "Wednesday", "Friday"],
    datesParticipated: ['29/11/2018'],
    accepted: true,
    paid: true
  },
  {
    id: 2,
    name: "Irene Castaneda",
    email: "Irene.Castaneda@ig.com",
    title: "Off-page Search Manager, DailyFX",
    interest: "High",
    days: ["Tuesday", "Wednesday", "Thursday"],
    datesParticipated: ['29/11/2018'],
    accepted: true,
    paid: true
  },
  {
    id: 3,
    name: "Jerome Johnson",
    email: "Jerome.Johnson@ig.com",
    title: "UK New Business Manager",
    interest: "High",
    days: ["Monday", "Thursday", "Friday"],
    datesParticipated: ['29/11/2018'],
    accepted: true,
    paid: true
  },
  {
    id: 4,
    name: "Nojan Baseri",
    email: "Nojan.Baseri@ig.com",
    title: "Premium Account Executive",
    interest: "High",
    days: ["Monday", "Wednesday", "Thursday"],
    datesParticipated: ['29/11/2018'],
    accepted: true,
    paid: false
  },
  {
    id: 5,
    name: "Will Hall-Smith",
    email: "Will.Hall-Smith@ig.com",
    title: "Senior Copywriter",
    interest: "High",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datesParticipated: ['29/11/2018'],
    accepted: true,
    paid: true
  },
  {
    id: 6,
    name: "Feyi Obisesan",
    email: "Feyi.Obisesan@ig.com",
    title: "Associate QA Tester",
    interest: "High",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    datesParticipated: ['29/11/2018'],
    accepted: true,
    paid: true
  },
  {
    id: 7,
    name: "Tom Rogers",
    email: "Tom.Rogers@ig.com",
    title: "Trading Services Trainee",
    interest: "High",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datesParticipated: ['29/11/2018'],
    accepted: true,
    paid: true
  },
  {
    id: 8,
    name: "Periklis Korkontzelos",
    email: "Periklis.Korkontzelos@ig.com",
    title: "Associate Data Scientist",
    interest: "High",
    days: ["Monday", "Tuesday", "Thursday", "Friday"],
    datesParticipated: ['29/11/2018'],
    accepted: true,
    paid: true
  },
  {
    id: 9,
    name: "Jan Riccius",
    email: "Jan.Riccius@ig.com",
    title: "Trading Services Trainee",
    interest: "High",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datesParticipated: ['29/11/2018'],
    accepted: true,
    paid: false
  },
  {
    id: 10,
    name: "Alex Walker",
    email: "Alex.Walker@ig.com",
    title: "Business Analyst",
    interest: "High",
    days: ["Monday", "Tuesday", "Wednesday"],
    datesParticipated: [],
    accepted: false,
    paid: false
  },
  {
    id: 11,
    name: "Yohan Kariyawasan",
    email: "Yohan.Kariyawasan@ig.com",
    title: "Sales Trader",
    interest: "High",
    days: ["Monday", "Wednesday", "Thursday", "Friday"],
    datesParticipated: ['29/11/2018'],
    accepted: true,
    paid: false
  },
  {
    id: 12,
    name: "Jaime Diez",
    email: "Jaime.Diez@ig.com",
    title: "Trading Services Trainee",
    interest: "High",
    days: ["Monday", "Tuesday", "Thursday", "Friday"],
    datesParticipated: ['29/11/2018'],
    accepted: true,
    paid: true
  },
  {
    id: 13,
    name: "Eren Eraslan",
    email: "eren.eraslan@ig.com",
    title: "MTF Analyst",
    interest: "Medium",
    days: ["Wednesday", "Thursday"],
    datesParticipated: [],
    accepted: false,
    paid: false
  },
  {
    id: 14,
    name: "Romans Markuns",
    email: "Romans.Markuns@ig.com",
    title: "Developer",
    interest: "Medium",
    days: ["Tuesday", "Wednesday"],
    datesParticipated: [],
    accepted: false,
    paid: false
  },
  {
    id: 15,
    name: "Vivek Rughani",
    email: "Vivek.Rughani@ig.com",
    title: "Product Owner - Marketing Technology",
    interest: "Medium",
    days: ["Monday", "Wednesday", "Thursday"],
    datesParticipated: [],
    accepted: false,
    paid: false
  },
  {
    id: 16,
    name: "Moritz Gersdorff",
    email: "Moritz.Gersdorff@ig.com",
    title: "Head of Localisation",
    interest: "High",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datesParticipated: ['29/11/2018'],
    accepted: true,
    paid: true
  },
  {
    id: 17,
    name: "Akinola Akinyemi",
    email: "akinola.akinyemi@ig.com",
    title: "Data Science Team Lead",
    interest: "High",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datesParticipated: ['29/11/2018'],
    accepted: true,
    paid: true
  },
  {
    id: 18,
    name: "Andreas Colligan",
    email: "Andreas.Colligan@ig.com",
    title: "Dealer",
    interest: "High",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datesParticipated: ['29/11/2018'],
    accepted: true,
    paid: true
  },
  {
    id: 19,
    name: "Kin Suen",
    email: "kin.suen@ig.com",
    title: "Senior Sales Trader (UK)",
    interest: "High",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    datesParticipated: ['29/11/2018'],
    accepted: true,
    paid: true
  },
  {
    id: 20,
    name: "Elyes Saafi",
    email: "elyes.saafi@ig.com",
    title: "Marketing Partnership Manager",
    interest: "High",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datesParticipated: [],
    accepted: false,
    paid: false
  },
  {
    id: 21,
    name: "Sonia Mazzotta",
    email: "Sonia.Mazzotta@ig.com",
    title: "Off-page Search Team Lead",
    interest: "High",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    datesParticipated: [],
    accepted: false,
    paid: false
  }
];

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const columns = {
  id: "Id",
  name: "Full Name",
  accepted: "Next Game (29th Nov)",
  paid: "Paid"
};

export {
  players,
  weekDays,
  columns
};
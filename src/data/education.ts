export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Université Cadi Ayyad",
    degree: "Licence",
    field: "CLE Informatique",
    location: "Marrakech",
    start: "2023-09",
    end: "2026-07",
    courses: ["Deep Learning", "Big Data", "Developement web et mobile"],
    highlights: [
      "projet web et mobile",
      "projet Bigdata",
      "article scientifique en DeepLearning",
    ],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  issueDate: string; // "YYYY-MM"
  expiryDate?: string; // "YYYY-MM"
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string; // "/certs/aws-saa.webp"
  imageAlt?: string; // "Badge AWS SAA"
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Fondamentaux et Concepts Avancés de la Programmation Java",
    issuer: "MLIAEdu.toubkalit.com",
    issueDate: "2024-03",
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/6-3a8f0816-b443-4e06-a66d-401cb718848b-489202",
    skills: ["Programation Java"],
    tags: ["Java"],
    image: "/certs/java.webp",
    imageAlt: "Cert Java",
    status: "active",
  }
];

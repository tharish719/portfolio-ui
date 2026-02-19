export type Project = {
  name: string;
  desc: string;
  stack: string[];
  link?: string;
};

export type Links = {
  github: string;
  linkedin: string;
  email: string;
};

export type Profile = {
  name: string;
  role: string;
  summary: string;
  resumePath: string; // "/resume"
  skills: string[];
  projects: Project[];
  links: Links;
};

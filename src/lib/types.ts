export type Post = {
  file: string;
  url: string;
  frontmatter: {
    layout: string;
    tags: string[];
    date: string;
    title: string;
    medium: string;
  };
};

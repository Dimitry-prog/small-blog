export type IBlogPost = {
  id: string;
  title: string;
  date: string;
}

export type IBlogPostHtml = {
  contentHtml: string;
} & IBlogPost
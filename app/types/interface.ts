import { ReactNode } from 'react';

export interface openGraph {
  title: string;
  description: string;
  url: string;
  image: string;
}

export interface store {
  id?: number;
  title: string;
  img: string;
  description: string;
  tags: string[];
  writing: ReactNode;
  date: Date;
  openGraph: openGraph;
  twitter: openGraph;
}

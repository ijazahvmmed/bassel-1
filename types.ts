export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  releaseDate: string;
  status: 'Available' | 'Pre-Order' | 'In Progress';
}

export interface LoreItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: 'Culture' | 'Location' | 'Artifact';
}

export interface NavLink {
  label: string;
  href: string;
}
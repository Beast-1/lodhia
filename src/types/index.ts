export interface Herb {
  id: string;
  sanskritName: string;
  devanagari: string;
  botanicalName: string;
  commonName: string;
  family: string;
  origin: string;
  summary: string;
  rasa: string[]; // Tastes: Madhura (Sweet), Tikta (Bitter), etc.
  virya: string;
  vipaka: string;
  doshaBalancing: {
    vata: 'Pacifies' | 'Balances' | 'Aggravates' | 'Neutral';
    pitta: 'Pacifies' | 'Balances' | 'Aggravates' | 'Neutral';
    kapha: 'Pacifies' | 'Balances' | 'Aggravates' | 'Neutral';
  };
  keyBenefits: string[];
  traditionalPreparations: {
    type: string;
    details: string;
  }[];
  classicalCitation: string;
  harvestingNotes: string;
  imageUrl: string;
  accentColor: string;
}

export interface Formulation {
  id: string;
  name: string;
  sanskritName: string;
  category: 'Asava & Arishta' | 'Medicated Oils' | 'Rasayana' | 'Churna & Bhasma' | 'Daily Wellness';
  classicalText: string;
  form: string;
  size: string;
  indication: string;
  description: string;
  keyIngredients: string[];
  anupana: string; // Adjuvant (e.g. warm water, cow's milk, honey)
  dosage: string;
  imageUrl: string;
  tags: string[];
  inStock: boolean;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  readTime: string;
  publishedDate: string;
  category: string;
  author: string;
  excerpt: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  patronSince: string;
}

import { Herb } from '../types';

export const HERBS_DATA: Herb[] = [
  {
    id: 'ashwagandha',
    sanskritName: 'Ashwagandha',
    devanagari: 'अश्वगन्धा',
    botanicalName: 'Withania somnifera',
    commonName: 'Indian Ginseng / Winter Cherry',
    family: 'Solanaceae',
    origin: 'Arid scrub forests & foothills of the Himalayas',
    summary: 'The venerable royal root celebrated in Charaka Samhita for conferring the stamina, grace, and vitality of a spirited horse while anchoring restless nervous energy.',
    rasa: ['Tikta (Bitter)', 'Kashaya (Astringent)', 'Madhura (Sweet)'],
    virya: 'Ushna (Heating)',
    vipaka: 'Madhura',
    doshaBalancing: {
      vata: 'Pacifies',
      pitta: 'Neutral',
      kapha: 'Pacifies'
    },
    keyBenefits: [
      'Nourishes Ojas (vital somatic essence) and promotes deep restorative sleep',
      'Modulates cortisol and enhances resilience against physical and emotional distress',
      'Supports neuro-muscular vitality and reproductive vigor (Vajikarana)',
      'Strengthens joints and relieves chronic muscular stiffness'
    ],
    traditionalPreparations: [
      {
        type: 'Ksheerapaka (Milk Decoction)',
        details: 'Slow-simmered root powder in A2 cow milk with cardamom and wild forest honey before bed.'
      },
      {
        type: 'Churna with Ghee',
        details: 'Taken with warm hand-churned ghee for grounding erratic Vata dosha.'
      },
      {
        type: 'Ashwagandharishta',
        details: 'Natural wild honey fermentation for swift systemic absorption.'
      }
    ],
    classicalCitation: '"अश्वगन्धा कटुस्तिक्ता कषायोष्णा च वातनुत्। रसायनं विसर्पघ्नी कासश्वासक्षयापहा॥" — Bhava Prakasha Nighantu',
    harvestingNotes: 'Roots harvested in late autumn after the berries ripen to a vibrant orange-red, dried in gentle shade to preserve volatile withanolides.',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85',
    accentColor: '#C98A2C'
  },
  {
    id: 'brahmi',
    sanskritName: 'Brahmi',
    devanagari: 'ब्राह्मी',
    botanicalName: 'Bacopa monnieri',
    commonName: 'Water Hyssop / Herb of Grace',
    family: 'Plantaginaceae',
    origin: 'Wetlands of the Brahmaputra Valley & Assam waterways',
    summary: 'Named after Brahma, the creator of cosmic intellect. Renowned in ancient texts as the supreme Medhya Rasayana for mental clarity, lucid recall, and tranquil meditation.',
    rasa: ['Tikta (Bitter)', 'Kashaya (Astringent)', 'Madhura (Sweet)'],
    virya: 'Sheeta (Cooling)',
    vipaka: 'Madhura',
    doshaBalancing: {
      vata: 'Balances',
      pitta: 'Pacifies',
      kapha: 'Balances'
    },
    keyBenefits: [
      'Sharpens dhi (acquisition), dhriti (retention), and smriti (memory recall)',
      'Cools cerebral heat and dissolves chronic agitation and racing thoughts',
      'Strengthens synaptic transmission and speech articulation',
      'Calms heart palpitation and balances hyperactive nervous impulses'
    ],
    traditionalPreparations: [
      {
        type: 'Brahmi Ghrita',
        details: 'Herbal juice cooked with aged cow ghee for direct transit across the blood-brain barrier.'
      },
      {
        type: 'Swarasa (Fresh Expressed Juice)',
        details: 'Taken early at dawn with a pinch of black pepper to balance cooling potency.'
      },
      {
        type: 'Medicated Scalp Taila',
        details: 'Warm oil Shirodhara and nocturnal temple massage.'
      }
    ],
    classicalCitation: '"ब्राह्मी हिमा सरा तिक्ता कषाया मधुरा लघुः। मेध्या स्वर्या स्मृतिप्रदा कुष्ठदोषनाशिनी॥" — Charaka Samhita Sutrasthana',
    harvestingNotes: 'Hand-picked during sunrise from unpolluted freshwater streams in lower Assam, washed immediately in running mountain springs.',
    imageUrl: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1200&q=85',
    accentColor: '#1A3F31'
  },
  {
    id: 'tulsi',
    sanskritName: 'Tulsi',
    devanagari: 'तुलसी',
    botanicalName: 'Ocimum sanctum',
    commonName: 'Holy Basil / Queen of Herbs',
    family: 'Lamiaceae',
    origin: 'Sacred courtyards across Assam & the Indian subcontinent',
    summary: 'Regarded as the earthly embodiment of Lakshmi. Revered as an unmatched adaptogen and respiratory shield that purifies the aura, lungs, and cellular prana.',
    rasa: ['Katu (Pungent)', 'Tikta (Bitter)'],
    virya: 'Ushna (Heating)',
    vipaka: 'Katu',
    doshaBalancing: {
      vata: 'Pacifies',
      pitta: 'Neutral',
      kapha: 'Pacifies'
    },
    keyBenefits: [
      'Clears mucus, relieves bronchial congestion, and expels deep respiratory toxins',
      'Enhances immunomodulation and shields against environmental pathogens',
      'Opens the heart and mind, bringing clarity to spiritual and daily practice',
      'Improves micro-circulation and balances post-prandial glycemic response'
    ],
    traditionalPreparations: [
      {
        type: 'Phanta (Hot Infusion)',
        details: 'Freshly gathered whole purple Krishna Tulsi leaves steeped in boiling water with ginger.'
      },
      {
        type: 'Ark (Steam Distillate)',
        details: 'Potent aromatic botanical water for inhalation and respiratory tonics.'
      },
      {
        type: 'Leaf Paste with Ghee',
        details: 'Applied for dermal inflammation and insect stings.'
      }
    ],
    classicalCitation: '"तुलसी कटुका तिक्ता हृद्योष्णा दाहपित्तकृत्। दीपनी कुष्ठकृच्छ्रास्रपार्श्वरुक् कफवातजित्॥" — Dhanvantari Nighantu',
    harvestingNotes: 'Leaves collected at midday when volatile eugenol and terpene essential oils reach maximum concentration.',
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=85',
    accentColor: '#2A5A46'
  },
  {
    id: 'shatavari',
    sanskritName: 'Shatavari',
    devanagari: 'शतावरी',
    botanicalName: 'Asparagus racemosus',
    commonName: 'Wild Asparagus / Queen of Roots',
    family: 'Asparagaceae',
    origin: 'Sub-tropical forest belts of Assam and Meghalaya borders',
    summary: 'Her name translates poetically to "she who possesses a hundred husbands" — the premier Rasayana for female endocrine balance, deep tissue lubrication, and serene vitality.',
    rasa: ['Madhura (Sweet)', 'Tikta (Bitter)'],
    virya: 'Sheeta (Cooling)',
    vipaka: 'Madhura',
    doshaBalancing: {
      vata: 'Pacifies',
      pitta: 'Pacifies',
      kapha: 'Balances'
    },
    keyBenefits: [
      'Nourishes reproductive fluids (Shukra Dhatu) and balances hormonal fluctuations',
      'Coats and soothes inflamed gastric mucosal linings and hyperacidity',
      'Promotes abundant lactation and postpartum recuperation',
      'Replenishes depleted systemic fluids during peri-menopause and stress'
    ],
    traditionalPreparations: [
      {
        type: 'Shatavari Gulam',
        details: 'Classical semi-solid confection cooked with jaggery and restorative botanicals.'
      },
      {
        type: 'Root Powder in Warm Milk',
        details: 'Sweetened with rock sugar candy (Mishri) for nocturnal replenishment.'
      },
      {
        type: 'Shatavaryadi Taila',
        details: 'Medicated external oil for tissue elasticity and nerve strengthening.'
      }
    ],
    classicalCitation: '"शतावरी गुरुः शीता स्वादुतिक्ता रसायनी। मेध्याऽग्निपुष्टिदा स्निग्धा चक्षुष्या शुक्रला स्तन्या॥" — Bhava Prakasha',
    harvestingNotes: 'Fleshy tuberous roots carefully unearthed in the 3rd year of growth before the first winter frost.',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85',
    accentColor: '#B4533C'
  },
  {
    id: 'haritaki',
    sanskritName: 'Haritaki',
    devanagari: 'हरीतकी',
    botanicalName: 'Terminalia chebula',
    commonName: 'Chebulic Myrobalan / Supreme Healer',
    family: 'Combretaceae',
    origin: 'Dense deciduous tracts of Northeast India and foothills',
    summary: 'Described by Sushruta as the loving mother who never causes harm: it gently scours toxins from the colon, rekindles digestive Agni, and prolongs biological youth.',
    rasa: ['Kashaya (Dominant)', 'Tikta', 'Madhura', 'Katu', 'Amla'],
    virya: 'Ushna (Mildly Heating)',
    vipaka: 'Madhura',
    doshaBalancing: {
      vata: 'Pacifies',
      pitta: 'Pacifies',
      kapha: 'Pacifies'
    },
    keyBenefits: [
      'Possesses 5 of the 6 Ayurvedic tastes, harmonizing all three Doshas (Tridoshahara)',
      'Regulates intestinal peristalsis without irritating delicate mucosal folds',
      'Scrapes metabolic sludges (Ama) from subtle circulatory channels (Srotas)',
      'Acts as a fundamental rejuvenator when taken with seasonal adjuvants (Ritu Haritaki)'
    ],
    traditionalPreparations: [
      {
        type: 'Ritu Haritaki',
        details: 'Consumed with rock salt in monsoon, sugar in autumn, ginger in early winter.'
      },
      {
        type: 'Abhayarishta',
        details: 'Classical bio-fermented cordial for liver sluggishness and chronic constipation.'
      },
      {
        type: 'Triphala Component',
        details: 'Compounded with Bibhitaki and Amalaki for daily balancing.'
      }
    ],
    classicalCitation: '"यस्य माता गृहे नास्ति तस्य माता हरीतकी। कदाचिद् कुप्यते माता नोदरस्था हरीतकी॥" — Ayurvedic adage from Kaiyadeva Nighantu',
    harvestingNotes: 'Full-bodied, seed-heavy fruits gathered when yellow-green in late winter, dried under filtered solar heat.',
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85',
    accentColor: '#C5A572'
  },
  {
    id: 'guduchi',
    sanskritName: 'Guduchi / Amrita',
    devanagari: 'गुडूची',
    botanicalName: 'Tinospora cordifolia',
    commonName: 'Heart-leaved Moonseed / Heavenly Nectar',
    family: 'Menispermaceae',
    origin: 'Wild creepers draping Neem trees in Assam forests',
    summary: 'Known as "Amrita" (immortality). Celebrated as the ultimate blood detoxifier and immunomodulator that destroys toxic accumulation while preserving healthy tissues.',
    rasa: ['Tikta (Bitter)', 'Kashaya (Astringent)'],
    virya: 'Ushna (Heating in potency yet cooling in action)',
    vipaka: 'Madhura',
    doshaBalancing: {
      vata: 'Balances',
      pitta: 'Pacifies',
      kapha: 'Pacifies'
    },
    keyBenefits: [
      'Breaks intermittent fevers (Jvara) and purifies hepatic tissue',
      'Supports healthy white blood cell response and phagocytic efficiency',
      'Eliminates systemic uric acid deposits and alleviates gout (Vatarakta)',
      'Recharges cellular metabolic energy without depleting fluid reserves'
    ],
    traditionalPreparations: [
      {
        type: 'Guduchi Satva',
        details: 'Pure white sedimentation starch extracted from fresh mature stems.'
      },
      {
        type: 'Kwath (Coarse Decoction)',
        details: 'Boiled down to one-fourth volume with Pippali and Tulsi.'
      },
      {
        type: 'Amritarishta',
        details: 'Classical fermentation for chronic convalescence and liver protection.'
      }
    ],
    classicalCitation: '"गुडूची कटुका तिक्ता स्वादुपाका रसायनी। संग्रहिणी कषायोष्णा लघ्वी बल्याऽग्निदीपनी॥" — Bhava Prakasha',
    harvestingNotes: 'Stems harvested specifically from vines twining around Neem trees (Neem Guduchi), considered therapeutically superior.',
    imageUrl: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1200&q=85',
    accentColor: '#1A3F31'
  }
];

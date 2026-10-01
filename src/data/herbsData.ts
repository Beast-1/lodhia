import { Herb } from '../types';

export const HERBS_DATA: Herb[] = [
  {
    id: 'ashwagandha',
    sanskritName: 'Ashwagandha',
    devanagari: 'अश्वगन्धा',
    botanicalName: 'Withania somnifera',
    commonName: 'Indian Ginseng / Winter Cherry',
    family: 'Solanaceae',
    origin: 'Native to dry sub-tropical tracts and traditional cultivation across India',
    summary: 'A cornerstone root in classical Ayurvedic literature, traditionally described in the Charaka Samhita and Bhava Prakasha as a premier Balya (strength-nourishing) and Rasayana (rejuvenative) botanical.',
    rasa: ['Tikta (Bitter)', 'Kashaya (Astringent)', 'Madhura (Sweet)'],
    virya: 'Ushna (Mildly Warm)',
    vipaka: 'Madhura',
    doshaBalancing: {
      vata: 'Pacifies',
      pitta: 'Neutral',
      kapha: 'Pacifies'
    },
    keyBenefits: [
      'Traditionally used in Ayurveda to support physical resilience and general stamina',
      'Classically classified as an herb that helps nourish and ground restless Vata dosha',
      'Historically taken alongside warm milk in traditional evening routines',
      'Recognized in classical texts for supporting overall vitality and vitality (Ojas)'
    ],
    traditionalPreparations: [
      {
        type: 'Ksheerapaka (Traditional Milk Preparation)',
        details: 'Classical method of gently boiling finely powdered root with milk and water until reduced.'
      },
      {
        type: 'Churna (Herbal Powder)',
        details: 'Traditionally consumed with warm water or ghee as recommended by an Ayurvedic physician.'
      },
      {
        type: 'Classical Arishta Formulations',
        details: 'Part of classical fermented preparations such as Ashwagandharishta.'
      }
    ],
    classicalCitation: '"अश्वगन्धा कटुस्तिक्ता कषायोष्णा च वातनुत्। रसायनं विसर्पघ्नी कासश्वासक्षयापहा॥" — Bhava Prakasha Nighantu (Guduchyadi Varga)',
    harvestingNotes: 'Roots are traditionally collected after flowering and mature berry formation, dried carefully in ventilated shade.',
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
    origin: 'Wetlands and clean freshwater banks across Assam and the Indian subcontinent',
    summary: 'Celebrated in classical Ayurvedic texts as a premier Medhya Rasayana—a botanical historically regarded for supporting mental calmness, intellectual clarity, and contemplative tranquility.',
    rasa: ['Tikta (Bitter)', 'Kashaya (Astringent)', 'Madhura (Sweet)'],
    virya: 'Sheeta (Cooling)',
    vipaka: 'Madhura',
    doshaBalancing: {
      vata: 'Balances',
      pitta: 'Pacifies',
      kapha: 'Balances'
    },
    keyBenefits: [
      'Traditionally classified as Medhya (supportive of learning, recall, and retention)',
      'Classically regarded as having a cooling and calming influence on Pitta dosha',
      'Frequently referenced in traditional texts for supporting meditative focus',
      'Commonly infused into classical scalp massage oils for nocturnal relaxation'
    ],
    traditionalPreparations: [
      {
        type: 'Brahmi Ghrita',
        details: 'Herbal extracts cooked into clarified cow butter following classical Sneha Kalpana rites.'
      },
      {
        type: 'Swarasa (Expressed Leaf Juice)',
        details: 'Freshly gathered leaves traditionally expressed with small quantities of warming spices.'
      },
      {
        type: 'Medicated Scalp Oils',
        details: 'Infused into sesame or coconut base oils for traditional Shiro Abhyanga.'
      }
    ],
    classicalCitation: '"ब्राह्मी हिमा सरा तिक्ता कषाया मधुरा लघुः। मेध्या स्वर्या स्मृतिप्रदा कुष्ठदोषनाशिनी॥" — Charaka Samhita (Sutrasthana)',
    harvestingNotes: 'Whole succulent creeping herbs gathered from unpolluted freshwater habitats, washed thoroughly in clean spring water.',
    imageUrl: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1200&q=85',
    accentColor: '#1A3F31'
  },
  {
    id: 'tulsi',
    sanskritName: 'Tulsi',
    devanagari: 'तुलसी',
    botanicalName: 'Ocimum sanctum',
    commonName: 'Holy Basil',
    family: 'Lamiaceae',
    origin: 'Sacred domestic gardens and cultivations across Assam and India',
    summary: 'Venerated across Indian tradition as a sacred plant and respiratory tonic. Classical Nighantus highlight its aromatic warming nature and its affinity for balancing Kapha and Vata.',
    rasa: ['Katu (Pungent)', 'Tikta (Bitter)'],
    virya: 'Ushna (Warm)',
    vipaka: 'Katu',
    doshaBalancing: {
      vata: 'Pacifies',
      pitta: 'Neutral',
      kapha: 'Pacifies'
    },
    keyBenefits: [
      'Traditionally brewed as warm infusions during seasonal transitions (Ritu Sandhi)',
      'Classically regarded as supportive of clear breathing and healthy respiratory function',
      'Historically revered for uplifting the spirit and purifying the domestic environment',
      'Valued in traditional daily herbal tea blends with ginger and black pepper'
    ],
    traditionalPreparations: [
      {
        type: 'Phanta (Hot Water Infusion)',
        details: 'Fresh or dried whole leaves steeped in boiling water for five to ten minutes.'
      },
      {
        type: 'Ark (Herbal Distillate)',
        details: 'Traditional steam-distilled aromatic floral and leaf water.'
      },
      {
        type: 'Classical Kashaya Blend',
        details: 'Co-simmered with ginger, cinnamon, and long pepper for cold-season wellness.'
      }
    ],
    classicalCitation: '"तुलसी कटुका तिक्ता हृद्योष्णा दाहपित्तकृत्। दीपनी कुष्ठकृच्छ्रास्रपार्श्वरुक् कफवातजित्॥" — Dhanvantari Nighantu',
    harvestingNotes: 'Leaves harvested ideally in the mid-morning after dew evaporates, ensuring natural aromatic essential oils are intact.',
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=85',
    accentColor: '#2A5A46'
  },
  {
    id: 'shatavari',
    sanskritName: 'Shatavari',
    devanagari: 'शतावरी',
    botanicalName: 'Asparagus racemosus',
    commonName: 'Wild Asparagus',
    family: 'Asparagaceae',
    origin: 'Sub-tropical forest belts and plains of Northeast India and the subcontinent',
    summary: 'A revered nourishing botanical in the Ayurvedic pharmacopoeia, historically designated as a Rasayana with sweet, cooling, and soothing qualities for systemic rejuvenation.',
    rasa: ['Madhura (Sweet)', 'Tikta (Bitter)'],
    virya: 'Sheeta (Cooling)',
    vipaka: 'Madhura',
    doshaBalancing: {
      vata: 'Pacifies',
      pitta: 'Pacifies',
      kapha: 'Balances'
    },
    keyBenefits: [
      'Traditionally utilized in Ayurveda to support maternal vitality and feminine wellness',
      'Known for its sweet, unctuous (Snigdha) and soothing botanical properties',
      'Classically recommended for pacifying internal heat and excess Pitta dosha',
      'Historically taken with milk and ghee in restorative post-illness or seasonal regimens'
    ],
    traditionalPreparations: [
      {
        type: 'Shatavari Gulam',
        details: 'Traditional herbal confection prepared with jaggery and restorative spices.'
      },
      {
        type: 'Root Churna in Milk',
        details: 'Powdered dried root traditionally simmered gently in milk before retiring at night.'
      },
      {
        type: 'Classical Ghrita & Taila',
        details: 'Simmered in classical lipid preparations for both internal and external use.'
      }
    ],
    classicalCitation: '"शतावरी गुरुः शीता स्वादुतिक्ता रसायनी। मेध्याऽग्निपुष्टिदा स्निग्धा चक्षुष्या शुक्रला स्तन्या॥" — Bhava Prakasha',
    harvestingNotes: 'Tuberous roots traditionally unearthed when mature, peeled and dried under gentle solar conditions.',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85',
    accentColor: '#B4533C'
  },
  {
    id: 'haritaki',
    sanskritName: 'Haritaki',
    devanagari: 'हरीतकी',
    botanicalName: 'Terminalia chebula',
    commonName: 'Chebulic Myrobalan',
    family: 'Combretaceae',
    origin: 'Deciduous forests and foothills throughout India',
    summary: 'Acclaimed in classical Ayurvedic texts as one of the most versatile botanicals, containing five of the six Ayurvedic tastes and forming a foundational pillar of classical Triphala.',
    rasa: ['Kashaya (Astringent dominant)', 'Tikta', 'Madhura', 'Katu', 'Amla'],
    virya: 'Ushna (Mildly Warming)',
    vipaka: 'Madhura',
    doshaBalancing: {
      vata: 'Pacifies',
      pitta: 'Pacifies',
      kapha: 'Pacifies'
    },
    keyBenefits: [
      'Traditionally celebrated as Tridoshahara (harmonizing to all three doshic constitutions)',
      'Classically used to support natural digestive flow and bowel regularity (Anulomana)',
      'Key component of the revered three-fruit compound Triphala',
      'Historically incorporated into classical Ritu Haritaki seasonal regimens'
    ],
    traditionalPreparations: [
      {
        type: 'Triphala Compound',
        details: 'Combined in classical proportions with Bibhitaki and Amalaki for daily balancing.'
      },
      {
        type: 'Abhayarishta',
        details: 'Classical self-fermented herbal formulation documented in Sharangadhara Samhita.'
      },
      {
        type: 'Ritu Haritaki Regimen',
        details: 'Traditionally taken with seasonal adjuvants like rock salt, jaggery, or honey.'
      }
    ],
    classicalCitation: '"यस्य माता गृहे नास्ति तस्य माता हरीतकी। कदाचिद् कुप्यते माता नोदरस्था हरीतकी॥" — Classical Ayurvedic proverb cited in Kaiyadeva Nighantu',
    harvestingNotes: 'Mature fruits collected in late winter, deseeded and dried uniformly.',
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85',
    accentColor: '#C5A572'
  },
  {
    id: 'guduchi',
    sanskritName: 'Guduchi',
    devanagari: 'गुडूची',
    botanicalName: 'Tinospora cordifolia',
    commonName: 'Heart-leaved Moonseed / Giloy',
    family: 'Menispermaceae',
    origin: 'Climbing vines native to deciduous and dry forests across India',
    summary: 'Classically designated as "Amrita" (nectar of life) in Ayurvedic texts. Highly prized for its unique bitter-sweet taste profile and its traditional role in supporting natural immunity and metabolic balance.',
    rasa: ['Tikta (Bitter)', 'Kashaya (Astringent)'],
    virya: 'Ushna (Warm in thermal nature yet classically balancing to Pitta)',
    vipaka: 'Madhura',
    doshaBalancing: {
      vata: 'Balances',
      pitta: 'Pacifies',
      kapha: 'Pacifies'
    },
    keyBenefits: [
      'Traditionally utilized in Ayurveda to support natural bodily defenses and vitality',
      'Classically recommended for maintaining clear, balanced digestive fire (Deepana)',
      'Traditionally valued for supporting comfortable joint movement and tissue purity',
      'Historically prepared as a water decoction during changing seasons'
    ],
    traditionalPreparations: [
      {
        type: 'Guduchi Satva',
        details: 'Classical pure sediment extract prepared through cold-water settling of fresh mature stems.'
      },
      {
        type: 'Kwath (Herbal Decoction)',
        details: 'Crushed dry or fresh stems simmered in water down to one-fourth original volume.'
      },
      {
        type: 'Amritarishta',
        details: 'Traditional bio-fermented cordial prepared following Bhaishajya Ratnavali specifications.'
      }
    ],
    classicalCitation: '"गुडूची कटुका तिक्ता स्वादुपाका रसायनी। संग्रहिणी कषायोष्णा लघ्वी बल्याऽग्निदीपनी॥" — Bhava Prakasha Nighantu',
    harvestingNotes: 'Mature woody stems collected during dormancy when therapeutic bitter principles are most concentrated.',
    imageUrl: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1200&q=85',
    accentColor: '#1A3F31'
  }
];

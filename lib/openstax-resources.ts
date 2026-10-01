export type OpenStaxBook = {
  grade: string;
  subject: string;
  title: string;
  url: string;
  downloadUrl: string;
  pdfUrl: string;
  chapters: OpenStaxChapter[];
};

export type OpenStaxChapter = {
  number: number;
  title: string;
  sections: OpenStaxSection[];
};

export type OpenStaxSection = {
  number: number;
  title: string;
  url: string;
};

// Grade 9 Resources
export const grade9Resources: OpenStaxBook[] = [
  {
    grade: '9',
    subject: 'Mathematics',
    title: 'Algebra 1',
    url: 'https://openstax.org/details/books/algebra-1',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/algebra-1/pages/1-introduction.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/Algebra1-WEB.pdf',
    chapters: [
      {
        number: 1,
        title: 'Foundations',
        sections: [
          { number: 1, title: 'Use the Language of Algebra', url: 'https://openstax.org/books/algebra-1/pages/1-1-use-the-language-of-algebra' },
          { number: 2, title: 'Integers', url: 'https://openstax.org/books/algebra-1/pages/1-2-integers' },
          { number: 3, title: 'Fractions', url: 'https://openstax.org/books/algebra-1/pages/1-3-fractions' },
        ],
      },
      {
        number: 2,
        title: 'Solving Linear Equations',
        sections: [
          { number: 1, title: 'Solve Equations using the Subtraction Property of Equality', url: 'https://openstax.org/books/algebra-1/pages/2-1-solve-equations-using-the-subtraction-property-of-equality' },
          { number: 2, title: 'Solve Equations using the Addition Property of Equality', url: 'https://openstax.org/books/algebra-1/pages/2-2-solve-equations-using-the-addition-property-of-equality' },
        ],
      },
    ],
  },
  {
    grade: '9',
    subject: 'Physics',
    title: 'College Physics',
    url: 'https://openstax.org/details/books/college-physics',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/college-physics/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/College_Physics-WEB.pdf',
    chapters: [
      {
        number: 1,
        title: 'Introduction to Science and the Realm of Physics',
        sections: [
          { number: 1, title: 'Physics - An Introduction', url: 'https://openstax.org/books/college-physics/pages/1-1-physics-an-introduction' },
          { number: 2, title: 'Physical Quantities and Units', url: 'https://openstax.org/books/college-physics/pages/1-2-physical-quantities-and-units' },
        ],
      },
      {
        number: 2,
        title: 'Kinematics',
        sections: [
          { number: 1, title: 'Displacement', url: 'https://openstax.org/books/college-physics/pages/2-1-displacement' },
          { number: 2, title: 'Vectors, Scalars, and Coordinate Systems', url: 'https://openstax.org/books/college-physics/pages/2-2-vectors-scalars-and-coordinate-systems' },
        ],
      },
    ],
  },
  {
    grade: '9',
    subject: 'Chemistry',
    title: 'Chemistry 2e',
    url: 'https://openstax.org/details/books/chemistry-2e',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/chemistry-2e/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/Chemistry2e-WEB.pdf',
    chapters: [
      {
        number: 1,
        title: 'Essential Ideas',
        sections: [
          { number: 1, title: 'Chemistry in Context', url: 'https://openstax.org/books/chemistry-2e/pages/1-1-chemistry-in-context' },
          { number: 2, title: 'Phases and Classification of Matter', url: 'https://openstax.org/books/chemistry-2e/pages/1-2-phases-and-classification-of-matter' },
        ],
      },
      {
        number: 2,
        title: 'Atoms, Molecules, and Ions',
        sections: [
          { number: 1, title: 'Early Ideas in Atomic Theory', url: 'https://openstax.org/books/chemistry-2e/pages/2-1-early-ideas-in-atomic-theory' },
          { number: 2, title: 'Evolution of Atomic Theory', url: 'https://openstax.org/books/chemistry-2e/pages/2-2-evolution-of-atomic-theory' },
        ],
      },
    ],
  },
  {
    grade: '9',
    subject: 'Biology',
    title: 'Biology 2e',
    url: 'https://openstax.org/details/books/biology-2e',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/biology-2e/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/Biology2e-WEB.pdf',
    chapters: [
      {
        number: 1,
        title: 'The Study of Life',
        sections: [
          { number: 1, title: 'The Science of Biology', url: 'https://openstax.org/books/biology-2e/pages/1-1-the-science-of-biology' },
          { number: 2, title: 'Levels of Organization of Living Things', url: 'https://openstax.org/books/biology-2e/pages/1-2-levels-of-organization-of-living-things' },
        ],
      },
      {
        number: 2,
        title: 'The Cell',
        sections: [
          { number: 1, title: 'Characteristics of Life', url: 'https://openstax.org/books/biology-2e/pages/2-1-characteristics-of-life' },
          { number: 2, title: 'Cell Theory', url: 'https://openstax.org/books/biology-2e/pages/2-2-cell-theory' },
        ],
      },
    ],
  },
  {
    grade: '9',
    subject: 'History',
    title: 'World History',
    url: 'https://openstax.org/details/books/world-history',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/world-history/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/World_History-WEB.pdf',
    chapters: [
      {
        number: 1,
        title: 'The Peopling and Prehistory of the World',
        sections: [
          { number: 1, title: 'Prehistoric Times', url: 'https://openstax.org/books/world-history/pages/1-1-prehistoric-times' },
          { number: 2, title: 'Early Civilizations', url: 'https://openstax.org/books/world-history/pages/1-2-early-civilizations' },
        ],
      },
    ],
  },
  {
    grade: '9',
    subject: 'English',
    title: 'English Composition 1',
    url: 'https://openstax.org/details/books/english-composition-1',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/english-composition-1/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/English_Composition_1-WEB.pdf',
    chapters: [
      {
        number: 1,
        title: 'Writing and Rhetoric',
        sections: [
          { number: 1, title: 'What Is Rhetoric?', url: 'https://openstax.org/books/english-composition-1/pages/1-1-what-is-rhetoric' },
          { number: 2, title: 'Rhetorical Appeals', url: 'https://openstax.org/books/english-composition-1/pages/1-2-rhetorical-appeals' },
        ],
      },
    ],
  },
];

// Grade 10 Resources
export const grade10Resources: OpenStaxBook[] = [
  {
    grade: '10',
    subject: 'Mathematics',
    title: 'Algebra 1',
    url: 'https://openstax.org/details/books/algebra-1',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/algebra-1/pages/1-introduction.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/Algebra1-WEB.pdf',
    chapters: [
      {
        number: 3,
        title: 'Graphing Linear Equations',
        sections: [
          { number: 1, title: 'Use the Rectangular Coordinate System', url: 'https://openstax.org/books/algebra-1/pages/3-1-use-the-rectangular-coordinate-system' },
          { number: 2, title: 'Graph Linear Equations in Two Variables', url: 'https://openstax.org/books/algebra-1/pages/3-2-graph-linear-equations-in-two-variables' },
        ],
      },
    ],
  },
  {
    grade: '10',
    subject: 'Physics',
    title: 'College Physics',
    url: 'https://openstax.org/details/books/college-physics',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/college-physics/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/College_Physics-WEB.pdf',
    chapters: [
      {
        number: 4,
        title: 'Dynamics: Force and Newtons Laws of Motion',
        sections: [
          { number: 1, title: 'Force', url: 'https://openstax.org/books/college-physics/pages/4-1-force' },
          { number: 2, title: 'Newtons First Law of Motion', url: 'https://openstax.org/books/college-physics/pages/4-2-newtons-first-law-of-motion' },
        ],
      },
    ],
  },
  {
    grade: '10',
    subject: 'Chemistry',
    title: 'Chemistry 2e',
    url: 'https://openstax.org/details/books/chemistry-2e',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/chemistry-2e/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/Chemistry2e-WEB.pdf',
    chapters: [
      {
        number: 4,
        title: 'Stoichiometry of Chemical Reactions',
        sections: [
          { number: 1, title: 'Writing and Balancing Chemical Equations', url: 'https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations' },
          { number: 2, title: 'Classifying Chemical Reactions', url: 'https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions' },
        ],
      },
    ],
  },
  {
    grade: '10',
    subject: 'Biology',
    title: 'Biology 2e',
    url: 'https://openstax.org/details/books/biology-2e',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/biology-2e/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/Biology2e-WEB.pdf',
    chapters: [
      {
        number: 8,
        title: 'Photosynthesis',
        sections: [
          { number: 1, title: 'Overview of Photosynthesis', url: 'https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis' },
          { number: 2, title: 'The Light-Dependent Reactions', url: 'https://openstax.org/books/biology-2e/pages/8-2-the-light-dependent-reactions' },
        ],
      },
    ],
  },
  {
    grade: '10',
    subject: 'Geography',
    title: 'World Regional Geography',
    url: 'https://openstax.org/details/books/world-regional-geography',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/world-regional-geography/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/World_Regional_Geography-WEB.pdf',
    chapters: [
      {
        number: 1,
        title: 'World Geography',
        sections: [
          { number: 1, title: 'Map Scales and Projections', url: 'https://openstax.org/books/world-regional-geography/pages/1-1-map-scales-and-projections' },
          { number: 2, title: 'Earth in Space', url: 'https://openstax.org/books/world-regional-geography/pages/1-2-earth-in-space' },
        ],
      },
    ],
  },
  {
    grade: '10',
    subject: 'Literature',
    title: 'English Composition 1',
    url: 'https://openstax.org/details/books/english-composition-1',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/english-composition-1/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/English_Composition_1-WEB.pdf',
    chapters: [
      {
        number: 3,
        title: 'Reading Critically',
        sections: [
          { number: 1, title: 'Critical Reading as Active Response', url: 'https://openstax.org/books/english-composition-1/pages/3-1-critical-reading-as-active-response' },
          { number: 2, title: 'Annotating Texts', url: 'https://openstax.org/books/english-composition-1/pages/3-2-annotating-texts' },
        ],
      },
    ],
  },
];

// Grade 11 Resources
export const grade11Resources: OpenStaxBook[] = [
  {
    grade: '11',
    subject: 'Algebra',
    title: 'Algebra 2',
    url: 'https://openstax.org/details/books/algebra-2',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/algebra-2/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/Algebra2-WEB.pdf',
    chapters: [
      {
        number: 1,
        title: 'Prerequisites',
        sections: [
          { number: 1, title: 'Real Numbers Algebra Essentials', url: 'https://openstax.org/books/algebra-2/pages/1-1-real-numbers-algebra-essentials' },
        ],
      },
    ],
  },
  {
    grade: '11',
    subject: 'Geometry',
    title: 'Geometry',
    url: 'https://openstax.org/details/books/geometry',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/geometry/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/Geometry-WEB.pdf',
    chapters: [
      {
        number: 1,
        title: 'Foundations of Geometry',
        sections: [
          { number: 1, title: 'Undefined Terms and Definitions', url: 'https://openstax.org/books/geometry/pages/1-1-undefined-terms-and-definitions' },
        ],
      },
    ],
  },
  {
    grade: '11',
    subject: 'Physics',
    title: 'College Physics',
    url: 'https://openstax.org/details/books/college-physics',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/college-physics/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/College_Physics-WEB.pdf',
    chapters: [
      {
        number: 18,
        title: 'Electric Charge and Electric Field',
        sections: [
          { number: 1, title: 'Electric Charge', url: 'https://openstax.org/books/college-physics/pages/18-1-electric-charge' },
        ],
      },
    ],
  },
  {
    grade: '11',
    subject: 'Chemistry',
    title: 'Chemistry 2e',
    url: 'https://openstax.org/details/books/chemistry-2e',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/chemistry-2e/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/Chemistry2e-WEB.pdf',
    chapters: [
      {
        number: 11,
        title: 'Liquids and Solids',
        sections: [
          { number: 1, title: 'Intermolecular Forces', url: 'https://openstax.org/books/chemistry-2e/pages/11-1-intermolecular-forces' },
        ],
      },
    ],
  },
  {
    grade: '11',
    subject: 'Economics',
    title: 'Principles of Economics 2e',
    url: 'https://openstax.org/details/books/principles-economics-2e',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/principles-economics-2e/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/Principles_of_Economics-WEB.pdf',
    chapters: [
      {
        number: 1,
        title: 'The Scope and Method of Economics',
        sections: [
          { number: 1, title: 'Why Economics Matters', url: 'https://openstax.org/books/principles-economics-2e/pages/1-1-why-economics-matters' },
        ],
      },
    ],
  },
  {
    grade: '11',
    subject: 'Sociology',
    title: 'Introduction to Sociology 2e',
    url: 'https://openstax.org/details/books/introduction-sociology-2e',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/introduction-sociology-2e/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/Introduction_to_Sociology_2e-WEB.pdf',
    chapters: [
      {
        number: 1,
        title: 'An Introduction to Sociology',
        sections: [
          { number: 1, title: 'What Is Sociology?', url: 'https://openstax.org/books/introduction-sociology-2e/pages/1-1-what-is-sociology' },
        ],
      },
    ],
  },
];

// Grade 12 Resources
export const grade12Resources: OpenStaxBook[] = [
  {
    grade: '12',
    subject: 'Mathematics',
    title: 'Precalculus',
    url: 'https://openstax.org/details/books/precalculus',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/precalculus/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/Precalculus-WEB.pdf',
    chapters: [
      {
        number: 1,
        title: 'Functions',
        sections: [
          { number: 1, title: 'Functions and Function Notation', url: 'https://openstax.org/books/precalculus/pages/1-1-functions-and-function-notation' },
        ],
      },
    ],
  },
  {
    grade: '12',
    subject: 'Physics',
    title: 'College Physics',
    url: 'https://openstax.org/details/books/college-physics',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/college-physics/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/College_Physics-WEB.pdf',
    chapters: [
      {
        number: 24,
        title: 'Electromagnetic Waves',
        sections: [
          { number: 1, title: 'Maxwell Equations and Electromagnetic Waves', url: 'https://openstax.org/books/college-physics/pages/24-1-maxwell-equations-and-electromagnetic-waves' },
        ],
      },
    ],
  },
  {
    grade: '12',
    subject: 'Chemistry',
    title: 'Chemistry 2e',
    url: 'https://openstax.org/details/books/chemistry-2e',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/chemistry-2e/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/Chemistry2e-WEB.pdf',
    chapters: [
      {
        number: 18,
        title: 'Thermodynamics',
        sections: [
          { number: 1, title: 'Spontaneity', url: 'https://openstax.org/books/chemistry-2e/pages/18-1-spontaneity' },
        ],
      },
    ],
  },
  {
    grade: '12',
    subject: 'Biology',
    title: 'Biology 2e',
    url: 'https://openstax.org/details/books/biology-2e',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/biology-2e/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/Biology2e-WEB.pdf',
    chapters: [
      {
        number: 16,
        title: 'Molecular Biology',
        sections: [
          { number: 1, title: 'DNA Structure and Function', url: 'https://openstax.org/books/biology-2e/pages/16-1-dna-structure-and-function' },
        ],
      },
    ],
  },
  {
    grade: '12',
    subject: 'Law',
    title: 'American Government 3e',
    url: 'https://openstax.org/details/books/american-government-3e',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/american-government-3e/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/American_Government_3e-WEB.pdf',
    chapters: [
      {
        number: 1,
        title: 'American Government and Civic Engagement',
        sections: [
          { number: 1, title: 'What is Government?', url: 'https://openstax.org/books/american-government-3e/pages/1-1-what-is-government' },
        ],
      },
    ],
  },
  {
    grade: '12',
    subject: 'Politics',
    title: 'American Government 3e',
    url: 'https://openstax.org/details/books/american-government-3e',
    downloadUrl: 'https://openstax.org/apps/archive/20240320.195012/books/american-government-3e/pages/preface.html',
    pdfUrl: 'https://d3bxy9euc4zzqk.cloudfront.net/oscms-prodcms/media/documents/American_Government_3e-WEB.pdf',
    chapters: [
      {
        number: 2,
        title: 'The Constitution and Its Origins',
        sections: [
          { number: 1, title: 'The Pre-Revolutionary Period and the Roots of the American Political Tradition', url: 'https://openstax.org/books/american-government-3e/pages/2-1-the-pre-revolutionary-period-and-the-roots-of-the-american-political-tradition' },
        ],
      },
    ],
  },
];

// All resources combined
export const allOpenStaxResources = [
  ...grade9Resources,
  ...grade10Resources,
  ...grade11Resources,
  ...grade12Resources,
];

// Helper function to get resources by grade
export function getResourcesByGrade(grade: string): OpenStaxBook[] {
  switch (grade) {
    case '9':
      return grade9Resources;
    case '10':
      return grade10Resources;
    case '11':
      return grade11Resources;
    case '12':
      return grade12Resources;
    default:
      return [];
  }
}

// Helper function to get resource by subject
export function getResourceBySubject(grade: string, subject: string): OpenStaxBook | undefined {
  const resources = getResourcesByGrade(grade);
  return resources.find((r) => r.subject === subject);
}

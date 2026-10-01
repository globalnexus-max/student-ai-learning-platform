export type Subject = {
  code: string;
  name: string;
  credits: number;
  description: string;
};

export type GradeLevel = {
  grade: string;
  label: string;
  credits: number;
  subjects: Subject[];
};

export const gradeCurriculum: GradeLevel[] = [
  {
    grade: '9',
    label: '9th Grade',
    credits: 24,
    subjects: [
      { code: 'MTH9', name: 'Mathematics', credits: 4, description: 'Core algebra, equations, and numerical reasoning.' },
      { code: 'PHY9', name: 'Physics', credits: 4, description: 'Motion, force, and scientific observation.' },
      { code: 'CHE9', name: 'Chemistry', credits: 4, description: 'Atoms, bonding, and safe laboratory basics.' },
      { code: 'BIO9', name: 'Biology', credits: 4, description: 'Cells, life systems, and ecosystems.' },
      { code: 'HIS9', name: 'History', credits: 4, description: 'World history foundations and civilization studies.' },
      { code: 'ENG9', name: 'English', credits: 4, description: 'Reading, writing, grammar, and literature.' },
    ],
  },
  {
    grade: '10',
    label: '10th Grade',
    credits: 24,
    subjects: [
      { code: 'MTH10', name: 'Mathematics', credits: 4, description: 'Functions, graphs, and analytical problem solving.' },
      { code: 'PHY10', name: 'Physics', credits: 4, description: 'Energy, electricity, and experimental design.' },
      { code: 'CHE10', name: 'Chemistry', credits: 4, description: 'Chemical reactions and practical chemistry.' },
      { code: 'BIO10', name: 'Biology', credits: 4, description: 'Genetics, tissues, and systems of life.' },
      { code: 'GEO10', name: 'Geography', credits: 4, description: 'Earth systems, climate, and maps.' },
      { code: 'LIT10', name: 'Literature', credits: 4, description: 'Analytical reading of literature and writing.' },
    ],
  },
  {
    grade: '11',
    label: '11th Grade',
    credits: 24,
    subjects: [
      { code: 'ALG11', name: 'Algebra', credits: 4, description: 'Advanced algebraic thinking and pattern analysis.' },
      { code: 'GEO11', name: 'Geometry', credits: 4, description: 'Proofs, angles, shapes, and spatial reasoning.' },
      { code: 'PHY11', name: 'Physics', credits: 4, description: 'Advanced mechanics and experimental methods.' },
      { code: 'CHE11', name: 'Chemistry', credits: 4, description: 'Organic chemistry and analytical study.' },
      { code: 'ECO11', name: 'Economics', credits: 4, description: 'Markets, decisions, and economic systems.' },
      { code: 'SOC11', name: 'Sociology', credits: 4, description: 'Social structure, institutions, and human behavior.' },
    ],
  },
  {
    grade: '12',
    label: '12th Grade',
    credits: 24,
    subjects: [
      { code: 'MTH12', name: 'Mathematics', credits: 4, description: 'Advanced problem solving and exam preparation.' },
      { code: 'PHY12', name: 'Physics', credits: 4, description: 'Lab-intensive and theoretical physics study.' },
      { code: 'CHE12', name: 'Chemistry', credits: 4, description: 'Practical chemistry and applied laboratory work.' },
      { code: 'BIO12', name: 'Biology', credits: 4, description: 'Genetics, research, and applied biology.' },
      { code: 'LAW12', name: 'Law', credits: 4, description: 'Legal systems, rights, and citizenship.' },
      { code: 'POL12', name: 'Politics', credits: 4, description: 'Government, institutions, and public policy.' },
    ],
  },
];

export const academicSummary = {
  yearLevels: 4,
  subjectsPerGrade: 6,
  totalCreditsPerGrade: 24,
};

export const courses = [
  {
    id: 'ui-design-fundamentals',
    title: 'UI Design Fundamentals',
    level: 'Beginner',
    duration: '4 weeks',
    description: 'Learn visual hierarchy, color systems, wireframing, and usable interface decisions.',
    progress: 72,
    tags: ['Design', 'UI', 'UX'],
  },
  {
    id: 'ai-for-students',
    title: 'AI for Students',
    level: 'Intermediate',
    duration: '6 weeks',
    description: 'Understand AI concepts, prompt strategies, and practical applications in study workflows.',
    progress: 46,
    tags: ['AI', 'Productivity'],
  },
  {
    id: 'product-thinking',
    title: 'Product Thinking',
    level: 'Intermediate',
    duration: '3 weeks',
    description: 'Build user-centered products through research, problem framing, and rapid prototyping.',
    progress: 58,
    tags: ['Product', 'Research'],
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis Essentials',
    level: 'Advanced',
    duration: '5 weeks',
    description: 'Interpret dashboards, spot trends, and convert raw data into actionable insights.',
    progress: 35,
    tags: ['Data', 'Analytics'],
  },
];

export const dashboardStats = [
  { label: 'Current streak', value: '12 days' },
  { label: 'Courses completed', value: '3/8' },
  { label: 'Average quiz score', value: '89%' },
  { label: 'AI tutor sessions', value: '19' },
];

export const studyPlan = [
  'Review visual hierarchy notes from Module 2',
  'Practice 3 quick design critiques using the rubric',
  'Submit AI reflection journal before Friday',
  'Complete the product research checkpoint',
  'Schedule a 15-minute review with the AI tutor',
];

export const learningInsights = [
  {
    title: 'Strengths',
    items: ['Good consistency in weekly activity', 'Strong understanding of product goals', 'Strong reflection quality in submissions'],
  },
  {
    title: 'Focus areas',
    items: ['Improve data interpretation speed', 'Add more design rationale in final submissions', 'Increase time spent on problem-framing exercises'],
  },
];

export type Course = (typeof courses)[number];

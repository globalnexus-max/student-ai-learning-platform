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
      { code: 'MTH9', name: 'Mathematics', credits: 4, description: 'Algebra, equations, and numerical reasoning.' },
      { code: 'PHY9', name: 'Physics', credits: 4, description: 'Motion, forces, and scientific observation.' },
      { code: 'CHE9', name: 'Chemistry', credits: 4, description: 'Atoms, reactions, and laboratory basics.' },
      { code: 'BIO9', name: 'Biology', credits: 4, description: 'Cells, systems, and life sciences.' },
      { code: 'HIS9', name: 'History', credits: 4, description: 'World history and civilization foundations.' },
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
      { code: 'BIO10', name: 'Biology', credits: 4, description: 'Genetics, physiology, and systems of life.' },
      { code: 'GEO10', name: 'Geography', credits: 4, description: 'Earth systems, maps, and climate.' },
      { code: 'LIT10', name: 'Literature', credits: 4, description: 'Reading and interpreting literary works.' },
    ],
  },
  {
    grade: '11',
    label: '11th Grade',
    credits: 24,
    subjects: [
      { code: 'ALG11', name: 'Algebra', credits: 4, description: 'Advanced algebra and pattern analysis.' },
      { code: 'GEO11', name: 'Geometry', credits: 4, description: 'Proofs, shapes, and spatial reasoning.' },
      { code: 'PHY11', name: 'Physics', credits: 4, description: 'Advanced mechanics and experiments.' },
      { code: 'CHE11', name: 'Chemistry', credits: 4, description: 'Analytical chemistry and reaction systems.' },
      { code: 'ECO11', name: 'Economics', credits: 4, description: 'Markets, decisions, and economic systems.' },
      { code: 'SOC11', name: 'Sociology', credits: 4, description: 'Society, institutions, and social behavior.' },
    ],
  },
  {
    grade: '12',
    label: '12th Grade',
    credits: 24,
    subjects: [
      { code: 'MTH12', name: 'Mathematics', credits: 4, description: 'Advanced problem solving and exam prep.' },
      { code: 'PHY12', name: 'Physics', credits: 4, description: 'Lab and theory-based science study.' },
      { code: 'CHE12', name: 'Chemistry', credits: 4, description: 'Applied chemistry and research methods.' },
      { code: 'BIO12', name: 'Biology', credits: 4, description: 'Advanced biology and applied life sciences.' },
      { code: 'LAW12', name: 'Law', credits: 4, description: 'Legal systems, rights, and civic understanding.' },
      { code: 'POL12', name: 'Politics', credits: 4, description: 'Government, public policy, and institutions.' },
    ],
  },
];

export const academicSummary = {
  yearLevels: 4,
  subjectsPerGrade: 6,
  totalCreditsPerGrade: 24,
};

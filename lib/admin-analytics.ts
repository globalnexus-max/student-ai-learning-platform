export type StudentHealth = {
  student: string;
  course: string;
  status: 'On track' | 'Needs support' | 'Excellent' | 'Risk';
  completion: number;
  streak: number;
  riskScore: number;
  aiSummary: string;
};

export async function getAdminAnalytics(): Promise<StudentHealth[]> {
  return [
    {
      student: 'Nargiz A.',
      course: 'AI for Students',
      status: 'On track',
      completion: 78,
      streak: 12,
      riskScore: 26,
      aiSummary: 'Strong reflection pattern and consistent weekly engagement. Continue on current pathway.',
    },
    {
      student: 'Samir M.',
      course: 'Product Thinking',
      status: 'Needs support',
      completion: 64,
      streak: 6,
      riskScore: 61,
      aiSummary: 'Needs a simpler task breakdown and stronger instructional scaffolding before the next checkpoint.',
    },
    {
      student: 'Leyla R.',
      course: 'UI Design Fundamentals',
      status: 'Excellent',
      completion: 90,
      streak: 15,
      riskScore: 12,
      aiSummary: 'Very strong progress with excellent consistency and practical design thinking performance.',
    },
    {
      student: 'Ramin K.',
      course: 'Data Analysis Essentials',
      status: 'Risk',
      completion: 41,
      streak: 3,
      riskScore: 81,
      aiSummary: 'Needs immediate intervention: focus on fundamentals, then re-run the analysis checklist.',
    },
  ];
}

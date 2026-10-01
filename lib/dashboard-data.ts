export type DashboardMetric = {
  label: string;
  value: string;
};

export type DashboardInsightGroup = {
  title: string;
  items: string[];
};

export type DashboardData = {
  metrics: DashboardMetric[];
  studyPlan: string[];
  insights: DashboardInsightGroup[];
  courses: Array<{
    id: string;
    title: string;
    level: string;
    duration: string;
    description: string;
    progress: number;
    tags: string[];
  }>;
};

export async function getDashboardData(): Promise<DashboardData> {
  return {
    metrics: [
      { label: 'Current streak', value: '12 days' },
      { label: 'Courses completed', value: '3/8' },
      { label: 'Average quiz score', value: '89%' },
      { label: 'AI tutor sessions', value: '19' },
    ],
    studyPlan: [
      'Review visual hierarchy notes from Module 2',
      'Practice 3 quick design critiques using the rubric',
      'Submit AI reflection journal before Friday',
      'Complete the product research checkpoint',
      'Schedule a 15-minute review with the AI tutor',
    ],
    insights: [
      {
        title: 'Strengths',
        items: [
          'Good consistency in weekly activity',
          'Strong understanding of product goals',
          'Strong reflection quality in submissions',
        ],
      },
      {
        title: 'Focus areas',
        items: [
          'Improve data interpretation speed',
          'Add more design rationale in final submissions',
          'Increase time spent on problem-framing exercises',
        ],
      },
    ],
    courses: [
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
    ],
  };
}

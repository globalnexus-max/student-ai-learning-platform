export type TutorProfile = {
  name?: string;
  topic?: string;
  strengths?: string[];
  weaknesses?: string[];
};

export type TutorRecommendation = {
  recommendation: string;
  actionPlan: string[];
  generatedLesson: {
    title: string;
    summary: string;
  };
};

export async function generateAdaptiveRecommendation(profile: TutorProfile): Promise<TutorRecommendation> {
  const topic = profile.topic || 'learning workflow';
  const strengths = profile.strengths && profile.strengths.length ? profile.strengths : ['consistency'];
  const weaknesses = profile.weaknesses && profile.weaknesses.length ? profile.weaknesses : ['focus'];

  return {
    recommendation: `${profile.name || 'Student'} should prioritize ${weaknesses[0]} while reinforcing ${strengths[0]} in ${topic}.`,
    actionPlan: [
      `Review the essentials of ${topic} for 20 minutes.`,
      `Complete one practical exercise using your strongest skill: ${strengths[0]}.`,
      `Write a short reflection to improve ${weaknesses[0]} before the next checkpoint.`,
    ],
    generatedLesson: {
      title: `Adaptive lesson: ${topic}`,
      summary: `This lesson helps the learner improve ${weaknesses[0]} while using their natural strength in ${strengths[0]}.`,
    },
  };
}

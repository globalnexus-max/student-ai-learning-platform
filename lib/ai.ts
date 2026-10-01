export type RecommendationProfile = {
  name?: string;
  topic?: string;
  strengths?: string[];
  weaknesses?: string[];
};

const fallback = (profile: RecommendationProfile) => {
  const topic = profile.topic || 'learning workflow';
  const strengths = profile.strengths && profile.strengths.length ? profile.strengths : ['consistency'];
  const weaknesses = profile.weaknesses && profile.weaknesses.length ? profile.weaknesses : ['focus'];

  return {
    recommendation: `${profile.name || 'Student'} should prioritize ${weaknesses[0]} while reinforcing ${strengths[0]} in ${topic}.`,
    actionPlan: [
      `Review the essentials of ${topic} for 20 minutes.`,
      `Complete one hands-on practice using your strongest skill: ${strengths[0]}.`,
      `Reflect on your result and re-run the task with a stronger focus on ${weaknesses[0]}.`,
    ],
    generatedLesson: {
      title: `Adaptive lesson: ${topic}`,
      summary: `This lesson uses your strengths in ${strengths[0]} to improve ${weaknesses[0]}.`,
    },
  };
};

export async function generateAdaptiveRecommendation(profile: RecommendationProfile) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return fallback(profile);
  }

  try {
    const { default: OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });

    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are an adaptive educational coach. Give a concise recommendation and a 3-step action plan based on strengths and weak areas.',
        },
        {
          role: 'user',
          content: JSON.stringify(profile),
        },
      ],
      temperature: 0.7,
    });

    const content = completion.choices[0]?.message?.content;

    if (!content) {
      return fallback(profile);
    }

    return {
      recommendation: content.trim(),
      actionPlan: [
        'Review the concept in short form',
        'Apply one practice task using your strongest skill',
        'Summarize what you learned and ask for the next challenge',
      ],
      generatedLesson: {
        title: 'AI-generated adaptive lesson',
        summary: 'Personalized lesson based on current understanding and learning gaps.',
      },
    };
  } catch (error) {
    console.error('AI generation failed', error);
    return fallback(profile);
  }
}

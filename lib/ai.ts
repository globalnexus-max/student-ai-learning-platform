type StudentProfile = {
  name?: string;
  topic?: string;
  strengths?: string[];
  weaknesses?: string[];
};

const buildFallbackPlan = ({ name, topic, strengths, weaknesses }: StudentProfile) => {
  const resolvedTopic = topic || 'learning strategy';
  const resolvedStrengths = strengths?.length ? strengths : ['consistency'];
  const resolvedWeaknesses = weaknesses?.length ? weaknesses : ['focus'];

  return {
    recommendation: `${name || 'Student'} should prioritize ${resolvedWeaknesses[0]} and build on ${resolvedStrengths[0]} while practicing ${resolvedTopic}.`,
    actionPlan: [
      `Review the fundamentals of ${resolvedTopic} for 20 minutes.`,
      `Complete one applied exercise that uses ${resolvedStrengths[0]}.`,
      `Write a short reflection and ask the tutor to generate the next challenge.`,
    ],
    generatedLesson: {
      title: `Adaptive lesson: ${resolvedTopic}`,
      summary: `This lesson strengthens ${resolvedWeaknesses[0]} while reinforcing ${resolvedStrengths[0]}.`,
    },
  };
};

export async function generateAdaptiveRecommendation(profile: StudentProfile) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return buildFallbackPlan(profile);
  }

  try {
    const { default: OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are an adaptive learning coach. Suggest a short study plan, prioritize weak areas, and reinforce strengths.',
        },
        {
          role: 'user',
          content: JSON.stringify(profile),
        },
      ],
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content;

    if (!content) {
      return buildFallbackPlan(profile);
    }

    return {
      recommendation: content.trim(),
      actionPlan: [
        'Review the fundamentals of the target topic',
        'Apply one practical exercise',
        'Check your understanding by explaining it aloud',
      ],
      generatedLesson: {
        title: 'AI-generated lesson',
        summary: 'Personalized study guidance generated for the current learning state.',
      },
    };
  } catch (error) {
    console.error('OpenAI generation failed:', error);
    return buildFallbackPlan(profile);
  }
}

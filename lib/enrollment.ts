export type Enrollment = {
  id: string;
  userId: string;
  courseId: string;
  status: 'active' | 'paused' | 'completed';
  enrolledAt: string;
};

export const seededEnrollments: Enrollment[] = [
  {
    id: 'enr-101',
    userId: 'u-student-1',
    courseId: 'ui-design-fundamentals',
    status: 'active',
    enrolledAt: '2026-10-01T08:00:00.000Z',
  },
  {
    id: 'enr-102',
    userId: 'u-student-1',
    courseId: 'ai-for-students',
    status: 'active',
    enrolledAt: '2026-10-01T08:10:00.000Z',
  },
  {
    id: 'enr-103',
    userId: 'u-student-1',
    courseId: 'product-thinking',
    status: 'paused',
    enrolledAt: '2026-10-01T08:20:00.000Z',
  },
];

export async function getEnrollmentsForUser(userId: string) {
  return seededEnrollments.filter((enrollment) => enrollment.userId === userId);
}

export async function enrollUserToCourse(userId: string, courseId: string) {
  const exists = seededEnrollments.some(
    (enrollment) => enrollment.userId === userId && enrollment.courseId === courseId,
  );

  if (exists) {
    return { ok: true, message: 'Already enrolled in this course.' };
  }

  seededEnrollments.push({
    id: `enr-${Date.now()}`,
    userId,
    courseId,
    status: 'active',
    enrolledAt: new Date().toISOString(),
  });

  return { ok: true, message: 'Enrollment successful.' };
}

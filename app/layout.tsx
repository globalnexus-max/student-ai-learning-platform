import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Student AI Learning Platform',
  description: 'Adaptive student learning platform powered by AI feedback and progress tracking.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

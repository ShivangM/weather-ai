import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Weather AI',
  description:
    'Weather AI is a state-of-the-art weather application that utilizes the latest technologies, including GPT-4, GraphQL, Next.js 13, Tremor, and StepZen, to provide you with accurate and up-to-date weather information. With Weather AI, you can easily check the weather forecast for any city in the world and get a detailed summary of the current weather conditions, including temperature, humidity, wind speed, and precipitation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

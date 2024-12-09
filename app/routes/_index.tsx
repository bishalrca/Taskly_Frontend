// app/routes/index.tsx
import Navbar from '~/components/Navbar';
import Banner from '~/components/Banner';
import MainContent from '~/components/MainContent';
import Footer from '~/components/Footer';
import { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => {
    return [
      { title: "Taskly" },
      { name: "description", content: "Welcome to Taskly!" },
    ];
  };

export default function Home() {
  return (
    <div>
      <Navbar />

      <Banner />

      <MainContent />

      <Footer />
    </div>
  );
}

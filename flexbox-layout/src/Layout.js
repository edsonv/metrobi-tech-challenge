import { ExtraContent } from './components/Extra';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Main } from './components/Main';
import { RelatedImages } from './components/RelatedImages';
import { RelatedPost } from './components/RelatedPosts';
import { Sidebar } from './components/Sidebar';

export const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', gap: '10px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            gap: '15px',
          }}
        >
          <Hero />
          <Sidebar />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            gap: '15px',
          }}
        >
          <Main />
          <ExtraContent />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <RelatedImages />
        <RelatedPost />
      </div>
      <Footer />
    </>
  );
};

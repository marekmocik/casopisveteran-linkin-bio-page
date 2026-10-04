import ProfileHeader from "@/components/ProfileHeader";
import ArticleList from "@/components/ArticleList";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background glow effect */}
      <div 
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'var(--gradient-glow)' }}
      />
      
      <main className="relative z-10 max-w-md mx-auto">
        <ProfileHeader />
        <ArticleList />
        <Footer />
      </main>
    </div>
  );
};

export default Index;

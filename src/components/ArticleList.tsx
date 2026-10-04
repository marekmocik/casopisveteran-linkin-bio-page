import { useQuery } from "@tanstack/react-query";
import ArticleCard from "./ArticleCard";
import { Loader2 } from "lucide-react";

interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  description?: string;
  thumbnail?: string;
}

const RSS_FEED_URL = "https://www.casopisveteran.sk/feed";

const parseRSSFeed = async (): Promise<RSSItem[]> => {
  // Using a CORS proxy to fetch the RSS feed
  const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_FEED_URL)}`;
  
  const response = await fetch(proxyUrl);
  const data = await response.json();
  
  if (data.status !== 'ok') {
    throw new Error('Failed to fetch RSS feed');
  }
  
  return data.items.map((item: any) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    description: item.description,
    thumbnail: item.thumbnail || item.enclosure?.link,
  }));
};

const ArticleList = () => {
  const { data: articles, isLoading, error } = useQuery({
    queryKey: ['rss-feed'],
    queryFn: parseRSSFeed,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="w-8 h-8 text-primary animate-spin mb-3" />
        <p className="text-muted-foreground text-sm">Načítavam články...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 px-4">
        <p className="text-muted-foreground text-sm">
          Nepodarilo sa načítať články. Skúste to neskôr.
        </p>
      </div>
    );
  }

  return (
    <section className="px-4 pb-8">
      <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4 px-1">
        Najnovšie články
      </h2>
      <div className="flex flex-col gap-3">
        {articles?.slice(0, 10).map((article, index) => (
          <ArticleCard
            key={article.link}
            title={article.title}
            link={article.link}
            pubDate={article.pubDate}
            description={article.description}
            thumbnail={article.thumbnail}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleList;

import { ArrowUpRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  link: string;
  pubDate: string;
  description?: string;
  thumbnail?: string;
  index: number;
}

const ArticleCard = ({ title, link, pubDate, thumbnail, index }: ArticleCardProps) => {
  const formattedDate = new Date(pubDate).toLocaleDateString('sk-SK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <article className="relative p-3 rounded-xl bg-card border border-border card-hover overflow-hidden shadow-sm">
        <div className="flex gap-4 items-center">
          {/* Thumbnail */}
          {thumbnail && (
            <div className="flex-shrink-0 w-28 h-28 rounded-lg overflow-hidden bg-muted">
              <img 
                src={thumbnail} 
                alt="" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          )}
          
          <div className="flex-1 min-w-0 flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="font-heading font-medium text-foreground text-base leading-snug group-hover:text-primary transition-colors line-clamp-3">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{formattedDate}</p>
            </div>
            
            <div className="flex-shrink-0 p-2 rounded-full bg-secondary group-hover:bg-primary transition-colors">
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </div>
          </div>
        </div>
        
        {/* Gradient accent line on hover */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
      </article>
    </a>
  );
};

export default ArticleCard;

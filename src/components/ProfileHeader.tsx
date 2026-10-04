import { Instagram, Globe, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const ProfileHeader = () => {
  return (
    <header className="flex flex-col items-center text-center py-8 px-4">
      {/* Logo */}
      <div className="relative mb-6">
        <img 
          src={logo} 
          alt="Časopis Veterán" 
          className="h-16 w-auto"
        />
      </div>

      {/* Name & Bio */}
      <h1 className="text-2xl font-heading font-semibold text-foreground mb-2">
        Časopis Veterán
      </h1>
      <p className="text-muted-foreground text-sm max-w-xs mb-4">
        Najnovšie články o veteránoch, historických vozidlách a automobilovej kultúre
      </p>

      {/* Social Links */}
      <div className="flex gap-3">
        <a
          href="https://www.casopisveteran.sk"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
          aria-label="Website"
        >
          <Globe className="w-5 h-5" />
        </a>
        <a
          href="https://www.facebook.com/vintagedistrictmagazine"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href="https://www.instagram.com/vintagedistrictmagazine/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://www.youtube.com/@VintageDistrictSkMagazine"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
          aria-label="YouTube"
        >
          <Youtube className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/casopisveteran"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
          aria-label="X"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default ProfileHeader;

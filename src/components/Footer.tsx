const footerLinks = {
  Product: ["Features", "Pricing", "Launcher", "Changelog"],
  Company: ["About", "Blog", "Careers"],
  Resources: ["Docs", "API", "Status"],
  Legal: ["Privacy", "Terms"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-foreground flex items-center justify-center">
                <span className="text-background text-xs font-medium">R</span>
              </div>
              <span className="font-medium">Reach</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              Infrastructure for Minecraft creators.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-medium mb-4">{category}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Reach</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

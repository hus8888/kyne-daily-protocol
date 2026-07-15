import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface/60 py-16">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
          <div>
            <div className="text-2xl font-semibold tracking-tightest">KYNE</div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Engineered protocols for daily performance and recovery.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 text-sm sm:grid-cols-4">
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Shop
              </div>
              <Link className="block text-foreground/80 hover:text-foreground" to="/bundles">Bundles</Link>
              <Link className="block text-foreground/80 hover:text-foreground" to="/compare">Compare</Link>
              <Link className="block text-foreground/80 hover:text-foreground" to="/ingredients">Ingredients</Link>
              <Link className="block text-foreground/80 hover:text-foreground" to="/quiz">Find your protocol</Link>
            </div>
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Company
              </div>
              <Link className="block text-foreground/80 hover:text-foreground" to="/about">About</Link>
              <Link className="block text-foreground/80 hover:text-foreground" to="/science">Science</Link>
              <Link className="block text-foreground/80 hover:text-foreground" to="/quality">Quality</Link>
              <Link className="block text-foreground/80 hover:text-foreground" to="/reviews">Reviews</Link>
              <Link className="block text-foreground/80 hover:text-foreground" to="/impact">Impact</Link>
              <Link className="block text-foreground/80 hover:text-foreground" to="/contact">Contact</Link>
            </div>
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Support
              </div>
              <Link className="block text-foreground/80 hover:text-foreground" to="/track">Track order</Link>
              <Link className="block text-foreground/80 hover:text-foreground" to="/shipping">Shipping</Link>
              <Link className="block text-foreground/80 hover:text-foreground" to="/returns">Returns</Link>
              <Link className="block text-foreground/80 hover:text-foreground" to="/ambassador">Ambassador</Link>
              <Link className="block text-foreground/80 hover:text-foreground" to="/refer">Refer a friend</Link>
            </div>
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Legal
              </div>
              <Link className="block text-foreground/80 hover:text-foreground" to="/terms">Terms</Link>
              <Link className="block text-foreground/80 hover:text-foreground" to="/privacy">Privacy</Link>
              <Link className="block text-foreground/80 hover:text-foreground" to="/cookies">Cookies</Link>
              <Link className="block text-foreground/80 hover:text-foreground" to="/accessibility">Accessibility</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} KYNE Protocol Inc. All rights reserved.</span>
          <span className="font-mono uppercase tracking-[0.25em]">PEPI™ delivery system</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
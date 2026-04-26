const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
          <div>
            <div className="text-2xl font-semibold tracking-tightest">KYNE</div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Engineered protocols for daily performance and recovery.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-12 text-sm">
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                System
              </div>
              <a className="block text-foreground/80 hover:text-foreground" href="#system">Signal</a>
              <a className="block text-foreground/80 hover:text-foreground" href="#system">Shift</a>
              <a className="block text-foreground/80 hover:text-foreground" href="#system">Rhythm</a>
            </div>
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Company
              </div>
              <a className="block text-foreground/80 hover:text-foreground" href="#">Science</a>
              <a className="block text-foreground/80 hover:text-foreground" href="#">Journal</a>
              <a className="block text-foreground/80 hover:text-foreground" href="#">Contact</a>
            </div>
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Legal
              </div>
              <a className="block text-foreground/80 hover:text-foreground" href="#">Terms</a>
              <a className="block text-foreground/80 hover:text-foreground" href="#">Privacy</a>
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
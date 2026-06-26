import React from 'react';
import LoginForm from '../components/features/login/login-form';

import { LockKeyholeIcon, ShieldCheckIcon } from 'lucide-react';

const LoginPage: React.FC = () => {
  return (
    <div className="h-screen overflow-hidden grid grid-cols-1 md:grid-cols-2">
      <div className="bg-accent relative overflow-hidden flex flex-col justify-between p-18 text-left">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-accent" />

        <div className="relative z-10 h-12 flex items-center">
          <img src="/logo.svg" alt="Eunisell Chemicals" className="h-full w-auto brightness-0 invert" />
        </div>

        <div className="relative z-10 flex flex-col gap-6 max-w-130">
          <div className="flex flex-col gap-3">
            <p className="text-[14px] uppercase tracking-[0.7px] text-secondary">Secure Management Portal</p>
            <h1 className="text-[48px] leading-15 text-white">
              Secure Access to
              <br />
              Website Management
            </h1>
          </div>
          <p className="text-[18px] leading-[29.25px] text-[#cbd5e1]">
            Manage website content, Knowledge Centre resources, enquiries, notifications, career openings, and media assets from one secure admin dashboard.
          </p>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-md p-4 w-fit">
            <ShieldCheckIcon size={20} className="text-secondary shrink-0" />
            <span className="text-[16px] leading-6 text-white">Authorized personnel only.</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-3">
          <LockKeyholeIcon size={14} className="text-popover-foreground shrink-0" />
          <span className="text-[14px] leading-5 text-popover-foreground">Enterprise-grade 256-bit SSL Encryption Active</span>
        </div>
      </div>

      <div className="bg-white flex flex-col items-center p-8 overflow-y-auto">
        <div className="w-full max-w-120 flex flex-col gap-8 my-auto">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-3xl leading-9 text-[#333]">Welcome Back</h2>
            <p className="text-base leading-6 text-card-foreground">Sign in to continue to the Eunisell Chemicals Admin Dashboard.</p>
          </div>

          <LoginForm />

          <div className="flex flex-col gap-6">
            <p className="text-[14px] leading-5 text-card-foreground text-center">
              Need access?{' '}
              <a href="mailto:it@eunisell.com" className="text-secondary underline underline-offset-2 hover:text-secondary/80 transition-colors">
                Contact your system administrator.
              </a>
            </p>

            <div className="border-t border-[#d2d2d2] pt-6 flex flex-col gap-3">
              <p className="text-[12px] leading-[19.5px] text-card-foreground text-center">
                This portal is restricted to authorized Eunisell Chemicals administrators. Unauthorized access attempts are logged and may be subject to legal action.
              </p>

              <div className="flex items-center justify-center gap-6">
                {footnotes.map((footnote) => (
                  <button key={footnote} type="button" className="text-[11px] uppercase tracking-[-0.55px] text-card-foreground hover:text-accent transition-colors">
                    {footnote}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const footnotes = ['Privacy Policy', 'Security Standards', 'System Status'];

export default LoginPage;

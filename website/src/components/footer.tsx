import { Logo } from './logos';

export const Footer = () => {
  return (
    <div className="w-full">
      <div className="mb-4">
        <Logo />
      </div>
      <div className="font-mono text-sm font-medium">
        © {new Date().getFullYear()} Algorithm, All rights reserved.
      </div>
    </div>
  );
};

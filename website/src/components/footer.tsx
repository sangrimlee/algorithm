import { Logo } from './logo';

export const Footer = () => {
  return (
    <div className="nx-w-full">
      <div className="nx-mb-4">
        <Logo />
      </div>
      <div className="nx-text-sm nx-font-medium nx-font-mono">
        © {new Date().getFullYear()} Algorithm, All rights reserved.
      </div>
    </div>
  );
};

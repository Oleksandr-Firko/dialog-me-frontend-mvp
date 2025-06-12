import { Link } from 'react-router';
import Badge from './ui/badge';

export default function Header() {
  const navItems = [
    { name: 'Text Chat', path: '/text-chat', soon: false },
    { name: 'Video Chat', path: '/video-chat', soon: true },
    { name: 'Voice Chat', path: '/voice-chat', soon: true },
    { name: 'About us', path: '/about-us', soon: true },
  ];
  return (
    <header className="h-[60px] flex flex-row items-center justify-around shadow-lg">
      <div className="w-[60%] flex flex-row items-center justify-between">
        <div className="text-3xl blogger-sans-700">Dialog.me</div>
        <nav className="flex flex-row items-center gap-8">
          {navItems.map(({ path, name, soon }) => (
            <div>
              <Link className="hover:text-shadow-lg" key={`nav-${path}`} to={path}>
                {name}
              </Link>
              {soon && <Badge label="soon" style="default" size="xs" className="relative -top-2" />}
            </div>
          ))}
        </nav>
        <div></div>
      </div>
    </header>
  );
}

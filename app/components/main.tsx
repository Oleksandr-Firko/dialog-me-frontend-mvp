import { useNavigate } from 'react-router';
import Button from './ui/button';

export default function Main() {
  const navigate = useNavigate();
  const buttons = [
    { label: 'Start text chat', path: '/text-chat', iconUrl: 'icons/pen-line.png', soon: false },
    { label: 'Start video chat', path: '/video-chat', iconUrl: 'icons/camera.png', soon: false },
    { label: 'Start voice chat', path: '/voice-chat', iconUrl: 'icons/mic.png', soon: false },
  ];

  const handleButtonClick = (path: string) => {
    navigate(path);
  };

  return (
    <main className="flex-1 flex flex-row mx-auto w-[60%] gap-2 & > *:flex-1 relative">
      <div className="flex flex-col justify-center items-start gap-4 z-20">
        <h1 className="text-[42px]">
          {' '}
          <span className="font-bold blogger-sans-900 text-lime-500">Dialog.me</span> - Chat and Meet New People!
        </h1>
        <p className="text-xl">
          Meet interesting people. Real talk, straight answers. No clichés or social templates. Unlimited opportunities
          to connect!
        </p>
        <div className="flex flex-row">
          {buttons.map(({ label, path, iconUrl, soon }) => (
            <div className="flex flex-row" key={path}>
              <Button
                label={label}
                action={() => handleButtonClick(path)}
                outline={true}
                disabled={soon}
                style="default"
                className="mr-2"
                imgUrl={iconUrl}
                imgPosition="left"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="h-full relative overflow-visible z-10">
        <img
          className="absolute top-[30%] left-[-20%] scale-[1.8] z-0"
          src="images/main_pg_sph_bg.svg"
          alt="main page background under girl image"
        />
        <img className="absolute bottom-0 h-[85%] z-10" src="images/main_page_img.png" alt="main page girl image" />
      </div>
    </main>
  );
}

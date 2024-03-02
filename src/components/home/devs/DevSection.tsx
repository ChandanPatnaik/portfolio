import { LightSwitch } from "@/components/common";
import { useSpotLight, useTorch } from "@/hooks";
import AboutBlock from "./DevBlock";
import DevTimeLine from "./DevTimeLine";
import ResponsiveDevBlock from "./ResponsiveDevBlock";

const DevSection = () => {
  const { isTorchOn, setIsTorchOn } = useTorch();
  const { backgroundStyle } = useSpotLight({});

  return (
    <section
      style={isTorchOn ? backgroundStyle : {}}
      id="about"
      className="bg-dark-blue"
    >
      <div className="w-full scroll-m-10 relative flex items-center justify-center overflow-hidden main-container">
        {isTorchOn && (
          <div className="left-10 text-xl font-semibold top-4 absolute w-fit text-dark-blue">
            I am a loop that can be endless, yet I always have an exit. What am
            I?
          </div>
        )}
        {isTorchOn && (
          <div className="right-1/3 text-2xl font-semibold bottom-1/3 absolute text-dark-blue">
            while loop.
          </div>
        )}
        {isTorchOn && (
          <div className="left-0 text-xl font-semibold bottom-40 rotate-90 absolute text-dark-blue">
            17 Jan 2000
          </div>
        )}
        {isTorchOn && (
          <div className="right-20 text-xl font-semibold bottom-40 rotate-90 absolute text-dark-blue">
            21 Dec 2022
          </div>
        )}
        {isTorchOn && (
          <div className="right-24 text-xl font-semibold top-40 rotate-90 absolute text-dark-blue">
            Books
          </div>
        )}

        <div className="md:block hidden absolute right-5 top-5">
          <div className="bg-milk/20 pl-5 py-1 rounded-full flex items-center justify-center w-fit h-fit">
            <LightSwitch
              checked={isTorchOn}
              onChange={() => setIsTorchOn(!isTorchOn)}
            />
          </div>
        </div>
        <div className="w-full md:w-4/5 lg:w-2/3 h-full flex items-center relative">
          <DevTimeLine />
          <div className="py-8 md:py-12 flex flex-col gap-6 md:gap-8 w-fit h-fit relative pl-6 md:pl-8">
            <div className="text-base font-light text-white/60 tracking-wide">{`For Devs />`}</div>
            <AboutBlock />
            <ResponsiveDevBlock />
          </div>
        </div>
      </div>
    </section>
  );
};
export default DevSection;

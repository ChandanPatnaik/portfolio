import TrackIconRender from "./TrackIconRender";
import TrackTimeLine from "./TrackTimeLine";

const TrackSection = () => {
  return (
    <section className="bg-dark-slate">
      <div className="w-full scroll-mt-16 md:scroll-m-10 relative flex items-center justify-center overflow-hidden main-container">
        <div className="w-full md:w-4/5 lg:w-2/3 h-[10vh] flex items-center relative">
          <TrackTimeLine />
          <TrackIconRender />
        </div>
      </div>
    </section>
  );
};

export default TrackSection;

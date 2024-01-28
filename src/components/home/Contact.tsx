const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex items-center justify-center overflow-hidden bg-dark-slate shadow-[0_0_76px_0_rgba(10,7,22,0.004)]"
    >
      <div className="w-4/5 md:w-3/5 h-full flex items-center relative">
        <TimeLine />
        <div className="py-20 flex flex-col gap-8 w-fit h-fit relative pl-8">
          <div className="text-base font-light text-white/40 tracking-wide">{`Contact />`}</div>
          {/* <AboutBlock /> */}
        </div>
      </div>
    </section>
  );
};
export default Contact;

const TimeLine = () => {
  return (
    <div className="absolute flex flex-col items-center top-0 left-0 h-[400%] w-4">
      <div className="w-0.5 h-[5.5rem] bg-light-yellow"></div>
      <div className="w-2 h-2 border border-light-yellow rounded-full bg-transparent"></div>
      <div className="w-0.5 h-[calc(100%-6rem)] bg-light-yellow"></div>
    </div>
  );
};

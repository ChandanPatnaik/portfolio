"use client";
const About = () => {
  return (
    <section className="w-full flex items-center justify-center overflow-hidden bg-dark-blue">
      <div className="w-3/5 h-full flex items-center relative">
        <TimeLine />
        <div className="py-20 flex flex-col gap-8 w-fit h-fit relative pl-8">
          <div className="text-base font-light text-white/40 tracking-wide">{`About />`}</div>
          <AboutBlock />
        </div>
      </div>
    </section>
  );
};
export default About;

const TimeLine = () => {
  return (
    <div className="absolute flex flex-col items-center top-0 left-0 h-[400%] w-4">
      <div className="w-0.5 h-[5.5rem] bg-light-yellow"></div>
      <div className="w-2 h-2 border border-light-yellow rounded-full bg-transparent"></div>
      <div className="w-0.5 h-[calc(100%-6rem)] bg-light-yellow"></div>
    </div>
  );
};

const AboutBlock = () => {
  return (
    <section className="flex flex-col">
      {/* --------------- class section ------------ */}
      <div className="flex items-center gap-2 tracking-wide">
        <p className="text-red-600">export</p>
        <p className="text-red-600">default</p>
        <p className="text-red-600">class</p>
        <div className="flex items-center">
          <p className="text-light-yellow">chandan</p>
          <p className="text-light-yellow">Kumar</p>
          <p className="text-light-yellow">Patnaik</p>
        </div>
        <p className="text-milk">{`{`}</p>
      </div>

      {/* --------------- comment section ------------ */}
      <div className="text-milk/40 flex font-normal items-center gap-2">
        <div className="flex items-center' gap-1">
          <p>/</p>
          <p>/</p>
        </div>
        <p>I</p>
        <p>can,</p>
        <p>Because</p>
        <p>I</p>
        <p>did.</p>
      </div>

      {/* --------------- constructor section ------------ */}
      <div className="flex px-4 items-center tracking-wide gap-2">
        <div className="flex items-center">
          <p className="text-red-600">{`constructor`}</p>
          <p className="text-milk font-normal">{`( )`}</p>
        </div>
        <p className="text-milk">{`{`}</p>
      </div>

      {/* --------------- constructor inside section ------------ */}
      <div className=" px-8 flex flex-col">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <p className="text-blue-400">this.</p>
            <p className="text-white">name</p>
          </div>
          <div className="text-red-400">{`=`}</div>
          <div className="text-blue-300">{`'Chandan Kumar Patnaik'`}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <p className="text-blue-400">this.</p>
            <p className="text-white">dayOfBirthTimestamp</p>
          </div>
          <div className="text-red-400">{`=`}</div>
          <div className="text-blue-300">{`948047400`}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <p className="text-blue-400">this.</p>
            <p className="text-white">email</p>
          </div>
          <div className="text-red-400">{`=`}</div>
          <div className="text-blue-300">{`'chandanpatnaik81@gmail.com'`}</div>
        </div>
      </div>

      {/* ------------ bracket close of constructor */}
      <div className=" px-4 text-milk">{`}`}</div>

      {/* --------------- work method section ------------ */}
      <div className="flex px-4 items-center tracking-wide gap-2">
        <div className="flex items-center">
          <p className="text-light-yellow">{`workExperience`}</p>
          <p className="text-milk font-normal">{`( )`}</p>
        </div>
        <p className="text-milk">{`{`}</p>
      </div>

      {/* --------------- work method inside section ------------ */}
      <div className=" px-8 flex flex-col">
        <div className="flex items-center gap-2">
          <p className="text-red-500">{`return`}</p>
          <p className="text-milk">{`[`}</p>
        </div>
        <div className="flex flex-col px-4">
          <div className="flex items-center gap-2">
            <p className="text-milk">{`{`}</p>
            <p className="text-green-400">{`'Jun 2022-now'`}</p>
            <p className="text-green-400">{`:`}</p>
            <p className="text-green-400">{`'Software Developer at SearchingYard Group'`}</p>
            <p className="text-milk">{`},`}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-milk">{`{`}</p>
            <p className="text-green-400">{`'Jun 2022-Nov 2022'`}</p>
            <p className="text-green-400">{`:`}</p>
            <p className="text-green-400">{`'Software Intern at SearchingYard Group'`}</p>
            <p className="text-milk">{`},`}</p>
          </div>
        </div>
        <p className="text-milk">{`]`}</p>
      </div>

      {/* ---------------end of work method inside section ------------ */}
      <p className="px-4 text-milk">{`}`}</p>
    </section>
  );
};

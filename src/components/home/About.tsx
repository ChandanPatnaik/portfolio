"use client";
const About = () => {
  return (
    <section
      id="about"
      className="w-full flex items-center justify-center overflow-hidden bg-dark-blue"
    >
      <div className="w-5/6 md:w-4/5 lg:w-3/5 h-full flex items-center relative">
        <TimeLine />
        <div className="py-8 md:py-12 flex flex-col gap-6 md:gap-8 w-fit h-fit relative pl-6 md:pl-8">
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
      <div className="w-0.5 h-10 md:h-14 bg-light-yellow"></div>
      <div className="w-2 h-2 border border-light-yellow rounded-full bg-transparent"></div>
      <div className="w-0.5 h-[calc(100%-4rem)] bg-light-yellow"></div>
    </div>
  );
};

const AboutBlock = () => {
  return (
    <section className="flex flex-col relative">
      <div className="w-fit h-full absolute top-0 -left-16">
        <div className="flex flex-col text-milk/30 tracking-wide leading-6 text-sm">
          <p className="">01</p>
          <p>02</p>
          <p>03</p>
          <p>04</p>
          <p>05</p>
          <p>06</p>
          <p>07</p>
          <p>08</p>
          <p>09</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p className="opacity-0">17</p>
          <p>18</p>
          <p>19</p>
          <p>20</p>
          <p>21</p>
          <p>22</p>
          <p>23</p>
          <p>24</p>
          <p>25</p>
          <p>26</p>
        </div>
      </div>

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
        <div className="flex items-center gap-1">
          <p>/</p>
          <p>/</p>
        </div>
        <p>Remove</p>
        <p>all</p>
        <p>logs</p>
        <p>from</p>
        <p>my</p>
        <p>code</p>
      </div>
      <div className="text-milk/40 flex font-normal items-center gap-2">
        <div className="flex items-center gap-1">
          <p>/</p>
          <p>/</p>
        </div>
        <p>Constructor</p>
        <p>to</p>
        <p>initialize</p>
        <p>instances</p>
        <p>and</p>
        <p>set</p>
        <p>up</p>
        <p>values</p>
      </div>

      {/* --------------- constructor section ------------ */}
      <div className="px-4 flex flex-col">
        <div className="flex items-center tracking-wide gap-2">
          <div className="flex items-center">
            <p className="text-red-600">{`constructor`}</p>
            <p className="text-milk font-normal">{`( )`}</p>
          </div>
          <p className="text-milk">{`{`}</p>
        </div>

        {/* --------------- constructor inside section ------------ */}
        <div className="px-4 flex flex-col">
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

        <div className="text-milk">{`}`}</div>
      </div>

      {/* --------------- work method section ------------ */}
      <div className="px-4 flex flex-col">
        <div className="flex items-center tracking-wide gap-2">
          <div className="flex items-center">
            <p className="text-light-yellow">{`workExperience`}</p>
            <p className="text-milk font-normal">{`( )`}</p>
          </div>
          <p className="text-milk">{`{`}</p>
        </div>

        <div className=" px-4 flex flex-col">
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

        <p className="text-milk">{`}`}</p>
      </div>

      {/* --------------- education method section ------------ */}
      <div className="px-4 flex flex-col">
        <div className="flex items-center tracking-wide gap-2">
          <div className="flex items-center">
            <p className="text-light-yellow">{`education`}</p>
            <p className="text-milk font-normal">{`( )`}</p>
          </div>
          <p className="text-milk">{`{`}</p>
        </div>

        <div className=" px-4 flex flex-col">
          <div className="flex items-center gap-2">
            <p className="text-red-500">{`return`}</p>
            <p className="text-milk">{`[`}</p>
          </div>
          <div className="flex flex-col pl-4">
            <div className="flex items-center gap-2">
              <p className="text-milk">{`{`}</p>
              <p className="text-green-400">{`'2020-2022'`}</p>
              <p className="text-green-400">{`:`}</p>
              <p className="text-green-400">{`'NIIS Institute of Business Administration - Master of Computer `}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-green-400">{`'Science`}</p>
              <p className="text-milk">{`},`}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-milk">{`{`}</p>
              <p className="text-green-400">{`'2017-2020'`}</p>
              <p className="text-green-400">{`:`}</p>
              <p className="text-green-400">{`'Government College Koraput - Bachelor of Computer Science'`}</p>
              <p className="text-milk">{`},`}</p>
            </div>
          </div>
          <p className="text-milk">{`]`}</p>
        </div>

        <p className="text-milk">{`}`}</p>
      </div>

      {/* --------------- skills method section ------------ */}
      <div className="px-4 flex flex-col">
        <div className="flex items-center tracking-wide gap-2">
          <div className="flex items-center">
            <p className="text-light-yellow">{`skills`}</p>
            <p className="text-milk font-normal">{`( )`}</p>
          </div>
          <p className="text-milk">{`{`}</p>
        </div>

        <div className=" px-4 flex flex-col">
          <div className="flex items-center gap-2">
            <p className="text-red-500">{`return`}</p>
            <p className="text-milk">{`[`}</p>
            <div className="flex items-center gap-2 flex-wrap text-green-400">
              <p className="">{`'HTML/CSS/JS',`}</p>
              <p className="">{`'Tailwind CSS',`}</p>
              <p className="">{`'Material UI',`}</p>
              <p className="">{`'React',`}</p>
              <p className="">{`'Next.js',`}</p>
              <p className="">{`'Formik'`}</p>
              <p className="">{`'Yup',`}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap text-green-400">
            <p className="">{`'Node.js',`}</p>
            <p className="">{`'Express',`}</p>
            <p className="">{`'MongoDB',`}</p>
            <p className="">{`'Mongoose',`}</p>
            <p className="">{`'Prisma',`}</p>
            <p className="">{`'npm/yarn'`}</p>
            <p className="">{`'Typescript',`}</p>
            <p className="">{`'Redis',`}</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap text-green-400">
            <p className="">{`'Git',`}</p>
            <p className="">{`'GitHub',`}</p>
            <p className="">{`'S3',`}</p>
            <p className="">{`'EC2',`}</p>
            <p className="animate-pulse-custom mx-2 bg-milk w-0.5 h-4"></p>
            <p className="text-milk">{`]`}</p>
          </div>
        </div>

        <p className="text-milk">{`}`}</p>
      </div>

      <p className="text-milk">{`}`}</p>
    </section>
  );
};

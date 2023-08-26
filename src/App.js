export default function App() {
  return (
    <div className="bg-fuchsia-500 h-screen p-[10px]">
      <h1 className="text-8xl ">Tailwind css lurulum</h1>
      <h1 className="text-4xl bg-[#ededed] font-bold text-center  underline">
        Hello world!
      </h1>
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <div className="card">
          <img     src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            alt="sa" className="rounded-xl h-[200px] " />
            <p className="line-clamp-1 hover:line-clamp-none ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quos ullam fuga, vitae expedita dignissimos dolorum accusamus blanditiis repellat, ipsa explicabo sint consequatur autem eaque perspiciatis quibusdam natus beatae deleniti. Expedita ipsam dignissimos consequatur perspiciatis?</p>
        </div>

        <div className="flex flex-col justify-between items-center bg-slate-500 rounded-xl w-3/12 "></div>

      </div>
    </div>
  );
}

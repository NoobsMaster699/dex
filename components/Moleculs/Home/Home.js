import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const description =
  "Web ini merupakan gerbang utama untuk menuju beberapa index yang apabila suatu link mati dan mengganti domainya kalian tidak pusing untuk mengahafalnya. Jika film yang kalian cari tidak ada coba gunakan judul lengkap dari film tersebut. Gunakan Web ini selagi masih ada";


const ArrowRightIcon = (props) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.04289 19.2071C7.65237 18.8166 7.65237 18.1834 8.04289 17.7929L13.8358 12L8.04289 6.20711C7.65237 5.81658 7.65237 5.18342 8.04289 4.79289C8.43342 4.40237 9.06658 4.40237 9.45711 4.79289L15.25 10.5858C16.031 11.3668 16.031 12.6332 15.25 13.4142L9.45711 19.2071C9.06658 19.5976 8.43342 19.5976 8.04289 19.2071Z"
          fill=""
        />
      </svg>
    </>
  );
};

const Project = () => {
  let listProject = [
    {
      title: "Team Drive 1 ",
      desc: "Berisi kumpulan software, film, musik dan masih banyak lagi. Jika film yang kalian cari tidak ada pilih Team Drive 2",
      link: "https://drivekj.tech/0:/Data/",
      date: "Aio Index",
    },
    {
      title: "Team Drive 2",
      desc: "Berisi hanya film dan series terbaru jika tidak ada film yang di cari kembali ke team drive 1.",
      link: "https://drivekjeh.me/0:/",
      date: "Movies & Series Index",
    },
    {
      title: "Team Drive 3",
      desc: "Berisi hanya wallpaper",
      link: "https://drive.google.com/drive/u/1/folders/1Us0SXGclrsJd8Tnj3-XwrLnj3e6apskE",
      date: "Wallpaper Index",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold text-woodsmoke-900 dark:text-white">
        List Of Index
      </h1>
      <div className="flex flex-col gap-y-6 mt-6">
        {listProject.map((project, index) => {
          return (
            <Link key={index} href={project.link}>
              <div className="rounded-2xl p-6 hover:bg-zinc-100 dark:bg-woodsmoke-700 dark:bg-opacity-40 dark:backdrop-blur-lg dark:hover:bg-woodsmoke-600 dark:hover:bg-opacity-40 dark:transition-all transition-all cursor-pointer">
                <span className="border-l-2 border-zinc-200 pl-2 text-woodsmoke-400 text-sm dark:text-woodsmoke-300">
                  {project.date}
                </span>
                <h1 className="mt-4 font-semibold text-lg text-woodsmoke-800 dark:text-white">
                  {project.title}
                </h1>
                <p className="mt-2 text-woodsmoke-400 text-sm dark:text-woodsmoke-300">
                  {project.desc}
                </p>
                <div className="flex items-center gap-x-2 text-xs mt-4 w-fit text-woodsmoke-500 hover:text-indigo-500 font-semibold group transition-colors">
                  View Index 
                  <ArrowRightIcon className="fill-woodsmoke-400 h-4 w-4 group-hover:fill-indigo-500 transition-colors" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
const Home = () => {
  return (
    <>
      <Image
        src={"/LOGO.png"}
        className={
            "w-15 h-15 rounded-full border-2 border-transparent"
        }
        width={64}
        height={64}
        alt={"Logo"}
      />
      <div className="max-w-2xl mt-8">
        <TypeAnimation
          sequence={[
            "DriveTKJ AIO",
            1000,
            "Aio index List.",
            2000,
          ]}
          wrapper="h1"
          cursor={true}
          repeat={false}
          className={
            "font-bold dark:text-white text-woodsmoke-900 text-3xl sm:text-5xl tracking-tight"
          }
        />
        <p className="text-woodsmoke-400 text-base mt-4 dark:text-woodsmoke-300">
          {description}
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-7 gap-x-8 gap-y-6">
        <div className="col-span-1 lg:col-span-4">
          <Project />
        </div>
      </div>
    </>
  );
};

export default Home;

import Image from "next/image";

interface Popularity {}

const Popularity = (props: Popularity) => {
  return (
    <div className="bg-white w-[22rem]  rounded-md shadow-md  flex gap-2 p-3 ">
      <div>
        <Image src="/flower.svg" alt="flower" width={50} height={50} />
      </div>
      <div className="space-y-2">
        <p className="font-bold">Popular</p>
        <p className="text-sm ">2 students contacted this tutor in the last 48 hours</p>
      </div>
    </div>
  );
};

export default Popularity;

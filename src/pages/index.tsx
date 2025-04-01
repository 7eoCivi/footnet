import { TitleContent } from "@/containers/TitleContent";
import { Divider } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* body */}
      {/* Immagine che scorre */}
      <div className="flex flex-col gap-[2rem]">
        <div className="h-[16rem] w-full bg-gray-300 font-bold text-black flex items-center justify-center">
          Immagine
        </div>

        <TitleContent
          title={"Perchè FootNet?"}
          content={
            <div className="flex items-center gap-[2.5rem]">
              <div className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                accusamus recusandae, minus placeat dolor maiores alias
                quibusdam temporibus cumque sed vitae ab amet quis quasi nemo
                dolores eveniet repudiandae. Eaque.
              </div>
              <div className="flex gap-2 px-[2rem] items-center justify-center">
                <div className="h-[28rem] w-[28rem] bg-gray-300 text-black flex items-center justify-center rounded-full">
                  1
                </div>
              </div>
            </div>
          }
        />

        <TitleContent
          title={"Chi siamo?"}
          content={
            <div className="flex flex-col gap-[2.5rem]">
              <div className="flex justify-center gap-[6rem]">
                <div className="rounded-full h-[18rem] w-[18rem] bg-gray-300 flex items-center justify-center">
                  Cristian
                </div>
                <Divider orientation="vertical" variant="middle" flexItem />
                <div className="rounded-full h-[18rem] w-[18rem] bg-gray-300 flex items-center justify-center">
                  Matteo
                </div>
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tincidunt, arcu ac consequat ullamcorper, lacus ipsum vehicula
                dolor, ut tempor turpis eros nec erat. Aliquam erat volutpat.
                Praesent maximus nisi malesuada sapien elementum tempus. Nam
                lacinia arcu lorem, ac tempus lectus auctor vel.
              </div>
              <Link href={"/history"}>
                <div className="bg-black !text-white py-2 px-5 inline-block rounded-md">
                  History
                </div>
              </Link>
            </div>
          }
        />

        <TitleContent
          title={"Società Sponsor"}
          content={
            <div className="flex flex-wrap justify-center gap-4">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="h-[4rem] w-[4rem] bg-gray-300 text-black flex items-center justify-center rounded-full"
                >
                  {index + 1}
                </div>
              ))}
            </div>
          }
        />
      </div>
    </>
  );
}

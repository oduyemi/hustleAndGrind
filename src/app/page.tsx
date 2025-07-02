import { Application } from "@/components/Apply";
import { Banner } from "@/components/Banner";
import { Benefits } from "@/components/Benefits";
import { Core } from "@/components/ProgramCore";
import { Selection } from "@/components/Selection";
import { VideoEmbed } from "@/components/VideoEmbed";


export default function Home() {
  return (
    <div>
      <Banner />
      <div>
        <VideoEmbed />
      </div>
      <div className="mt-2">
      <Benefits />
      </div>
      <Selection />
      <Core />
      <div>
        <Application />
      </div>
    </div>
  );
}

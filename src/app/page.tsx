import { Application } from "@/components/Apply";
import { Banner } from "@/components/Banner";
import { Benefits } from "@/components/Benefits";
import Executives from "@/components/Executives";
import Gallery from "@/components/Gallery";
import { Core } from "@/components/ProgramCore";
import { Selection } from "@/components/Selection";
import { Testimonials } from "@/components/Testimonials";
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
      <div>
        <Selection />
      </div>
      <div>
      <Testimonials />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
      <Core />
      </div>
      <div>
        <Executives />
      </div>
      <div>
        <Application />
      </div>
    </div>
  );
}

import { Application } from "@/components/Apply";
import { Banner } from "@/components/Banner";
import { Benefits } from "@/components/Benefits";
import { Core } from "@/components/ProgramCore";
import { Selection } from "@/components/Selection";


export default function Home() {
  return (
    <div>
      <Banner />
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

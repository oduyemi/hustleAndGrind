import { Application } from "@/components/Apply";
import { Banner } from "@/components/Banner";
import { Benefits } from "@/components/Benefits";


export default function Home() {
  return (
    <div>
      <Banner />
      <div className="mt-2">
      <Benefits />
      </div>
      <div>
        <Application />
      </div>
    </div>
  );
}

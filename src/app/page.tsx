import PortalRenderer from "@/portal-renderer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center justify-center w-full gap-y-5 ">
        <PortalRenderer
          kid={101}
          post_ref="post_ref"
          url="http://localhost:3000/torus"
        />
      </div>
    </div>
  );
}

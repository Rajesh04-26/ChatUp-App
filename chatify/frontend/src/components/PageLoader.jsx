import { LoaderIcon } from "lucide-react";

function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <LoaderIcon className="w-10 h-10 text-cyan-500 animate-spin" />
    </div>
  );
}

export default PageLoader;

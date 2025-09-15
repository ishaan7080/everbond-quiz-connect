import { Heart } from "lucide-react";

const HeartLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
        <Heart className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
      </div>
      <h1 className="text-2xl font-bold text-foreground">EverBond</h1>
    </div>
  );
};

export default HeartLogo;
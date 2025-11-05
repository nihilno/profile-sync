import { MoonLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="flex flex-col items-center gap-4">
      <MoonLoader color="var(--primary)" />
      <p className="text-foreground">Loading data... </p>
    </div>
  );
}

export default Spinner;

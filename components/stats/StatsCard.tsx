import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CountUp from "react-countup";

function StatsCard({ title, value }: { title: string; value: number }) {
  return (
    <Card className="bg-muted/85">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-2xl capitalize">{title}</CardTitle>
        <CardDescription className="text-primary mt-[0px!important] text-4xl font-extrabold">
          <CountUp
            end={value}
            duration={3.5}
            formattingFn={(val) => val.toLocaleString()}
            useEasing={true}
          />
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default StatsCard;

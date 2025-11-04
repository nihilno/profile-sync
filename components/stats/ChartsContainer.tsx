"use client";

import Spinner from "@/components/ui/Spinner";
import { getChartsAction } from "@/lib/actions";
import { useQuery } from "@tanstack/react-query";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MAIN_COLOR = "#1db954";

function ChartsContainer() {
  const { data, isPending } = useQuery({
    queryKey: ["charts"],
    queryFn: () => getChartsAction(),
  });

  if (isPending) return <Spinner />;
  if (!data || data.length < 1) return null;

  return (
    <section className="mt-32">
      <h1 className="text-center text-4xl font-semibold">
        Monthly Applications
      </h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 50 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={`${MAIN_COLOR}20`}
            vertical={false}
          />
          <XAxis
            dataKey="date"
            tick={{ fill: "#94a3b8", fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            allowDecimals={false}
            tick={{ fill: "#94a3b8", fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              background: "oklch(0.274 0.006 286.033)",
              border: `1px solid ${MAIN_COLOR}40`,
              borderRadius: "12px",
              backdropFilter: "blur(10px)",
              boxShadow: `0 6px 20px ${MAIN_COLOR}30`,
            }}
            labelStyle={{ color: "#e2e8f0", fontWeight: 600 }}
            itemStyle={{ color: MAIN_COLOR, fontWeight: 600 }}
            cursor={{ fill: `${MAIN_COLOR}10` }}
          />
          <Bar
            dataKey="count"
            barSize={75}
            radius={[12, 12, 0, 0]}
            fill={MAIN_COLOR}
            cursor="pointer"
          >
            {data.map((_, index) => {
              const gradientId = `grad-${index}`;
              const glowId = `glow-${index}`;
              return (
                <Cell key={`bar-${index}`}>
                  <defs>
                    <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor={MAIN_COLOR}
                        stopOpacity={1}
                      />
                      <stop
                        offset="100%"
                        stopColor="#4ade80"
                        stopOpacity={0.8}
                      />
                    </linearGradient>
                    <filter
                      id={glowId}
                      x="-80%"
                      y="-80%"
                      width="260%"
                      height="260%"
                    >
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feFlood floodColor={MAIN_COLOR} floodOpacity={0.7} />
                      <feComposite in2="blur" operator="in" />
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <rect
                    width="75"
                    height="100%"
                    fill={`url(#${gradientId})`}
                    filter={`url(#${glowId})`}
                    rx="12"
                  />
                </Cell>
              );
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

export default ChartsContainer;

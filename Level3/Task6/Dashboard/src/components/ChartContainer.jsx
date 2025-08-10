import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", earnings: 1200 },
  { name: "Feb", earnings: 1900 },
  { name: "Mar", earnings: 800 },
  { name: "Apr", earnings: 1600 },
  { name: "May", earnings: 2400 },
  { name: "Jun", earnings: 1800 },
];

const ChartContainer = () => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip />
          <Bar dataKey="earnings" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartContainer;

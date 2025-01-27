import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatusCardProps {
  title: string;
  value: string | number;
  status: "online" | "offline" | "warning";
  icon: React.ReactNode;
}

export const StatusCard = ({ title, value, status, icon }: StatusCardProps) => {
  return (
    <Card className="dashboard-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="status-indicator-wrapper flex items-center gap-2">
          <div className={`status-indicator ${status}`} />
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};
import { Activity, Server, AlertTriangle, Wifi } from "lucide-react";
import { StatusCard } from "@/components/dashboard/StatusCard";
import { DeviceList } from "@/components/dashboard/DeviceList";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Network Monitor</h1>
          <p className="text-muted-foreground">Monitor your network devices in real-time</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatusCard
            title="Total Devices"
            value="12"
            status="online"
            icon={<Server className="h-4 w-4 text-muted-foreground" />}
          />
          <StatusCard
            title="Active Connections"
            value="45"
            status="online"
            icon={<Activity className="h-4 w-4 text-muted-foreground" />}
          />
          <StatusCard
            title="Network Load"
            value="75%"
            status="warning"
            icon={<Wifi className="h-4 w-4 text-muted-foreground" />}
          />
          <StatusCard
            title="Active Alerts"
            value="2"
            status="offline"
            icon={<AlertTriangle className="h-4 w-4 text-muted-foreground" />}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <DeviceList />
          <DeviceList />
        </div>
      </div>
    </div>
  );
};

export default Index;
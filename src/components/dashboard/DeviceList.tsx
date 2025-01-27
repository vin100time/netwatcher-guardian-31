import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Server, Wifi } from "lucide-react";

interface Device {
  id: string;
  name: string;
  type: "server" | "network";
  status: "online" | "offline" | "warning";
  lastSeen: string;
}

const mockDevices: Device[] = [
  { id: "1", name: "Main Server", type: "server", status: "online", lastSeen: "Just now" },
  { id: "2", name: "Backup Server", type: "server", status: "warning", lastSeen: "5 min ago" },
  { id: "3", name: "Network Switch", type: "network", status: "online", lastSeen: "1 min ago" },
  { id: "4", name: "Router", type: "network", status: "offline", lastSeen: "1 hour ago" },
];

export const DeviceList = () => {
  return (
    <Card className="dashboard-card h-[400px]">
      <CardHeader>
        <CardTitle>Devices</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full">
          <div className="space-y-4">
            {mockDevices.map((device) => (
              <div
                key={device.id}
                className="flex items-center justify-between p-4 rounded-md bg-muted/50"
              >
                <div className="flex items-center gap-3">
                  {device.type === "server" ? (
                    <Server className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Wifi className="h-5 w-5 text-muted-foreground" />
                  )}
                  <div>
                    <p className="font-medium">{device.name}</p>
                    <p className="text-sm text-muted-foreground">Last seen: {device.lastSeen}</p>
                  </div>
                </div>
                <div className={`status-indicator ${device.status}`} />
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
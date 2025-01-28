import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Gift, Rocket, Shield, ChartBar, Network, Clock } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Network Monitoring Made Simple</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Monitor your network devices in real-time with our powerful dashboard
        </p>
        <Button
          size="lg"
          onClick={() => navigate("/auth")}
          className="mb-8"
        >
          <Gift className="mr-2" />
          Start Your 15-Day Free Trial
        </Button>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
            <Rocket className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quick Setup</h3>
            <p className="text-muted-foreground">Get started in minutes with our easy-to-use dashboard</p>
          </div>
          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
            <Shield className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Monitoring</h3>
            <p className="text-muted-foreground">Enterprise-grade security for your network data</p>
          </div>
          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
            <ChartBar className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-muted-foreground">Monitor performance metrics in real-time</p>
          </div>
        </div>
      </div>

      {/* Trial Info Section */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Start Your Free Trial Today</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="text-primary" />
              <span>15 Days Free</span>
            </div>
            <div className="flex items-center gap-2">
              <Network className="text-primary" />
              <span>Unlimited Devices</span>
            </div>
            <div className="flex items-center gap-2">
              <ChartBar className="text-primary" />
              <span>Full Analytics</span>
            </div>
          </div>
          <Button
            size="lg"
            onClick={() => navigate("/auth")}
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAuth = async (type: "LOGIN" | "SIGNUP") => {
    try {
      setLoading(true);
      
      let result;
      if (type === "SIGNUP") {
        result = await supabase.auth.signUp({
          email,
          password,
        });
      } else {
        result = await supabase.auth.signInWithPassword({
          email,
          password,
        });
      }

      if (result.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error.message,
        });
        return;
      }

      // If we have a user, redirect to dashboard
      if (result.data.user) {
        toast({
          title: "Success",
          description: type === "SIGNUP" ? "Account created successfully" : "Logged in successfully",
        });
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Auth error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Welcome to Network Monitor</h2>
          <p className="text-muted-foreground mt-2">Sign in or create an account</p>
        </div>
        <div className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>
          <div className="space-y-2">
            <Button
              className="w-full"
              onClick={() => handleAuth("LOGIN")}
              disabled={loading}
            >
              {loading ? "Loading..." : "Sign In"}
            </Button>
            <Button
              className="w-full"
              variant="outline"
              onClick={() => handleAuth("SIGNUP")}
              disabled={loading}
            >
              {loading ? "Loading..." : "Create Account"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
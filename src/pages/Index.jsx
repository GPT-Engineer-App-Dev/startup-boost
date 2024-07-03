import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log("Sign up with email:", email);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
      <header className="flex justify-between w-full max-w-6xl p-4">
        <div className="text-2xl font-bold">SaaS Startup</div>
        <nav className="flex space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <Button variant="outline">Sign Up</Button>
        </nav>
      </header>

      <section id="hero" className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Our SaaS Product</h1>
        <p className="text-lg">Streamline your workflow with our innovative solution.</p>
        <Button size="lg" onClick={handleSignUp}>Get Started</Button>
        <img src="https://placehold.co/600x400" alt="placeholder" className="mt-4" />
      </section>

      <section id="features" className="w-full max-w-6xl p-4 space-y-4">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Feature 1</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="https://placehold.co/100x100" alt="placeholder" />
              <p>Short description of feature 1.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 2</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="https://placehold.co/100x100" alt="placeholder" />
              <p>Short description of feature 2.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 3</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="https://placehold.co/100x100" alt="placeholder" />
              <p>Short description of feature 3.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="w-full max-w-6xl p-4 space-y-4 text-center">
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div>Contact us at: contact@saasstartup.com</div>
        <div className="flex justify-center space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
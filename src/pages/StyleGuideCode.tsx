
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CssTab from "@/components/style-guide/CssTab";
import HtmlTab from "@/components/style-guide/HtmlTab";
import JavaScriptTab from "@/components/style-guide/JavaScriptTab";
import TailwindConfigTab from "@/components/style-guide/TailwindConfigTab";

const StyleGuideCode = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bamboo-beige">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl md:text-5xl font-raleway font-semibold">Bamboo Style Guide Code</h1>
            <Link to="/style-guide">
              <button className="btn-secondary">View Style Guide</button>
            </Link>
          </div>

          <p className="text-lg text-bamboo-text-light max-w-3xl mb-8">
            This page shows the HTML, CSS, and JavaScript code that powers the Bamboo Store's design system.
          </p>

          <Tabs defaultValue="css">
            <TabsList className="mb-6">
              <TabsTrigger value="css">CSS</TabsTrigger>
              <TabsTrigger value="html">HTML</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="tailwind">Tailwind Config</TabsTrigger>
            </TabsList>

            {/* CSS Tab */}
            <TabsContent value="css">
              <CssTab />
            </TabsContent>

            {/* HTML Tab */}
            <TabsContent value="html">
              <HtmlTab />
            </TabsContent>

            {/* JavaScript Tab */}
            <TabsContent value="javascript">
              <JavaScriptTab />
            </TabsContent>

            {/* Tailwind Config Tab */}
            <TabsContent value="tailwind">
              <TailwindConfigTab />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StyleGuideCode;

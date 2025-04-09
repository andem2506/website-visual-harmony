
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Copy, CopyCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

const StyleGuide = () => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const ColorBox = ({ color, name, hex }: { color: string; name: string; hex: string }) => (
    <div className="flex flex-col">
      <div className={`h-20 rounded-md ${color}`}></div>
      <div className="mt-2">
        <p className="font-medium">{name}</p>
        <div 
          className="flex items-center text-xs text-bamboo-text-light cursor-pointer hover:text-bamboo-teal"
          onClick={() => copyToClipboard(hex, hex)}
        >
          <span>{hex}</span>
          {copied === hex ? <CopyCheck size={14} className="ml-1" /> : <Copy size={14} className="ml-1" />}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-bamboo-beige">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl md:text-5xl font-raleway font-semibold">Bamboo Style Guide</h1>
            <Link to="/design-system">
              <Button variant="outline">View Design System</Button>
            </Link>
          </div>

          <p className="text-lg text-bamboo-text-light max-w-3xl mb-8">
            This style guide outlines the design elements and components used throughout the Bamboo Store
            website to ensure consistency and maintain the brand's eco-friendly identity.
          </p>

          <Tabs defaultValue="brand">
            <TabsList className="mb-6">
              <TabsTrigger value="brand">Brand</TabsTrigger>
              <TabsTrigger value="color">Color</TabsTrigger>
              <TabsTrigger value="typography">Typography</TabsTrigger>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="patterns">Patterns</TabsTrigger>
            </TabsList>

            {/* Brand Tab */}
            <TabsContent value="brand">
              <Card>
                <CardContent className="pt-6">
                  <section className="mb-10">
                    <h2 className="text-2xl font-raleway font-medium mb-4">Brand Mission</h2>
                    <p className="text-bamboo-text-light mb-6">
                      Our vision is to revolutionize the way bamboo is seen and used by bringing
                      India its first eco-friendly yet inventive and aesthetic bamboo-built options.
                    </p>

                    <h3 className="text-xl font-raleway font-medium mb-3">Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium text-lg text-bamboo-teal mb-1">Sustainability</h4>
                        <p className="text-sm text-bamboo-text-light">
                          We prioritize eco-friendly materials and processes to minimize our environmental impact.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium text-lg text-bamboo-teal mb-1">Innovation</h4>
                        <p className="text-sm text-bamboo-text-light">
                          We continuously explore new applications and designs for bamboo products.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium text-lg text-bamboo-teal mb-1">Quality</h4>
                        <p className="text-sm text-bamboo-text-light">
                          We ensure all our products are durable, functional, and aesthetically pleasing.
                        </p>
                      </div>
                    </div>

                    <h3 className="text-xl font-raleway font-medium mb-3">Voice & Tone</h3>
                    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-lg mb-2">We are:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-bamboo-text-light">
                            <li>Eco-conscious and mindful</li>
                            <li>Friendly and approachable</li>
                            <li>Knowledgeable but not pedantic</li>
                            <li>Enthusiastic about sustainable living</li>
                            <li>Authentic and transparent</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-2">We are not:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-bamboo-text-light">
                            <li>Preachy or judgmental</li>
                            <li>Overly technical or jargon-heavy</li>
                            <li>Frivolous or dismissive</li>
                            <li>Exaggerating or making false claims</li>
                            <li>Impersonal or corporate</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Color Tab */}
            <TabsContent value="color">
              <Card>
                <CardContent className="pt-6">
                  <section className="mb-10">
                    <h2 className="text-2xl font-raleway font-medium mb-4">Color Palette</h2>
                    <p className="text-bamboo-text-light mb-6">
                      Our colors reflect the natural world and our commitment to sustainability. The palette 
                      combines earthy neutrals with a vibrant teal accent that represents growth and renewal.
                    </p>

                    <h3 className="text-xl font-raleway font-medium mb-3">Primary Colors</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
                      <ColorBox color="bg-bamboo" name="Bamboo" hex="#9C7B61" />
                      <ColorBox color="bg-bamboo-teal" name="Teal" hex="#0A5D6A" />
                      <ColorBox color="bg-bamboo-beige" name="Beige" hex="#F5F1EA" />
                      <ColorBox color="bg-bamboo-charcoal" name="Charcoal" hex="#404040" />
                      <ColorBox color="bg-white" name="White" hex="#FFFFFF" />
                    </div>

                    <h3 className="text-xl font-raleway font-medium mb-3">Secondary Colors</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
                      <ColorBox color="bg-bamboo-light" name="Bamboo Light" hex="#BEA68F" />
                      <ColorBox color="bg-bamboo-dark" name="Bamboo Dark" hex="#7A5E48" />
                      <ColorBox color="bg-bamboo-text-light" name="Text Light" hex="#6B6B6B" />
                    </div>

                    <h3 className="text-xl font-raleway font-medium mb-3">Color Usage</h3>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-lg mb-2">Do:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-bamboo-text-light">
                            <li>Use Beige as the primary background color</li>
                            <li>Use Teal for primary buttons and important actions</li>
                            <li>Use Bamboo for secondary buttons and accents</li>
                            <li>Use Charcoal for main text content</li>
                            <li>Use Text Light for supporting text and captions</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-2">Don't:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-bamboo-text-light">
                            <li>Place Text Light on Bamboo or Teal backgrounds (poor contrast)</li>
                            <li>Use Teal for large background areas</li>
                            <li>Mix too many colors in a single section</li>
                            <li>Use colors not in the palette</li>
                            <li>Place Bamboo text on Teal background (poor contrast)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Typography Tab */}
            <TabsContent value="typography">
              <Card>
                <CardContent className="pt-6">
                  <section className="mb-10">
                    <h2 className="text-2xl font-raleway font-medium mb-4">Typography</h2>
                    <p className="text-bamboo-text-light mb-6">
                      Our typography system uses two complementary fonts that balance elegance with readability.
                      Raleway is used for headings, while Open Sans is used for body text and UI elements.
                    </p>

                    <h3 className="text-xl font-raleway font-medium mb-3">Font Families</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="font-raleway font-medium text-lg mb-2">Raleway</h4>
                        <p className="text-bamboo-text-light mb-3">Used for headings and display text</p>
                        <div className="space-y-4">
                          <div>
                            <p className="font-raleway font-bold text-lg">Raleway Bold</p>
                            <p className="text-xs text-bamboo-text-light">font-raleway font-bold</p>
                          </div>
                          <div>
                            <p className="font-raleway font-semibold text-lg">Raleway Semibold</p>
                            <p className="text-xs text-bamboo-text-light">font-raleway font-semibold</p>
                          </div>
                          <div>
                            <p className="font-raleway font-medium text-lg">Raleway Medium</p>
                            <p className="text-xs text-bamboo-text-light">font-raleway font-medium</p>
                          </div>
                          <div>
                            <p className="font-raleway text-lg">Raleway Regular</p>
                            <p className="text-xs text-bamboo-text-light">font-raleway</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="font-medium text-lg mb-2">Open Sans</h4>
                        <p className="text-bamboo-text-light mb-3">Used for body text and UI elements</p>
                        <div className="space-y-4">
                          <div>
                            <p className="font-opensans font-bold">Open Sans Bold</p>
                            <p className="text-xs text-bamboo-text-light">font-opensans font-bold</p>
                          </div>
                          <div>
                            <p className="font-opensans font-semibold">Open Sans Semibold</p>
                            <p className="text-xs text-bamboo-text-light">font-opensans font-semibold</p>
                          </div>
                          <div>
                            <p className="font-opensans font-medium">Open Sans Medium</p>
                            <p className="text-xs text-bamboo-text-light">font-opensans font-medium</p>
                          </div>
                          <div>
                            <p className="font-opensans">Open Sans Regular</p>
                            <p className="text-xs text-bamboo-text-light">font-opensans</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-raleway font-medium mb-3">Type Scale</h3>
                    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                      <div className="space-y-8">
                        <div>
                          <h1 className="font-raleway font-semibold text-4xl md:text-5xl lg:text-6xl">Heading 1</h1>
                          <p className="text-xs text-bamboo-text-light mt-2">font-raleway font-semibold text-4xl md:text-5xl lg:text-6xl</p>
                        </div>
                        <div>
                          <h2 className="font-raleway font-medium text-3xl md:text-4xl">Heading 2</h2>
                          <p className="text-xs text-bamboo-text-light mt-2">font-raleway font-medium text-3xl md:text-4xl</p>
                        </div>
                        <div>
                          <h3 className="font-raleway font-medium text-2xl md:text-3xl">Heading 3</h3>
                          <p className="text-xs text-bamboo-text-light mt-2">font-raleway font-medium text-2xl md:text-3xl</p>
                        </div>
                        <div>
                          <h4 className="font-raleway font-medium text-xl md:text-2xl">Heading 4</h4>
                          <p className="text-xs text-bamboo-text-light mt-2">font-raleway font-medium text-xl md:text-2xl</p>
                        </div>
                        <Separator />
                        <div>
                          <p className="text-base">Body Regular</p>
                          <p className="text-xs text-bamboo-text-light mt-2">text-base</p>
                        </div>
                        <div>
                          <p className="text-lg">Body Large</p>
                          <p className="text-xs text-bamboo-text-light mt-2">text-lg</p>
                        </div>
                        <div>
                          <p className="text-sm">Body Small</p>
                          <p className="text-xs text-bamboo-text-light mt-2">text-sm</p>
                        </div>
                        <div>
                          <p className="text-xs">Caption</p>
                          <p className="text-xs text-bamboo-text-light mt-2">text-xs</p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-raleway font-medium mb-3">Typography Usage</h3>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-lg mb-2">Do:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-bamboo-text-light">
                            <li>Use Raleway for all headings (h1-h6)</li>
                            <li>Use Open Sans for body text and UI elements</li>
                            <li>Maintain proper hierarchy with heading levels</li>
                            <li>Use text-bamboo-text-light for secondary text</li>
                            <li>Use font-medium or font-semibold for emphasis</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-2">Don't:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-bamboo-text-light">
                            <li>Mix font families (stick to the designated usage)</li>
                            <li>Use too many font weights in a single view</li>
                            <li>Make body text too small (stay at 16px/text-base minimum)</li>
                            <li>Use low-contrast text colors on colored backgrounds</li>
                            <li>Skip heading levels (always maintain hierarchy)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Components Tab */}
            <TabsContent value="components">
              <Card>
                <CardContent className="pt-6">
                  <section className="mb-10">
                    <h2 className="text-2xl font-raleway font-medium mb-4">Component Library</h2>
                    <p className="text-bamboo-text-light mb-6">
                      These are the core UI components that make up the Bamboo Store interface. Each component
                      follows our design principles and maintains consistency across the site.
                    </p>

                    <h3 className="text-xl font-raleway font-medium mb-3">Buttons</h3>
                    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                          </div>
                          <p className="text-sm text-bamboo-text-light">
                            Button variants for different emphasis levels
                          </p>
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <Button variant="primary" size="sm">Small</Button>
                            <Button variant="primary" size="md">Medium</Button>
                            <Button variant="primary" size="lg">Large</Button>
                          </div>
                          <p className="text-sm text-bamboo-text-light">
                            Button sizes for different contexts
                          </p>
                        </div>
                        <div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Button variant="primary" fullWidth>Full Width Button</Button>
                          </div>
                          <p className="text-sm text-bamboo-text-light">
                            Full width button for mobile or form submissions
                          </p>
                        </div>
                        <div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Button variant="primary" disabled>Disabled</Button>
                            <Button variant="secondary" disabled>Disabled</Button>
                          </div>
                          <p className="text-sm text-bamboo-text-light">
                            Disabled state buttons
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-raleway font-medium mb-3">Hero</h3>
                    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                      <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                        <Hero 
                          title="Sustainable Living with Bamboo" 
                          description="Discover our eco-friendly collection of bamboo products designed for modern living while preserving our planet."
                          imageUrl="/placeholder.svg" 
                        />
                      </div>
                      <p className="text-sm text-bamboo-text-light">
                        Hero component for featured content and page headers
                      </p>
                    </div>

                    <h3 className="text-xl font-raleway font-medium mb-3">Product Card</h3>
                    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <ProductCard 
                          id="1" 
                          name="Bamboo Water Bottle" 
                          imageUrl="/placeholder.svg" 
                          category="Kitchen" 
                          price={24.99} 
                        />
                        <ProductCard 
                          id="2" 
                          name="Bamboo Cutting Board" 
                          imageUrl="/placeholder.svg" 
                          category="Kitchen" 
                          price={19.99} 
                        />
                      </div>
                      <p className="text-sm text-bamboo-text-light">
                        Product cards for displaying items in collections and search results
                      </p>
                    </div>

                    <h3 className="text-xl font-raleway font-medium mb-3">Badges</h3>
                    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                      </div>
                      <p className="text-sm text-bamboo-text-light">
                        Badges for labels, status indicators, and tags
                      </p>
                    </div>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Patterns Tab */}
            <TabsContent value="patterns">
              <Card>
                <CardContent className="pt-6">
                  <section className="mb-10">
                    <h2 className="text-2xl font-raleway font-medium mb-4">UI Patterns & Best Practices</h2>
                    <p className="text-bamboo-text-light mb-6">
                      These patterns and guidelines help maintain consistency and usability across the Bamboo Store website.
                    </p>

                    <h3 className="text-xl font-raleway font-medium mb-3">Spacing System</h3>
                    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                      <div className="space-y-4">
                        <p className="text-bamboo-text-light">
                          We use a consistent spacing scale based on 4px increments:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          <div>
                            <div className="h-1 bg-bamboo-teal"></div>
                            <p className="text-xs mt-1">4px - space-1</p>
                          </div>
                          <div>
                            <div className="h-2 bg-bamboo-teal"></div>
                            <p className="text-xs mt-1">8px - space-2</p>
                          </div>
                          <div>
                            <div className="h-3 bg-bamboo-teal"></div>
                            <p className="text-xs mt-1">12px - space-3</p>
                          </div>
                          <div>
                            <div className="h-4 bg-bamboo-teal"></div>
                            <p className="text-xs mt-1">16px - space-4</p>
                          </div>
                          <div>
                            <div className="h-6 bg-bamboo-teal"></div>
                            <p className="text-xs mt-1">24px - space-6</p>
                          </div>
                          <div>
                            <div className="h-8 bg-bamboo-teal"></div>
                            <p className="text-xs mt-1">32px - space-8</p>
                          </div>
                          <div>
                            <div className="h-12 bg-bamboo-teal"></div>
                            <p className="text-xs mt-1">48px - space-12</p>
                          </div>
                          <div>
                            <div className="h-16 bg-bamboo-teal"></div>
                            <p className="text-xs mt-1">64px - space-16</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-raleway font-medium mb-3">Layout Grid</h3>
                    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                      <div className="space-y-4">
                        <p className="text-bamboo-text-light mb-3">
                          We use a 12-column grid system with responsive breakpoints:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-bamboo-text-light">
                          <li><span className="font-medium">Mobile:</span> Single column (xs: &lt;640px)</li>
                          <li><span className="font-medium">Small tablets:</span> 2-4 columns (sm: ≥640px)</li>
                          <li><span className="font-medium">Tablets:</span> 4-8 columns (md: ≥768px)</li>
                          <li><span className="font-medium">Laptops:</span> 8-12 columns (lg: ≥1024px)</li>
                          <li><span className="font-medium">Desktops:</span> 12 columns (xl: ≥1280px)</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-raleway font-medium mb-3">Container & Margins</h3>
                    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                      <div className="space-y-4">
                        <p className="text-bamboo-text-light mb-3">
                          Use the container class with consistent padding:
                        </p>
                        <div className="space-y-2 text-bamboo-text-light">
                          <p><code className="bg-gray-100 px-1 py-0.5 rounded">container mx-auto px-4</code> - Standard container with horizontal padding</p>
                          <p><code className="bg-gray-100 px-1 py-0.5 rounded">py-12</code> - Standard vertical spacing between sections</p>
                          <p><code className="bg-gray-100 px-1 py-0.5 rounded">gap-6</code> - Standard gap for grid layouts</p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-raleway font-medium mb-3">Rounded Corners</h3>
                    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-4">
                        <div>
                          <div className="h-16 w-full bg-bamboo rounded"></div>
                          <p className="text-xs mt-1">Default (0px)</p>
                        </div>
                        <div>
                          <div className="h-16 w-full bg-bamboo rounded-sm"></div>
                          <p className="text-xs mt-1">Small (2px) - rounded-sm</p>
                        </div>
                        <div>
                          <div className="h-16 w-full bg-bamboo rounded-md"></div>
                          <p className="text-xs mt-1">Medium (4px) - rounded-md</p>
                        </div>
                        <div>
                          <div className="h-16 w-full bg-bamboo rounded-lg"></div>
                          <p className="text-xs mt-1">Large (8px) - rounded-lg</p>
                        </div>
                      </div>
                      <p className="text-sm text-bamboo-text-light">
                        Use consistent rounded corners throughout the interface
                      </p>
                    </div>

                    <h3 className="text-xl font-raleway font-medium mb-3">Shadows</h3>
                    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
                        <div>
                          <div className="h-16 w-full bg-white rounded-lg shadow-sm"></div>
                          <p className="text-xs mt-1">Small (shadow-sm)</p>
                        </div>
                        <div>
                          <div className="h-16 w-full bg-white rounded-lg shadow-md"></div>
                          <p className="text-xs mt-1">Medium (shadow-md)</p>
                        </div>
                        <div>
                          <div className="h-16 w-full bg-white rounded-lg shadow-lg"></div>
                          <p className="text-xs mt-1">Large (shadow-lg)</p>
                        </div>
                      </div>
                      <p className="text-sm text-bamboo-text-light">
                        Use shadows to create depth and hierarchy in the interface
                      </p>
                    </div>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StyleGuide;

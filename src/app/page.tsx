import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Wifi, Building2, Server, Shield, Clock, Zap, CheckCircle2, Trophy, Users, Star, XCircle, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.company.name} - ${siteConfig.company.tagline}`,
  description: siteConfig.company.description,
  alternates: {
    canonical: siteConfig.urls.base,
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/20">

      {/* Hero Section */}
      <section className="relative py-16 lg:py-32 overflow-visible border-b bg-background/50 backdrop-blur-sm">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="absolute -left-[10%] top-[20%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10 animate-pulse delay-700" />

        <div className="container px-4 md:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">

            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left z-10 lg:pl-12 xl:pl-20">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Gujarat's Fastest Growing ISP
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 leading-tight">
                Experience Internet <br />
                <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                  Without Limits
                </span>
              </h1>

              <p className="max-w-[600px] mx-auto lg:mx-0 text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                Seamless connectivity for homes and businesses. Built on 15+ years of expertise, designed for the future of digital Gujarat.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                <Button size="lg" className="h-12 px-8 text-lg bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-600/90 shadow-lg shadow-primary/20 transition-all hover:scale-105" asChild>
                  <Link href="/plans">
                    View Plans <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-primary/20 hover:bg-primary/5 transition-all hover:scale-105" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>

              <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> No Hidden Fees
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> 99.9% Uptime
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> 24/7 Support
                </div>
              </div>
            </div>

            {/* Right Visual - Dispersed Elements (Hidden on Mobile) */}
            <div className="hidden lg:flex relative mx-auto w-full max-w-md lg:max-w-full aspect-square lg:aspect-auto lg:h-[600px] lg:order-last items-center justify-center animate-in zoom-in duration-1000 delay-300">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-cyan-500/20 rounded-full blur-[100px] opacity-40 animate-pulse" />

              {/* Center Node */}
              <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 bg-background rounded-full border-4 border-primary/10 flex items-center justify-center shadow-2xl">
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-dashed border-primary/40 animate-[spin_15s_linear_infinite_reverse]" />
                <Wifi className="w-12 h-12 md:w-20 md:h-20 text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-[10%] left-0 md:-left-[5%] bg-card/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/10 animate-bounce duration-[4000ms] z-20 min-w-[140px]">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Zap className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">1 Gbps</div>
                    <div className="text-xs text-muted-foreground">Speed Ready</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[5%] -right-[5%] md:-right-[10%] bg-card/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/10 animate-bounce duration-[5000ms] delay-700 z-20 min-w-[140px]">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Users className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">{siteConfig.stats.customers}</div>
                    <div className="text-xs text-muted-foreground">Happy Users</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-[10%] -right-[5%] md:-right-[10%] bg-card/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/10 animate-bounce duration-[6000ms] delay-300 z-10 min-w-[140px] opacity-90">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="p-2 bg-amber-500/10 rounded-lg">
                    <Trophy className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">15+ Years</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                </div>
              </div>

              {/* Decorative Lines */}
              <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M50 50 L20 20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="text-primary animate-pulse" />
                <path d="M50 50 L80 80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="text-primary animate-pulse delay-75" />
                <path d="M50 50 L80 20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="text-primary animate-pulse delay-150" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By / Coverage Marquee */}
      <section className="py-10 border-b bg-muted/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">Connecting Major Hubs Across Gujarat</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {["Vadodara", "Ahmedabad", "Surat", "Rajkot", "Gandhinagar", "Anand", "Bharuch"].map((city) => (
              <div key={city} className="flex items-center gap-2 text-lg font-bold text-foreground/80">
                <div className="w-2 h-2 rounded-full bg-primary" /> {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Tailored Connectivity</h2>
            <p className="text-muted-foreground text-lg">Whether you are streaming 4K at home or running mission-critical servers, we have the perfect pipeline for you.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group relative overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform text-blue-500">
                  <Wifi className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Home Fiber</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Ultra-fast broadband for streaming, gaming, and working from home. Zero buffering, unlimited possibilities.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Up to 1 Gbps Speed</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Unlimited Data</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Free Router Included</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform text-purple-500">
                  <Building2 className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Business Internet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Dedicated leased lines (ILL) with uncompromised SLA. Powering the growth of Gujarat's enterprises.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 1:1 Contention Ratio</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Static IPs Available</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Priority Support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform text-amber-500">
                  <Server className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Managed Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">End-to-end network management, Wi-Fi solutions, and IT infrastructure support for campuses and offices.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Campus Wi-Fi Zones</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Firewall & Security</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 24/7 Monitoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="rounded-3xl border bg-card/50 overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-muted/30 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Why Switch to BitConnect?</h2>
                <p className="text-lg text-muted-foreground mb-8">Stop settling for buffering, hidden fees, and automated support bots. Upgrade to an experience built for today's digital needs.</p>
                <Button size="lg" className="w-fit" asChild>
                  <Link href="/plans">See The Difference</Link>
                </Button>
              </div>
              <div className="p-8 md:p-12 bg-card">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b pb-4">
                    <span className="font-semibold text-muted-foreground flex-1">Feature</span>
                    <div className="flex gap-4 text-sm font-bold flex-1 justify-around">
                      <span className="text-muted-foreground w-20 text-center">Old ISP</span>
                      <span className="text-primary w-20 text-center">BitConnect</span>
                    </div>
                  </div>
                  {[
                    { name: "Connection", old: "Copper", new: "Fiber" },
                    { name: "Uploads", old: "Slow", new: "Fast" },
                    { name: "Hidden Fees", old: "Yes", new: "None" },
                    { name: "Support", old: "Bots", new: "Humans" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="font-medium flex-1">{item.name}</span>
                      <div className="flex gap-4 text-sm flex-1 justify-around">
                        <div className="flex items-center justify-center gap-2 text-muted-foreground w-20">
                          <span className="hidden sm:inline">{item.old}</span>
                          <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                        </div>
                        <div className="flex items-center justify-center gap-2 text-primary w-20">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                          <span className="hidden sm:inline">{item.new}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us (BitConnect Standard Reuse) */}
      <section className="py-24 bg-muted/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The BitConnect Advantage</h2>
                <p className="text-muted-foreground text-lg">We combine cutting-edge technology with old-fashioned customer service values.</p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Rocket, title: "Future-Proof Network", desc: "IPv6 ready, fiber-deep architecture designed for tomorrow's bandwidth needs." },
                  { icon: Clock, title: "Rapid Resolution", desc: "Average ticket resolution time of under 4 hours for home users." },
                  { icon: Shield, title: "Secure by Design", desc: "Built-in protection against common web threats and DDoS attacks." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative aspect-video lg:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/20 to-primary/20 rounded-3xl blur-3xl -z-10" />
              <div className="h-full w-full bg-muted/20 backdrop-blur border border-white/10 rounded-3xl p-8 flex items-center justify-center">
                {/* Simplified Technical Graphic */}
                <div className="relative w-full h-full max-w-sm mx-auto">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary rounded-full animate-pulse opacity-20" />
                  <div className="absolute inset-0 grid grid-cols-2 gap-4 place-content-center">
                    <div className="bg-background shadow-lg p-4 rounded-xl flex items-center gap-3 animate-bounce duration-[3000ms]">
                      <Wifi className="h-6 w-6 text-primary" />
                      <div className="text-sm font-bold">Stable Connection</div>
                    </div>
                    <div className="bg-background shadow-lg p-4 rounded-xl flex items-center gap-3 animate-bounce duration-[4000ms] lg:translate-y-12">
                      <Zap className="h-6 w-6 text-amber-500" />
                      <div className="text-sm font-bold">Low Latency</div>
                    </div>
                    <div className="bg-background shadow-lg p-4 rounded-xl flex items-center gap-3 animate-bounce duration-[3500ms]">
                      <Shield className="h-6 w-6 text-green-500" />
                      <div className="text-sm font-bold">Secure</div>
                    </div>
                    <div className="bg-background shadow-lg p-4 rounded-xl flex items-center gap-3 animate-bounce duration-[4500ms] lg:translate-y-12">
                      <Users className="h-6 w-6 text-blue-500" />
                      <div className="text-sm font-bold">Local Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="container relative px-4 md:px-6 mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Upgrade Your Connection?</h2>
          <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto mb-10">
            Join thousands of satisfied customers across Gujarat. Experience the BitConnect difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary font-bold shadow-xl" asChild>
              <Link href="/plans">Check Availability</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white hover:text-white" asChild>
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}



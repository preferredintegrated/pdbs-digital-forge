import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import backgroundTexture from "@/assets/background-texture.png";

const jobListings = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    location: "Remote",
    type: "Full-Time",
    department: "Engineering",
    description:
      "Build and maintain scalable web applications using modern frameworks. Collaborate with cross-functional teams to deliver high-quality solutions.",
    requirements: [
      "5+ years experience with React, Node.js, or similar",
      "Strong understanding of cloud platforms (AWS/Azure/GCP)",
      "Experience with CI/CD pipelines and DevOps practices",
      "Excellent communication and problem-solving skills",
    ],
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    location: "Hybrid — US",
    type: "Full-Time",
    department: "Infrastructure",
    description:
      "Design and implement cloud-native architectures for enterprise clients. Lead migration strategies and ensure scalable, secure deployments.",
    requirements: [
      "7+ years in cloud architecture and infrastructure",
      "Certifications in AWS, Azure, or GCP preferred",
      "Experience with microservices and containerization",
      "Strong client-facing communication skills",
    ],
  },
  {
    id: 3,
    title: "Business Analyst",
    location: "Remote",
    type: "Full-Time",
    department: "Consulting",
    description:
      "Gather and analyze business requirements, translate them into technical specifications, and work closely with development teams to deliver solutions.",
    requirements: [
      "3+ years in business analysis or consulting",
      "Experience with Agile/Scrum methodologies",
      "Strong analytical and documentation skills",
      "Background in enterprise software systems",
    ],
  },
  {
    id: 4,
    title: "QA Engineer",
    location: "Remote",
    type: "Contract",
    department: "Engineering",
    description:
      "Develop and execute test plans, automate testing workflows, and ensure product quality across multiple client projects.",
    requirements: [
      "3+ years in software testing and QA",
      "Experience with automation tools (Selenium, Cypress, etc.)",
      "Familiarity with API testing and performance testing",
      "Detail-oriented with strong documentation skills",
    ],
  },
];

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="pt-28 pb-16 relative"
        style={{
          backgroundImage: `url(${backgroundTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <Button
            variant="ghost"
            className="text-primary-foreground mb-6 hover:bg-primary-foreground/10"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We're looking for talented people who are passionate about technology and want to make an impact. Explore our open positions below.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobListings.map((job) => (
              <Card
                key={job.id}
                className="border border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <CardTitle className="text-xl text-foreground">
                      {job.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3.5 w-3.5" /> {job.department}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{job.description}</p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Requirements</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="bg-gradient-to-r from-gradient-pink via-gradient-purple to-gradient-blue text-primary-foreground hover:opacity-90">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

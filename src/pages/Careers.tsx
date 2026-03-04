import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, ArrowLeft, Mail, GraduationCap, CheckCircle2, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import backgroundTexture from "@/assets/background-texture.png";

interface JobListing {
  id: number;
  title: string;
  location: string;
  type: string;
  department: string;
  duration?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits?: string[];
  howToApply?: {
    email: string;
    subjectLine: string;
    instructions: string;
  };
}

const jobListings: JobListing[] = [
  {
    id: 1,
    title: "Software Tester / QA Intern",
    location: "Remote",
    type: "Internship (Unpaid)",
    department: "Quality Assurance",
    duration: "3 – 6 months",
    description:
      "As a Software Tester / QA Intern, you will work closely with our development team to test software products, identify bugs, and ensure that our applications meet high-quality standards before release. This internship provides hands-on experience in the full software testing lifecycle.",
    responsibilities: [
      "Execute test cases and report bugs or inconsistencies",
      "Work with developers to ensure timely resolution of defects",
      "Participate in quality review sessions and sprint meetings",
      "Assist in creating and updating test documentation",
      "Support the QA team in improving testing processes and workflows",
      "Conduct manual testing, load and performance testing, and where possible, explore automation tools",
    ],
    requirements: [
      "Basic understanding of software testing principles and methodologies",
      "Interest in learning about quality assurance and testing processes",
      "Good attention to detail and problem-solving skills",
      "Strong communication and teamwork abilities",
      "Ability to meet deadlines and follow through on tasks",
      "Prior experience or coursework in software testing is an added advantage",
    ],
    benefits: [
      "Practical, hands-on experience in software testing and QA processes",
      "Mentorship from experienced developers and testers",
      "Opportunity to work on real-world projects",
      "Certificate of completion and potential recommendation letter based on performance",
      "Possibility of transitioning into a paid role upon successful completion",
    ],
    howToApply: {
      email: "recruitment@preferreddigitalbusiness.com",
      subjectLine: "Application – Software Tester/QA Intern",
      instructions:
        "Send your CV and a brief note on why you're interested in this internship.",
    },
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
          <div className="grid gap-8 max-w-4xl mx-auto">
            {jobListings.map((job) => (
              <Card
                key={job.id}
                className="border border-border hover:shadow-lg transition-shadow overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <CardTitle className="text-2xl text-foreground">
                      {job.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3.5 w-3.5" /> {job.department}
                      </span>
                      {job.duration && (
                        <span className="flex items-center gap-1">
                          <GraduationCap className="h-3.5 w-3.5" /> {job.duration}
                        </span>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent" /> Key Responsibilities
                    </h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-purple shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Star className="h-4 w-4 text-accent" /> Requirements
                    </h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-pink shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  {job.benefits && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-accent" /> Benefits
                      </h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        {job.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-blue shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* How to Apply */}
                  {job.howToApply && (
                    <div className="rounded-lg bg-secondary p-5 border border-border">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Mail className="h-4 w-4 text-accent" /> How to Apply
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        {job.howToApply.instructions}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Subject line: <span className="font-medium text-foreground">"{job.howToApply.subjectLine}"</span>
                      </p>
                      <Button
                        className="bg-gradient-to-r from-gradient-pink via-gradient-purple to-gradient-blue text-primary-foreground hover:opacity-90"
                        asChild
                      >
                        <a href={`mailto:${job.howToApply.email}?subject=${encodeURIComponent(job.howToApply.subjectLine)}`}>
                          <Mail className="mr-2 h-4 w-4" /> Apply via Email
                        </a>
                      </Button>
                    </div>
                  )}
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

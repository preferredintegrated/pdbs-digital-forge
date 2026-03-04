import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { MapPin, Clock, Briefcase, ArrowLeft, Mail, GraduationCap, CheckCircle2, Star, ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundTexture from "@/assets/background-texture.png";
import careersBanner from "@/assets/careers-banner.jpg";

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
  niceToHave?: string[];
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
  {
    id: 2,
    title: "Junior Business Operations Coordinator",
    location: "Remote",
    type: "Entry-Level (1–2 Years)",
    department: "Business Operations",
    description:
      "The Junior Business Operations Coordinator will assist in managing internal processes, supporting project coordination, tracking performance metrics, and ensuring operational efficiency across departments.",
    responsibilities: [
      "Support day-to-day business operations and administrative processes",
      "Coordinate between technical, sales, and management teams",
      "Track project timelines and ensure deliverables are met",
      "Maintain operational records and documentation",
      "Prepare reports, presentations, and performance summaries",
      "Assist in process improvement initiatives",
      "Support client onboarding and internal workflow management",
    ],
    requirements: [
      "1–2 years' experience in business operations, administration, or coordination roles",
      "Strong organizational and multitasking skills",
      "Excellent written and verbal communication skills",
      "Proficiency in Microsoft Office or Google Workspace",
      "Basic understanding of business processes and project coordination",
      "Ability to work independently in a remote environment",
      "Strong attention to detail and problem-solving ability",
    ],
    niceToHave: [
      "Experience working in a tech or digital company",
      "Familiarity with project management tools (e.g., Trello, Asana, Jira)",
      "Basic knowledge of business analytics or reporting",
    ],
    benefits: [
      "Fully remote work environment",
      "Competitive salary",
      "Growth opportunities within the company",
      "Exposure to cross-functional business operations",
    ],
    howToApply: {
      email: "recruitment@preferreddigitalbusiness.com",
      subjectLine: "Junior Business Operations Coordinator Application – Preferred Digital Business Solutions",
      instructions: "Send your CV.",
    },
  },
  {
    id: 3,
    title: "Mobile App Developer",
    location: "Remote (Contract)",
    type: "Contract (Min. 2 Years Exp.)",
    department: "Engineering",
    description:
      "As a Mobile App Developer, you will be responsible for designing, developing, and maintaining mobile applications for Android and iOS platforms. You will collaborate with cross-functional teams to deliver scalable, user-friendly, and secure applications.",
    responsibilities: [
      "Develop and maintain mobile applications for Android and iOS",
      "Write clean, scalable, and efficient code",
      "Integrate mobile apps with backend APIs and third-party services",
      "Implement secure payment gateway integrations where required",
      "Troubleshoot, debug, and optimize application performance",
      "Participate in code reviews and technical planning sessions",
      "Ensure applications meet performance, security, and quality standards",
    ],
    requirements: [
      "Minimum of 2 years' experience in mobile app development",
      "Strong proficiency in Flutter or React Native (at least one required)",
      "Experience integrating RESTful APIs",
      "Experience with payment gateway integration (e.g., Paystack, Flutterwave)",
      "Understanding of app deployment processes (Google Play Store / Apple App Store)",
      "Familiarity with version control systems (e.g., Azure Repo, Git)",
      "Strong problem-solving skills and attention to detail",
      "Ability to work independently and collaboratively in a remote environment",
    ],
    niceToHave: [
      "Experience with state management solutions (e.g., Provider, Bloc, Redux)",
      "Knowledge of push notifications and real-time messaging",
      "Familiarity with CI/CD for mobile apps",
      "UI/UX design awareness",
    ],
    benefits: [
      "Fully remote work environment",
      "Contract position with the possibility of an extension",
      "Opportunity to work on innovative digital products",
      "Career growth and professional development",
    ],
    howToApply: {
      email: "recruitment@preferreddigitalbusiness.com",
      subjectLine: "Mobile App Developer Application – Preferred Digital Business Solutions",
      instructions: "Send your CV and portfolio.",
    },
  },
  {
    id: 4,
    title: "Technical Sales Executive",
    location: "Remote",
    type: "Min. 2 Years Exp.",
    department: "Sales",
    description:
      "The Technical Sales Executive will bridge the gap between our technical team and clients. You will identify prospects, understand client needs, present tailored technology solutions, and close deals while maintaining strong customer relationships.",
    responsibilities: [
      "Identify and generate new business opportunities",
      "Present and demonstrate digital solutions to prospective clients",
      "Understand client technical requirements and propose suitable solutions",
      "Prepare and deliver compelling sales proposals and presentations",
      "Collaborate with the technical team to design customized solutions",
      "Manage the full sales cycle from lead generation to closing",
      "Maintain long-term client relationships and ensure customer satisfaction",
      "Meet and exceed sales targets",
    ],
    requirements: [
      "Minimum of 2 years' experience in technical sales, IT sales, or B2B sales",
      "Strong understanding of software development, web/mobile applications, or enterprise solutions",
      "Ability to understand technical concepts (e.g., APIs, cloud services, integrations) and explain them clearly to clients",
      "Excellent communication, negotiation, and presentation skills",
      "Proven track record of meeting or exceeding sales targets",
      "Self-motivated and able to work independently in a remote environment",
    ],
    niceToHave: [
      "Experience selling SaaS or digital transformation solutions",
      "Familiarity with CRM tools",
      "Strong network within corporate or SME sectors",
    ],
    benefits: [
      "Fully remote work environment",
      "Salary plus commission on closed deals",
      "Performance-based incentives",
      "Opportunity to grow within a fast-expanding tech company",
    ],
    howToApply: {
      email: "recruitment@preferreddigitalbusiness.com",
      subjectLine: "Technical Sales Executive Application – Preferred Digital Business Solutions",
      instructions: "Send your CV.",
    },
  },
  {
    id: 5,
    title: "Business Analyst Intern",
    location: "Remote",
    type: "Internship",
    department: "Business Analysis",
    duration: "3 – 6 months",
    description:
      "We are seeking a Business Analyst Intern who is eager to learn how technology solutions support business goals. This role is ideal for students or recent graduates looking to gain hands-on experience in business analysis, requirements gathering, and stakeholder collaboration.",
    responsibilities: [
      "Assist in gathering and documenting business requirements",
      "Support process analysis and identify improvement opportunities",
      "Help prepare documentation such as user stories, process flows, and reports",
      "Participate in stakeholder meetings and project discussions",
      "Support testing and validation of solutions against business needs",
      "Collaborate with product, development, and support teams",
    ],
    requirements: [
      "Currently studying or recently graduated in Business Administration, Information Systems, Computer Science, or a related field",
      "Basic understanding of business analysis concepts",
      "Strong communication and documentation skills",
      "Analytical mindset with attention to detail",
      "Familiarity with tools like Excel, Google Docs, or similar",
      "Willingness to learn and take initiative",
    ],
    niceToHave: [
      "Knowledge of Agile or Scrum methodology",
      "Basic understanding of software development lifecycle (SDLC)",
      "Experience with tools like Jira, Confluence, or similar",
    ],
    benefits: [
      "Hands-on experience in real-world business analysis",
      "Mentorship from experienced professionals",
      "Exposure to live projects and stakeholder management",
      "Opportunity for future full-time employment based on performance",
    ],
    howToApply: {
      email: "recruitment@preferreddigitalbusiness.com",
      subjectLine: "Application – Business Analyst Intern",
      instructions: "Send your CV and a brief cover note explaining why you're interested in a Business Analyst internship.",
    },
  },
  {
    id: 6,
    title: "Technical Lead",
    location: "Remote",
    type: "Min. 3 Years Exp.",
    department: "Engineering",
    description:
      "As a Technical Lead, you will oversee the technical direction of projects, guide developers, and ensure best practices in software development. You will play a key role in system architecture, infrastructure, security, and successful product deployment.",
    responsibilities: [
      "Lead and mentor the development team",
      "Design and implement scalable applications and services",
      "Work extensively with React (frontend) and .NET (backend)",
      "Handle and oversee secure payment gateway integrations",
      "Ensure code quality, performance optimization, and security best practices",
      "Collaborate with product manager, scrum master, and business stakeholders",
      "Participate in architecture decisions and technical planning",
      "Conduct code reviews and enforce development standards and best practices",
    ],
    requirements: [
      "Minimum of 3 years' experience in a similar technical or leadership role",
      "Strong proficiency in React.js",
      "Strong experience with .NET / ASP.NET Core",
      "Strong proficiency in cloud computing, storage, and networking",
      "Experience integrating payment gateways (e.g., Paystack, Flutterwave or similar)",
      "Solid understanding of REST APIs and microservices architecture",
      "Experience with version control tools",
      "Experience with Azure DevOps",
      "Strong problem-solving and communication skills",
      "Ability to work independently and collaboratively in a remote environment",
    ],
    niceToHave: [
      "Experience with cloud platforms (Azure or AWS)",
      "DevOps knowledge (CI/CD pipelines)",
      "Experience with Agile/Scrum methodology",
    ],
    benefits: [
      "Fully remote work environment",
      "Opportunity to lead impactful digital projects",
      "Career growth and leadership exposure",
    ],
    howToApply: {
      email: "recruitment@preferreddigitalbusiness.com",
      subjectLine: "Technical Lead Application – Preferred Digital Business Solutions",
      instructions: "Send your CV and portfolio.",
    },
  },
  {
    id: 7,
    title: "Database Intern",
    location: "Remote",
    type: "Internship",
    department: "Engineering",
    duration: "6 months",
    description:
      "We are seeking a detail-oriented and analytical Database Intern to support our technical team in managing, organizing, and maintaining company databases. This internship provides hands-on experience in database administration, data analysis, and data security best practices.",
    responsibilities: [
      "Assist in designing and maintaining databases",
      "Support data entry, validation, and clean-up activities",
      "Write and optimize basic SQL queries",
      "Monitor database performance and troubleshoot minor issues",
      "Ensure data accuracy, integrity, and security",
      "Collaborate with developers and business teams on data requirements",
    ],
    requirements: [
      "Basic knowledge of SQL (MySQL, or SQL Server)",
      "Understanding of database concepts (tables, relationships, indexing)",
      "Familiarity with Microsoft Excel or data analysis tools",
      "Strong analytical and problem-solving skills",
      "Attention to detail and ability to work independently",
      "Currently studying or recently graduated in Computer Science, IT, or related field",
    ],
    benefits: [
      "Practical experience working with live databases",
      "Mentorship from experienced database administrators",
      "Exposure to real business data and systems",
      "Flexible remote work environment",
      "Opportunity for future full-time role based on performance",
    ],
    howToApply: {
      email: "recruitment@preferreddigitalbusiness.com",
      subjectLine: "Database Intern Application",
      instructions: "Send your CV.",
    },
  },
  {
    id: 8,
    title: "Front-End Developer Intern",
    location: "Remote",
    type: "Internship",
    department: "Engineering",
    duration: "6 months",
    description:
      "We are looking for a motivated and creative Front-End Developer Intern to join our team. This role is ideal for someone eager to gain hands-on experience building responsive and interactive web applications while working alongside experienced developers.",
    responsibilities: [
      "Assist in developing and maintaining web applications",
      "Translate UI/UX design wireframes into functional code",
      "Build responsive and mobile-friendly interfaces",
      "Collaborate with back-end developers and designers",
      "Debug and troubleshoot front-end issues",
      "Participate in code reviews and team meetings",
    ],
    requirements: [
      "Basic understanding of HTML, CSS, and JavaScript",
      "Familiarity with React.js is an added advantage",
      "Understanding of responsive design principles",
      "Knowledge of Git/version control is a plus",
      "Strong problem-solving skills and attention to detail",
      "Willingness to learn and grow in a fast-paced environment",
    ],
    benefits: [
      "Hands-on industry experience",
      "Mentorship from senior developers",
      "Opportunity to work on real-life projects",
      "Flexible remote work environment",
      "Potential for full-time employment based on performance",
    ],
    howToApply: {
      email: "recruitment@preferreddigitalbusiness.com",
      subjectLine: "Front-End Developer Intern Application",
      instructions: "Send your CV and portfolio.",
    },
  },
];

const JobCard = ({ job }: { job: JobListing }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden">
        <CollapsibleTrigger className="w-full text-left p-6 cursor-pointer group">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
              <ChevronDown
                className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
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
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="px-6 pb-6 space-y-6 border-t border-border pt-6">
            <p className="text-muted-foreground leading-relaxed">{job.description}</p>

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

            {job.niceToHave && (
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Star className="h-4 w-4 text-accent" /> Nice to Have
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {job.niceToHave.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-purple shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

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
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

const departments = Array.from(new Set(jobListings.map((j) => j.department)));
const types = Array.from(new Set(jobListings.map((j) => j.type)));

const Careers = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      !searchQuery ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = !selectedDepartment || job.department === selectedDepartment;
    const matchesType = !selectedType || job.type === selectedType;
    return matchesSearch && matchesDept && matchesType;
  });

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

      {/* Banner */}
      <section className="w-full">
        <img
          src={careersBanner}
          alt="Build Fully Integrated Software Solutions For Your Business - Preferred Digital Business Solutions"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Filters */}
      <section className="pt-12 pb-4">
        <div className="container mx-auto px-4 max-w-4xl space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search positions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={!selectedDepartment ? "default" : "outline"}
              onClick={() => setSelectedDepartment(null)}
            >
              All Departments
            </Button>
            {departments.map((dept) => (
              <Button
                key={dept}
                size="sm"
                variant={selectedDepartment === dept ? "default" : "outline"}
                onClick={() => setSelectedDepartment(selectedDepartment === dept ? null : dept)}
              >
                {dept}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={!selectedType ? "default" : "outline"}
              onClick={() => setSelectedType(null)}
            >
              All Types
            </Button>
            {types.map((type) => (
              <Button
                key={type}
                size="sm"
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => setSelectedType(selectedType === type ? null : type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 max-w-4xl mx-auto">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              <p className="text-center text-muted-foreground py-12">
                No positions match your filters. Try adjusting your search.
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;

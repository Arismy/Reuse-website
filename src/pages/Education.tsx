import { GraduationCap, Award, BookOpen, Calendar, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Tech University",
      year: "2016 - 2020",
      gpa: "3.8/4.0",
      description: "Specialized in Software Engineering and Web Development. Graduated Magna Cum Laude.",
      courses: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering", "Web Development"]
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Code Academy Pro",
      year: "2020",
      gpa: "Top 5%",
      description: "Intensive 6-month program covering modern web development technologies and best practices.",
      courses: ["React", "Node.js", "MongoDB", "DevOps", "Agile Development"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      credential: "AWS-CDA-2023-001",
      status: "Active",
      link: "#"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      credential: "META-REACT-2023",
      status: "Active",
      link: "#"
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2022",
      credential: "GCP-PRO-2022",
      status: "Active",
      link: "#"
    },
    {
      name: "Certified Scrum Master",
      issuer: "Scrum Alliance",
      date: "2022",
      credential: "CSM-2022-789",
      status: "Active",
      link: "#"
    }
  ];

  const courses = [
    {
      name: "Advanced React Patterns",
      platform: "Frontend Masters",
      instructor: "Kent C. Dodds",
      completed: "2024",
      duration: "8 hours",
      rating: 5
    },
    {
      name: "System Design Interview",
      platform: "Educative",
      instructor: "Grokking Team",
      completed: "2023",
      duration: "12 hours",
      rating: 5
    },
    {
      name: "Docker & Kubernetes",
      platform: "Udemy",
      instructor: "Stephane Maarek",
      completed: "2023",
      duration: "16 hours",
      rating: 4
    },
    {
      name: "TypeScript Masterclass",
      platform: "Pluralsight",
      instructor: "Brice Wilson",
      completed: "2022",
      duration: "6 hours",
      rating: 5
    }
  ];

  const skills_learned = [
    { category: "Frontend", skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS"] },
    { category: "Backend", skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"] },
    { category: "Cloud", skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
    { category: "Tools", skills: ["Git", "Jenkins", "Figma", "Jira", "Slack"] }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Education & Learning</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My continuous journey of learning and professional development in technology and software engineering.
          </p>
        </div>

        {/* Formal Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Formal Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="glass-card p-6 hover-lift transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-lg text-primary font-medium">{edu.institution}</p>
                    <p className="text-muted-foreground mt-2">{edu.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {edu.courses.map((course) => (
                        <span key={course} className="bg-white/5 px-3 py-1 rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.year}</span>
                    </div>
                    <div className="glass-button px-4 py-2 font-semibold">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-card p-6 hover-lift transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">{cert.name}</h3>
                    <p className="text-primary font-medium">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Credential ID: {cert.credential}
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
                        {cert.status}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="glass-button">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Online Courses */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Continuous Learning
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="glass-card p-6 hover-lift transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-foreground">{course.name}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < course.rating ? "text-yellow-400 fill-current" : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-primary font-medium">{course.platform}</p>
                  <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{course.duration}</span>
                    <span>Completed: {course.completed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Acquired */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Skills Acquired Through Learning</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills_learned.map((category, index) => (
              <div key={index} className="glass-card p-6 hover-lift transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-bold text-primary mb-4">{category.category}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="bg-white/5 px-3 py-2 rounded-lg text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Philosophy */}
        <section className="mt-16 text-center glass-card p-8 space-y-6">
          <h3 className="text-2xl font-bold gradient-text">Learning Philosophy</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            "Technology evolves rapidly, and staying current requires continuous learning. 
            I believe in learning by doing, sharing knowledge with others, and always pushing 
            the boundaries of what's possible."
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <span className="glass-button px-4 py-2">Continuous Improvement</span>
            <span className="glass-button px-4 py-2">Hands-on Learning</span>
            <span className="glass-button px-4 py-2">Knowledge Sharing</span>
            <span className="glass-button px-4 py-2">Innovation Mindset</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts, categories } from "@/data/blogPosts";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Blog & Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing my experiences, learnings, and thoughts on web development, 
            career growth, and the ever-evolving tech landscape.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`glass-button transition-all duration-300 ${
                selectedCategory === category 
                  ? "bg-gradient-primary text-white shadow-glow" 
                  : "hover:bg-white/5"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="glass-card hover-lift transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Post Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="glass-button px-3 py-1 text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6 space-y-4">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title & Excerpt */}
                <div className="space-y-2">
                  <h2 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 text-xs bg-white/5 px-2 py-1 rounded-full"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No posts found in the <span className="gradient-text">{selectedCategory}</span> category.
            </p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-20 text-center glass-card p-8 space-y-4">
          <h3 className="text-2xl font-bold gradient-text">Stay Updated</h3>
          <p className="text-muted-foreground">
            Get notified when I publish new articles and insights.
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
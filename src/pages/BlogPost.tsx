import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, Tag, ArrowLeft, Share2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <div className="mb-8 animate-fade-in">
          <Link to="/blog">
            <Button variant="outline" className="glass-button">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-6 mb-12 animate-fade-in">
          {/* Category Badge */}
          <div>
            <span className="glass-button px-4 py-2 font-medium gradient-text">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-sm bg-white/5 px-3 py-1 rounded-full"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Share Button */}
          <div className="flex items-center gap-4">
            <Button
              onClick={handleShare}
              variant="outline"
              className="glass-button"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 animate-fade-in">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl glass-card"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-invert max-w-none animate-fade-in">
          <div
            className="space-y-6 text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post.content
                .split('\n')
                .map(line => {
                  if (line.startsWith('# ')) {
                    return `<h1 class="text-3xl font-bold gradient-text mb-6 mt-8">${line.slice(2)}</h1>`;
                  }
                  if (line.startsWith('## ')) {
                    return `<h2 class="text-2xl font-semibold text-foreground mb-4 mt-6">${line.slice(3)}</h2>`;
                  }
                  if (line.startsWith('### ')) {
                    return `<h3 class="text-xl font-semibold text-foreground mb-3 mt-4">${line.slice(4)}</h3>`;
                  }
                  if (line.startsWith('- ')) {
                    return `<li class="mb-2 text-muted-foreground">${line.slice(2)}</li>`;
                  }
                  if (line.trim() === '') {
                    return '<br>';
                  }
                  if (line.includes('**') && line.includes('**')) {
                    const boldText = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>');
                    return `<p class="mb-4 text-muted-foreground">${boldText}</p>`;
                  }
                  return `<p class="mb-4 text-muted-foreground">${line}</p>`;
                })
                .join('')
            }}
          />
        </article>

        {/* Related Posts */}
        <section className="mt-16 pt-12 border-t border-white/10">
          <h3 className="text-2xl font-bold mb-8 gradient-text">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="glass-card p-6 hover-lift transition-all duration-300 group"
                >
                  <div className="space-y-3">
                    <span className="text-sm text-primary font-medium">
                      {relatedPost.category}
                    </span>
                    <h4 className="text-lg font-semibold group-hover:gradient-text transition-all duration-300">
                      {relatedPost.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {relatedPost.excerpt.slice(0, 100)}...
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center glass-card p-8 space-y-4">
          <h3 className="text-2xl font-bold gradient-text">Let's Connect</h3>
          <p className="text-muted-foreground">
            Enjoyed this article? I'd love to hear your thoughts and discuss more about {post.category.toLowerCase()}.
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Get In Touch
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default BlogPost;
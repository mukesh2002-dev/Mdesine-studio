"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  CheckCircle2,
  Quote,
  User,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Send,
  Building2,
  Tag,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationModal from "@/components/ui/consultation-modal";
import { blogPosts } from "@/data/blog-posts";

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [commentName, setCommentName] = useState("");
  const [commentMessage, setCommentMessage] = useState("");
  const [commentsList, setCommentsList] = useState([
    {
      id: 1,
      name: "Rajesh Sharma",
      date: "May 22, 2024",
      text: "Very insightful article! The points on biophilic integration and thermal insulation in Bihar's climate are extremely practical.",
    },
    {
      id: 2,
      name: "Ananya Roy",
      date: "May 21, 2024",
      text: "Loved the breakdown of Vastu and modern facade integration. Looking forward to consulting M Design Studio for our upcoming Patna home project.",
    },
  ]);

  const postId = Number(params?.id) || 1;
  const post = blogPosts.find((p) => p.id === postId) || blogPosts[0];

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName || !commentMessage) return;
    setCommentsList((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: commentName,
        date: "Just now",
        text: commentMessage,
      },
    ]);
    setCommentName("");
    setCommentMessage("");
  };

  return (
    <div className="space-y-0 bg-slate-50 min-h-screen">
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER BANNER                                                      */}
      {/* ========================================================================= */}
      <section className="relative bg-[#061224] text-white py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.img}
            alt={post.title}
            fill
            priority
            className="object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061224] via-[#061224]/90 to-[#061224]/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Top Breadcrumb & Back Link */}
          <div className="flex items-center justify-between gap-4 text-xs">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#D9531E] transition-colors font-bold bg-[#0B192C] px-3 py-1.5 rounded-lg border border-slate-700"
            >
              <ArrowLeft className="w-4 h-4 text-[#D9531E]" />
              <span>Back to Blog</span>
            </Link>

            <div className="flex items-center gap-2 text-slate-400 font-semibold">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <span>/</span>
              <span className="text-[#D9531E] truncate max-w-[150px]">{post.category}</span>
            </div>
          </div>

          {/* Category Badge & Meta Info */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="bg-[#D9531E] text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow">
              {post.category}
            </span>
            <span className="text-xs text-slate-300 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D9531E]" />
              {post.date}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-300 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D9531E]" />
              {post.readTime}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight pt-1">
            {post.title}
          </h1>

          {/* Author Strip */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-white border-2 border-[#D9531E]">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-contain p-1" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>{post.author.name}</span>
                  <span className="bg-amber-400/20 text-amber-300 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">Empaneled Architect</span>
                </h3>
                <p className="text-xs text-slate-400">{post.author.role}</p>
              </div>
            </div>

            {/* Share Quick Action */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="bg-[#0B192C] hover:bg-slate-800 border border-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400">Copied Link</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-[#D9531E]" />
                    <span className="hidden sm:inline">Share</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN BLOG BODY & SIDEBAR CONTENT                                        */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Content (8 Columns) */}
          <article className="lg:col-span-8 space-y-8">
            
            {/* Featured Main Image Card */}
            <div className="relative h-[320px] sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
              <Image
                src={post.img}
                alt={post.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs bg-black/50 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between">
                <span>Featured Project Visualization — M Design Studio</span>
                <span className="font-bold text-[#D9531E] uppercase text-[10px]">Patna & Madhubani</span>
              </div>
            </div>

            {/* Intro Paragraph */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-serif first-letter:text-4xl first-letter:font-black first-letter:text-[#D9531E] first-letter:mr-2 first-letter:float-left">
                {post.content.intro}
              </p>
            </div>

            {/* Key Takeaways Highlight Box */}
            {post.content.takeaways && post.content.takeaways.length > 0 && (
              <div className="bg-gradient-to-r from-[#061224] to-[#0B192C] text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-lg space-y-4">
                <div className="flex items-center gap-2 text-[#D9531E] font-black text-sm uppercase tracking-wider">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <span>Key Architectural Insights</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                  {post.content.takeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D9531E] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Detailed Sections */}
            {post.content.sections.map((sec, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-[#061224] tracking-tight flex items-center gap-2">
                  <span className="w-2 h-6 bg-[#D9531E] rounded-full inline-block"></span>
                  <span>{sec.heading}</span>
                </h2>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {sec.body}
                </p>

                {/* Section Quote Callout */}
                {sec.quote && (
                  <blockquote className="my-6 p-5 bg-orange-50/70 border-l-4 border-[#D9531E] rounded-r-xl relative italic text-slate-800 text-sm font-medium">
                    <Quote className="w-8 h-8 text-[#D9531E]/20 absolute right-4 bottom-2" />
                    <p className="relative z-10">"{sec.quote}"</p>
                  </blockquote>
                )}

                {/* Section Image Feature */}
                {sec.image && (
                  <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden my-4 border border-slate-200 shadow">
                    <Image src={sec.image} alt={sec.heading} fill className="object-cover" />
                  </div>
                )}

                {/* Bullets if any */}
                {sec.bullets && sec.bullets.length > 0 && (
                  <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                    {sec.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#D9531E] rounded-full mt-2 shrink-0"></span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Conclusion Box */}
            <div className="bg-orange-50 border border-orange-200 p-6 sm:p-8 rounded-2xl space-y-3">
              <h3 className="font-black text-lg text-[#061224] flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#D9531E]" />
                <span>Conclusion & Architectural Advice</span>
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>

            {/* Author Profile Bio Card */}
            <div className="bg-[#061224] text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-white border-2 border-[#D9531E] shrink-0 p-1">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-contain" />
              </div>
              <div className="space-y-2 text-center sm:text-left flex-1">
                <span className="text-[10px] bg-[#D9531E] text-white px-2.5 py-0.5 rounded font-black uppercase tracking-wider">
                  Article Author & Architect
                </span>
                <h3 className="text-xl font-bold text-white">{post.author.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{post.author.bio}</p>
                <div className="pt-2">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5 mx-auto sm:mx-0 shadow"
                  >
                    <span>Consult Ar. Mahesh Choudhary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Comments & Inquiries Section */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-black text-lg text-[#061224] flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#D9531E]" />
                  <span>Reader Discussion ({commentsList.length})</span>
                </h3>
              </div>

              {/* Comments List */}
              <div className="space-y-4">
                {commentsList.map((comm) => (
                  <div key={comm.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-[#061224] flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#D9531E]" />
                        <span>{comm.name}</span>
                      </h4>
                      <span className="text-[10px] text-slate-400">{comm.date}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{comm.text}</p>
                  </div>
                ))}
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleAddComment} className="pt-4 space-y-4 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Leave a Comment or Inquiry</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#D9531E]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email (Optional)"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#D9531E]"
                  />
                </div>
                <textarea
                  required
                  rows={3}
                  placeholder="Share your thoughts or architectural questions..."
                  value={commentMessage}
                  onChange={(e) => setCommentMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#D9531E]"
                ></textarea>
                <Button
                  type="submit"
                  className="bg-[#061224] hover:bg-[#D9531E] text-white font-bold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-colors shadow"
                >
                  <span>Post Comment</span>
                  <Send className="w-3.5 h-3.5" />
                </Button>
              </form>
            </div>

          </article>

          {/* Right Sidebar (4 Columns) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Book Consultation Sticky Widget */}
            <div className="bg-[#061224] text-white p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4 sticky top-24">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#D9531E] flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Planning a Project?</h3>
                  <p className="text-[10px] text-slate-400">Get Expert Architectural Advice</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with M Design Studio for customized 2D/3D plans, structural design, and municipal approvals in Patna & Madhubani.
              </p>

              <Button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold py-3 rounded-xl shadow text-xs flex items-center justify-center gap-2"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Post Tags */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-bold text-xs uppercase text-slate-800 tracking-wider flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#D9531E]" />
                <span>Article Tags</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold bg-slate-100 hover:bg-orange-50 hover:text-[#D9531E] text-slate-700 px-3 py-1 rounded-full cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Other Related Articles Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-sm text-[#061224] border-b border-slate-100 pb-2">
                More Articles
              </h3>
              <div className="space-y-4">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.id}`}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                      <Image src={rel.img} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] bg-orange-100 text-[#D9531E] font-black uppercase px-2 py-0.5 rounded">
                        {rel.category}
                      </span>
                      <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#D9531E] transition-colors leading-snug line-clamp-2">
                        {rel.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </aside>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. RELATED POSTS CAROUSEL GRID AT BOTTOM                                   */}
      {/* ========================================================================= */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black text-[#061224]">
              Recommended <span className="text-[#D9531E]">Articles</span>
            </h2>
            <Link
              href="/blog"
              className="text-xs font-bold text-[#D9531E] hover:underline flex items-center gap-1"
            >
              <span>View All Posts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((rPost) => (
              <div
                key={rPost.id}
                onClick={() => router.push(`/blog/${rPost.id}`)}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={rPost.img} alt={rPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-[#061224] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded">
                    {rPost.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-sm text-[#061224] group-hover:text-[#D9531E] transition-colors leading-snug line-clamp-2">
                    {rPost.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">{rPost.excerpt}</p>
                  <span className="text-xs font-bold text-[#D9531E] inline-flex items-center gap-1 pt-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}

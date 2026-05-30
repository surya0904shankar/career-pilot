import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, X, Minus, Square } from 'lucide-react';

export default function Contact({ personal = {}, socials = {} }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#008080] min-h-screen font-serif flex items-center justify-center">
      <div className="max-w-4xl w-full">
        {/* Main Window */}
        <div className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] shadow-[1px_1px_0_0_black]">
          {/* Title Bar */}
          <div className="bg-[#000080] p-1 flex items-center justify-between mx-1 mt-1">
            <div className="flex items-center gap-2 px-1">
              <Mail size={14} className="text-white" />
              <span className="text-white font-bold text-sm tracking-wide">Contact Me</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="bg-[#c0c0c0] border border-t-white border-l-white border-r-[#808080] border-b-[#808080] p-0.5 hover:bg-[#d0d0d0]">
                <Minus size={10} strokeWidth={3} />
              </button>
              <button className="bg-[#c0c0c0] border border-t-white border-l-white border-r-[#808080] border-b-[#808080] p-0.5 hover:bg-[#d0d0d0]">
                <Square size={10} strokeWidth={3} />
              </button>
              <button className="bg-[#c0c0c0] border border-t-white border-l-white border-r-[#808080] border-b-[#808080] p-0.5 hover:bg-[#d0d0d0] ml-0.5">
                <X size={10} strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* Menu Bar */}
          <div className="flex gap-4 px-2 py-1 text-xs border-b border-[#808080]">
            <span className="hover:bg-[#000080] hover:text-white px-1 cursor-default">File</span>
            <span className="hover:bg-[#000080] hover:text-white px-1 cursor-default">Edit</span>
            <span className="hover:bg-[#000080] hover:text-white px-1 cursor-default">View</span>
            <span className="hover:bg-[#000080] hover:text-white px-1 cursor-default">Help</span>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Form */}
            <div className="space-y-4">
              <div className="bg-[#c0c0c0] p-2 border-b border-[#808080]">
                <h3 className="text-black font-bold text-lg underline decoration-1 underline-offset-4">Send Message</h3>
              </div>

              {sent ? (
                <div className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-8 flex flex-col items-center justify-center text-center h-[300px]">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 border border-green-500">
                    <Send className="text-green-600" size={24} />
                  </div>
                  <p className="text-black font-bold text-lg mb-2">Success!</p>
                  <p className="text-gray-600 text-sm">Your message has been sent to the system.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 px-6 py-1 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white text-sm"
                  >
                    OK
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-black uppercase">User Name:</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-2 text-sm focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-black uppercase">Return Address (Email):</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-2 text-sm focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-black uppercase">Message Body:</label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-2 text-sm focus:outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-2 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white text-sm font-bold shadow-[1px_1px_0_0_black]"
                  >
                    <Send size={16} />
                    Submit to Server
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Info & Socials */}
            <div className="space-y-6">
              <div className="bg-[#c0c0c0] p-2 border-b border-[#808080]">
                <h3 className="text-black font-bold text-lg underline decoration-1 underline-offset-4">System Information</h3>
              </div>

              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-black">
                  Feel free to reach out for collaborations, project inquiries, or just to say hello! I'm currently looking for new opportunities in software engineering.
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {[
                    { icon: Mail, label: 'Email', value: socials.email || 'user@example.com', href: socials.email ? `mailto:${socials.email}` : '#' },
                    { icon: Github, label: 'GitHub', value: socials.github || 'github.com/profile', href: socials.github || '#' },
                    { icon: Linkedin, label: 'LinkedIn', value: socials.linkedin || 'linkedin.com/in/profile', href: socials.linkedin || '#' },
                    { icon: Twitter, label: 'Twitter', value: socials.twitter || '@handle', href: socials.twitter || '#' },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2 bg-[#c0c0c0] border border-t-white border-l-white border-r-[#808080] border-b-[#808080] hover:bg-[#d0d0d0] group transition-colors"
                    >
                      <div className="w-8 h-8 bg-[#000080] flex items-center justify-center border border-t-[#808080] border-l-[#808080] border-r-white border-b-white">
                        <Icon size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-700 uppercase leading-tight">{label}</p>
                        <p className="text-xs text-black truncate max-w-[180px]">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Status Bar */}
              <div className="mt-auto pt-4">
                <div className="bg-[#c0c0c0] border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-1 flex justify-between text-[10px] text-black">
                  <div className="px-2 border-r border-[#808080] flex-1">Status: Online</div>
                  <div className="px-2 border-r border-[#808080] flex-1 text-center">Version 1.0.98</div>
                  <div className="px-2 flex-1 text-right">Localhost:8080</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Taskbar Shortcut */}
        <div className="mt-8 flex justify-center">
          <div className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] px-4 py-1 flex items-center gap-2 cursor-pointer active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white">
            <div className="w-4 h-4 bg-[#000080] flex items-center justify-center">
              <Mail size={10} className="text-white" />
            </div>
            <span className="text-xs font-bold text-black">Start / Contact</span>
          </div>
        </div>
      </div>
    </section>
  );
}

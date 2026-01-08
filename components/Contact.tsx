import React, { useRef, useState } from "react";
import { Mail, Phone, Facebook, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // === THAY ĐỔI 3 GIÁ TRỊ NÀY BẰNG THÔNG TIN EMAILJS CỦA BẠN ===
  // Nếu dùng .env (khuyến khích), thay bằng:
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      setStatus("success");
      formRef.current.reset();

      // Tự động quay về trạng thái ban đầu sau 4 giây
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error: any) {
      console.error("EmailJS send error:", error);
      setStatus("error");
      setErrorMessage(
        "Failed to send message. Please try again or email me directly."
      );

      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Thông tin liên hệ bên trái */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-accent font-mono text-sm tracking-widest uppercase">
                05. Contact
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold">
                Let's Work Together
              </h3>
              <p className="text-textSecondary max-w-md">
                I'm currently looking for new opportunities. Whether you have a
                question or just want to say hi, I'll try my best to get back to
                you!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-4 glass rounded-2xl text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Me</h4>
                  <p className="text-textSecondary">vinh20072003@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 glass rounded-2xl text-accentSecondary group-hover:bg-accentSecondary group-hover:text-background transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Me</h4>
                  <p className="text-textSecondary">0865842453</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 glass rounded-2xl text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                  <Facebook size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Follow Me</h4>
                  <a
                    href="https://www.facebook.com/vinh.nguyenquang.98871174"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-accent transition-colors underline underline-offset-4"
                  >
                    Vinh Nguyen Quang
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form liên hệ bên phải */}
          <div className="glass p-8 md:p-12 rounded-[2rem] border-white/5 shadow-2xl relative">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-textSecondary ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="from_name" // ← Phải đúng với {{from_name}} trong template
                    required
                    placeholder="e.g. John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-textSecondary ml-1">
                    Contact (Email/Phone)
                  </label>
                  <input
                    type="text"
                    name="contact" // ← Biến custom bạn đã dùng trong template
                    required
                    placeholder="e.g. 090xxxxxxx"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-textSecondary ml-1">
                  Email to Reply
                </label>
                <input
                  type="email"
                  name="reply_to" // ← Phải đúng với {{reply_to}} trong template
                  required
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-textSecondary ml-1">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  name="message" // ← Phải đúng với {{message}} trong template
                  required
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === "success"
                    ? "bg-green-600 text-white"
                    : status === "error"
                    ? "bg-red-600 text-white"
                    : "bg-accent text-background hover:scale-[1.02] shadow-[0_0_20px_rgba(167,139,250,0.3)]"
                }`}
              >
                {status === "idle" && (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
                {status === "sending" && (
                  <>
                    <span className="animate-spin rounded-full h-5 w-5 border-2 border-current border-t-transparent"></span>
                    Sending...
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle size={18} /> Message Sent!
                  </>
                )}
                {status === "error" && <>Failed to Send</>}
              </button>

              {status === "error" && (
                <p className="text-red-400 text-center text-sm mt-4">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Link } from "react-router-dom";
import { Youtube, Notebook } from "lucide-react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Chatbase script injection
    const chatbaseScript = document.createElement("script");
    chatbaseScript.innerHTML = `
      (function(){
        if(!window.chatbase || window.chatbase("getState") !== "initialized") {
          window.chatbase = (...arguments) => {
            if(!window.chatbase.q) { window.chatbase.q = [] }
            window.chatbase.q.push(arguments)
          };
          window.chatbase = new Proxy(window.chatbase, {
            get(target, prop) {
              if(prop === "q") { return target.q }
              return (...args) => target(prop, ...args)
            }
          })
        }
        const onLoad = function() {
          const script = document.createElement("script");
          script.src = "https://www.chatbase.co/embed.min.js";
          script.id = "cC2tiBlPFdWLCCWdFMAOq";
          script.domain = "www.chatbase.co";
          document.body.appendChild(script)
        };
        if(document.readyState === "complete") {
          onLoad()
        } else {
          window.addEventListener("load", onLoad)
        }
      })();
    `;
    document.body.appendChild(chatbaseScript);

    // Cleanup on unmount
    return () => {
      // Remove the injected script
      if (chatbaseScript) {
        document.body.removeChild(chatbaseScript);
      }

      // Remove the Chatbase script tag if it's still there
      const chatbaseEmbed = document.getElementById("cC2tiBlPFdWLCCWdFMAOq");
      if (chatbaseEmbed) {
        chatbaseEmbed.remove();
      }

      // Remove any Chatbase-injected iframes
      const iframes = document.querySelectorAll("iframe");
      iframes.forEach((iframe) => {
        if (iframe.src.includes("chatbase") || iframe.title === "Chatbase") {
          iframe.remove();
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-800 mb-4 font-serif">
            Learning Resources
          </h1>
          <p className="text-lg text-purple-600 max-w-2xl mx-auto">
            Explore our curated collection of tools to enhance your learning journey
          </p>
        </header>

        {/* Custom Flex Layout */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Left Image Card */}
          <div className="flex-1 bg-white rounded-xl shadow-lg border border-purple-100 hover:border-purple-300 overflow-hidden">
            <img 
              src="/mnt/data/image.png" 
              alt="Learning Visual" 
              className="w-full h-full object-cover max-h-[400px]" 
            />
          </div>

          {/* Right Two Stacked Cards */}
          <div className="flex-1 flex flex-col gap-8">
            {/* YouTube Card */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-6 border border-purple-100 hover:border-purple-300 hover:shadow-xl transition"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Youtube className="h-8 w-8 text-purple-700" />
              </div>
              <h2 className="text-xl font-semibold text-purple-900 mb-2">
                Video Tutorials
              </h2>
              <p className="text-purple-600 text-sm">
                Watch curated video content to enhance your understanding
              </p>
            </a>

            {/* Notes Card */}
            <Link 
              to="/notes" 
              className="bg-white rounded-xl shadow-lg p-6 border border-purple-100 hover:border-purple-300 hover:shadow-xl transition"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Notebook className="h-8 w-8 text-purple-700" />
              </div>
              <h2 className="text-xl font-semibold text-purple-900 mb-2">
                Study Notes
              </h2>
              <p className="text-purple-600 text-sm">
                Access comprehensive notes and cheat sheets for quick reference
              </p>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-purple-500 text-sm">
          <p>© {new Date().getFullYear()} Learning Platform. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default About;

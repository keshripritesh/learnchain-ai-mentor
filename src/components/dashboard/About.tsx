
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Youtube, Notebook,PenTool, Code, Shield, Database, Cloud, Lock, Cpu, Layout, Globe } from "lucide-react";

// Define all course content
const courseContent = {
  "machine-learning": {
    title: "Machine Learning Fundamentals",
    description: "Master the core concepts of machine learning, including supervised and unsupervised learning...",
    icon: <Cpu className="h-8 w-8 text-purple-700" />,
    resources: [
      {
        icon: <Youtube className="h-8 w-8 text-purple-700" />,
        title: "ML Video Tutorials",
        description: "Watch curated machine learning video content",
        link: "https://youtube.com/playlist?list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw&si=2TErXTu9fxyJrlmL"
      },
      {
        icon: <Notebook className="h-8 w-8 text-purple-700" />,
        title: "ML Study Notes",
        description: "Access comprehensive ML notes and cheat sheets",
        link: "https://drive.google.com/drive/folders/1rmLfPN-j-aV0IGhWTwGtlMZO0mq2ncdT?usp=drive_link"
      }
    ]
  },
"ux-design": {
  title: "UX Design Principles",
  description: "Understand key principles of user experience design and how to create intuitive interfaces.",
  icon: <PenTool className="h-8 w-8 text-purple-700" />,
  resources: [
    {
      icon: <Layout className="h-8 w-8 text-purple-700" />,
      title: "UX Design Tutorials",
      description: "Watch tutorials to learn UI/UX basics and best practices",
      link: "https://youtube.com/playlist?list=PLjiHFwhbHYlHSpAflJwjsKAyMaMhASm0F&si=lJROAnMTkjNWcIv6"
    },
      {
        icon: <Notebook className="h-8 w-8 text-purple-700" />,
        title: "UI-UX Design",
        description: "Learn about Data Analytics concepts and tools",
        link: "https://drive.google.com/drive/folders/1XEE2YzehZpVOjQmRUr4In6xC5UEwFTeK?usp=drive_link"
        },
    ]
  },
  "blockchain": {
    title: "Blockchain Development",
    description: "Learn how to build decentralized applications and understand blockchain architecture.",
    icon: <Globe className="h-8 w-8 text-purple-700" />,
    resources: [
      {
        icon: <Youtube className="h-8 w-8 text-purple-700" />,
        title: "Block Chain Tutorials",
        description: "Watch curated machine learning video content",
        link: "https://youtube.com/playlist?list=PLS5SEs8ZftgUNcUVXtn2KXiE1Ui9B5UrY&si=b0CjlSnuM6XERnKQ"
      },
      {
        icon: <Notebook className="h-8 w-8 text-purple-700" />,
        title: "Blockchain Concepts",
        description: "Study notes on blockchain fundamentals",
        link: "https://drive.google.com/drive/folders/1rmLfPN-j-aV0IGhWTwGtlMZO0mq2ncdT?usp=drive_link"
      }
    ]
  },
  "web-development": {
    title: "Full Stack Web Development",
    description: "Master both frontend and backend technologies to build complete web applications.",
    icon: <Layout className="h-8 w-8 text-purple-700" />,
    resources: [
      {
        icon: <Youtube className="h-8 w-8 text-purple-700" />,
        title: "Web Dev Tutorials",
        description: "Watch full stack development tutorials",
        link: "https://youtube.com/playlist?list=PLwoh6bBAszPrES-EOajos_E9gvRbL27wz&si=0NDJ5vX8szk5RZ4q"
      },
      {
        icon: <Notebook className="h-8 w-8 text-purple-700" />,
        title: "Web dev",
        description: "Study notes on web development concepts",
        link: "https://drive.google.com/drive/folders/1Jrw7dgTlyyPHqaMeDXEigWTxbMtAZsQP?usp=drive_link"
      }
    ]
  },
//   },
//   "Cloud Computing": {
//   title: "Cloud Computing Foundations",
//   description: "Understand cloud infrastructure, deployment models, and service architectures using platforms like AWS, Azure, and GCP.",
//   icon: <Layout className="h-8 w-8 text-purple-700" />,
//   resources: [
//     {
//       icon: <Youtube className="h-8 w-8 text-purple-700" />,
//       title: "Cloud Computing Tutorials",
//       description: "Watch tutorials on cloud platforms and deployment",
//       link: "https://youtube.com/playlist?list=PLEiEAq2VkUUIJ3o1tehvtux0_Ynf42CBN&si=7YMrrbL4lnZMcG_I"
//     },
//     {
//       icon: <Code className="h-8 w-8 text-purple-700" />,
//       title: "Cloud Labs & Exercises",
//       description: "Practice cloud deployments and configurations",
//       link: "/exercises/cloud"
//     }
   
//   ]
// },
"data-analytics": {
  title: "Data Analytics",
  description: "Learn to analyze, visualize, and derive insights from data using tools like Python, Excel, and SQL.",
  icon: <Youtube className="h-8 w-8 text-purple-700" />,
  resources: [
    {
      icon: <Youtube className="h-8 w-8 text-purple-700" />,
      title: "Analytics Video Tutorials",
      description: "Watch data analytics tutorials covering Excel, SQL, Python and more.",
      link: "https://youtube.com/playlist?list=PLrRPvpgDmw0ks5W7U5NmDCU2ydSnNZA_1&si=Rdb6cuA09YQOwrEi"
    },
    {
      icon: <Notebook className="h-8 w-8 text-purple-700" />,
      title: "Data Analytics",
      description: "Learn about Data Analytics concepts and tools",
      link: "https://drive.google.com/drive/folders/1edJHD18rGgG-5o2Q0JzYJYu1FztsdiJD?usp=drive_link"
      },
    {
      icon: <Database className="h-8 w-8 text-purple-700" />,
      title: "SQL Practice",
      description: "Sharpen your SQL skills with real-world exercises.",
      link: "/exercises/sql"
    }
  ]
}


 
};

const About = () => {
  
  const { courseId } = useParams();
  const course = courseId ? courseContent[courseId as keyof typeof courseContent] : null;

  useEffect(() => {
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

    return () => {
      if (chatbaseScript) document.body.removeChild(chatbaseScript);
      const chatbaseEmbed = document.getElementById("cC2tiBlPFdWLCCWdFMAOq");
      if (chatbaseEmbed) chatbaseEmbed.remove();
      const iframes = document.querySelectorAll("iframe");
      iframes.forEach((iframe) => {
        if (iframe.src.includes("chatbase") || iframe.title === "Chatbase") {
          iframe.remove();
        }
      });
    };
  }, []);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-8">
        <div className="max-w-6xl mx-auto text-center py-20">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Course not found</h1>
          <Link to="/" className="text-purple-600 hover:underline">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-8">
        <div className="max-w-6xl mx-auto text-center py-20">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Course not found</h1>
          <Link to="/" className="text-purple-600 hover:underline">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
            {course.icon}
          </div>
          <h1 className="text-4xl font-bold text-purple-800 mb-4 font-serif">
            {course.title}
          </h1>
          <p className="text-lg text-purple-600 max-w-2xl mx-auto">
            {course.description}
          </p>
        </header>

        {/* Resources Section */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Left Image Card - Dynamic based on course */}
          <div className="flex-1 bg-white rounded-xl shadow-lg border border-purple-100 hover:border-purple-300 overflow-hidden">
            <img 
              src={`/images/${courseId}.jpg`} 
              alt={`${course.title} Visual`} 
              className="w-full h-full object-cover max-h-[700px]" 
            />
          </div>

          {/* Right Resources Cards */}
          <div className="flex-1 flex flex-col gap-8">
            {course.resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-lg p-6 border border-purple-100 hover:border-purple-300 hover:shadow-xl transition"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {resource.icon}
                </div>
                <h2 className="text-xl font-semibold text-purple-900 mb-2">
                  {resource.title}
                </h2>
                <p className="text-purple-600 text-sm">
                  {resource.description}
                </p>
              </a>
            ))}
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
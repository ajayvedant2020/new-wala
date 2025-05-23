import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  LEETCODE,
  Code,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="bg-zinc-900 text-white w-72 h-screen flex flex-col justify-between border-r border-zinc-800">
      <div className="py-6 px-4 flex flex-col items-center">
        <img
          src="/avatar.jpeg"
          alt="Avatar"
          className="w-32 h-32 rounded-full mb-4 border-4 border-amber-500"
        />
        <h1 className="text-3xl font-bold text-center">Vedant Pandey</h1>
        <p className="text-sm text-zinc-400 text-center mt-1">
          Aspiring Data Scientist
        </p>
      </div>

      <div className="py-6 px-4 flex-1 overflow-y-auto">
        <div className="space-y-4">
          {/* Email */}
          <ContactItem
            icon={<Mail className="h-4 w-4 text-amber-500" />}
            label="EMAIL"
            content="vedant.pandey2202@gmail.com"
            link="mailto:vedant.pandey2202@gmail.com"
          />

          {/* Birthday */}
          <ContactItem
            icon={<span className="text-amber-500 text-lg">🎂</span>}
            label="BIRTHDAY"
            content="February 22, 2002"
          />

          {/* Location */}
          <ContactItem
            icon={<MapPin className="h-4 w-4 text-amber-500" />}
            label="LOCATION"
            content="New Delhi, Delhi, India"
          />

          {/* LinkedIn */}
          <ContactItem
            icon={<Linkedin className="h-4 w-4 text-amber-500" />}
            label="LINKEDIN"
            content="linkedin.com/in/vedant22"
            link="https://www.linkedin.com/in/vedant22"
          />

          {/* GitHub */}
          <ContactItem
            icon={<Github className="h-4 w-4 text-amber-500" />}
            label="GITHUB"
            content="github.com/vedant22p"
            link="https://www.github.com/vedant22p"
          />

          {/* LeetCode */}
          <ContactItem
            icon={<Code className="h-4 w-4 text-amber-500" />}
            label="LEETCODE"
            content="leetcode.com/u/user0352V"
            link="https://leetcode.com/u/user0352V/"
          />

          {/* Instagram */}
          <ContactItem
            icon={<Instagram className="h-4 w-4 text-amber-500" />}
            label="INSTAGRAM"
            content="instagram.com/vedant22.p"
            link="https://www.instagram.com/vedant22.p"
          />
        </div>
      </div>
    </aside>
  );
}

// Reusable Contact Item component
function ContactItem({ icon, label, content, link }) {
  return (
    <div className="flex items-center text-sm">
      <div className="w-8 h-8 flex items-center justify-center mr-3">{icon}</div>
      <div>
        <div className="text-xs text-zinc-500 uppercase">{label}</div>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-amber-500 transition-colors"
          >
            {content}
          </a>
        ) : (
          <div className="text-zinc-400">{content}</div>
        )}
      </div>
    </div>
  );
}

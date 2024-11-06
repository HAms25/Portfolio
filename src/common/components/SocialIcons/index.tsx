import { VscGithubAlt } from "react-icons/vsc";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    icon: VscGithubAlt,
    url: "https://github.com/HAms25",
    label: "GitHub"
  },
  {
    id: 2,
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/hilarimartinez/",
    label: "LinkedIn"
  },
  {
    id: 3,
    icon: FaInstagram,
    url: "https://www.instagram.com/hilasaa/",
    label: "Instagram"
  },
  {
    id: 4,
    icon: FaFacebookF,
    url: "https://www.facebook.com/hilari.anguie",
    label: "Facebook"
  },
];

export default function SocialIcons() {
  return (
    <div className="flex flex-col gap-4 p-4">
        {socialLinks.map(({ id, icon: Icon, url, label}) => (
          <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:sacle-110 hover:text-blue-500"
          aria-label={`Visitar perfil de ${label}`}
          >
            <Icon className="w-8 h-8" />
          </a>
        ))}
      </div>
  )
}

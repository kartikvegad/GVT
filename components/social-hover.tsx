import { SOCIAL_LINKS } from "@/lib/site";

type SocialId = (typeof SOCIAL_LINKS)[number]["id"];

export function SocialHover() {
  return (
    <div className="gvt-social" aria-label="GVT social channels">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className="gvt-social-card"
          aria-label={`${link.label} (placeholder)`}
        >
          <SocialIcon id={link.id} />
        </a>
      ))}
      <p className="gvt-social-text">HOVER</p>
      <div className="gvt-social-back" aria-hidden="true" />
    </div>
  );
}

function SocialIcon({ id }: { id: SocialId }) {
  switch (id) {
    case "instagram":
      return (
        <svg className="instagram" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8 1.8H8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8A3.2 3.2 0 0 0 19.2 16V8A3.2 3.2 0 0 0 16 4.8ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Zm4.55-2.85a.95.95 0 1 1-.95.95.95.95 0 0 1 .95-.95Z" />
        </svg>
      );
    case "twitter":
      return (
        <svg className="twitter" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14.7 10.3 22 2h-2.2l-6.3 7.1L8.4 2H2l7.7 11.1L2 22h2.2l6.8-7.6L15.6 22H22l-7.3-11.7Zm-2.4 2.7-.8-1.1-6.2-8.6h2.6l5 7 0.8 1.1 6.5 9h-2.6l-5.3-7.4Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg className="dribble" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.4C11.8 3 10.5 4.7 10.5 7.2v1.3H8.5V11h2v10h3.5V11h2.4l.6-2.5h-3Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="codepen" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.5 9H4v11h2.5Zm-1.25-6A1.75 1.75 0 1 0 7 4.75 1.75 1.75 0 0 0 5.25 3ZM20 13.4c0-3.2-1.7-4.7-4-4.7a3.4 3.4 0 0 0-3 1.6V9H10.5v11H13v-6.1c0-1.6.3-3.1 2.2-3.1s2.3 1.7 2.3 3.2V20H20Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg className="uiverse" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3a9 9 0 0 0-7.8 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm4.7 12.9c-.2.5-1.1 1-1.6 1.1-.4 0-.9.1-1.5-.1-.3-.1-.8-.3-1.4-.5-2.4-1.1-4-3.5-4.1-3.7s-1-1.3-1-2.5.6-1.8.8-2 .5-.3.6-.3h.5c.1 0 .3 0 .5.4l.7 1.8c.1.1.1.3 0 .4l-.4.5c-.1.1-.2.2-.1.5s.6 1 1.3 1.6c.9.8 1.6 1 1.9 1.1.2.1.4.1.5-.1l.7-.9c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.3s.1.6-.1 1.1Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className="discord" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 8.2a3 3 0 0 0-2.1-2.1C18.2 5.7 12 5.7 12 5.7s-6.2 0-7.9.4A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12a31 31 0 0 0 .4 3.8 3 3 0 0 0 2.1 2.1c1.7.4 7.9.4 7.9.4s6.2 0 7.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22.4 12 31 31 0 0 0 22 8.2ZM10 15.2V8.8l5.2 3.2Z" />
        </svg>
      );
    case "phone":
      return (
        <svg className="github" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.2 2.8 9.6 2a1 1 0 0 1 1.2.6l1 2.5a1 1 0 0 1-.3 1.1L9.8 8a12.5 12.5 0 0 0 6.2 6.2l1.8-1.7a1 1 0 0 1 1.1-.3l2.5 1a1 1 0 0 1 .6 1.2l-.8 2.4a1.6 1.6 0 0 1-1.6 1.1C9.8 18 6 14.2 6 4.4a1.6 1.6 0 0 1 1.2-1.6Z" />
        </svg>
      );
    case "telegram":
      return (
        <svg className="telegram" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21.5 4.4 18.7 20c-.2.9-.8 1.1-1.6.7l-4.5-3.3-2.2 2.1c-.2.3-.4.4-.8.4l.3-4.8 8.7-7.9c.4-.3-.1-.5-.6-.2l-10.8 6.8-4.6-1.4c-1-.3-1-.9.2-1.4L20.2 3.6c.8-.3 1.5.2 1.3.8Z" />
        </svg>
      );
    case "email":
      return (
        <svg className="reddit" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm8 7.2L3.7 7.4A.7.7 0 0 0 4 7h16a.7.7 0 0 0 .3.4Zm0 1.6 8.4-5.3V17a.5.5 0 0 1-.4.5H4a.5.5 0 0 1-.4-.5V8.5Z" />
        </svg>
      );
    default: {
      const _exhaustive: never = id;
      return _exhaustive;
    }
  }
}

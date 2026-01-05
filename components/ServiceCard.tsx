import Link from "next/link";

export default function ServiceCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link href={href} className="service-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <span>View Details →</span>
    </Link>
  );
}

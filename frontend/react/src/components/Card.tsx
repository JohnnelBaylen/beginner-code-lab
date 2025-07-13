import '@styles/card.css';

interface CardProps {
  title: string;
  content: string;
}

export default function Card({ title, content }: CardProps) {
  return (
    <>
        <section className="card">
            <h2 className="card-title">{title}</h2>
            <p className="card-content">{content}</p>
        </section>
    </>
  );
}

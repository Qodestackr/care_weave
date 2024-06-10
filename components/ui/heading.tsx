interface HeadingProps {
  title: string;
  description: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-slate-600 tracking-tight">{title}</h2>
      <p className="text-sm text-muted-foreground text-green-500">{description}</p>
    </div>
  );
};

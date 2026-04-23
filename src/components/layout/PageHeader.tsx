interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
}

const PageHeader = ({ eyebrow, title, description }: Props) => (
  <div className="container pt-16 pb-4 text-center">
    {eyebrow && (
      <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">{eyebrow}</p>
    )}
    <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">{title}</h2>
    <span className="block mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
    {description && (
      <p className="mt-4 max-w-3xl mx-auto text-base text-muted-foreground">{description}</p>
    )}
  </div>
);

export default PageHeader;
interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
}

const PageHeader = ({ eyebrow, title, description }: Props) => (
  <section className="bg-gradient-hero text-primary-foreground">
    <div className="container py-16 md:py-20 animate-fade-in-up">
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/70 mb-3">
          {eyebrow}
        </p>
      )}
      <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">{title}</h1>
      {description && (
        <p className="mt-4 max-w-3xl text-lg text-primary-foreground/80">{description}</p>
      )}
    </div>
  </section>
);

export default PageHeader;
class MarkdownList {
  public links: { display: string, href: string }[];

  constructor() {
    this.links = this.getLinks();
  }

  private getLinks = () => {
    const t: { display: string, href: string }[] = []
    const modules = import.meta.glob('$lib/markdown/*.md', { as: 'raw', eager: true })
    for (const file in modules) {
      const name = this.stripName(modules[file]);
      if (name != null) {
        t.push({
          display: name,
          href: `/recipe/${this.stripFileName(file)}`
        })
      }
    }
    return t;
  };

  private stripName = (s: string): string | undefined => {
    return s.split("\n").reverse().pop()?.replace("#", "");
  };

  private stripFileName = (s: string): string | undefined => {
    return s.split("/").pop()?.replace(".md", "");
  }
}
export default MarkdownList;

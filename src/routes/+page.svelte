<script lang="ts">
  const getLinks = () => {
    const t: { display: string, href: string }[] = []
    const modules = import.meta.glob('$lib/markdown/*.md', { as: 'raw', eager: true })
    for (const file in modules) {
      const name = stripName(modules[file]);
      if (name != null) {
        t.push({
          display: name,
          href: `/recipe/${stripFileName(file)}`
        })
      }
    }
    return t;
  };
  const allLinks = getLinks();


  function stripName(s: string): string | undefined {
    return s.split("\n").reverse().pop()?.replace("#", "");
  }

  function stripFileName(s: string): string | undefined {
    return s.split("/").pop()?.replace(".md", "");
  }
</script>

<div class="link-container" hidden>
  {#each allLinks as link}
    <a href={link.href} on:click={close}>{link.display}</a>
  {/each}
</div>

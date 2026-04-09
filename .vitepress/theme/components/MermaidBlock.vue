<script setup lang="ts">
import { useData } from "vitepress";
import { computed, nextTick, onMounted, ref, watch } from "vue";

const props = defineProps<{
  code: string;
}>();

const container = ref<HTMLDivElement | null>(null);
const { isDark } = useData();

const source = computed(() => decodeURIComponent(props.code).trim());

let sequence = 0;
let mermaidModule: Awaited<typeof import("mermaid")>["default"] | null = null;

async function getMermaid() {
  if (!mermaidModule) {
    mermaidModule = (await import("mermaid")).default;
  }

  return mermaidModule;
}

function setErrorState(message: string) {
  if (!container.value) {
    return;
  }

  container.value.textContent = message;
  container.value.classList.add("vp-mermaid__error");
}

async function renderDiagram() {
  if (!container.value) {
    return;
  }

  container.value.classList.remove("vp-mermaid__error");

  const mermaid = await getMermaid();
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict",
    theme: isDark.value ? "dark" : "default",
  });

  try {
    sequence += 1;
    const id = `vp-mermaid-${sequence}`;
    const { svg, bindFunctions } = await mermaid.render(id, source.value);

    if (!container.value) {
      return;
    }

    container.value.innerHTML = svg;
    bindFunctions?.(container.value);
  } catch (error) {
    console.error("Failed to render Mermaid diagram", error);
    setErrorState(source.value);
  }
}

onMounted(() => {
  void renderDiagram();
});

watch([source, isDark], async () => {
  await nextTick();
  void renderDiagram();
});
</script>

<template>
  <div class="vp-mermaid">
    <div ref="container" class="vp-mermaid__diagram" />
  </div>
</template>

<style scoped>
.vp-mermaid {
  margin: 1.5rem 0;
  overflow-x: auto;
}

.vp-mermaid__diagram {
  display: flex;
  justify-content: center;
  min-width: max-content;
  padding: 1rem 0;
}

.vp-mermaid__diagram :deep(svg) {
  display: block;
  height: auto;
  max-width: 100%;
}

.vp-mermaid__error {
  white-space: pre-wrap;
  border: 1px solid var(--vp-c-danger-2);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-danger-1);
  font-family: var(--vp-font-family-mono);
  font-size: 0.9rem;
  line-height: 1.6;
  padding: 1rem;
}
</style>

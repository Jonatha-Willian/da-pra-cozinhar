import type ICategoria from "@/interfaces/ICategorias";

export async function obterCategorias() {
  const resposta = await fetch('https://gist.githubusercontent.com/Jonatha-Willian/807c9fa3e73ef3014059ea2e337ed6de/raw/9b91eb8b24ac6fbbf418d65d5cd8835f4272f8c4/categorias-ingredientes.json');
  
  const categorias: ICategoria[] = await resposta.json();
  return categorias;

  }

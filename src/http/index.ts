import type ICategorias from "@/interfaces/ICategorias";
import type IReceitas from "@/interfaces/IReceitas";

async function obterDadosURL<T>(url: string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}
export async function obterCategorias() {
  return obterDadosURL<ICategorias[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');
}

export async function obterReceitas() {
  return obterDadosURL<IReceitas[]>('https://gist.githubusercontent.com/Jonatha-Willian/5ec7d3463250b739c0d305d164681fe6/raw/3459428f105bb260a34e564f9ff03e7015074dcc/receitas.json');
}

# 🎮 Site do Heitor Maydana

Site oficial do servidor de Minecraft do Heitor — [heitormaydana.com.br](https://heitormaydana.com.br)

Página estática (HTML + CSS + JS puro), tema Minecraft, **kid-friendly**, com instruções passo-a-passo:

1. Entrar no Discord (`https://discord.gg/F5VjXx9xNw`)
2. Receber o cargo `Maynecrafter`
3. Registrar o nick com `/registrar`
4. Conectar em `minecraft.heitormaydana.com.br` (Minecraft Java 26.1.2)

## Estrutura

```
.
├── index.html   # Página única
├── style.css    # Visual estilo blocos do Minecraft
└── script.js    # Copiar IP + animaçãozinha dos blocos
```

## Rodar localmente

```bash
python3 -m http.server 8080
# abre http://localhost:8080
```

## Deploy

Sem build. Sobe os 3 arquivos em qualquer host estático (Cloudflare Pages, GitHub Pages, Netlify, Vercel).

Referência do servidor / bot Discord: [../Maynecraft](../Maynecraft)


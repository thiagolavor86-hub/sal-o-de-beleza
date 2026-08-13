# Setup de Imagens - Guia Completo

## Problema Resolvido ✅

As imagens estavam carregando de URLs externas que **não funcionam no GitHub e Vercel**:
- URLs do Facebook CDN com tokens que expiram
- URLs do Unsplash podem ter restrições

## Solução Implementada

### 1. Estrutura Criada
```
public/
└── images/
    ├── hero-bg.jpg          ✅ Já baixado
    ├── gallery-1.jpg        ⏳ Precisa adicionar
    ├── gallery-2.jpg        ⏳ Precisa adicionar
    ├── gallery-3.jpg        ⏳ Precisa adicionar
    ├── gallery-4.jpg        ⏳ Precisa adicionar
    ├── gallery-5.jpg        ⏳ Precisa adicionar
    ├── gallery-6.jpg        ⏳ Precisa adicionar
    ├── about-img-1.jpg      ⏳ Precisa adicionar
    └── about-img-2.jpg      ⏳ Precisa adicionar
```

### 2. Código Atualizado
Todos os arquivos foram atualizados para usar **caminhos relativos**:
- `src/app/App.tsx` - Referências das imagens

**Antes:**
```jsx
src="https://scontent.fcpq2-1.fna.fbcdn.net/v/t51.82787-15/..."
```

**Depois:**
```jsx
src="/images/gallery-1.jpg"
```

## Próximos Passos

### Para Desenvolvimento Local ✅
1. O arquivo `hero-bg.jpg` já está pronto
2. Você precisa adicionar as **8 imagens restantes** da pasta `public/images/`

### Para Deploy (GitHub + Vercel)

**Importante:** Você precisa fazer upload de TODAS as imagens, pois:
- ❌ Elas não estão no GitHub atualmente (não foram commitadas)
- ❌ As URLs externas não funcionam no Vercel

**Como fazer:**

1. **Baixe as imagens originais** de:
   - Instagram/Facebook da Studio Aflores
   - Ou use as que você tem salvas localmente

2. **Salve na pasta `public/images/`** com os nomes:
   - `gallery-1.jpg` até `gallery-6.jpg`
   - `about-img-1.jpg` e `about-img-2.jpg`

3. **Commit e push no GitHub:**
   ```bash
   git add public/images/
   git commit -m "Add missing product images"
   git push
   ```

4. **Deploy automático na Vercel:**
   - Vercel detectará as mudanças
   - As imagens serão servidas via CDN

## Verificação

Para verificar se está funcionando:

```bash
# Local (desenvolvimento)
npm run dev
# Visite http://localhost:5173
# As imagens devem aparecer normalmente

# Build para produção
npm run build
# Verifique a pasta dist/images/
```

## Benefícios

✅ Imagens servidas localmente (mais rápido)
✅ Funciona em GitHub Pages/Vercel
✅ Sem dependência de URLs externas
✅ Melhor controle de cache
✅ Melhora SEO e performance

## Dúvidas?

Se as imagens do Facebook não carregarem, você pode:
- Scrapear do Instagram da Studio Aflores
- Usar a ferramenta de desenvolvimento do navegador (F12) → Network
- Salvar manualmente cada imagem

Depois é só colocar em `public/images/` com os nomes corretos!

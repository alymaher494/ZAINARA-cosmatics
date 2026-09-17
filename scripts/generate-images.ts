import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.resolve(process.cwd(), 'public/images');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

type Job = { name: string; prompt: string; size: string };

const jobs: Job[] = [
  {
    name: 'hero.jpg',
    prompt:
      'Ultra elegant luxury cosmetics and beauty studio interior, cream ivory walls, antique gold accents, soft natural daylight, minimalist clean girl aesthetic, eucalyptus botanical branches in soft focus, marble treatment bed with crisp white linen, gold-framed mirror, sophisticated serene spa atmosphere, editorial photography, warm cream and gold color palette, high-end beauty clinic, no people, professional architectural interior photography, shallow depth of field',
    size: '1344x768',
  },
  {
    name: 'service-laser.jpg',
    prompt:
      'Close-up of professional laser hair removal treatment on smooth female leg, modern white laser device with gold tip, clean clinical luxury setting, soft lighting, cream background, skincare spa aesthetic, no face visible, focus on leg and device, high-end medical spa photography, warm tones, professional, serene',
    size: '1024x1024',
  },
  {
    name: 'service-facial.jpg',
    prompt:
      'Woman receiving luxury aqua facial HydraFacial treatment, glowing hydrated radiant skin, esthetician hands gently working, serene spa setting, cream and gold tones, soft diffused lighting, eyes closed relaxed, dewy glowing complexion, high-end beauty photography, clean girl aesthetic, botanical elements softly blurred in background',
    size: '1024x1024',
  },
  {
    name: 'service-microneedling.jpg',
    prompt:
      'Close-up of microneedling facial treatment being performed on woman with beautiful skin, professional pen device with red LED light therapy, clinical luxury spa setting, cream background, focused on cheek and device, glowing healthy skin, high-end aesthetic clinic photography, warm professional lighting, no full face visible',
    size: '1024x1024',
  },
  {
    name: 'service-permanent.jpg',
    prompt:
      'Extreme close-up of microblading permanent makeup eyebrow treatment, esthetician hand with precision tool creating hair-like strokes on perfectly shaped brow, beautiful defined eyebrow result, luxury beauty studio, soft lighting, cream and gold tones, focus on brow and tool, professional beauty photography, serene and precise',
    size: '1024x1024',
  },
  {
    name: 'service-peeling.jpg',
    prompt:
      'Close-up of chemical peel BioRePeel facial treatment applied with brush on glowing skin, radiant fresh complexion, luxury skincare spa setting, cream background, gold accents, professional application, focus on cheek area and brush, high-end beauty photography, warm soft lighting, clean aesthetic',
    size: '1024x1024',
  },
  {
    name: 'gallery-1.jpg',
    prompt:
      'Before and after style beauty result: perfectly shaped microbladed eyebrows on female face, natural hair-like strokes, defined arch, glowing skin, close-up portrait, luxury beauty photography, soft warm lighting, cream tones, professional result photography',
    size: '1024x1024',
  },
  {
    name: 'gallery-2.jpg',
    prompt:
      'Beautiful lifted and tinted eyelashes and eyebrows close-up, lash lift result, natural curled long lashes, defined brows, radiant eye makeup, luxury beauty result photography, soft warm lighting, cream background, professional close-up',
    size: '1024x1024',
  },
  {
    name: 'gallery-3.jpg',
    prompt:
      'Radiant glowing female skin close-up after facial treatment, dewy hydrated complexion, flawless even skin tone, healthy natural glow, beauty result photography, soft warm lighting, cream and gold tones, professional skincare result, eyes gently visible, serene',
    size: '1024x1024',
  },
  {
    name: 'cta-bg.jpg',
    prompt:
      'Abstract luxury background, soft cream ivory gradient with subtle antique gold leaf textures and faint eucalyptus botanical silhouettes, elegant minimal, high-end spa and cosmetics brand aesthetic, soft diffused light, no text, editorial background photography',
    size: '1344x768',
  },
  {
    name: 'og-cover.jpg',
    prompt:
      'Luxury cosmetics brand social cover image, elegant cream and antique gold color palette, botanical eucalyptus branches, soft gold bokeh, sophisticated minimal spa aesthetic, premium beauty brand, editorial photography, warm serene mood, no text',
    size: '1344x768',
  },
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function run() {
  const zai = await ZAI.create();
  console.log(`Generating ${jobs.length} images sequentially (rate-limited)...`);
  let ok = 0;
  for (const job of jobs) {
    if (fs.existsSync(path.join(OUT_DIR, job.name))) {
      console.log(`↷ skip ${job.name} (exists)`);
      ok++;
      continue;
    }
    try {
      console.log(`▶ start ${job.name} (${job.size})`);
      const res = await zai.images.generations.create({
        prompt: job.prompt,
        size: job.size as any,
      });
      const b64 = res.data[0].base64;
      const buf = Buffer.from(b64, 'base64');
      fs.writeFileSync(path.join(OUT_DIR, job.name), buf);
      console.log(`✓ done ${job.name} (${(buf.length / 1024).toFixed(1)} KB)`);
      ok++;
    } catch (e: any) {
      console.error(`✗ fail ${job.name}: ${e.message}`);
    }
    await sleep(2500);
  }
  console.log(`\nSummary: ${ok}/${jobs.length} images done.`);
}
run().catch((e) => {
  console.error('Fatal:', e);
  process.exit(1);
});

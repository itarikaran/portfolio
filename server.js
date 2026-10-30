import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const root = process.cwd();
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.png':'image/png', '.pdf':'application/pdf' };
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const requested = pathname === '/' ? 'index.html' : normalize(pathname.slice(1));
    const relative = pathname === '/' || requested.startsWith('src\\') || requested.startsWith('src/')
      ? requested
      : join('public', requested);
    if (relative.startsWith('..')) throw new Error('Invalid path');
    const file = await readFile(join(root, relative));
    res.writeHead(200, { 'Content-Type': types[extname(relative)] || 'application/octet-stream' }); res.end(file);
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(Number(process.env.PORT || 4173), '127.0.0.1', () => console.log('Portfolio at http://127.0.0.1:4173'));

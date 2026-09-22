// Optional local preview server. The site also works by opening index.html directly.
const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const root=__dirname;
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.jpg':'image/jpeg','.mp3':'audio/mpeg','.md':'text/plain; charset=utf-8'};
const port=Number(process.env.YOIN_PORT||4173);
http.createServer((req,res)=>{
  try {
    if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{'Allow':'GET, HEAD'});res.end();return;}
    const pathname=decodeURIComponent(new URL(req.url,'http://127.0.0.1').pathname);
    const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
    if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()||!types[path.extname(file)]){res.writeHead(404);res.end('Not found');return;}
    const size=fs.statSync(file).size;
    const headers={'Content-Type':types[path.extname(file)],'Cache-Control':'no-cache','X-Content-Type-Options':'nosniff','Accept-Ranges':'bytes'};
    let start=0,end=size-1,status=200;
    if(req.headers.range&&req.method==='GET'){
      const range=/^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
      if(!range||(!range[1]&&!range[2])){res.writeHead(416,{'Content-Range':`bytes */${size}`});res.end();return;}
      if(!range[1])start=Math.max(0,size-Number(range[2]));
      else{start=Number(range[1]);if(range[2])end=Math.min(size-1,Number(range[2]));}
      if(!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||start>end||start>=size){res.writeHead(416,{'Content-Range':`bytes */${size}`});res.end();return;}
      status=206;headers['Content-Range']=`bytes ${start}-${end}/${size}`;
    }
    headers['Content-Length']=size===0?0:end-start+1;
    res.writeHead(status,headers);
    if(req.method==='HEAD'||size===0)res.end();else fs.createReadStream(file,{start,end}).pipe(res);
  }catch{res.writeHead(400);res.end('Bad request');}
}).listen(port,'127.0.0.1',()=>console.log(`YOIN ready: http://127.0.0.1:${port}`));

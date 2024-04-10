const dname=__dirname;
const fname=__filename;
const buff=Buffer.alloc(1);
buff.write("MERN");

console.log(dname);
console.log(fname);

console.log(buff.toString);

console.log(process.pid);
console.log(process.cpuUsage());
console.log(process.platform);
console.log(process.env);
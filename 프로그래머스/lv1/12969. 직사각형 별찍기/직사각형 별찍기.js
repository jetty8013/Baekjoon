//repeat로 떡칠

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let str = "*"
    console.log((str.repeat(a)+'\n').repeat(b))
});
const baseUrl = 'wget https://lzshdt.ctpaas.com/upload_resources/liangzhu/18/';
const x = 218446;
const y = 107820;

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const newX = x + i;
    const newY = y + j;
    const url = `${baseUrl}${newX}_${newY}.png`;
    console.log(url);
  }
}
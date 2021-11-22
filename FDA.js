let fs = require('fs');
let arg = process.argv;
let firstString, secondString;

s = fs.readFileSync('input1.txt');
s = s.toString();

t = fs.readFileSync('input2.txt');
t = t.toString();

m = t.length;
l = s.length;
alph = new Array();
for (i = 0; i < m; i++) {
	alph[t.charAt(i)] = 0;
}
for (i = 0; i < l; i++) {
	alph[s.charAt(i)] = 0;
}
del = new Array(m + 1);
for (j = 0; j <= m; j++) {
	del[j] = new Array();
}
for (i in alph) {
	del[0][i] = 0;
}
for (j = 0; j < m; j++) {
	prev = del[j][t.charAt(j)];
	del[j][t.charAt(j)] = j + 1;
	for (i in alph) {
		del[j + 1][i] = del[prev][i];
	}
}
/*for (j = 0; j <= m; j++) {
	out = '';
	for (i in alph)
		out += del[j][i] + ' ';
	console.log(out);
}*/
let now = 0;
for (i = 0; i < l; ++i) {
	now = del[now][s.charAt(i)];
	if (now == m) {
		console.log(i - m);
	}
}
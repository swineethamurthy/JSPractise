function findDuplicates(arr) {
  let sortedarr = [];
  let duplicatearr = [];
  sortedarr = arr.sort();
  for (let i = 0; i < sortedarr.length; i++) {
    if (sortedarr[i] == sortedarr[i + 1]) {
      if (!duplicatearr.includes(sortedarr[i])) {
        duplicatearr.push(sortedarr[i]);
      }
    }
  }
  return duplicatearr.length;
}
module.exports = findDuplicates;

export default function sortByName(a, b) {
  const name1 = a.user.toLocaleLowerCase();
  const name2 = b.user.toLocaleLowerCase();
  if (name1 > name2) {
    return 1;
  } else if (name2 > name1) {
    return -1;
  } else {
    return 0;
  }
}

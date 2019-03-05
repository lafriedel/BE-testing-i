module.exports = {
  success,
  fail,
  repair
};

function success(item) {
  // The item's enhancement increases by 1.
  const enhancement = ++item.enhancement;

  // The item's name is updated to reflect the new enhancement

  const displayName = `${enhancementLevel[enhancement]} ${item.name}`

  return {...item, enhancement, displayName };
}

function fail(item) {
  // If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.
  if (item.enhancement < 15 && item.durability < 25) {
    return { ...item };
  }

  // If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.
  if (item.enhancement >= 15 && item.durability < 10) {
    return { ...item };
  }

  // The durability of the item is decreased by 10 if the item's enhancement is greater than 14.
  // The durability of the item is decreased by 5 if the item's enhancement is between 0 and 14.
  const durability =
    item.enhancement < 15 ? item.durability - 5 : item.durability - 10;

  // If the item's enhancement level is greater than 16 (DUO, TRI, TET), the enhancement level decreases by 1 (a DUO item would go back to PRI on failure).
  const enhancement =
    item.enhancement > 16 ? item.enhancement - 1 : item.enhancement;

  return { ...item, durability, enhancement };
}

function repair(item) {
  if (item.durability < 100) {
    item = { ...item, durability: 100 };
    return item;
  } else {
    return null;
  }
}

const enhancementLevel = {
  0: "[0]",
  1: "[+1]",
  2: "[+2]",
  3: "[+3]",
  4: "[+4]",
  5: "[+5]",
  6: "[+6]",
  7: "[+7]",
  8: "[+8]",
  9: "[+9]",
  10: "[+10]",
  11: "[+11]",
  12: "[+12]",
  13: "[+13]",
  14: "[+14]",
  15: "[+15]",
  16: "[PRI]",
  17: "[DUO]",
  18: "[TRI]",
  19: "[TET]",
  20: "[PEN]"
};

module.exports = {
    success,
    fail,
    repair
}

    function success(item) {
        item = {
            ...item, 
            enhancement: ++item.enhancement,
            displayName: `${enhancementLevel[item.enhancement]} ${item.name}`
        };
        
        return item;
    }

    function fail(item) {
        
    }

    function repair(item) {
        if (item.durability < 100) {
            item = {...item, durability: 100};
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

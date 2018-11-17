const contains = function (needle) {
    let indexOf;

    if (typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (needle) {
            let i = -1
            let index = -1;

            for (i = 0; i < this.length; i++) {
                let item = this[i];

                if (item === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle) > -1;
};

const returnPlayer = (players, playerName) => {
    try {
        players.forEach(function (player) {
            if (player.email.toLowerCase().includes(playerName)) {
                throw player;
            }
        });
    } catch (player) {
        return player;
    }
}

export {
    contains,
    returnPlayer
};
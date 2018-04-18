function sortingTable(mainElement, subElement, sortingElement, index) {

    'use strict';

    var table,
        rows,
        switchStatus,
        i,
        column,
        columnNext,
        switchToggle,
        direction,
        counter = 0;

    table = $(mainElement);

    switchStatus = true;

    direction = "ASC";

    while (switchStatus) {

        switchStatus = false;

        rows = table.find(subElement);

        for (i = 1; i < (rows.length - 1); i++) {

            switchToggle = false;

            column = rows.eq(i).find(sortingElement).eq(index);

            columnNext = rows.eq(i + 1).find(sortingElement).eq(index);

            if (direction == "ASC") {

                if (column.html().toLowerCase() > columnNext.html().toLowerCase()) {

                    switchToggle = true;

                    break;

                }

            } else if (direction == "DESC") {

                if (column.html().toLowerCase() < columnNext.html().toLowerCase()) {

                    switchToggle = true;

                    break;

                }

            }

        }
        if (switchToggle) {

            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);

            switchStatus = true;

            counter++;

        } else {

            if (counter == 0 && direction == "ASC") {

                direction = "DESC";

                switchStatus = true;

            }

        }

    }

}
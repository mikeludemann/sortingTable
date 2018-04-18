function sortTable(table, rows, column, index) {

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

    table = document.querySelector(table);

    switchStatus = true;

    direction = "ASC";

    while (switchStatus) {

        switchStatus = false;

        rows = table.getElementsByTagName(rows);

        for (i = 1; i < (rows.length - 1); i++) {

            switchToggle = false;

            column = rows[i].getElementsByTagName(column)[index];

            columnNext = rows[i + 1].getElementsByTagName(column)[index];

            if (direction == "ASC") {

                if (column.innerHTML.toLowerCase() > columnNext.innerHTML.toLowerCase()) {

                    switchToggle = true;

                    break;

                }

            } else if (direction == "DESC") {

                if (column.innerHTML.toLowerCase() < columnNext.innerHTML.toLowerCase()) {

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
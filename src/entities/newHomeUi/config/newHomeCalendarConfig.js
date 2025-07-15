

export const weekdays = ["DU", "SE", "CH", "PA", "JU", "SH", "YA"]

export const list = [
    {
        month: "August",
        calendarRows: [
            [
                0, 0, 0, 0,
                {day: 1, color: "lightgreen"},
                {day: 2, color: "lightgreen"},
                {day: 3, color: "lightgreen"}
            ],
            [
                {day: 4, color: "lightgreen"},
                {day: 5, color: "lightgreen"},
                {day: 6, color: "lightgreen"},
                {day: 7, color: "lightgreen"},
                {day: 8, color: "lightgreen"},
                {day: 9, color: "lightgreen"},
                {day: 10, color: "lightgreen"}
            ],
            [
                {day: 11, color: "lightgreen"},
                {day: 12, color: "lightgreen"},
                {day: 13, color: "lightgreen"},
                {day: 14, color: "lightgreen"},
                {day: 15, color: "lightgreen"},
                {day: 16, color: "lightgreen"},
                {day: 17, color: "lightgreen"}
            ],
            [
                {day: 18, color: "lightgreen"},
                {day: 19, color: "lightgreen"},
                {day: 20, color: "lightgreen"},
                {day: 21, color: "lightgreen"},
                {day: 22, color: "lightgreen"},
                {day: 23, color: "lightgreen"},
                {day: 24, color: "lightgreen"}
            ],
            [
                {day: 25, color: "lightgreen"},
                {day: 26, color: "lightblue"},
                {day: 27, color: "lightblue"},
                {day: 28, color: "lightblue"},
                {day: 29, color: "lightblue"},
                {day: 30, color: "lightblue"},
                31
            ],
        ],
        days: [
            {day: "1-25-August", name: "Summer Break"},
            {day: "26-30-August", name: "Teachers training"},
        ]
    },
    {
        month: "September",
        calendarRows: [
            [
                {day: 1, color: "red"},
                2, 3,
                {day: 4, color: "yellow"},
                5, 6, 7
            ],
            [8, 9, 10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19, 20, 21],
            [22, 23, 24, 25, 26, 27, 28],
            [29, 30, 0, 0, 0, 0, 0],
        ],
        days: [
            {day: "1-September", name: "Independence day"},
            {day: "4-September", name: "Start of Academic year"},
        ]
    },
    {
        month: "October",
        calendarRows: [
            [
                0, 0,
                {day: 1, color: "red"},
                2, 3, 4, 5
            ],
            [6, 7, 8, 9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24, 25, 26],
            [27, 28, 29, 30, 31, 0, 0],
        ],
        days: [
            {day: "1-October", name: "Teachers' day"},
        ]
    },
    {
        month: "November",
        calendarRows: [
            [0, 0, 0, 0, 0, 1, 2],
            [
                3,
                {day: 4, color: "mediumpurple"},
                {day: 5, color: "mediumpurple"},
                {day: 6, color: "mediumpurple"},
                {day: 7, color: "mediumpurple"},
                {day: 8, color: "mediumpurple"},
                9
            ],
            [
                10,
                {day: 11, color: "lightgreen"},
                {day: 12, color: "lightgreen"},
                {day: 13, color: "lightgreen"},
                {day: 14, color: "lightgreen"},
                {day: 15, color: "lightgreen"},
                16
            ],
            [
                17,
                {day: 18, color: "yellow"},
                19, 20, 21, 22, 23
            ],
            [24, 25, 26, 27, 28, 29, 30],
        ],
        days: [
            {day: "4-8-November", name: "Assesment days"},
            {day: "8-November", name: "End of Quarter 1"},
            {day: "9-17-November", name: "Autumn Break"},
            {day: "18-November", name: "Start of Quarter 2"},
        ]
    },
    {
        month: "December",
        calendarRows: [
            [1, 2, 3, 4, 5, 6, 7],
            [
                {day: 8, color: "red"},
                9, 10, 11, 12, 13, 14
            ],
            [15, 16, 17, 18, 19, 20, 21],
            [
                22,
                {day: 23, color: "mediumpurple"},
                {day: 24, color: "mediumpurple"},
                {day: 25, color: "mediumpurple"},
                {day: 26, color: "mediumpurple"},
                {day: 27, color: "mediumpurple"},
                28
            ],
            [
                29,
                {day: 30, color: "lightgreen"},
                {day: 31, color: "lightgreen"},
                0, 0, 0, 0
            ],
        ],
        days: [
            {day: "8-December", name: "Constitution Day"},
            {day: "23-27-December", name: "Assesment days"},
            {day: "27-December", name: "End of Quarter 2"},
            {day: "30-31-December", name: "Winter break"},
        ]
    },
    {
        month: "January",
        calendarRows: [
            [
                0, 0, 0,
                {day: 1, color: "lightgreen"},
                {day: 2, color: "lightgreen"},
                {day: 3, color: "lightgreen"},
                {day: 4, color: "lightgreen"}
            ],
            [
                {day: 5, color: "lightgreen"},
                {day: 6, color: "lightgreen"},
                {day: 7, color: "lightgreen"},
                {day: 8, color: "yellow"},
                9, 10, 11
            ],
            [12, 13, 14, 15, 16, 17, 18],
            [19, 20, 21, 22, 23, 24, 25],
            [26, 27, 28, 29, 30, 31, 0],
        ],
        days: [
            {day: "1-7-January", name: "Winter Break"},
            {day: "8-January", name: "Start of Quarter 3"},
        ]
    }, {
        month: "February",
        calendarRows: [
            [0, 0, 0, 0, 0, 0, 1],
            [2, 3, 4, 5, 6, 7, 8],
            [9, 10, 11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20, 21, 22],
            [23, 24, 25, 26, 27, 28, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ],
        days: []
    }, {
        month: "March",
        calendarRows: [
            [0, 0, 0, 0, 0, 0, 1],
            [
                2, 3, 4, 5, 6, 7,
                {day: 8, color: "red"}
            ],
            [9, 10, 11, 12, 13, 14, 15],
            [
                16,
                {day: 17, color: "mediumpurple"},
                {day: 18, color: "mediumpurple"},
                {day: 19, color: "mediumpurple"},
                {day: 20, color: "mediumpurple"},
                {day: 21, color: "red"},
                22
            ],
            [
                23,
                {day: 24, color: "lightgreen"},
                {day: 25, color: "lightgreen"},
                {day: 26, color: "lightgreen"},
                {day: 27, color: "lightgreen"},
                {day: 28, color: "lightgreen"},
                {day: 29, color: "lightgreen"}
            ],
            [
                {day: 30, color: "lightgreen"},
                {day: 31, color: "yellow"},
                0, 0, 0, 0, 0
            ],
        ],
        days: [
            {day: "8-March", name: "Women's day"},
            {day: "17-20-March", name: "Assesment days"},
            {day: "20-March", name: "End of Quarter 3"},
            {day: "21-March", name: "Navro'z"},
            {day: "24-31-March", name: "Spring Break"},
            {day: "31-March", name: "Start of Term 4"},
        ]
    }, {
        month: "April",
        calendarRows: [
            [0, 0, 1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24, 25, 26],
            [27, 28, 29, 30, 0, 0, 0],
        ],
        days: []
    }, {
        month: "May",
        calendarRows: [
            [0, 0, 0, 0, 1, 2, 3],
            [
                4, 5, 6, 7, 8,
                {day: 9, color: "red"},
                10
            ],
            [11, 12, 13, 14, 15, 16, 17],
            [18, 19, 20, 21, 22, 23, 24],
            [25, 26, 27, 28, 29, 30, 31],
        ],
        days: [
            {day: "9-May", name: "Memorial day"},
        ]
    }, {
        month: "June",
        calendarRows: [
            [1, 2, 3, 4, 5, 6, 7],
            [8, 9, 10, 11, 12, 13, 14],
            [
                15,
                {day: 16, color: "mediumpurple"},
                {day: 17, color: "mediumpurple"},
                {day: 18, color: "mediumpurple"},
                {day: 19, color: "mediumpurple"},
                {day: 20, color: "mediumpurple"},
                21
            ],
            [
                22,
                {day: 23, color: "lightgreen"},
                {day: 24, color: "lightgreen"},
                {day: 25, color: "lightgreen"},
                {day: 26, color: "lightgreen"},
                {day: 27, color: "lightgreen"},
                {day: 28, color: "lightgreen"}
            ],
            [
                {day: 29, color: "lightgreen"},
                {day: 30, color: "lightgreen"},
                0, 0, 0, 0, 0
            ],
        ],
        days: [
            {day: "16-20-June", name: "Assesment days"},
            {day: "20-June", name: "End of Academic Year"},
            {day: "23-30-June", name: "Summer Break"},
        ]
    }, {
        month: "July",
        calendarRows: [
            [
                0, 0,
                {day: 1, color: "lightgreen"},
                {day: 2, color: "lightgreen"},
                {day: 3, color: "lightgreen"},
                {day: 4, color: "lightgreen"},
                {day: 5, color: "lightgreen"}
            ],
            [
                {day: 6, color: "lightgreen"},
                {day: 7, color: "lightgreen"},
                {day: 8, color: "lightgreen"},
                {day: 9, color: "lightgreen"},
                {day: 10, color: "lightgreen"},
                {day: 11, color: "lightgreen"},
                {day: 12, color: "lightgreen"}
            ],
            [
                {day: 13, color: "lightgreen"},
                {day: 14, color: "lightgreen"},
                {day: 15, color: "lightgreen"},
                {day: 16, color: "lightgreen"},
                {day: 17, color: "lightgreen"},
                {day: 18, color: "lightgreen"},
                {day: 19, color: "lightgreen"}
            ],
            [
                {day: 20, color: "lightgreen"},
                {day: 21, color: "lightgreen"},
                {day: 22, color: "lightgreen"},
                {day: 23, color: "lightgreen"},
                {day: 24, color: "lightgreen"},
                {day: 25, color: "lightgreen"},
                {day: 26, color: "lightgreen"}
            ],
            [
                {day: 27, color: "lightgreen"},
                {day: 28, color: "lightgreen"},
                {day: 29, color: "lightgreen"},
                {day: 30, color: "lightgreen"},
                {day: 31, color: "lightgreen"},
                0, 0
            ],
        ],
        days: [
            {day: "1-31-July", name: "Summer Break"},
        ]
    },
]


app.controller('CounterCtrl', function( $scope ) {
    $scope.quantity = 2;

});

app.controller('CheckboxCtrl', function($scope) {
    $scope.roles = [
        {id: 1, text: 'Школы, лицеи, гимназии'},
        {id: 2, text: 'Школы, лицеи, гимназии'}
    ];
    $scope.user = {
        roles: [$scope.roles[0]]
    };
    $scope.selectedUsers = $scope.user.roles;

    $scope.compareFn = function(obj1, obj2){
        return obj1.id === obj2.id;
    };
});

app.controller("NavCtrl", function($scope, $location) {
    $scope.menuClass = function(page) {
        var current = $location.path().substring(1);
        return page === current ? "active" : "";
    };
});

app.controller('SelectCtrl', function($scope) {
    $scope.number = {};
    $scope.numbers = [
        {name: 'Number1'},
        {name: 'Number2'},
        {name: 'Number3'},
        {name: 'Number4'}
    ];

    $scope.peopleObj = {
        '1' : { name: 'Number2', place: 'Квартиры и комнаты' },
        '2' : { name: 'Number2', place: 'Дома и дачи' },
        '3' : { name: 'Number3', place: 'Дома и дачи' },
        '4' : { name: 'Number2', place: 'Подвалы' },
        '5' : { name: 'Number3', place: 'Подвалы' },
        '6' : { name: 'Number3', place: 'Квартиры и комнаты' },
        '7' : { name: 'Number4', place: 'Квартиры и комнаты' },
        '8' : { name: 'Number2', place: 'Дома и дачи' },
        '9' : { name: 'Number4', place: 'Подвалы' }
    };

    $scope.room = {};
    $scope.room.selectedValue = $scope.peopleObj[3];
    $scope.room.selectedSingle = 'Number2';
    $scope.room.selectedSingleKey = '2';

    $scope.rooms = [
            { name: 'Number2', place: 'Квартиры и комнаты'},
            { name: 'Number2', place: 'Дома и дачи' },
            { name: 'Number3', place: 'Дома и дачи' },
            { name: 'Number2', place: 'Подвалы' },
            { name: 'Number3', place: 'Подвалы' },
            { name: 'Number3', place: 'Квартиры и комнаты' },
            { name: 'Number4', place: 'Квартиры и комнаты' },
            { name: 'Number2', place: 'Дома и дачи' },
            { name: 'Number4', place: 'Подвалы' }
    ];
});

app.controller('MultiChoiceCtrl',function($scope) {
    $scope.sortType     = 'name';
    $scope.sortReverse  = false;

    $scope.regionObj = {
        '1' :{ name: 'Черкассы', place: ['Канев', 'Чигирин', 'Золотоноша']},
        '2' :{ name: 'Киев', place: ['Бровары', 'Борисполь', 'Белая Церковь'] },
        '3' :{ name: 'Львов', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}] },
        '4' : { name: 'Днепропетровск', place: [{name: 'Жёлтые Воды‎'}, {name: 'Кривой Рог'}, {name:'Павлоград‎'}] },
        '5' :{ name: 'Харьков', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}] },
        '6' :{ name: 'Донецк', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}] },
        '7' :{ name: 'Одесса', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}] },
        '8' :{ name: 'Полтава', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}] },
        '9' : { name: 'Сумы', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}] },
        '10' :{ name: 'Кировоград', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}] },
        '11' :{ name: 'Хмельницкий', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}] },
        '12' :{ name: 'Ужгород', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}] }
    };

    $scope.city = {};
    $scope.city.selectedValue = $scope.regionObj[3];

    $scope.regions = [
        { name: 'Черкассы', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}]},
        { name: 'Киев', place: [{name: 'Бровары'}, {name: 'Борисполь'}, {name: 'Белая Церковь'}] },
        { name: 'Львов', place: [{name: 'Дрогобыч'}, {name: 'Броды'}, {name: 'Жолква'}] },
        { name: 'Днепропетровск', place: [{name: 'Жёлтые Воды‎'}, {name: 'Кривой Рог'}, {name: 'Павлоград‎'}] },
        { name: 'Харьков', place: [{name: 'Бровары'}, {name: 'Борисполь'}, {name: 'Белая Церковь'}] },
        { name: 'Донецк', place: [{name: 'Бровары'}, {name: 'Борисполь'}, {name: 'Белая Церковь'}] },
        { name: 'Одесса', place: [{name: 'Бровары'}, {name: 'Борисполь'}, {name: 'Белая Церковь'}] },
        { name: 'Полтава', place: [{name: 'Бровары'}, {name: 'Борисполь'}, {name: 'Белая Церковь'}] },
        { name: 'Сумы', place: [{name: 'Бровары'}, {name: 'Борисполь'}, {name: 'Белая Церковь'}] },
        { name: 'Кировоград', place: [{name: 'Бровары'}, {name: 'Борисполь'}, {name: 'Белая Церковь'}] },
        { name: 'Хмельницкий', place: [{name: 'Бровары'}, {name: 'Борисполь'}, {name: 'Белая Церковь'}] },
        { name: 'Ужгород', place: [{name: 'Бровары'}, {name: 'Борисполь'}, {name: 'Белая Церковь'}] }
    ];
});

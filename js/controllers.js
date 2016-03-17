function MainCtrl() {

    var ctrl = this;

    ctrl.message = "The app routing is working!";
    /* ------------ Counter ----------- */
    ctrl.quantity = 2;



    /* ------------ Checkbox ----------- */
    ctrl.roles = [
        {id: 1, text: 'Школы, лицеи, гимназии'},
        {id: 2, text: 'Школы, лицеи, гимназии'}
    ];
    ctrl.user = {
        roles: [ctrl.roles[0]]
    };
    ctrl.selectedUsers = ctrl.user.roles;

    ctrl.compareFn = function(obj1, obj2){
        return obj1.id === obj2.id;
    };



    /* ------------ Side navigation ----------- */
    ctrl.menuClass = function(page) {
        var current = $location.path().substring(1);
        return page === current ? "active" : "";
    };



    /* ------------ Select ----------- */
    ctrl.number = {};
    ctrl.numbers = [
        {name: 'Number1'},
        {name: 'Number2'},
        {name: 'Number3'},
        {name: 'Number4'}
    ];

    ctrl.peopleObj = {
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

    ctrl.room = {};
    ctrl.room.selectedValue = ctrl.peopleObj[3];
    ctrl.room.selectedSingle = 'Number2';
    ctrl.room.selectedSingleKey = '2';

    ctrl.rooms = [
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



    /* ------------ Region Choice ----------- */
    ctrl.sortType     = 'name';
    ctrl.sortReverse  = false;

    ctrl.regionObj = {
        '1' :{ name: 'Черкасская область', place: ['Канев', 'Чигирин', 'Золотоноша']},
        '2' :{ name: 'Киевская область', place: ['Бровары', 'Борисполь', 'Белая Церковь'] },
        '3' :{ name: 'Львовская область', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}] },
        '4' : { name: 'Днепропетровская область', place: [{name: 'Жёлтые Воды‎'}, {name: 'Кривой Рог'}, {name:'Павлоград‎'}] },
        '5' :{ name: 'Харьковская область', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}] },
        '6' :{ name: 'Донецкая область', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}] },
        '7' :{ name: 'Одесская область', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}] },
        '8' :{ name: 'Полтавкая область', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}] },
        '9' : { name: 'Сумская область', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}] },
        '10' :{ name: 'Кировоградская область', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}] },
        '11' :{ name: 'Хмельницкая область', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}] },
        '12' :{ name: 'Ужгородская область', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}] }
    };

    ctrl.city = {};
    ctrl.city.selectedValue = ctrl.regionObj[3];

    ctrl.regions = [
        { name: 'Черкасская область', place: [{name: 'Канев'}, {name: 'Чигирин'}, {name:'Золотоноша'}]},
        { name: 'Киевская область', place: [{name: 'Бровары'}, {name: 'Борисполь'}, {name: 'Белая Церковь'}] },
        { name: 'Львовская область', place: [{name: 'Дрогобыч'}, {name: 'Броды'}, {name: 'Жолква'}] },
        { name: 'Днепропетровская область', place: [{name: 'Жёлтые Воды‎'}, {name: 'Кривой Рог'}, {name: 'Павлоград‎'}] },
        { name: 'Харьковская область', place: [{name: 'Бровары'}, {name: 'Борисполь'}, {name: 'Белая Церковь'}] },
        { name: 'Донецкая область', place: [{name: 'Бровары'}, {name: 'Борисполь'}, {name: 'Белая Церковь'}] },
        { name: 'Одесская область', place: [{name: 'Бровары'}, {name: 'Борисполь'}, {name: 'Белая Церковь'}] },
        { name: 'Полтавкая область', place: [{name: 'Бровары'}, {name: 'Борисполь'}, {name: 'Белая Церковь'}] },
        { name: 'Сумская область', place: [{name: 'Бровары'}, {name: 'Борисполь'}, {name: 'Белая Церковь'}] },
        { name: 'Кировоградская область', place: [{name: 'Бровары'}, {name: 'Борисполь'}, {name: 'Белая Церковь'}] },
        { name: 'Хмельницкая область', place: [{name: 'Бровары'}, {name: 'Борисполь'}, {name: 'Белая Церковь'}] },
        { name: 'Ужгородская область', place: [{name: 'Бровары'}, {name: 'Борисполь'}, {name: 'Белая Церковь'}] }
    ];
}

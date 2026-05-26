class Book {
    #price;

    constructor(title, pubYear, price) {
        this.title = title;
        this._pubYear = pubYear;
        this.price = price;
    }
    show() {
        console.log("title:", this.title, "pubYear:", this._pubYear, "price:", this.price);
    }
    get getTitle() {
        if (this.title != "") {
            return this.title;
        }
    }
    get getPubYear() {
        if (this._pubYear >= 0) {
            return this._pubYear;
        }
    }
    get getPrice() {
        if (this.price >= 0) {
            return this.price;
        }
    }
    set setTitle(x) {
        this.title = x;
    }
    set setPubYear(x) {
        this._pubYear = x;
    }
    set setPrice(x) {
        this.price = x;
    }
    static compare(A, B) {
        if (A.getPubYear > B.getPubYear) {
            return 1;
        } else {
            return 0; 
        }
    }
    static bookSort(mass) {
        let x = 0;
        for (let i = 0; i < mass.length; i++) {
            for (let j = i + 1; j < mass.length; j++) {
                if (Book.compare(mass[j], mass[i])) {
                    x = mass[i];
                    mass[i] = mass[j];
                    mass[j] = x;
                }
            }
        }
        return mass;
    }
    static isEmpty(obj) {
        if (Object.getOwnPropertyNames(obj).length == 0 && Object.getOwnPropertySymbols(obj).length == 0) {
            return true;
        }
        return false;
    }
}
console.log("1 --------------------");
let B1 = new Book("title2", 2020, 1080);
B1.show();
console.log("2 --------------------");
B1.setTitle = "";
console.log(B1.getTitle);
B1.setTitle = "ABC";
console.log(B1.getTitle);
B1.setPubYear = -10;
console.log(B1.getPubYear);
B1.setPubYear = 2010;
console.log(B1.getPubYear);
B1.setPrice = 2000;
console.log(B1.getPrice);
console.log("3 --------------------");
mass = [new Book("Дорогая книга", 2006, 1000), 
    new Book("Обычная книга", 2020, 600),
    new Book("Интересная книга", 2025, 800),
    new Book("Дешёвая книга", 2007, 100),
    new Book("Очень дорогая книга", 1996, 5000)];
console.log(Book.bookSort(mass));
console.log("4 --------------------");
console.log(Book.isEmpty({}))
console.log(Book.isEmpty({[Symbol()]: true}))
console.log(Book.isEmpty(Object.defineProperty({}, 'name', {value: 'John'})))
console.log("5 --------------------");
let obj = {
    className: 'open menu',
    addClass: function(a) {this.className += " " + a;},
    removeClass: function(a) {if (this.className.indexOf(" " + a) >= 0) {this.className = this.className.replace(" " + a, "");} else {if (this.className.indexOf(a + " ") >= 0) {this.className = this.className.replace(a + " ", "");} else {this.className = this.className.replace(a, "");}}}
}
obj.addClass("cls");
console.log(obj);
obj.addClass("data");
console.log(obj);
obj.removeClass("open");
console.log(obj);
obj.removeClass("menu");
console.log(obj);
obj.removeClass("cls");
console.log(obj);
console.log("6 --------------------");
obj.addClass("open");
obj.addClass("menu");
obj.addClass("cls");
obj["obj1"] = {test: 12, test2: 23}
obj["obj2"] = {test: 12, test2: 23, test3: 542, obj: [1, 2, 3]}

obj2_str = JSON.stringify(obj)
console.log(obj2_str);
obj2 = JSON.parse(obj2_str);
console.log(obj2);
console.log(obj == obj2);

console.log("7 --------------------");
function getSecondToday() {
    let now = new Date();
    return now.getSeconds() + now.getMinutes() * 60 + now.getHours() * 3600;
}
console.log(getSecondToday());

console.log("8 --------------------");
function formatDate(date) {
    let str1 = "";
    if (String(date.getDay()).length == 1) {
        str1 += "0";
    }
    str1 += date.getDay();
    str1 += ".";
    if (String(date.getMonth()).length == 1) {
        str1 += "0";
    }
    str1 += date.getMonth();
    str1 += ".";
    str1 += String(date.getFullYear())[2];
    str1 += String(date.getFullYear())[3];
    return str1;
}
console.log(formatDate(new Date()));

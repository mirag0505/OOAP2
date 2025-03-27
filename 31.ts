const ivan = new Employee("Иван", new Developer(), new Permanent());
const egor = new Employee("Егор", new Manager(), new Contractor());
const dasha = new Employee("Даша", new Engineer(), new Intern());

ivan.printInfo();
// Иван: Штатный сотрудник, Пишет код
// Зарплата: 120000

egor.printInfo();
// Егор: Контрактник, Управляет командой
// Зарплата: 127500

dasha.printInfo();
// Даша: Стажёр, Проектирует системы
// Зарплата: 78000

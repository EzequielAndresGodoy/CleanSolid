(() => {
    //No aplicando el principio de responsabilidad unica
    type Gender = "M" | "F";

    //FORMA 1 DE DEFINIR UNA CLASSE POO
    class Person1 {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor(name: string, gender: Gender, birthdate: Date) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    //FORMA 2 DE DEFINIR UNA CLASSE POO IGUAL A LA DE ARRIBA
    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {}
    }

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        "/usr/home",
        "/home",
        "egodoy@gmail.com",
        "Admin",
        "Fernando",
        "M",
        new Date("1996-10-21")
    );
    console.log(userSettings);
})();
